# 🌐 Live Apps & Design System

- [Labs Homepage](https://dreisdesign.github.io/labs/)
- [Focus Timer](https://dreisdesign.github.io/labs/timer/)
- [Daily Tracker](https://dreisdesign.github.io/labs/tracker/)
- [Daily Note](https://dreisdesign.github.io/labs/note/)
- [Today List](https://dreisdesign.github.io/labs/today-list/)
- [Design System (Storybook)](https://dreisdesign.github.io/labs/design-system/)

# Labs Monorepo

This repository contains all Labs applications, the design system, and deployment configuration for GitHub Pages.

## Structure

- `design-system/` — Source for the Labs Design System (tokens, components, Storybook)
- `docs/` — Static deployable files for GitHub Pages (homepage, apps, Storybook)
- `docs/design-system/` — Deployed Storybook static build
- `docs/tracker/`, `docs/note/`, `docs/today-list/`, `docs/timer/` — Deployed static apps
- `_archive/` — Local-only archive of old app source folders (not tracked by git)
- `_dev/` — Developer scripts, tools, and documentation (not deployed)

## Deployment

All static sites and Storybook are deployed from the `docs/` folder on the `main` branch via GitHub Pages. Each app and the design system is accessible at:

- `/labs/` — Homepage
- `/labs/tracker/` — Tracker app
- `/labs/note/` — Note app
- `/labs/today-list/` — Today List app
- `/labs/timer/` — Timer app
- `/labs/design-system/` — Storybook (Design System)

## Workflow

- Develop apps and design system in their respective source folders.
- Copy or build static output into `docs/` subfolders for deployment.
- Commit and push to `main` to update the live site.

## Design System

See `docs/CHANGELOG.md` for release notes and roadmap.

# Developer Workflow & Automation

## Quick Start
```sh
# Local development preview
npm run private

# Public build preview (simulates deploy)
npm run public

# Start Storybook
npm run storybook

# Build Storybook for deploy
npm run build-storybook
```

## How It Works
- All asset copying and path updates are automated.
- Add new components to `design-system/src/components/` and new tokens to `design-system/src/styles/tokens/`—they’ll be copied automatically.
- Demo HTML (`docs/demo/index.html`) always loads the latest public assets and web components.
- No manual path or asset management required.

## Deploy Automation
- The deploy workflow uses `scripts/deploy.sh` for timestamped commit messages and reliable asset copying.
- Use `npm run deploy` for a one-command, best-practice deploy. Your commit history will always show when each deploy was made.

---

For more details, see the documentation in `_dev/`.
