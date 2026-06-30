# Portfolio Website

Personal portfolio website for presenting my developer profile, selected projects, technical skills, testimonials and contact options.  
The project was built as a modern Angular single page application with a strong focus on responsive design, maintainable component structure and clean frontend architecture.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-C6538C?style=for-the-badge&logo=sass&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)

## Table of Contents

- [Portfolio Website](#portfolio-website)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Start Development Server](#start-development-server)
  - [Available Scripts](#available-scripts)
  - [Architecture](#architecture)
    - [Styling Approach](#styling-approach)
  - [Responsive Design](#responsive-design)
  - [Internationalization](#internationalization)
  - [Project Data](#project-data)
  - [Contact Form](#contact-form)
  - [Deployment](#deployment)
    - [Production Build](#production-build)
    - [Angular Refresh Routing](#angular-refresh-routing)
  - [Quality Checklist](#quality-checklist)
  - [Roadmap](#roadmap)
  - [Author](#author)
  - [Notes](#notes)

## Overview

This portfolio is designed to work as a professional developer presentation page. It introduces the profile, shows relevant technologies, lists selected projects and provides a contact form connected to a PHP backend endpoint.

The website is built as a single page application with separate routed legal pages for imprint and privacy policy. The design is based on a Figma layout and was implemented with custom SCSS, reusable variables, mixins and responsive breakpoints.

## Features

- Responsive Angular single page application
- Global header and footer
- Mobile burger menu
- Smooth section navigation
- Hero section with animated marquee
- About section with responsive image layout and hover details
- Skill set section based on maintainable skill data
- Featured projects section based on external project data
- Project dialog with internal scroll behavior
- Testimonials carousel
- Contact form with frontend validation
- PHP contact endpoint with server-side validation
- German and English language structure
- Legal notice and privacy policy pages
- Angular refresh routing support via `.htaccess`
- Desktop, tablet and mobile optimization

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Angular |
| Language | TypeScript |
| Styling | SCSS |
| Data | JSON / TypeScript data files |
| Contact Backend | PHP |
| Routing | Angular Router |
| Deployment | Static hosting with PHP support |
| Hosting Target | IONOS-compatible webspace |

## Project Structure

```txt
portfolio-webseite/
├── public/
│   ├── data/
│   │   └── projects.json
│   ├── icons/
│   ├── img/
│   ├── contact.php
│   └── .htaccess
├── src/
│   ├── app/
│   │   ├── data/
│   │   │   └── translations.ts
│   │   ├── layout/
│   │   │   ├── header/
│   │   │   └── footer/
│   │   ├── models/
│   │   ├── pages/
│   │   │   ├── legal-notice/
│   │   │   └── privacy-policy/
│   │   ├── sections/
│   │   │   ├── hero/
│   │   │   ├── about-me/
│   │   │   ├── skill-set/
│   │   │   ├── featured-projects/
│   │   │   ├── testimonials/
│   │   │   └── contact/
│   │   └── services/
│   ├── styles/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _base.scss
│   │   ├── _typography.scss
│   │   ├── _buttons.scss
│   │   ├── _links.scss
│   │   ├── _container.scss
│   │   ├── _section.scss
│   │   └── _helpers.scss
│   └── styles.scss
├── angular.json
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

Make sure the following tools are installed:

- Node.js LTS
- npm
- Angular CLI

### Installation

```bash
npm install
```

### Start Development Server

```bash
npm start
```

The application will usually be available at:

```txt
http://localhost:4200
```

## Available Scripts

```bash
npm start
```

Starts the local Angular development server.

```bash
npm run build
```

Creates a production-ready build.

```bash
ng build --configuration production
```

Creates the production build explicitly with Angular CLI.

## Architecture

The application follows a component-based structure. Each visible website area is implemented as an independent section component. Shared layout elements such as header and footer are global components.

The main page is composed from the section components:

```html
<app-hero />
<app-about-me id="about-me" />
<app-skill-set id="skills" />
<app-featured-projects id="projects" />
<app-testimonials />
<app-contact id="contact" />
```

This keeps the structure readable and makes it easier to update individual website sections without touching unrelated areas.

### Styling Approach

The SCSS setup uses global design foundations and local component styling:

- Variables for colors, typography, spacing and layout values
- Mixins for media queries and reusable responsive patterns
- Component SCSS for section-specific layout behavior
- Minimum readable font size of `16px`
- Fluid scaling with `clamp()` where useful
- Dedicated responsive breakpoints for mobile, tablet and desktop states

## Responsive Design

The layout was built mobile-first in the final responsive phase and then refined across relevant viewport ranges.

Important responsive goals:

- No horizontal overflow
- Stable section widths
- Readable typography on all devices
- Mobile menu only on small screens
- Fixed header behavior on tablet and desktop
- Non-fixed header behavior on mobile
- Project dialogs usable on small screens
- Internal dialog scrolling without background scroll
- Legal pages readable on mobile
- Contact form stable between tablet and desktop widths

## Internationalization

The project contains a language structure for German and English content.

Translations are separated from component markup and stored in a central data file:

```txt
src/app/data/translations.ts
```

The language state is handled through a language service. Components read their visible text from the translation data instead of hardcoding all text directly in templates.

This keeps the project easier to maintain and allows future text updates without rewriting component logic.

## Project Data

Featured projects are stored as external data:

```txt
public/data/projects.json
```

The projects section is designed to be extendable. New projects can be added by extending the JSON data instead of duplicating template markup.

Example data structure:

```json
{
  "id": "join",
  "title": "Join",
  "description": "Task manager inspired by the Kanban system.",
  "technologies": [
    { "name": "Angular", "iconPath": "icons/..." }
  ],
  "previewImagePath": "img/projects/...",
  "githubUrl": "https://...",
  "liveUrl": "https://..."
}
```

## Contact Form

The contact form consists of two validation layers:

1. Angular frontend validation
2. PHP server-side validation

The PHP endpoint is located in:

```txt
public/contact.php
```

The endpoint accepts JSON POST requests and validates:

- Request method
- JSON body
- Payload size
- Name length and content
- E-mail format
- E-mail host/domain
- DNS records for mail delivery
- Message length
- Header injection attempts
- Honeypot field for basic bot protection

The server sends mail through a domain-based sender address:

```txt
kontakt@bastian-wollny.de
```

This is important because many hosting providers reject mail attempts where the technical sender does not belong to the hosted domain.

## Deployment

### Production Build

```bash
ng build --configuration production
```

The generated files are located in:

```txt
dist/portfolio-webseite/browser/
```

Upload the contents of this folder to the webspace target directory.

### Angular Refresh Routing

For direct route refreshes such as `/legal-notice` or `/privacy-policy`, the project uses an `.htaccess` file.

Example:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

The `.htaccess` file must be placed next to the deployed `index.html`.

Example server structure:

```txt
/public/portfolio/
├── .htaccess
├── index.html
├── contact.php
├── icons/
├── img/
└── media/
```

## Quality Checklist

Before deployment, verify:

- The app builds successfully
- No relevant console errors
- Header navigation scrolls to the correct sections
- Mobile burger menu opens below the menu icon
- Project dialog opens and closes correctly
- Project dialog does not scroll the background page
- Dialog buttons remain visible and usable
- External links open in a new tab
- Contact form sends mail successfully
- Error messages are visible but not visually overpowering
- Legal notice and privacy policy are readable on mobile
- No text falls below `16px`
- No horizontal scrollbar appears
- Refreshing routed pages works on the live server

## Roadmap

Planned or possible future improvements:

- Replace placeholder testimonials with real content
- Add final personal logo asset
- Add final project preview images
- Add more completed portfolio projects
- Improve accessibility details after final content freeze
- Add automated tests for services and form validation
- Add CI build check

## Author

**Bastian Wollny**  
Fullstack Developer in training

Portfolio: `bastian-wollny.de`

## Notes

This portfolio was created as part of a web development learning project. The implementation focuses on practical frontend architecture, responsive SCSS, Angular component structure and real deployment requirements.

