# Featured projects

I use one catalogue record for the list entry, preview and dialog. This keeps the technology list and destination links together when a project is updated.

## Catalogue contract

When the section is initialised, [ProjectService](../src/app/services/project.service.ts) requests `/data/projects.json` through Angular's `HttpClient`. The response is read as an array of [Project](../src/app/models/project.model.ts) records and stored in the component. The JSON is served directly from the domain root.

| Field | How it is used |
| --- | --- |
| `id`, `number` | The ID identifies the entry. The number is a display string such as `"01"`, preserving the leading zero. |
| `title`, `description` | Each accepts a shared string or an object with `en` and `de`. The current language is selected at render time, with English as a fallback. |
| `technologies` | An ordered list of names and icon paths is used for the list summary and dialog. |
| `previewImagePath`, `dialogImagePath` | Separate paths are supported for the two layouts. The same image can also be used in both. |
| `githubUrl`, `liveUrl` | External actions are rendered from these URLs. An empty GitHub URL is displayed as a disabled action. |
| `documentationUrl` | An optional documentation action is used when `liveUrl` is empty. If both are empty, the live action is displayed as disabled. |
| `previewCaption` | An optional localised caption is used with the project title for a typographic backend cover when the corresponding image path is empty. |

To add a project, I copy an entry in [projects.json](../public/data/projects.json), assign a unique ID and display number, fill in both languages, and place its images under `public/img/`. A public file at `public/img/example.jpg` is referenced as `img/example.jpg`. Record order determines the order of the list and the next-project action.

## Backend projects

I added Coderr and KanMind as entries 03 and 04. Their descriptions identify my backend work and the separately supplied Developer Akademie frontend. Coderr is deployed with Docker and Compose and is linked through the live-demo action at `https://coderr.bastian-wollny.de/`. I use `public/img/coderr_img.png` for its list preview and dialog. KanMind continues to link to repository documentation while its `liveUrl` is empty. A live-demo URL takes precedence over the documentation action.

Typographic covers are rendered by [BackendPreview](../src/app/sections/featured-projects/backend-preview/backend-preview.ts). I use project names, Python and Django icons and a localised caption. These covers reserve the same space as project images. A supplied image path takes precedence and can replace a cover later.

## From preview to dialog

The hovered or focused entry is held separately from the selected project. A pointer leaving the row can therefore clear the desktop preview while the open dialog keeps its own selection.

On activation, the trigger and previous document overflow settings are saved. Page scrolling is locked and the project dialog is rendered. After rendering, focus is moved to its close button. Tab and Shift+Tab wrap between the first and last focusable controls. The dialog is labelled by the project title.

The next-project action updates the selection in place and wraps to the first entry at the end. The dialog can be closed with its button, Escape or a click on the backdrop. The saved overflow settings are restored and focus is returned to the original trigger. Scroll settings are also restored if the section is destroyed. [Component](../src/app/sections/featured-projects/featured-projects.ts) · [Template](../src/app/sections/featured-projects/featured-projects.html)

## Diagnosing an empty list

A failed catalogue request is logged to the browser console. I check that `/data/projects.json` returns the JSON array first. On a misconfigured host, a missing asset can be answered with the Angular entry page and HTTP 200. The response body and content type distinguish that case from valid project data. If only an image fails, I check its filename, case and path against the deployed files.

[Back to the portfolio README](../README.md#technical-documentation)
