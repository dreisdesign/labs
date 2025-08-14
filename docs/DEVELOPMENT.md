# Labs Design System & Storybook Development Guide

> **Single source of truth for all design system, Storybook, and UI documentation.**

---

## 📑 Index
1. [Migration & Architecture](#migration--architecture)
2. [Features & API](#features--api)
3. [Current Tasks & Roadmap](#current-tasks--roadmap)
4. [Storybook Native Features](#storybook-native-features)
5. [Recent Sprints & Decisions](#recent-sprints--decisions)

---

## 1. Migration & Architecture

### CSF3 Migration Plan (Summary)
- **Goal:** Migrate all stories to CSF3 for advanced controls, conditional UI, and future-proofing.
- **Steps:**
  1. Baseline commit and feature branch
  2. Update to CSF3 syntax, remove CSF2 patterns
  3. Add conditional controls (`if` property)
  4. Test all stories and controls
  5. Update docs, clean up legacy files
  6. Review and merge
- See full details in the [CSF3_MIGRATION_PLAN.md](../design-system/CSF3_MIGRATION_PLAN.md) (to be archived after migration)

### Architecture Principles
- Single source of truth for each component/pattern
- Use native Storybook autodocs and controls
- Eliminate redundant pattern stories
- See [storybook-architecture-sprint.md](../_dev/_documents/storybook-architecture-sprint.md) for sprint history

---

## 2. Features & API

### Key Features (from FEATURES.md)
- Modular web components (self-contained, portable)
- CSS custom properties for theming
- Shadow DOM encapsulation
- Automatic icon generation
- Theme toggle system (light/dark)
- Progressive Web App support
- Responsive design
- Data persistence (local storage)
- Shared design language across all apps

### Button System
- Pre-configured buttons (add, save, edit, themeToggle, delete, etc.)
- API: `createButton`, `createIconButton`, `setupThemeToggle`
- Icon-only, container, and destructive variants
- Accessibility: aria-labels, touch targets

---

## 3. Current Tasks & Roadmap

### High Priority
- Complete CSF3 migration and conditional controls
- Integrate `labs-alert` for all notification/undo patterns
- Refactor overlays for consistent close button usage
- Expand alert system (info, success, error, etc.)
- Improve overlay and alert documentation/examples

### Medium Priority
- Color token accessibility audit
- Audit all component controls for clarity
- Ensure modularity guidelines are followed
- Overlay/modal accessibility audit

### Backlog
- Expand icon system
- Improve Storybook docs for all components
- Add more usage examples
- Add overlay animation/transition options

---

## 4. Storybook Native Features

- Native "Show code" and copy functionality
- Interactive controls for all button properties
- Professional autodocs and source code display
- Accessibility testing with `@storybook/addon-a11y`
- Recommended addons: storysource, controls, actions, measure, outline, viewport, notes, design
- See [STORYBOOK_NATIVE_FEATURES.md](../design-system/STORYBOOK_NATIVE_FEATURES.md) for full details (to be archived)

---

## 5. Recent Sprints & Decisions

- Button consolidation: all variants in one story, patterns redundancy eliminated
- Sidebar structure: Tokens → Components → Patterns
- Docs: Use Storybook autodocs, minimize custom code
- See [storybook-architecture-sprint.md](../_dev/_documents/storybook-architecture-sprint.md) for full sprint log

---

*This document supersedes: CSF3_MIGRATION_PLAN.md, FEATURES-TODO.md, FEATURES.md, STORYBOOK_NATIVE_FEATURES.md, refinement-tasks-8-11-2025.md, storybook-architecture-sprint.md. Legacy docs are now archived.*

_Last updated: August 14, 2025_
