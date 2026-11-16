# Styling and accessibility

I used the supplied desktop and mobile Figma layouts as the design reference. Shared values are maintained in SCSS partials. The rules for a portfolio section sit next to its Angular template, so changes to a project dialog can be reviewed alongside its markup.

## Where a style belongs

| Location | Responsibility |
| --- | --- |
| [abstracts](../src/styles/abstracts) | Colour, spacing, typography and breakpoint values, functions and reusable media-query or container mixins. |
| [base](../src/styles/base) | Reset, base element rules, local font declarations and heading typography. |
| [components](../src/styles/components) | Buttons and links used in more than one area. |
| [layout](../src/styles/layout) | Shared containers, section spacing and fragment offsets. |
| [utilities](../src/styles/utilities) | Small reusable helpers. |
| [sections](../src/app/sections) and [layout components](../src/app/layout) | Component-specific selectors, interaction states, responsive layouts and animations. |

The entry point is [styles.scss](../src/styles.scss). Karla is used for primary copy and Fira Code for accents. Variable WOFF2 files and their licences are served from [public/fonts](../public/fonts). Fallback fonts are available while the local faces load.

## Layout decisions

- **Hero.** I use the visible viewport as the vertical reference. A `100vh` fallback is followed by `100dvh`. Controls and decorative elements are repositioned for short screens so that the first section can keep that height. [Hero styles](../src/app/sections/hero/hero.scss)
- **Profile and skills.** Image proportions are preserved through the image box and fit rules. The profile and skill copy use language-aware hyphenation. I check the German and English layouts separately because both headings and error messages wrap differently.
- **Projects.** A preview can be displayed beside the list on larger screens. In a short landscape dialog, the body is scrollable and the footer actions are kept accessible. I check the dialog with the longer project description and cycle to the next entry at the same width. [Project styles](../src/app/sections/featured-projects/featured-projects.scss)
- **Contact.** Error text remains in the layout when hidden. The required space is determined by the actual translated string. Autofill text and background colours are set for WebKit-compatible states. I check the stored-data autofill interaction separately in a browser profile where it is available.

## Keyboard walkthrough

1. Tab through the header. The language buttons expose their selected state. At a mobile width, open the menu, press Escape and check that focus returns to its button.
2. Reach a project row and open it with the keyboard. The title is used as the dialog label. Cycle through controls in both directions, scroll its description and close it. The original row should receive focus.
3. Use the testimonials arrows and dots. Check that the active item changes, including when moving past either end.
4. Tab through the form. Leave an invalid field, correct it and leave again. Check the error description, the visible checkbox focus and the submit state after consent.
5. Open each legal page from the footer. Check long paragraphs at a narrow width and follow the link back to the homepage.

These checks describe the expected behaviour for a release. The full checklist is maintained in the [README](../README.md#quality-checklist).

[Back to the documentation index](../README.md#technical-documentation)
