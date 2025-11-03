# K-Age — Korean Age Calculator

A tiny React + TailwindCSS app that calculates Korean age (한국나이) and international age (만 나이) from a birthdate. The project includes i18n (Korean / English), a Dockerfile for static production builds, and a `render.yaml` ready for Render deployments.

## Features

- Calculate Korean age (current year - birth year + 1)
- Calculate international age (based on whether the birthday has occurred this year)
- Language support: English and Korean via `react-i18next` and browser language detection
- TailwindCSS for utility-first styling
- Production-ready static build served by nginx (Docker multi-stage build)

## Quick overview / project structure

You can also deploy the generated `dist/` directory to any static host (Netlify, Vercel, GitHub Pages, etc.).
# K-Age — Korean Age Calculator

A tiny React + TailwindCSS app that calculates Korean age (한국나이) and international age (만 나이) from a birthdate. The project includes i18n (Korean / English), a Dockerfile for static production builds, and a `render.yaml` ready for Render deployments.

## Features

- Calculate Korean age (current year - birth year + 1)
- Calculate international age (based on whether the birthday has occurred this year)
- Language support: English and Korean via `react-i18next` and browser language detection
- TailwindCSS for utility-first styling
- Production-ready static build served by nginx (Docker multi-stage build)

## Quick overview / project structure

Key files:

- `src/App.jsx` — main UI and language switch buttons
- `src/utils/ageCalculator.js` — core age calculation logic
- `src/i18n/` — `index.js`, `en.json`, `ko.json` (i18n resources and setup)
- `public/index.html` — HTML template and meta/title for basic SEO
- `Dockerfile` — multi-stage build to create static `dist/` and serve it with nginx
- `render.yaml` — Render service configuration
- `package.json` — scripts and dependencies

## Requirements

- Node.js 18+ (Node 20 recommended)
- npm

## Development (run locally)

Install dependencies and start the Vite dev server:

```bash
cd k-age
npm install
npm run dev
```

Open the URL printed by Vite (commonly `http://localhost:5173`).

## Build (production)

Create a production-ready bundle:

```bash
npm run build
```

Preview the production build locally with Vite's preview server:

```bash
npm run preview
```

## Docker (build & run)

The included `Dockerfile` performs a multi-stage build and serves the static site with `nginx`.

Build and run locally:

```bash
# from project root

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
```

Then open http://localhost:8080.

## Deploy to Render

This repo contains a `Dockerfile` and `render.yaml` configured for Render's Docker-based web service. General steps:

1. Push the repository to GitHub.
2. In Render, create a new Web Service and connect your GitHub repo.
3. Choose "Docker" as the environment and point Render to the root `Dockerfile`.
4. (Optional) Set the build command to `npm run build` if Render requires it.

You can also deploy the generated `dist/` directory to any static host (Netlify, Vercel, GitHub Pages, etc.).

## i18n

- Implemented with `i18next`, `react-i18next`, and `i18next-browser-languagedetector`.
- Resources live in `src/i18n/en.json` and `src/i18n/ko.json`.
- Language is auto-detected from the browser and cached to `localStorage`/cookies; users can toggle language using the buttons in the UI.

## Age calculation logic

See `src/utils/ageCalculator.js`. The function `calculateAges(birthDate)` returns an object:

- `ageInternational`: integer — the conventional age considering whether the birthday has occurred this year
- `ageKorean`: integer — `currentYear - birthYear + 1`

The code compares month/day to handle birthdays correctly (including leap-year edge cases).
