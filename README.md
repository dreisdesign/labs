# 🧪 Labs

> Latest release: v2.4.6 — Service Worker & Docs Stability (2025-09-21). See `docs/release-2025-09-21.md` or `CHANGELOG.md` for details.

**2025-09-05:** All icons in apps and demos now use the design system's `<labs-icon>` component and icon set. All inlined SVGs have been removed for consistency and maintainability. Theme and flavor toggles are now fully Storybook-compliant.

> **Modular design system and productivity apps built with Web Components**

## 🌐 Live Applications

| App | Purpose | Live URL |
|-----|---------|----------|
| **🎨 Design System** | Component library & tokens | [Storybook](https://dreisdesign.github.io/labs/design-system/) |
| **⏰ Focus Timer** | Pomodoro-style productivity timer | [Timer App](https://dreisdesign.github.io/labs/timer/) |
| **📊 Daily Tracker** | Habit and activity tracking with dark mode | [Tracker App](https://dreisdesign.github.io/labs/tracker/) |
| **🖊️ Pad** | Drawing app | [Pad App](https://dreisdesign.github.io/labs/pad/) |
| **🏠 Labs Homepage** | App launcher and overview | [Homepage](https://dreisdesign.github.io/labs/) |

Note: The Design System received small parity fixes on 2025-08-31 (Global colors and icon-only button behavior); see `design-system/CHANGELOG.md` Unreleased for details.

**2025-09-05:** All icons in apps and demos now use the design system’s `<labs-icon>` component and icon set. All inlined SVGs have been removed for consistency and maintainability. Theme and flavor toggles are now fully Storybook-compliant.
## 🏗️ Repository Structure

```
labs/
├── design-system/          # 🎨 Labs Design System v2.1.0
│   ├── src/                # Components, tokens, styles
│   ├── .storybook/         # Storybook configuration
│   └── README.md           # Design system documentation
├── docs/                   # 📦 GitHub Pages deployment
│   ├── design-system/      # Built Storybook (production)
│   ├── timer/              # Timer app (production)
│   ├── tracker/            # Tracker app (production)
│   ├── note/               # Note app (production)
│   ├── pad/                # Pad app (production)
│   └── README.md           # Public documentation
├── scripts/                # 🔧 Build and deployment automation
│
└── _dev/                   # 👨‍💻 Developer tools and documentation
   └── _documents/         # All project documentation (active + legacy)
	   ├── DEVELOPMENT.md  # Single source of truth for active dev
	   └── legacy/         # Archived/legacy docs, organized by topic
		   ├── storybook/
		   ├── features/
		   ├── migration/
		   ├── sprints/

## 📄 Feature Documentation

- [Unified Light/Dark Theme System](design-system/docs/feature-light-dark-theme.md)
			├── documentation/
			└── misc/
```

## 🚀 Quick Start

### **Development**
```bash
# Start Storybook with auto-port-kill
npm run menu
# Choose option 1 for local development

# Or run directly
npm run storybook
```

### Preview Shortcut: `rp`

There is a helper script available through npm that runs the repo preview flow (Storybook + Labs Homepage) and will open both pages in your browser when ready:

```bash
# Start Storybook + Docs preview and open both pages in your browser
npm run rp
```

`npm run rp` is a convenience wrapper around the existing `r`/menu flow that attempts to open `http://localhost:6006` and `http://localhost:8000/` after the servers are available. If you run into issues where your OS blocks automatic browser opening, open the URLs manually.

### **Deployment**
```bash
# Build and deploy to GitHub Pages
npm run menu
# Choose option 2 for production deployment

# Or run deploy script directly
npm run deploy
```


## 📚 Documentation

### **Design System**
- **[📖 Design System README](design-system/README.md)** - Setup, usage, components
- **[📋 Design System Changelog](design-system/CHANGELOG.md)** - Releases and updates
- **[🎨 Storybook (Live)](https://dreisdesign.github.io/labs/design-system/)** - Interactive component docs
- **[🛠️ Development Guide](docs/DEVELOPMENT.md)** - Single source for all design system, Storybook, and UI development

### Theming & Color Tokens
The Labs Design System now features a **complete two-layer token architecture** with comprehensive semantic color support:

- **✅ Production-Ready Color System** — Fully implemented semantic tokens with "on-" text color pairings
- **✅ Theme Support** — Light/dark themes across Vanilla, Blueberry, and Strawberry flavors
- **✅ WCAG AA Compliance** — All color combinations meet accessibility standards
- **✅ Smart Text Colors** — Semantic tokens with luminance fallbacks for optimal contrast
- **📖 Complete Documentation** — See `design-system/src/styles/COLORS-DOCS.md` for the authoritative theming guide

The system provides palette anchors (`tokens/colors.css`), semantic fallbacks (`main.css`), flavor mappings (`flavors.css`), and comprehensive Storybook documentation.

### **Applications**
- **[📝 Timer Documentation](docs/timer/README.md)** - Focus timer features and usage
- **[📊 Tracker Documentation](docs/tracker/README.md)** - Habit tracking and analytics
- **[📓 Note Documentation](docs/note/README.md)** - Daily note-taking features
- **[✅ Today List Documentation](docs/today-list/README.md)** - Task management features

### **Project Management**
- **[📋 Global Changelog](CHANGELOG.md)** - Overall project updates

### **Legacy & Archived Docs**
- **[Legacy Documentation](./_dev/_documents/legacy/README.md)** — All legacy, historical, and superseded docs, organized by topic for reference only

> For all migration, architecture, and roadmap details, see [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md). Legacy docs are now in `_dev/_documents/legacy/`.

## ✨ Key Features

### **🎨 Design System v2.1.0**
- **Modular Web Components** - Self-contained, portable components
- **CSS Custom Properties** - Extensive theming and customization
- **Shadow DOM Encapsulation** - No style conflicts or dependencies
- **Automatic Icon Generation** - Dynamic icon loading and management
- **Theme Toggle System** - Light/dark mode with persistence

### **📱 Application Features**
- **Progressive Web Apps** - Installable with offline support
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Data Persistence** - Local storage with export/import
- **Shared Design Language** - Consistent UI across all apps
- **No Framework Dependencies** - Vanilla JavaScript with Web Components


## 🛠️ Development Workflow & AI Chat Policy

### Menu-Driven Workflow (Recommended)
All development and testing should use the menu-driven workflow for consistency and automation:

```bash
echo "1" | npm run menu
```

This ensures the correct environment, auto-port-kill, and the interactive "continue" button in the VS Code terminal. Avoid using `npm run menu` alone for AI-driven workflows.

### Explicit AI Chat Task Continuation Policy
For all AI-driven development, the assistant will:
- Always provide explicit, numbered options for next steps
- Only prompt for completion when all tasks are truly complete
- Never end a turn without either fully completing all tasks or providing the next actionable step
- See `.github/instructions/development-workflow.instructions.md` for the full policy and details

**Reference:** See [Development Workflow Instructions](.github/instructions/development-workflow.instructions.md) for the latest workflow and AI Chat guidelines.

---


### **Enhanced Build System & Features**
- **Auto-Port-Kill** - Seamless development without port conflicts
- **Pre-Error Checking** - Validates build environment before compilation
- **Automatic Icon Generation** - Updates icon lists and imports
- **Build Size Reporting** - Tracks bundle size and optimization
- **Menu-Driven Commands** - Simple interface for common tasks

### **Deployment Pipeline & Roadmap**
- **GitHub Pages Integration** - Automatic deployment from `docs/` folder
- **Build Automation** - One-command build and deploy process
- **Production Optimization** - Minified builds with asset optimization
- **Multi-App Deployment** - All apps and Storybook deployed together

## 🔧 Technical Stack & Roadmap

**Web Components** - Native browser APIs, no framework lock-in
**Lit** - Lightweight web component base class
**Storybook v9.1.2** - Component development and documentation
**Vite** - Fast build tool and development server
**GitHub Pages** - Static site hosting and deployment

---
**Troubleshooting Storybook version issues?**
See the new troubleshooting section in `design-system/FEATURES-TODO.md` for step-by-step fixes if the version or upgrade banner is wrong.



## 🏆 Current Roadmap

See [`TODO.md`](TODO.md) for all actionable and planned work. For detailed version history and recent achievements, see [CHANGELOG.md](CHANGELOG.md).

---

## 🤝 Contributing

This is a personal project showcasing modern web development practices. The codebase demonstrates:

- **Modularity-First Design** - Every component is self-contained and portable
- **Progressive Enhancement** - Works without JavaScript, enhanced with it
- **Performance Optimization** - Minimal bundle sizes and efficient loading
- **Developer Experience** - Comprehensive tooling and documentation

For development guidelines, see [Modularity Instructions](.github/instructions/Modularity.instructions.md).

---

**Built with ❤️ using modern web standards**

## 🆕 Recent UX & Component Improvements

### Archive/Restore Logic for List Items
- List items now visually distinguish between normal, archived, and restored (inactive) states.
- The archive button icon changes to a history icon when archived, and becomes inactive (faded) when restored.
- See the new Storybook story: `List Item/Archived` for a live demo of all states.

### Input Card & Destructive Button UX
- Input cards now have `autocomplete="off"` for better browser UX.
- Destructive button icons (e.g., delete/reset) now always use the correct error color in all themes.

### Small Fixes (2025-09-21)
- **Smoothie template — edge layout:** The Templates/Smoothie Default story now supports a true "edge" (full-bleed) layout so components and background treatments span the full viewport width in Storybook and demos.
- **Docs path-fix:** `scripts/update-static-paths.js` was enhanced to copy shared styles (`tl-entry.css`) and `design-system/src/utils/*.js` into `docs/design-system` so local preview (`python3 -m http.server`) no longer 404s for those assets.
