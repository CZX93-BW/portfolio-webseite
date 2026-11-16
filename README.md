<h1 align="center">Bastian Wollny · Developer Portfolio</h1>

<p align="center">My work as a full-stack developer, with playable and interactive demos, feedback from project partners, and a direct way to get in touch.</p>

<p align="center">
  <img alt="Angular 21" src="https://img.shields.io/badge/Angular_21-DD0031?style=for-the-badge&amp;logo=angular&amp;logoColor=white">
  <img alt="TypeScript 5.9" src="https://img.shields.io/badge/TypeScript_5.9-3178C6?style=for-the-badge&amp;logo=typescript&amp;logoColor=white">
  <img alt="SCSS" src="https://img.shields.io/badge/SCSS-C6538C?style=for-the-badge&amp;logo=sass&amp;logoColor=white">
  <img alt="PHP" src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&amp;logo=php&amp;logoColor=white">
</p>

<p align="center">
  <strong><a href="https://bastian-wollny.de">Visit my portfolio</a></strong> ·
  <a href="#quickstart">Run locally</a> ·
  <a href="#technical-documentation">Technical documentation</a>
</p>

## Table of contents

1. [About the project](#about-the-project)
2. [Featured projects](#featured-projects)
3. [Quickstart](#quickstart)
4. [Project structure](#project-structure)
5. [Technical documentation](#technical-documentation)
6. [Build and deployment](#build-and-deployment)
7. [Quality checklist](#quality-checklist)

## About the project

I built this portfolio as an individual frontend project during my full-stack development training at Developer Akademie. The desktop and mobile layouts were provided in Figma. I implemented them in Angular and adapted the sections, menus and project dialogs for the screen sizes in between.

The site can be explored in German or English. Visitors can read about my background, browse the technologies I work with, try a project, read feedback from the people I worked with and send me a message. Angular is used for the interface. Contact messages are processed by a small PHP endpoint on my IONOS webspace.

## Featured projects

| Project | My work and the demo | Links |
| --- | --- | --- |
| **Join** | A Kanban application built by a team of four. I worked on the Supabase integration and services for contacts, tasks and authentication. The board can be explored with guest access. | [Live demo](https://join.bastian-wollny.de) · [Source](https://github.com/CZX93-BW/Join) |
| **Sharky – Jump and Swim** | I built this JavaScript Canvas game as an individual project. Two reefs can be explored using the keyboard or touch controls, with collectibles and a boss fight in each level. | [Play Sharky](https://sharky.bastian-wollny.de) · [Source](https://github.com/CZX93-BW/SharkyProject) |

## Quickstart

Use Node.js 24 and npm. The project specifies npm 11.9.0 and includes the Angular CLI as a development dependency. These commands work in Windows CMD, PowerShell and a Unix shell.

```sh
git clone https://github.com/CZX93-BW/portfolio-webseite.git
cd portfolio-webseite
npm ci
npm start
```

The development server opens [localhost:4200](http://localhost:4200). For an existing checkout, run the last two commands from its root. The language switch, project dialogs and client-side form validation can all be used locally. Actual mail delivery requires the built site to be served with PHP and a configured mail transport.

## Project structure

```text
public/
  data/projects.json    Project descriptions, image paths and demo links
  fonts/                Karla and Fira Code with their licences
  icons/                Interface, technology and social icons
  img/                  Portrait, logos and project previews
  .htaccess             Apache routing and cache headers
  contact.php           Contact endpoint and mail delivery
src/
  main.ts               Angular bootstrap
  app/
    app.config.ts       Router and HTTP providers
    app.routes.ts       Homepage, legal notice and privacy routes
    app.html            Shared header, router outlet and footer
    layout/             Header, mobile navigation and footer
    pages/              Main page and the two legal pages
    sections/           Hero, About Me, Skill Set, projects, testimonials and contact
    data/               Interface translations and legal copy
    models/             Project, language and contact contracts
    services/           Language state, project loading and contact requests
  styles/               Shared SCSS partials
  styles.scss           Global stylesheet entry point
docs/                   Technical documentation
```

## Technical documentation

| Guide | What I cover |
| --- | --- |
| [Architecture and navigation](docs/architecture.md) | How the application starts, how sections and routes fit together, and where state is kept. |
| [Content and languages](docs/content-and-languages.md) | Hero, profile, skills, testimonials, footer, legal pages and the DE/EN content workflow. |
| [Featured projects](docs/featured-projects.md) | JSON contract, previews, dialog lifecycle and how I add a project. |
| [Contact form and PHP](docs/contact.md) | Field validation, request and response formats, failure handling and mail delivery. |
| [Styling and accessibility](docs/styling-and-accessibility.md) | Shared SCSS, responsive layouts, local fonts, keyboard controls and focus. |
| [Design decisions](docs/design-decisions.md) | Why I separated routes from fragments, project data from templates and mail delivery from the frontend. |
| [Deployment and troubleshooting](docs/deployment.md) | Build output, SFTP upload, Apache routing, caching, verification and rollback. |

## Build and deployment

```sh
npm run build
```

The production files are written to `dist/portfolio-webseite/browser/`. Its contents are uploaded to the portfolio domain's document root, with `index.html` uploaded after the assets it references. An existing release can be backed up and restored as described in the [deployment guide](docs/deployment.md).

## Quality checklist

I use this checklist before a release and repeat the hosting checks on the deployed domain.

- [ ] Build the project and review compiler warnings, browser console errors and failed network requests.
- [ ] Follow the header links. Check that each heading clears the fixed header and that the mobile menu opens below its trigger.
- [ ] Check short and tall viewports in portrait and landscape. Look for horizontal scrolling, clipped text, overlap and text below the 16 px readability target.
- [ ] Switch between German and English. Check the page language, project descriptions, testimonials and form feedback.
- [ ] Open a project with the keyboard. Check focus, scrolling inside the dialog, background scroll lock, button visibility, Escape and focus return.
- [ ] Visit both project demos and source repositories. Check that external web links open in a new tab.
- [ ] Check blur validation, error-message spacing, browser autofill and the required privacy checkbox.
- [ ] Send a message through the deployed PHP endpoint and verify feedback and receipt in the destination mailbox.
- [ ] Read both legal pages on mobile, open their URLs directly and reload them. Verify HTTPS redirection on the host.
