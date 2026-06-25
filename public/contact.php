<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

$recipientEmail = "bastian-wollny@web.de";
$senderEmail = "kontakt@bastian-wollny.de";

switch ($_SERVER["REQUEST_METHOD"]) {
    case "OPTIONS":
        http_response_code(200);
        exit;

    case "POST":
        handleContactRequest($recipientEmail, $senderEmail);
        exit;

    default:
        sendJsonResponse(405, [
            "success" => false,
            "error" => "Method not allowed"
        ]);
        exit;
}

function handleContactRequest(string $recipientEmail, string $senderEmail): void
{
    $json = file_get_contents("php://input");
    $params = json_decode($json, true);

    if (json_last_error() !== JSON_ERROR_NONE || !is_array($params)) {
        sendJsonResponse(400, [
            "success" => false,
            "error" => "Invalid JSON"
        ]);
        return;
    }

    $name = trim($params["name"] ?? "");
    $email = trim($params["email"] ?? "");
    $message = trim($params["message"] ?? "");

    if (!isValidContactInput($name, $email, $message)) {
        sendJsonResponse(400, [
            "success" => false,
            "error" => "Invalid input data"
        ]);
        return;
    }

    $mailWasSent = sendContactMail(
        $recipientEmail,
        $senderEmail,
        sanitizeHeaderValue($name),
        sanitizeHeaderValue($email),
        $message
    );

    if (!$mailWasSent) {
        error_log("Portfolio contact form: mail delivery failed.");
        sendJsonResponse(500, [
            "success" => false,
            "error" => "Mail delivery failed"
        ]);
        return;
    }

    sendJsonResponse(200, [
        "success" => true
    ]);
}

function isValidContactInput(string $name, string $email, string $message): bool
{
    return $name !== ""
        && $message !== ""
        && filter_var($email, FILTER_VALIDATE_EMAIL);
}

function sendContactMail(
    string $recipientEmail,
    string $senderEmail,
    string $name,
    string $email,
    string $message
): bool {
    $subject = "Neue Nachricht über bastian-wollny.de";

    $mailBody = "Name: {$name}\n";
    $mailBody .= "E-Mail: {$email}\n\n";
    $mailBody .= "Nachricht:\n{$message}\n";

    $headers = [];
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-Type: text/plain; charset=utf-8";
    $headers[] = "From: Bastian Wollny Portfolio <{$senderEmail}>";
    $headers[] = "Reply-To: {$email}";
    $headers[] = "X-Mailer: PHP/" . phpversion();

    return mail(
        $recipientEmail,
        $subject,
        $mailBody,
        implode("\r\n", $headers),
        "-f {$senderEmail}"
    );
}

function sanitizeHeaderValue(string $value): string
{
    return trim(str_replace(["\r", "\n"], "", $value));
}

function sendJsonResponse(int $statusCode, array $payload): void
{
    http_response_code($statusCode);
    echo json_encode($payload);
}