## [1.0.2] - 2025-07-23

### Design System & Demo Improvements
- Button width is now content-based (hug width) for all variants in both demo and Storybook.
- All icon paths (including checkmark) now use consistent relative paths for compatibility in both Storybook and static demo.
- Fixed checkmark icon 404 in both environments by aligning path handling with other icons.
- Normalized icon and label spacing for all button variants; removed unwanted margins and ensured consistent alignment.
- Demo page now uses flexbox for button layout, with improved spacing and a clean, production-like appearance.
- Favicon and static asset handling confirmed for all environments.
- Cleaned up demo HTML and removed debug text/outline.
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
# Local development preview
npm run private

npm run storybook

# Build Storybook for deploy
- Demo and public QA pages always reference correct assets for their environment.
- Favicon and all static assets are guaranteed to work in all preview and deploy modes.
- Deploy script (`scripts/deploy.sh`) commits all public/QA/demo pages and ensures all assets are present for GitHub Pages.
- See `docs/CHANGELOG.md` for details on automation and workflow improvements.

## How It Works
- All asset copying and path updates are automated.
- Add new components to `design-system/src/components/` and new tokens to `design-system/src/styles/tokens/`—they’ll be copied automatically.
- Demo HTML (`docs/demo/index.html`) always loads the latest public assets and web components.
- No manual path or asset management required.

## Deploy Automation
- The deploy workflow uses `scripts/deploy.sh` for timestamped commit messages and reliable asset copying.

---

For more details, see the documentation in `_dev/`.
