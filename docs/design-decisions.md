# Design decisions

I used a small number of boundaries that reflect how the portfolio is read, updated and hosted. These are the consequences I consider when changing it.

## Routes for documents, fragments for sections

Visitors scroll through the portfolio as a single page. A project partner can also link directly to the privacy policy. I gave the two legal documents their own Angular routes and kept the six portfolio sections on the homepage. This preserves ordinary section links and allows each document to be reloaded independently. Apache must therefore serve the Angular entry point for a direct legal URL.

## Project records as public JSON

Descriptions, preview images and demo URLs change together. I keep them in one record and use that record in the row, preview and dialog. The catalogue can be updated as a public file, independently of compiled interface copy. The trade-off is a runtime HTTP request. The TypeScript model describes its expected shape, while an edited JSON file still needs to be checked in the running application.

## Local state for interactions, shared state for language

An open dialog belongs to the project section. The current testimonial belongs to its carousel. I keep these values local. Language affects both routed and shared components, so it is held in a root service and read through a signal. A fresh page load starts in English. No account, database or stored language preference is needed by this design.

## Validation on blur, validation again on the server

I show field errors when a visitor leaves a field. This gives them time to finish entering an address or message. A pending edit blocks submission until the new value has been checked. On the server, the request is validated again because a POST can be sent independently of the Angular form. The honeypot is one low-cost check in that process. It does not impose a submission rate limit.

## Angular build and PHP on the same host

The site has one server-side operation: sending a contact message. I use the PHP runtime already available on the webspace. The compiled frontend, public assets and endpoint are deployed to the same domain root. That keeps the request path simple and leaves mail delivery in the host's runtime. It also means the Angular development server is sufficient for frontend work, while a delivery check requires a PHP environment.

## Shared design values and local exceptions

I keep colours, fonts and common spacing in shared styles. Exceptions that only belong to one layout, such as the project dialog in short landscape viewports, stay in that component. The same distinction applies to assets: an image can be reserved for a later portfolio update even if it is not currently displayed. I check usage before treating an unused file as a deletion candidate.

[Architecture](architecture.md) · [Project catalogue](featured-projects.md) · [Contact endpoint](contact.md) · [Back to the portfolio README](../README.md#technical-documentation)
