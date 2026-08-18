# Dine restaurant website

A responsive two-page restaurant experience built from the Frontend Mentor Dine premium challenge. Visitors can explore Dine’s story and seasonal menu, switch between event experiences, and complete an accessible reservation demo.

> Design provided by Frontend Mentor. Built by TuTech with Codex-assisted planning, implementation, testing, and review.

## Overview

The project includes:

- A mobile-first homepage with responsive, high-resolution imagery
- An accessible event tab interface with mouse and keyboard support
- A reservation route with client-side validation and guest controls
- Clear demo-only success feedback without transmitting personal information
- Responsive layouts for mobile, tablet, and desktop
- Reduced-motion, visible-focus, and forced-colors considerations
- Unit, component, end-to-end, responsive, and automated accessibility tests

The premium Figma file and original starter archive are intentionally excluded from this repository.

## Built with

- React and TypeScript
- Vite
- React Router
- SCSS
- Vitest and React Testing Library
- Playwright and axe-core

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The primary routes are `/` and `/booking`.

## Validation

```bash
npm run build
npm run lint
npm run test
npm run test:e2e
```

Playwright may require its Chromium browser on a new machine:

```bash
npx playwright install chromium
```

## Implementation notes

React was chosen because the event tabs and reservation state benefit from explicit component and state boundaries. The form uses native React state rather than a form library because the validation surface is small and fully client-side. No backend is included: this is a portfolio demonstration, so the success message explicitly states that personal information was not sent.

The content and imagery are supplied by Frontend Mentor. This implementation should be presented as a coding exercise, not as a paid client project or an original TuTech visual design.
