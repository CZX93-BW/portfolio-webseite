# Architecture and navigation

I organised the portfolio around three routes and six homepage sections. The distinction matters when a link is shared: a project section can be reached at `/#projects`, while the privacy policy has a complete page at `/privacy-policy`.

## Application shell

1. The application is bootstrapped from [main.ts](../src/main.ts). HTTP and router providers are registered in [app.config.ts](../src/app/app.config.ts).
2. The shared header and footer are rendered around the router outlet in [app.html](../src/app/app.html).
3. For the root route, six standalone section components are composed in [main-page.html](../src/app/pages/main-page/main-page.html). I keep the order here and each section's markup, behaviour and styles together in its own directory.
4. For either legal route, the homepage is replaced inside the outlet. The same header, language switch and footer are retained. Unknown paths are redirected to the root by the [route configuration](../src/app/app.routes.ts).

## Following an anchor

The header uses router links with a fragment. This allows a link such as Skills to return from a legal page to the homepage before scrolling. The destination ID is assigned to the section element. A scroll offset is calculated from the actual header height by [App](../src/app/app.ts). For ordinary fragment links inside the homepage, the offset is supplied through [section SCSS](../src/styles/layout/_section.scss). Scroll-position restoration is enabled in the router.

Once the page has been scrolled more than 24 pixels, a signal in the header is updated and the scrolled style is applied. A separate signal controls the mobile menu. The closed navigation is made inert so its links are skipped when tabbing. On Escape, it is closed and focus is returned to its trigger. [Header implementation](../src/app/layout/header/header.ts) · [Header template](../src/app/layout/header/header.html)

## State and data boundaries

| Lifetime | Example | Where I keep it |
| --- | --- | --- |
| Across routes in the current session | Active interface language | A root-provided service exposes a read-only signal. |
| While a section is mounted | Previewed project, open dialog, current testimonial | Local component state. The initial state is restored when the section is recreated. |
| For an HTTP operation | Loading project records or sending a contact message | Typed observables are returned by services. The component handles the result and updates its view. |
| Between visits | Project catalogue and translations | Catalogue data is served as JSON. Interface translations are bundled with the application. |

Project and form contracts are kept under [models](../src/app/models). The PHP endpoint is a separate runtime. It receives JSON over HTTP and validates it independently of the TypeScript types.

[Back to the portfolio README](../README.md#technical-documentation)
