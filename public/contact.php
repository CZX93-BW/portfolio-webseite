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

    if ($json === false || strlen($json) > 10000) {
        sendJsonResponse(400, [
            "success" => false,
            "error" => "Invalid request body"
        ]);
        return;
    }

    $params = json_decode($json, true);

    if (json_last_error() !== JSON_ERROR_NONE || !is_array($params)) {
        sendJsonResponse(400, [
            "success" => false,
            "error" => "Invalid JSON"
        ]);
        return;
    }

    $name = normalizeInput($params["name"] ?? "");
    $email = normalizeInput($params["email"] ?? "");
    $message = normalizeInput($params["message"] ?? "");
    $honeypot = normalizeInput($params["website"] ?? "");

    if ($honeypot !== "") {
        sendJsonResponse(400, [
            "success" => false,
            "error" => "Invalid input data"
        ]);
        return;
    }

    $validationError = validateContactInput($name, $email, $message);

    if ($validationError !== null) {
        sendJsonResponse(400, [
            "success" => false,
            "error" => $validationError
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

function validateContactInput(string $name, string $email, string $message): ?string
{
    if (!isValidName($name)) {
        return "Invalid name";
    }

    if (!isValidEmailWithHost($email)) {
        return "Invalid email";
    }

    if (!isValidMessage($message)) {
        return "Invalid message";
    }

    return null;
}

function isValidName(string $name): bool
{
    $length = getStringLength($name);

    if ($length < 2 || $length > 80) {
        return false;
    }

    if (containsControlCharacters($name)) {
        return false;
    }

    return !preg_match('/https?:\/\/|www\.|<|>|{|}|\[|\]/i', $name);
}

function isValidEmailWithHost(string $email): bool
{
    if (strlen($email) > 254 || containsLineBreaks($email)) {
        return false;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return false;
    }

    $domain = substr(strrchr($email, "@"), 1);

    if ($domain === false || $domain === "") {
        return false;
    }

    $domain = strtolower($domain);

    if (function_exists("idn_to_ascii")) {
        $asciiDomain = idn_to_ascii($domain, IDNA_DEFAULT, INTL_IDNA_VARIANT_UTS46);

        if ($asciiDomain === false) {
            return false;
        }

        $domain = $asciiDomain;
    }

    if (!isValidMailHost($domain)) {
        return false;
    }

    return hasMailDnsRecord($domain);
}

function isValidMailHost(string $domain): bool
{
    if (strlen($domain) < 4 || strlen($domain) > 253) {
        return false;
    }

    if (!str_contains($domain, ".")) {
        return false;
    }

    if (preg_match('/(^-)|(-$)|\.\.|[^a-z0-9.-]/', $domain)) {
        return false;
    }

    $labels = explode(".", $domain);

    foreach ($labels as $label) {
        $labelLength = strlen($label);

        if ($labelLength < 1 || $labelLength > 63) {
            return false;
        }

        if (str_starts_with($label, "-") || str_ends_with($label, "-")) {
            return false;
        }
    }

    $topLevelDomain = end($labels);

    return is_string($topLevelDomain)
        && strlen($topLevelDomain) >= 2
        && preg_match('/^[a-z]{2,}$/', $topLevelDomain) === 1;
}

function hasMailDnsRecord(string $domain): bool
{
    if (!function_exists("checkdnsrr")) {
        return true;
    }

    return checkdnsrr($domain, "MX")
        || checkdnsrr($domain, "A")
        || checkdnsrr($domain, "AAAA");
}

function isValidMessage(string $message): bool
{
    $length = getStringLength($message);

    if ($length < 10 || $length > 2000) {
        return false;
    }

    if (containsControlCharacters($message)) {
        return false;
    }

    return true;
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

function normalizeInput(mixed $value): string
{
    if (!is_string($value)) {
        return "";
    }

    $value = str_replace(["\r\n", "\r"], "\n", $value);
    return trim($value);
}

function sanitizeHeaderValue(string $value): string
{
    return trim(str_replace(["\r", "\n"], "", $value));
}

function containsLineBreaks(string $value): bool
{
    return str_contains($value, "\r") || str_contains($value, "\n");
}

function containsControlCharacters(string $value): bool
{
    return preg_match('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/', $value) === 1;
}

function getStringLength(string $value): int
{
    if (function_exists("mb_strlen")) {
        return mb_strlen($value, "UTF-8");
    }

    return strlen($value);
}

function sendJsonResponse(int $statusCode, array $payload): void
{
    http_response_code($statusCode);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
}
