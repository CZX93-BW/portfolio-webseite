# Contact form and PHP endpoint

I split the contact flow into three parts. The [contact component](../src/app/sections/contact/contact.ts) manages editing and feedback, [ContactService](../src/app/services/contact.service.ts) sends the request, and [contact.php](../public/contact.php) validates the submitted data and invokes the host's mail transport.

## Editing and submitting

Name, email and message are managed with Angular Reactive Forms and validated on blur. The checkbox updates immediately. While a focused field has an uncommitted edit, submission is disabled so that an older, previously valid value cannot be sent. If autofill populates an unfocused field, its form control is updated directly.

Each error occupies its own space in the layout, including when its translated text wraps. It is shown after the field has been touched or submission has been attempted. Invalid fields are associated with their error description. Feedback after a request is announced in a polite live region. [Form template](../src/app/sections/contact/contact.html) · [Form styling](../src/app/sections/contact/contact.scss)

## Request contract

A JSON body is posted to `/contact.php`. Privacy consent is required by the interface. The values sent over HTTP are shown below.

```json
{
  "name": "Alex Example",
  "email": "alex@example.org",
  "message": "I would like to discuss a project.",
  "website": ""
}
```

| Check | Angular form | PHP endpoint |
| --- | --- | --- |
| Name | Required, at least 2 characters | Trimmed, length 2–80. Control characters and selected URL or markup patterns are rejected. |
| Email | Required, Angular email validator | Address syntax, overall length and domain labels are checked. MX, A or AAAA records are checked when DNS lookup is available. |
| Message | Required, at least 10 characters | Line endings are normalised. Length 10–2,000 and the control-character check are applied. |
| Other fields | Consent must be checked. The hidden website field is sent with the form. | A non-empty honeypot is rejected. The raw request body is limited to 10,000 bytes. |

Text lengths on the server are measured with `mb_strlen` when available, with a byte-length fallback. Client and server validation can therefore produce different outcomes. A request can pass the browser checks and still receive a validation error from PHP.

## Response and delivery

| Outcome | Response | What the visitor sees |
| --- | --- | --- |
| Message accepted by PHP mail transport | HTTP 200, `{"success":true}` | Success feedback. The form and consent are reset. |
| Invalid JSON, excessive body size or invalid input | HTTP 400 with an error description | Localised error feedback. Entered values are retained for retry. |
| Mail transport reports failure | HTTP 500 with an error description | The same localised failure feedback. The failure is written to the server error log. |

The endpoint handles an OPTIONS request with HTTP 200 and returns HTTP 405 for unsupported methods. Sending is disabled while a submission is in progress. A network error follows the same retry path as a server failure.

Mail is sent as UTF-8 plain text using the configured domain sender. The validated visitor address is set as `Reply-To`, so I can reply directly from my mailbox. A positive return from PHP records acceptance by the mail transport. For a live release I verify receipt separately, since delivery may be delayed.

[Back to the portfolio README](../README.md#technical-documentation)
