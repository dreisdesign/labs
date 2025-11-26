# 🧪 Labs

> **Modular design system and productivity apps built with Web Components**

[![Latest Release](https://img.shields.io/badge/release-v2.5.0-blue)](CHANGELOG.md) • [Live Demo](https://dreisdesign.github.io/labs/) • [Storybook](https://dreisdesign.github.io/labs/design-system/)

---

## 🌐 Live Applications

| App | Description | Link |
|-----|-------------|------|
| 🎨 **Design System** | Component library & tokens | [Storybook](https://dreisdesign.github.io/labs/design-system/) |
| ⏰ **Focus Timer** | Distraction-free Pomodoro timer | [Open](https://dreisdesign.github.io/labs/timer/) |
| 📊 **Daily Tracker** | Habit and activity tracking | [Open](https://dreisdesign.github.io/labs/tracker/) |
| 📝 **Daily Note** | Simple daily note-taking | [Open](https://dreisdesign.github.io/labs/note/) |
| ✅ **Today List** | Daily task checklist | [Open](https://dreisdesign.github.io/labs/today-list/) |
| 🖊️ **Pad** | Pressure-sensitive drawing | [Open](https://dreisdesign.github.io/labs/pad/) |

---

## 🚀 Quick Start

```bash
# Start development servers (Storybook + Labs Homepage)
npm run rp

# Or use the interactive menu
npm run menu
```

**Development URLs:**
- Storybook: http://localhost:6006
- Labs Homepage: http://localhost:8000

---

## 🏗️ Repository Structure

```
labs/
├── design-system/src/     # 🎨 Components, tokens, styles (source)
├── docs/                  # 📦 GitHub Pages (production builds)
│   ├── design-system/     # Built Storybook
│   └── {app}/             # App deployments
├── scripts/               # 🔧 Build automation
└── .github/instructions/  # 📖 AI coding guidelines
```

**Key principle:** Edit in `design-system/src/`, run `npm run rp` to sync to `docs/`.

---

## ✨ Key Features

- **Web Components** — Native APIs, no framework lock-in
- **CSS Custom Properties** — Extensive theming support
- **Three Flavors** — Vanilla, Blueberry, Strawberry (light/dark)
- **PWA Support** — Installable with offline capability
- **WCAG AA** — Accessible color contrasts

---

## 📖 Documentation

### Getting Started
| Topic | File |
|-------|------|
| Development workflow | [DEVELOPMENT.md](DEVELOPMENT.md) |
| Contributing guidelines | [CONTRIBUTING.md](CONTRIBUTING.md) |
| Task tracking | [todo-index.md](todo-index.md) |

### Design System
| Topic | File |
|-------|------|
| Component library | [design-system/README.md](design-system/README.md) |
| Design philosophy | [design-system/smoothie.md](design-system/smoothie.md) |
| Roadmap | [design-system/ROADMAP.md](design-system/ROADMAP.md) |
| App patterns | [design-system/APP-PATTERNS.md](design-system/APP-PATTERNS.md) |

### App Documentation
Each app in `/docs/{app}/` contains: `README.md`, `CHANGELOG.md`, `TODO.md`

---

## 🔧 Common Commands

| Command | Purpose |
|---------|---------|
| `npm run rp` | Start dev servers + open browsers |
| `npm run menu` | Interactive development menu |
| `npm run d` | Deploy to GitHub Pages |
| `npm run storybook` | Storybook only (port 6006) |

---

## 📝 Recent Changes

See [CHANGELOG.md](CHANGELOG.md) for version history.

---

**Built with ❤️ using modern web standards**
