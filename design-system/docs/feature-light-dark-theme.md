# Feature: Unified Light/Dark Theme System

## Overview
This document describes the goals, architecture, and implementation plan for the unified light/dark theme system in the Labs Design System. The system ensures perfect consistency between production apps and Storybook, using semantic CSS custom properties and global theme classes.

## Goals
- Provide a single, unified approach for light/dark theming across all Labs apps and Storybook
- Ensure all theming is driven by semantic tokens and global theme classes (`.theme-light`, `.theme-dark`)
- Guarantee accessibility and maintainability
- Make onboarding and usage easy for all contributors

## Architecture
- **Theme Classes:** `.theme-light` and `.theme-dark` applied to the root element
- **Tokens:** All colors use semantic tokens (e.g., `--color-background`, `--color-on-background`)
- **Persistence:** User theme choice is saved in `localStorage` and restored on page load
- **System Preference:** Defaults to system `prefers-color-scheme` if no user choice
- **Storybook Integration:** Toolbar toggle and decorators sync theme with app logic
- **No Hardcoded Colors:** All component styles use tokens only

## Implementation Steps
1. ~~Refactor all theme toggles to use `.theme-light`/`.theme-dark` and centralized tokens~~ ✅
2. ~~Ensure all components consume only semantic tokens~~ ✅
3. ~~Sync Storybook and app theme logic using shared helpers~~ ✅
4. ~~Test and verify theme switching in all environments~~ ✅
5. ~~Document the approach in `COLORS-DOCS.md` and reference this feature doc~~ ✅

## References
- [COLORS-DOCS.md](../src/styles/COLORS-DOCS.md) — Technical details, code examples, and implementation checklist
- [README.md](../../README.md) — Main project overview

## Status
- [x] Complete — All implementation steps finished. See checklist in `COLORS-DOCS.md` for ongoing verification.

---

For technical implementation details, see the [COLORS-DOCS.md](../src/styles/COLORS-DOCS.md).
