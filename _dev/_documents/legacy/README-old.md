# 🧪 Labs

> **Latest release:** v2.4.9 — iOS Footer Sticky Positioning (2025-11-03) • [Changelog](CHANGELOG.md)

> **Modular design system and productivity apps built with Web Components**

---

## 📚 Documentation

**New to Labs?** Start here:
- 📖 [**Documentation Index**](DOCUMENTATION.md) — Complete navigation guide to all project docs
- 🚀 [**Quick Start**](#-quick-start) — Get up and running locally
- 🤝 [**Contributing Guide**](CONTRIBUTING.md) — How to contribute

---

## 🌐 Live Applications

| App | Purpose | Live URL |
|-----|---------|----------|
    | **🎨 Design System** | Component library & tokens | [Storybook](https://dreisdesign.github.io/labs/design-system/) |
| **⏰ Focus Timer** | Minimal, distraction-free Pomodoro timer with bold numeric countdown, modular overlays for reset confirmation, and seamless theme support. Optimized for desktop and mobile, with installable PWA and offline support.<br>• Vertically centered layout using flexbox<br>• `.timer-group` uses `margin-bottom` for footer offset (not `.break-hint`)<br>• Dynamic header and break text update based on timer state<br>• Uses design system tokens for all typography and color<br>• [See Timer README](docs/timer/README.md) for layout and logic details | [Timer App](https://dreisdesign.github.io/labs/timer/) |
| **📊 Daily Tracker** | Habit and activity tracking with dark mode | [Tracker App](https://dreisdesign.github.io/labs/tracker/) |
| **📝 Daily Note** | Simple daily note-taking | [Note App](https://dreisdesign.github.io/labs/note/) |
| **✅ Today List** | Daily task checklist | [Today List](https://dreisdesign.github.io/labs/today-list/) |
| **🖊️ Pad** | Drawing app | [Pad App](https://dreisdesign.github.io/labs/pad/) |
| **🏠 Labs Homepage** | App launcher and overview | [Homepage](https://dreisdesign.github.io/labs/) |

---

## 🏗️ Repository Structure

```
labs/
├── design-system/          # 🎨 Labs Design System
│   ├── src/                # Components, tokens, styles (active development)
│   ├── .storybook/         # Storybook configuration
│   └── README.md           # Design system documentation
├── docs/                   # 📦 GitHub Pages deployment
│   ├── design-system/      # Built Storybook (production)
│   ├── timer/              # Timer app
│   ├── tracker/            # Tracker app
│   ├── note/               # Note app
│   ├── pad/                # Pad app
│   ├── today-list/         # Today List app
│   └── home/               # Labs homepage
├── _docs/                  # 📄 Project documentation
│   ├── releases/           # Release notes and QA checklists
│   └── planning/           # Research and planning docs
├── scripts/                # 🔧 Build and deployment automation
└── _dev/                   # 👨‍💻 Developer tools
    └── _documents/legacy/  # Archived documentation
```

---

## 🚀 Quick Start

### Local Development

**Option 1: Menu-driven workflow (recommended)**
```bash
npm run menu
# Choose option 1 for local development
```

**Option 2: Quick preview**
```bash
npm run rp
```

This command:
- ✅ Updates static paths for local preview
- ✅ Kills any existing servers on ports 6006/8000
- ✅ Starts Python http.server for Labs Homepage (port 8000)
- ✅ Starts Storybook dev server (port 6006)
- ✅ Shows live build progress with timing
- ✅ Auto-opens both URLs in your browser
- ✅ Leaves servers running in background

**Development URLs:**
- Storybook: http://localhost:6006
- Labs Homepage: http://localhost:8000
- Apps: http://localhost:8000/{app}/ (e.g., /tracker/, /today-list/)


### Icon Management Workflow

**All icon SVGs in `design-system/icons/` must end with `--labs-icons.svg`.**

If you see a warning about unsuffixed icons when running `npm run rp`, fix it by running:

```bash
node scripts/cleanup-icon-dupes.js && npm run rp
```

This will automatically rename unsuffixed icons or remove duplicates, then restart the workflow. Only the source folder is affected.

If an icon is missing in the UI, check that its SVG filename ends with `--labs-icons.svg`.

---

### Icon Path Logic (Static, Dev, GitHub Pages)

Icons are served under:
- `/design-system/icons/` for local dev
- `/icons/` for Storybook dev server
- `./icons/` for static Storybook output
- `/labs/design-system/icons/` for GitHub Pages

If icons are missing in Storybook static output, ensure `labs-icon.js` uses a relative path (`./icons/`) for static builds. The icon loader now auto-detects static, dev, and GitHub Pages environments.

---

### Deployment

```bash
npm run d
```

This builds Storybook, syncs to `docs/`, updates paths for GitHub Pages, and deploys.

---

## ✨ Key Features

### 🎨 Design System v2.1.0
- **Modular Web Components** — Self-contained, portable components
- **CSS Custom Properties** — Extensive theming and customization
- **Shadow DOM Encapsulation** — No style conflicts
- **Three Theme Flavors** — Vanilla, Blueberry, Strawberry with light/dark modes
- **WCAG AA Compliant** — Accessible color contrasts

### 📱 Application Features
- **Progressive Web Apps** — Installable with offline support
- **Responsive Design** — Works on desktop, tablet, and mobile
- **Data Persistence** — Local storage with daily reset (where applicable)
- **Shared Design Language** — Consistent UI across all apps
- **No Framework Dependencies** — Vanilla JavaScript with Web Components

### 🛠️ Development Experience
- **Hot Module Reload** — File changes auto-reload
- **Auto-Port-Kill** — Seamless development without port conflicts
- **Automatic Icon Generation** — Dynamic icon loading and management
- **Menu-Driven Commands** — Simple interface for common tasks
- **One-Command Deployment** — Build and deploy to GitHub Pages

---

## 🔧 Technical Stack

- **Web Components** — Native browser APIs, no framework lock-in
- **Lit** — Lightweight web component base class
- **Storybook v9.1.7** — Component development and documentation
- **Vite** — Fast build tool and development server
- **GitHub Pages** — Static site hosting and deployment

---

## 📖 Documentation


### For Developers
- [Development Workflow](docs/DEVELOPMENT.md) — Local setup, build process, deployment
- [Design System README](design-system/README.md) — Component library overview
- [Smoothie Philosophy](design-system/smoothie.md) — Design metaphor and concepts
- [Design System Roadmap](design-system/ROADMAP.md) — Planned features
- [Icon Workflow & Troubleshooting](#icon-management-workflow)

### For Contributors
- [Contributing Guide](CONTRIBUTING.md) — How to contribute, PR process
- [Modularity Guidelines](.github/instructions/modularity.instructions.md) — Component design principles
- [Global TODO Index](todo-index.md) — Task tracking across all projects

### App Documentation
- [Timer Documentation](docs/timer/README.md) — Focus timer features
- [Tracker Documentation](docs/tracker/TODO.md) — Habit tracking migration status
- [Note Documentation](docs/note/README.md) — Daily note-taking features
- [Today List Documentation](docs/today-list/README.md) — Task management features
- [Pad Documentation](docs/pad/README.md) — Drawing app features

---

## 🤝 Contributing

This is a personal project showcasing modern web development practices. The codebase demonstrates:

- **Modularity-First Design** — Every component is self-contained and portable
- **Progressive Enhancement** — Works without JavaScript, enhanced with it
- **Performance Optimization** — Minimal bundle sizes and efficient loading
- **Developer Experience** — Comprehensive tooling and documentation

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 🆕 Recent Highlights (2025-10)

- **Timer App:** Reset button now only appears when timer is not at 25:00. Undo toast has been removed for a simpler, more focused UI.
- **Overlay/Warning Overlay:** Modularized and improved with robust blur/backdrop and centering. All overlays now use a consistent, accessible pattern.
- **Badge, Card, Input, Settings Components:** Refactored for full modularity, improved slot/attribute API, and better Storybook documentation.
- **Icon & Token Workflow:** Icon scripts and design tokens have been normalized for reliability and easier maintenance.

---
## 🏁 Quick Start

---

## 🔗 Design System Link Workflow

**For the Labs homepage (`docs/index.html`):**

- Always commit with `href="../design-system/"` for the design system link. This ensures local preview works out of the box.
- The deploy/build script (run with `--github` or as part of `npm run d`) will automatically rewrite this link to `href="/labs/design-system/"` for GitHub Pages.
- **Never commit the deploy output** with `/labs/design-system/` — only the local-friendly `../design-system/`.

This ensures the link is always correct in both local and deployed environments, with no manual changes needed.


### October 10, 2025
- **Icon Workflow Automation:** Icon cleanup and generation scripts now robustly enforce suffixes, quote all icon names, and only update the icons object in `labs-icon.js` between comment markers. No more file corruption or manual fixes needed.
- **Safe Cleanup:** `cleanup-icon-dupes.js` matches manual workflow—deletes unsuffixed duplicates, renames unsuffixed icons, and never touches suffixed icons.
- **Valid JS Generation:** All icon property names are quoted, so icons with hyphens or special characters are always valid.

### October 4, 2025
- Fixed Storybook assets 404s (removed from .gitignore)
- Fixed tracker date-format.js dynamic import
- Enhanced path management for local/production environments
- Updated comprehensive development documentation

### September 30, 2025
- Dropdown portal system for eliminating menu clipping
- List item component refinements
- Storybook alphabetical sorting

### September 21, 2025
- Service worker stability improvements
- Robust fetch handlers with proper fallbacks
- Local preview path fixes

See [CHANGELOG.md](CHANGELOG.md) for complete version history.

---

**Built with ❤️ using modern web standards**
