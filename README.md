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

---

For more details, see the documentation in `_dev/`.
