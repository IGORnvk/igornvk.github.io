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

Builds the static production site into [`build/`](./build).

```bash
npm run preview
```

Serves the production build locally.

## Project Structure

```text
.
|- src/
|  |- routes/                 # SvelteKit routes
|  |- lib/components/         # Scene composition and HUD/UI pieces
|  |- lib/components/models/  # Svelte model wrappers
|  |- lib/data/               # Content data
|  |- lib/*.ts                # Stores and helper logic
|  `- app.css                 # Global CSS entry
|- static/models/             # Raw 3D assets
|- scripts/model-pipeline.js  # Model generation helper
|- .github/workflows/         # Deployment workflow
`- build/                     # Generated production output
```

## Where Things Live

The main route is [`src/routes/+page.svelte`](./src/routes/+page.svelte), which mounts the canvas app.

The 3D scene is assembled in [`src/lib/components/Scene.svelte`](./src/lib/components/Scene.svelte), where the camera, lights, HUD, and other components are instantiated.

The island sections currently map to:

- [`src/lib/components/StartingIsland.svelte`](./src/lib/components/StartingIsland.svelte)
- [`src/lib/components/ProjectsIsland.svelte`](./src/lib/components/ProjectsIsland.svelte)
- [`src/lib/components/SkillsIsland.svelte`](./src/lib/components/SkillsIsland.svelte)
- [`src/lib/components/ContactIsland.svelte`](./src/lib/components/ContactIsland.svelte)

Dialog state and related helpers live in:

- [`src/lib/stores.ts`](./src/lib/stores.ts)
- [`src/lib/dialogHelpers.ts`](./src/lib/dialogHelpers.ts)
- [`src/lib/data/quotes.json`](./src/lib/data/quotes.json)
