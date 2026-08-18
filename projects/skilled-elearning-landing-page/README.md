# Skilled e-learning landing page

A responsive e-learning landing page built from the Frontend Mentor Skilled premium challenge. The page introduces the platform, presents five popular course categories, and directs visitors to the course catalogue through clear calls to action.

> Design provided by Frontend Mentor. Built by TuTech with Codex-assisted planning, implementation, testing, and review.

## Highlights

- Responsive mobile, tablet, and desktop compositions
- Responsive WebP hero artwork with PNG fallbacks
- Semantic landmarks and heading hierarchy
- Visible keyboard focus and skip navigation
- Hover, active, reduced-motion, and forced-colors states
- Reusable typed course data and card rendering
- Component, responsive, end-to-end, and automated accessibility tests

The premium Figma file and original starter archive are intentionally excluded from this repository.

## Built with

- React and TypeScript
- Vite and SCSS
- Vitest and React Testing Library
- Playwright and axe-core

## Run locally

```bash
npm install
npm run dev
```

## Validate

```bash
npm run build
npm run lint
npm run test
npm run test:e2e
```

## Learning notes

This challenge is primarily a responsive layout exercise. The implementation uses CSS Grid for the course collection and carefully positioned responsive artwork at larger breakpoints. React keeps the repeated course data typed and consistent, while the underlying HTML remains semantic and understandable.

The supplied content and visual design belong to Frontend Mentor. This implementation should be presented as a coding exercise rather than paid client work or original TuTech visual design.
