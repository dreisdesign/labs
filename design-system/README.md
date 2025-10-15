## 🛡️ Icon Management Workflow (2025-10-15)

All icon SVGs in `design-system/icons/` **must** end with `--labs-icons.svg`. This is enforced by both the sync and cleanup scripts.

**Automated Cleanup:**
- Run `node scripts/cleanup-icon-dupes.js && npm run rp` to automatically rename unsuffixed icons or remove unsuffixed duplicates.
- The cleanup script only operates on the source folder (`design-system/icons/`), never on build or destination folders.

**Sync Script Safety:**
- The sync script (`sync-icons.js`) only checks for filename issues (missing suffix or duplicates) and halts with a clear message if any are found.
- No files are renamed or deleted by the sync script; all changes are made explicitly via the cleanup utility.

**Manual Intervention Required:**
- If the sync script halts, it prints the exact command to run for cleanup.
- This ensures no accidental data loss and keeps the workflow safe and user-driven.

**Duplicate Handling:**
- The cleanup script renames unsuffixed icons if no suffixed version exists, or deletes the unsuffixed file if a suffixed version is present.
- Only suffixed icons are allowed in the source directory.

**Workflow Integration:**
- The cleanup utility is available in the Utilities submenu for easy access.
- The `rp` script halts before starting servers if icon issues are detected, preventing wasted build time.

**Troubleshooting:**
- If icons are missing or not appearing, always check for correct suffixes and run the cleanup utility.
- If syntax errors appear in `labs-icon.js` after running the icon generation script, check for duplicate or malformed code blocks (especially duplicate `ICON_BASE` declarations or unquoted object keys).

---

### Common Pitfalls & FAQ

- **Q: Why does the sync script halt and print a cleanup command?**
  - **A:** To prevent accidental data loss and ensure all icons are correctly suffixed before syncing. All destructive actions are isolated to the cleanup utility, never in the sync script.

- **Q: Why aren't my icons showing up?**
  - **A:** Check that all icon filenames end with `--labs-icons.svg` and run the cleanup utility if needed.

- **Q: Why do I see syntax errors in labs-icon.js after running icon generation?**
  - **A:** This can happen if the icon generation script merges or appends icon definitions incorrectly. Check for duplicate or malformed code blocks, especially duplicate `ICON_BASE` declarations or unquoted object keys.

- **Q: How do I safely clean up icons?**
  - **A:** Always use `node scripts/cleanup-icon-dupes.js` to rename or remove unsuffixed icons. Never delete icons manually unless you are certain they are not needed.

---
## 🆕 Dropdown Restore Menu Item (2025-10-13)

**Unified Dropdown Pattern (2025-10-13):**
All tasks—today, archived, and past—now use the `<labs-dropdown>` component in the right slot for actions. This ensures a consistent, modular UI for Archive, Restore, and Delete actions across all days and task states in Today-List and similar apps.

**Usage:**
```javascript
const dropdown = document.createElement('labs-dropdown');
dropdown.setAttribute('slot', 'actions');
if (item.archived) dropdown.setAttribute('archived', '');
if (isPast) dropdown.setAttribute('only', 'restore,delete');
else dropdown.setAttribute('only', item.archived ? 'archive,delete' : 'archive,delete');
```
Attach event listeners for `archive`, `restore`, and `remove` as needed.

See [COMPONENT-USAGE.md](./COMPONENT-USAGE.md) for full details and usage patterns.

## Component Refactors & Modularity (2025-10)


# Labs Design System

> **Production-Ready Component Library with Complete Token Architecture**


## Overview

This is the canonical design system for Labs apps, featuring a comprehensive two-layer token system, semantic color architecture, and modular Web Components. All UI components, design tokens, and documentation are maintained here with full theme support and accessibility compliance.


**🎯 Current Status: Production-Ready & Robust**



## Icon Management Workflow (2025-10-10)

**All icon SVGs in `design-system/icons/` must end with `--labs-icons.svg`.**

If you see a warning about unsuffixed icons when running `npm run rp`, fix it by running:

```bash
node scripts/cleanup-icon-dupes.js && npm run rp
```

This script will automatically rename unsuffixed icons or remove duplicates, then restart the workflow. Only the source folder is affected.

**Troubleshooting:**


**2025-10-07 Update:**

**2025-09-05 Update:**



## Storybook Story Grouping (2025-10-08)

Labs uses a standardized, nested Storybook organization:
- **Patterns:** `4. Patterns/Group/Pattern` (e.g. Button - Theme/Appearance, Button - Theme/Flavor)

This structure ensures all stories are easy to find and maintain. See `STORYBOOK_SITEMAP.md` for the current index.
- **Wrapped Header:** See `src/components/labs-template-header.wrapped.js` for the canonical modular header wrapper for Storybook and test/demo use.
---

## Key Docs & Links

 - **Note:** Small UI parity fixes (icon-only button color and Global colors story rendering) were applied on 2025-08-31 — see `CHANGELOG.md` Unreleased section.
- Tracker and Today-list now use the same header/date/metric card structure for true design system parity.
- `<labs-header>` component now supports `center` and `show-subtitle` attributes for flexible layout and Storybook controls.
## Structure

- `src/components/` — Modular UI components (Button, Icon, Overlay, etc.)
- `.storybook/` — Storybook config
- `storybook-static/` — Static build output

---

## Usage

- Run Storybook: `npm run storybook`
- Build Storybook: `npm run build-storybook`
- All component and token documentation is in Storybook or the canonical docs above.

---

## Contribution

- Follow [Modularity Guidelines](../.github/instructions/Modularity.instructions.md)
- All new docs should be added to the appropriate canonical file or Storybook story.

---

## Archive

The previous README has been archived for reference in `_archive/README-2021-2025.md`.

For setup, usage, and contribution details, see the [migration guide](../_dev/_documents/DESIGN-SYSTEM-MIGRATION-GUIDE.md).

## 🆕 Recent UX & Component Improvements

### Archive/Restore Logic for List Items
- List items (`<labs-list-item>`) now visually distinguish between normal, archived, and restored (inactive) states.
- The archive button icon changes to a history icon when archived, and becomes inactive (faded) when restored.
- See the new Storybook story: `List Item/Archived` for a live demo of all states.

### List Item — Timestamp & Centered Content
- The `labs-list-item` component now supports a refined `timestamp`/`text-only` presentation where the control (checkmark) and action slots match sizing, and the content is centered.
- For timestamp-driven lists (like Tracker), prefer using `variant="text-only"` or `variant="timestamp"` so the left (control) slot is constrained to a 40×32 container and the icon itself is kept to a 20px height for visual parity with action buttons.
- The `content` slot is wrapped in a `.text` container that flex-grows and centers its text, which is ideal for timestamp-only rows and empty states.

### Input Card & Destructive Button UX
- Input cards now have `autocomplete="off"` for better browser UX.
- Destructive button icons (e.g., delete/reset) now always use the correct error color in all themes.

### Dropdown Portal Architecture (2025-09-30)
- **Major Improvement**: `<labs-dropdown>` now uses a document-level portal pattern to prevent menu clipping issues.
- The dropdown menu is rendered outside its parent component at document level (`#labs-dropdown-portal`), completely avoiding ancestor overflow constraints.
- **Benefits**: No more clipped menus in list items, cards, or containers with `overflow: hidden`. Consistent z-index behavior. Better accessibility.
- **Technical**: Uses viewport-aware positioning, automatic cleanup, and maintains all existing keyboard navigation and event handling.
- **Breaking Change**: None - all existing usage remains identical. This is a pure architectural improvement.
- See Storybook stories: `Components/List Item` and `Templates/Smoothie` for examples of dropdowns that now render properly.

## Storybook: List Item Variants

- The canonical List Item story (2. Components/List Item) now includes:
  - **Default**: Controls-driven playground for all variants and props
  - **Text Only**: Explicit variant
  - **Timestamp**: Explicit variant
  - **Task**: Explicit variant
- This provides both a flexible playground and one-click access to each variant in the sidebar.

### Card/Welcome Centering & Modularity (2025-10-09)

- **labs-card**: Actions area is now always centered using pure flexbox. No slot wrappers or margin tricks—guaranteed robust centering for all slotted content. Only `align="center"` is supported for maximum modularity. For advanced alignment, wrap actions in a primitive container (see story comment).
- **Storybook**: Removed obsolete `align` control from Card/Welcome story. Updated documentation to reflect new modular pattern and primitive container option for advanced use.

**Modularity**: All changes follow the modularity guidelines—no external CSS, all layout logic is internal, and advanced alignment is opt-in via a documented primitive container pattern.

### Tracker & Today-List: Canonical Welcome Card Pattern (2025-10-09)

- **Tracker app** now uses the modular `labs-card` welcome card for its empty state, matching Today-List. This ensures a consistent, robust, and system-aligned empty state pattern across all Labs apps.
- The welcome card pattern is now canonical for all Labs productivity apps: always use `<labs-card variant="welcome" align="center">` with header, description, and a primary action in the actions slot.

---

## 📝 Spacing Pattern for List Sections (2025-10-15)

- All grouped list items (today, archived, past) in both the design system stories and the Today List app now use `gap: var(--space-md)` for vertical spacing.
- No margin is set on individual `<labs-list-item>` elements; spacing is handled solely by the section's gap for modularity and consistency.
- **Manual visual dividers (e.g., `<div style="height: 0.5px; ...">`) are no longer used or needed.**
- This pattern ensures perfect parity between Storybook demos and live app behavior, and any previous use of visual dividers is now obsolete.

## 🟦 Details Section Border Pattern (2025-10-15)

- All `<labs-details>` components (used for section grouping, archives, etc.) now use a border of `1.5px solid var(--color-primary-lighter)` by default.
- This is the canonical pattern for all grouped/archived sections in both the app and stories.
- The border color is token-driven and will update with the theme/flavor.

## 🟦 Details Summary Row Sizing (2025-10-15)

- The summary row of `<labs-details>` uses vertical padding from the `--space-md` token (`1rem`, `16px`) for perfect alignment with list items.
- This ensures modular, themeable sizing and visual consistency across all contexts.

---
