# Portfolio Website

An interactive 3D portfolio built with SvelteKit, Threlte, and Three.js.

## Overview

- Framework: SvelteKit with Vite
- 3D stack: Threlte, Three.js, camera-controls, Rapier
- Styling: Tailwind CSS + PostCSS
- Deployment: GitHub Pages via GitHub Actions

## Getting Started

```bash
npm install
npm run dev
```

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Builds the static production site into [`build/`](/C:/Users/igork/Documents/Code/igornvk.github.io/build).

```bash
npm run preview
```

Serves the production build locally.

## Project Structure

```text
.
|- src/
|  |- routes/                 # SvelteKit routes
|  |- lib/components/         # Scene composition and UI/HUD components
|  |- lib/components/models/  # Generated or maintained Svelte model wrappers
|  |- lib/data/               # Content data such as dialog/quote text
|  |- lib/*.ts                # Stores, helpers, animation logic
|  `- app.css                 # Global CSS entry
|- static/models/             # Raw 3D assets served statically
|- scripts/model-pipeline.js  # Model generation helper
|- .github/workflows/         # CI/CD workflow
`- build/                     # Generated production output
```

## Where Things Live

The main entry point is [`src/routes/+page.svelte`](/C:/Users/igork/Documents/Code/igornvk.github.io/src/routes/+page.svelte), which mounts the app-level canvas component.

The 3D scene is assembled in [`src/lib/components/Scene.svelte`](/C:/Users/igork/Documents/Code/igornvk.github.io/src/lib/components/Scene.svelte). This is where the camera, lights, HUD, and other components are created.

The island sections currently map to:

- [`src/lib/components/StartingIsland.svelte`](/C:/Users/igork/Documents/Code/igornvk.github.io/src/lib/components/StartingIsland.svelte)
- [`src/lib/components/ProjectsIsland.svelte`](/C:/Users/igork/Documents/Code/igornvk.github.io/src/lib/components/ProjectsIsland.svelte)
- [`src/lib/components/SkillsIsland.svelte`](/C:/Users/igork/Documents/Code/igornvk.github.io/src/lib/components/SkillsIsland.svelte)
- [`src/lib/components/ContactIsland.svelte`](/C:/Users/igork/Documents/Code/igornvk.github.io/src/lib/components/ContactIsland.svelte)

Dialog state and interaction helpers live in:

- [`src/lib/stores.ts`](/C:/Users/igork/Documents/Code/igornvk.github.io/src/lib/stores.ts)
- [`src/lib/dialogHelpers.ts`](/C:/Users/igork/Documents/Code/igornvk.github.io/src/lib/dialogHelpers.ts)
- [`src/lib/data/quotes.json`](/C:/Users/igork/Documents/Code/igornvk.github.io/src/lib/data/quotes.json)
