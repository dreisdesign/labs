# 🆕 Feature & Task Wrangling Doc

---
## 🛠️ Development Workflow & AI Chat Policy

See [Development Workflow Instructions](../../.github/instructions/development-workflow.instructions.md) for the latest menu-driven workflow and AI Chat task continuation policy. All contributors should follow the explicit options and completion logic described there.

---
# 🆕 Feature & Task Wrangling Doc

## Purpose
This document tracks new features, improvements, and remaining tasks for the Labs Design System and Storybook UI. Use this as the single source of truth for ongoing and upcoming work.

---


## 🟢 High Priority (Current Sprint)

- **COMPLETE:** Add a warning color token and use it for the warning alert
- **COMPLETE:** Suppress Storybook "new version available" message (see troubleshooting below)
- **COMPLETE:** Button improvements:
  - Extracted "container" to a boolean control
  - Renamed "icon" to "iconLeft" for consistency with "iconRight"
  - Removed "iconColor" as a control; icon color is now theme-determined for accessibility
- **COMPLETE:** Migrate all undo/notification patterns to use the new `labs-alert` component (Today List, Tracker, etc.)

### Next Up
- Integrate `labs-alert` for all notification/undo patterns in all apps (Tracker, Note, etc.)
- Audit and refactor overlays (Input Overlay, Settings Overlay, etc.) for:
  - Consistent close button usage (use new configs, e.g., `closeRounded`)
  - Modular button/alert integration
- Expand alert system:
  - Add more alert variants (info, success, error, etc.)
  - Ensure proper icon and color usage for each variant
- Improve overlay and alert documentation/examples in Storybook

#### Button System & Storybook Controls Refactor (Planned)
- Refactor button stories and controls:
  - Use a `variant` select control for color combos (primary, secondary, danger, transparent)
  - Remove `container` from variants; make it a boolean control
  - Ensure `checkmark` is a boolean control
  - Make "icon only" a type (if label is empty, or as a toggle)
  - Keep presets for quick access, but allow full manual control
- Update Storybook Docs page to allow customizing variant, container, checkmark, icons, and label
- Sidebar stories can remain for quick demos, but Docs should be the main playground
- Clarify in docs that variants are color/style only; container is a layout control
- Update all docs and usage examples to match new button system

---


## 🟡 Medium Priority

- Review all color tokens for accessibility and theme consistency
- Audit all component controls for clarity and usability
- Ensure all modularity guidelines are followed for new/updated components
- Audit overlays and modals for accessibility (focus management, keyboard nav)

---

## 📝 Notes & References
- See Modularity Guidelines: `.github/instructions/Modularity.instructions.md`
- See Design System Features: `design-system/FEATURES.md`
- See Changelog: `CHANGELOG.md`

---

## ⏳ Backlog / Ideas
- Expand icon system with more semantic icons
- Improve Storybook docs for all components
- Add more usage examples for each component
- Add overlay animation/transition options

---


## 🛠️ Troubleshooting: Storybook Version Mismatch

If Storybook shows the wrong version (e.g., 9.1.1 instead of 9.1.2) or keeps showing the upgrade banner after updating:

1. **Delete old dependencies and lockfile in `design-system/`:**
  ```sh
  cd design-system
  rm -rf node_modules package-lock.json
  npm install
  ```
2. **Verify installed versions:**
  ```sh
  npm ls | grep storybook
  ```
  All Storybook packages should show the correct version (e.g., 9.1.2).
3. **Clean build artifacts and cache:**
  ```sh
  rm -rf storybook-static node_modules/.cache
  ```
4. **Rebuild and restart Storybook:**
  Use the menu system or your usual dev command.
5. **Hard refresh your browser:**
  Use `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows/Linux) to clear cache.

This will ensure the correct Storybook version is running and the upgrade banner disappears.

---

_Last updated: August 12, 2025_
