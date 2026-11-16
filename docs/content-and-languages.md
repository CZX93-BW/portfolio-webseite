# Content and languages

I keep interface copy in [translations.ts](../src/app/data/translations.ts). The same language setting is used by the header, all six sections, the footer and the legal pages. English is selected when the application starts. The choice is kept in memory while navigating between routes.

## Switching languages

The EN and DE controls call the [language service](../src/app/services/language.ts). Its signal is updated and the selected language is assigned to the HTML document's `lang` attribute. Each component reads its translation block through a computed value. The interface can therefore be switched while a project is open or a form is being filled out. Input values are kept in the reactive form.

I keep the section titles **Skill Set** and **Featured Projects** in both language versions to match the design. Technology and project names are also shared. Descriptions, field labels, accessible names and feedback are selected in the current language. Project descriptions are maintained in the [catalogue](../public/data/projects.json).

## Homepage content

| Section | How it is implemented |
| --- | --- |
| [Hero](../src/app/sections/hero/hero.html) | The two main actions lead to projects and contact. A separate scroll control leads to About Me. Localised marquee items are repeated in the component and moved with a CSS animation. The repeated strip is hidden from the accessibility tree. |
| [About Me](../src/app/sections/about-me/about-me.html) | The portrait is paired with an introduction and three highlights about location, mindset and quality. Its dimensions are declared up front. Lazy loading and asynchronous decoding are requested. The portrait has a translated alternative text, while the accompanying highlight icons are decorative. |
| [Skill Set](../src/app/sections/skill-set/skill-set.ts) | Skill entries are grouped in TypeScript and flattened for display. The template renders the icon and visible name for each entry. The growth-mindset item uses a translated label and a learning-interest bubble with React and Vue.js. |
| [Testimonials](../src/app/sections/testimonials/testimonials.ts) | Quotes, authors and project roles are read from the language block. One index determines the active card and its neighbours. Previous and next wrap around the ends of the list. A dot can select a specific card directly. |

When I add a testimonial, I add matching entries in both languages with the same ID and order. Switching language keeps the active index, so the same partner's feedback is still shown. Only the active card is exposed to assistive technology, and the selected dot is marked with `aria-current`.

## Footer and legal pages

The footer builds its links from the active language. GitHub and LinkedIn are external destinations, email uses a mail link, and the legal pages use Angular routes. The privacy link alongside the contact checkbox leads to the same privacy page as the footer. [Footer component](../src/app/layout/footer/footer.ts)

Legal HTML is maintained separately in [legal-texts.ts](../src/app/data/legal-texts.ts). The selected content is rendered with Angular's `innerHTML` binding in the respective page template. Footer labels and back-link text can be maintained independently of the legal wording.

[Back to the portfolio README](../README.md#technical-documentation)
