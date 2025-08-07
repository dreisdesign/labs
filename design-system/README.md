
## 🆕 Recent Improvements - v2.1.0 Icons & Performance Overhaul

- **🎯 Complete Icons Grid Rebuild:** Responsive multi-column layout with interactive size/color controls (16px-64px range)
- **⚡ Performance Optimized:** Eliminated resize lag, smooth real-time icon scaling and color changes
- **📱 Content-Aware Responsive:** Smart grid sizing (180px desktop → 120px mobile) with proper text wrapping
- **🔧 Enhanced labs-icon Component:** Complete SVG rendering overhaul with attribute reactivity and direct color manipulation
- **📚 Typography Fixed:** Replaced "tiny" font tokens (9.6px) with readable "small" tokens (14px) for icon labels
- **🎨 Professional UX:** Production-ready icons showcase with improved visual hierarchy and modularity compliance

## 🎨 Previous v2.0.0 Theme System Features

- **🎨 Complete Theme System:** Functional Storybook theme switcher with `@storybook/addon-themes` and global theme management
- **🔧 Modular Button System:** 15+ pre-configured button combinations with `createButton()` and `createIconButton()` functions  
- **🧹 Clean Architecture:** Removed redundant stories, consolidated theme functionality, organized with clear hierarchy
- **⚡ Ready for Integration:** `setupThemeToggle()` and `updateThemeToggleButton()` functions ready for Note/Timer/Tracker apps
- **📱 Icon-Only Variants:** New `icon` variant for persistent footer buttons and contextual actions
- **🎯 Smart Color System:** Theme-aware Colors page using semantic CSS properties that adapt to light/dark modes
- **🚀 Storybook v9.1.1:** Upgraded with proper addon support and professional design system workflow

### Key Features:
- **Theme Switching:** Global Storybook toolbar theme switcher + individual story theme toggles  
- **Button Configs:** Common Actions, Destructive Actions, UI/Navigation, Icon-Only, Container variants
- **Modular Components:** All components self-contained with CSS custom properties (no external dependencies)
- **App-Ready:** Clean API for immediate integration into existing apps

---

## Changelog

See [`CHANGELOG.md`](CHANGELOG.md) for a detailed list of recent changes and improvements.

---


# Labs Design System

This folder contains the Labs Design System: shared UI components, tokens, Storybook config, and documentation.


## Structure

- `src/components/` — Reusable UI components (Button, Input, etc.)
- `src/tokens/` — Design tokens (colors, typography, spacing)
- `.storybook/` — Storybook configuration
- `storybook-static/` — Static build output (after running `npm run build-storybook`)
- `README.md` — This file
## Components

- **`labs-button`**: Comprehensive button component with variants (primary, secondary, danger, transparent, container, icon), icon support, checkmark animations, and theme integration
- **`labs-icon`**: High-performance SVG icon component with real-time scaling (16px-64px), interactive color controls, responsive grid layout, and optimized attribute reactivity  
- **`labs-settings-overlay`**: Modular settings modal overlay as a custom element with container button integration

### Button System:
- **Pre-configured buttons:** `createButton()` and `createButtonElement()` with 15+ ready-to-use combinations
- **Icon-only buttons:** `createIconButton()` and `createIconButtonElement()` for persistent UI elements  
- **Theme integration:** `setupThemeToggle()` and `updateThemeToggleButton()` for complete theme switching
- **Container variants:** Full-width buttons optimized for overlays and panels

See `src/tokens/button-configs.js` for all available configurations and `src/stories/` for complete documentation.



## Quick Start & Integration

### For App Development:
```javascript
// Import button configurations
import { createButton, createButtonElement, setupThemeToggle } from './design-system/src/tokens/button-configs.js';

// Use pre-configured buttons
const addButton = createButton('add');
const deleteButton = createButton('delete');
const themeToggle = createButtonElement('themeToggle');

// Setup theme switching
setupThemeToggle(themeToggle);
```

### For Storybook Development:
```bash
npm run storybook    # Start development server
npm run build-storybook    # Build for deployment
```

### Theme System:
- **Global Switcher:** Use Storybook toolbar theme switcher for testing all stories
- **App Integration:** Use `setupThemeToggle()` for complete theme functionality in apps
- **CSS Classes:** `theme-light` and `theme-dark` applied to document body
- **Storage:** Theme preferences saved to localStorage with system preference fallback

---

## Usage & Docs

- Develop and document components and tokens here
- Run Storybook locally for live docs and visual testing
- Build and deploy Storybook for public docs
- See the [Changelog](CHANGELOG.md) for recent updates
- See `/docs/demo/index.html` for a live demo of the design system components, including `<labs-settings-overlay>` in action.


## Key Links

- [Global Monorepo README](../README.md)
- [Labs Storybook (Live)](https://dreisdesign.github.io/labs/design-system/)
- [Design System Changelog](CHANGELOG.md)
- [Modularity Guidelines](MODULARITY-GUIDELINES.md) 📋 **Component Development Standards**
- [Changelog & Roadmap](../docs/CHANGELOG.md)
- [Migration Guide](../_dev/_documents/DESIGN-SYSTEM-MIGRATION-GUIDE.md)

## Troubleshooting: SVG Icon MIME Type Error

**Problem:**
If you see an error like `'image/svg+xml' is not a valid JavaScript MIME type` when using SVG icons in Storybook or Vite, it means your SVGs are being imported as JavaScript modules instead of static assets.

**Solution:**

- **Do not use** `import icon from '../icons/foo.svg?url'` or `import icon from '../icons/foo.svg'` in your icon registry/component.
- Instead, use direct static paths in your icon registry, e.g.:
  ```js
  const icons = {
    check: '/icons/check--labs-icons.svg',
    ... // other icons
  };
  ```
- Make sure your `.storybook/main.js` includes the icons directory in `staticDirs`:
  ```js
  staticDirs: ["../assets", "../icons"],
  ```
- This ensures SVGs are served as static files and can be referenced by URL in your components.

**References:**

- See the [Migration Guide](../_dev/_documents/DESIGN-SYSTEM-MIGRATION-GUIDE.md) for more details.

## Recent Changes

- Sidebar navigation flattened for icons and tokens
- Tokens split into separate stories for colors, typography, spacing
- Icon grid preview added; each icon links to its demo story
- Automated icon list and grid rendering
- Obsolete MDX docs and legacy stories removed
- Storybook controls persistence disabled (no save popup)

## Developer Workflow

- Run Storybook: `npm run storybook`
- Build Storybook: `npm run build-storybook`
- Deploy: see [global README](../README.md) and [docs/README.md](../docs/README.md)

---

For setup, usage, and contribution details, see the [migration guide](../_dev/_documents/DESIGN-SYSTEM-MIGRATION-GUIDE.md).
