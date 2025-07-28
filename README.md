# 🌐 Live Apps & Design System

- [Labs Homepage](https://dreisdesign.github.io/labs/)
- [Focus Timer](https://dreisdesign.github.io/labs/timer/)
- [Daily Tracker](https://dreisdesign.github.io/labs/tracker/)
- [Daily Note](https://dreisdesign.github.io/labs/note/)
- [Today List](https://dreisdesign.github.io/labs/today-list/)
- [Design System (Storybook)](https://dreisdesign.github.io/labs/design-system/)

---

# Labs Monorepo

This repository contains all Labs applications, the shared design system, and deployment configuration for GitHub Pages.

## Structure

- `design-system/` — Labs Design System (tokens, components, Storybook).  
  See [`design-system/README.md`](design-system/README.md) for usage and component docs.
- `docs/` — Static deployable files for GitHub Pages (homepage, apps, Storybook).  
  See [`docs/README.md`](docs/README.md) for public-facing info.
- `docs/design-system/` — Deployed Storybook static build
- `docs/tracker/`, `docs/note/`, `docs/today-list/`, `docs/timer/` — Deployed static apps
- `_archive/` — Local-only archive of old app source folders (not tracked by git)
- `_dev/` — Developer scripts, tools, and documentation (not deployed)

## Deployment

All static sites and Storybook are deployed from the `docs/` folder on the `main` branch via GitHub Pages. Each app and the design system is accessible at their respective URLs above.

## Workflow

- Develop apps and design system in their respective source folders.
- Copy or build static output into `docs/` subfolders for deployment.
- Commit and push to `main` to update the live site.

## Design System

See [`design-system/README.md`](design-system/README.md) for setup, usage, and contribution details.  
See [`docs/CHANGELOG.md`](docs/CHANGELOG.md) for release notes and roadmap.

---

## Developer Workflow & Automation

- Local development preview:  
  `npm run private`
- Run Storybook:  
  `npm run storybook`
- Build Storybook for deploy:  
  `npm run build-storybook`
- Deploy script:  
  `./scripts/deploy.sh`

See [`docs/CHANGELOG.md`](docs/CHANGELOG.md) for automation and workflow improvements.

---

For more details, see the documentation in [`_dev/`](./_dev/).
