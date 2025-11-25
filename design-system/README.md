# Labs Design System

> **Production-ready Web Component library with complete token architecture**

[![Storybook](https://img.shields.io/badge/storybook-live-ff4785)](https://dreisdesign.github.io/labs/design-system/)

---

## Overview

The Labs Design System provides modular, themeable Web Components for building consistent UIs across all Labs applications. Features include:

- **Two-layer token system** — Palette + semantic colors
- **Three theme flavors** — Vanilla, Blueberry, Strawberry (light/dark)
- **WCAG AA compliance** — Accessible color contrasts
- **Shadow DOM encapsulation** — No style conflicts

---

## 🚀 Quick Start

```bash
# Start Storybook
npm run storybook

# Build static Storybook
npm run build-storybook
```

**Live Storybook:** https://dreisdesign.github.io/labs/design-system/

---

## 📁 Structure

```
design-system/
├── src/
│   ├── components/    # Web Components (labs-button, labs-card, etc.)
│   ├── styles/
│   │   ├── tokens/    # Design tokens (colors.css, spacing.css)
│   │   └── flavors.css
│   ├── stories/       # Storybook stories
│   └── utils/         # Utilities (date-format.js, theme-manager.js)
├── icons/             # SVG icons (*--labs-icons.svg)
└── .storybook/        # Storybook configuration
```

---

## 🎨 Core Components

| Component | Purpose |
|-----------|---------|
| `labs-button` | Buttons with variants (primary, secondary, destructive) |
| `labs-card` | Content containers (welcome, metric variants) |
| `labs-list-item` | List items with slots (control, content, actions) |
| `labs-dropdown` | Portal-based dropdown menus |
| `labs-toast` | Notification toasts |
| `labs-overlay` | Modal overlays |
| `labs-icon` | Icon component using design system icons |
| `labs-container` | Responsive container (small, medium, large, fill) |

---

## 🎯 Design Tokens

### Colors
Semantic tokens that adapt to theme:
- `--color-primary`, `--color-surface`, `--color-on-surface`
- `--color-background`, `--color-on-background`

### Spacing
- `--space-xs` (4px) through `--space-xl` (32px)

### Border Radius
- `--radius-sm` (2px), `--radius-md` (4px), `--radius-lg` (8px)
- `--radius-card` (8px), `--radius-button` (4px), `--radius-badge` (9999px)

---

## 📖 Documentation

| Topic | Location |
|-------|----------|
| Design philosophy | [smoothie.md](smoothie.md) |
| Roadmap | [ROADMAP.md](ROADMAP.md) |
| Component patterns | [COMPONENT-USAGE.md](COMPONENT-USAGE.md) |
| App boilerplate | [APP-BOILERPLATE-TEMPLATE.md](APP-BOILERPLATE-TEMPLATE.md) |
| Changelog | [CHANGELOG.md](CHANGELOG.md) |

---

## 🛠️ Icon Management

**All icons must end with `--labs-icons.svg`.**

```bash
# If you see warnings about unsuffixed icons:
node scripts/cleanup-icon-dupes.js && npm run rp
```

See [DEVELOPMENT.md](../DEVELOPMENT.md#icon-management) for full details.

---

## 🤝 Contributing

Follow the [Modularity Guidelines](../.github/instructions/modularity.instructions.md):
- Self-contained Shadow DOM styling
- CSS custom properties for theming
- No external dependencies

---

**Status:** Production-ready  
**Last updated:** November 25, 2025
