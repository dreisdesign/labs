# Storybook: Dropdown, List Item, and Slotting Patterns (2025-10-14)

- **Dropdown canonical story**: All allowed action combos (Delete, Archive, Restore, Delete+Archive, Delete+Restore) are selectable via a radio control. No forbidden combos possible.
- **Dropdown wrapped stories**: Each allowed combo is a fixed, non-configurable story, always open, in a real list item context.
- **Dropdown contextual patterns**: Real-world usage in list items, with state-driven logic (active, archived, restored). All contextual stories now always include the delete button.
- **Slotting reliability**: Always use programmatic creation and import for slotting. Never rely on static HTML for slotted dropdowns in stories—use the canonical import pattern for reliable slotting.
- **Migration note**: Legacy combos and patterns stories have been removed. Use the new canonical and wrapped stories for all reference and documentation.

### Slotting & Import Best Practices

- Always use programmatic creation and import for slotting dropdowns into list items in stories. Example:
  ```js
  import '../components/labs-dropdown.js';
  const dropdown = document.createElement('labs-dropdown');
  dropdown.setAttribute('slot', 'actions');
  // ...set attributes as needed
  listItem.appendChild(dropdown);
  ```
- Never use static HTML for slotted dropdowns in stories—this can result in unreliable slotting and rendering in Storybook.
- Always import the canonical component file directly in the story file.

### Allowed Dropdown Combos

- Only the following dropdown action combos are allowed:
  - Delete
  - Archive
  - Restore
  - Delete + Archive
  - Delete + Restore
- All other combos are forbidden and not available in controls.

### Migration Notes

- All legacy dropdown combos and patterns stories have been removed.
- Use the new canonical and wrapped stories for all reference and documentation.
- See this file for updated usage patterns and best practices.
# Dropdown Menu Items: Archive, Restore, Delete (2025-10-13)

**Unified Dropdown Pattern (2025-10-13):**
All tasks—today, archived, and past—now use the `<labs-dropdown>` component in the right slot for actions. This ensures a consistent, modular UI for Archive, Restore, and Delete actions across all days and task states.

**Menu Item Logic:**
- **Today, not archived:** Archive, Delete
- **Today, archived:** Restore, Delete
- **Past days:** Restore to today, Delete

**Usage Example:**
```javascript
const dropdown = document.createElement('labs-dropdown');
dropdown.setAttribute('slot', 'actions');
if (item.archived) dropdown.setAttribute('archived', '');
if (isPast) dropdown.setAttribute('only', 'restore,delete');
else dropdown.setAttribute('only', item.archived ? 'archive,delete' : 'archive,delete');
```
Attach event listeners for `archive`, `restore`, and `remove` as needed.

**Benefits:**
- Consistent dropdown UI for all tasks
- Modular, themeable, and accessible
- No direct icon buttons—actions are always in the dropdown

**Menu Item Logic:**
- If `archived` attribute is present: show **Restore** (history icon)
- If not archived: show **Archive** (archive icon)
- Always shows **Delete** (delete_forever icon) unless restricted by the `only` attribute

**Usage Example:**
```html
<labs-dropdown archived slot="actions"></labs-dropdown>
```
This will show a dropdown menu with "Restore" and "Delete" options. Listen for the `restore` event to handle restoration logic in your app.

**Customization:**
- Use the `only` attribute to restrict menu items (e.g., `only="delete"`)
- The menu is fully modular and uses Shadow DOM for encapsulation
- All icons are from the Labs icon set and are themeable

**Modularity Statement:**
<labs-dropdown> is fully modular, with all menu logic, icons, and event wiring self-contained. No external CSS or dependencies are required beyond the documented component imports. The menu adapts to the `archived` attribute and is robust in all parent contexts.

**Benefits:**
- Clear, accessible menu for task actions
- Robust handling of archived/restored state
- Fully themeable and modular

# Timer App

- Uses design system tokens for all typography and color
- Vertically centered layout using flexbox
- `.timer-group` uses `margin-bottom` for footer offset (not `.break-hint`)
- Dynamic header and break text update based on timer state
- Persistent footer, responsive layout
- See `docs/timer/README.md` for layout and logic details


# Component Usage Guide (2025-10)

## Card & Button Alignment (2025-10-12)

- **Card header/close alignment:** The canonical `labs-card` now uses `flex: 1` on the header, ensuring the close button is always right-aligned. No extra wrapper or manual spacing needed.
- **Icon-only button sizing:** When using `variant="icon"` on a `labs-button` (e.g., for close icons), the button will size naturally. Only non-icon buttons (like Save/Cancel) get a `min-width: 92px` for consistent action sizing. No need to override min-width for icon buttons.


## Recent Refactors & Modularity

- **Overlay/Warning Overlay:** Now fully modular, with robust blur/backdrop and centering. Use `<labs-overlay>` or `<labs-warning-overlay>` for all modal/confirmation needs. See Storybook for usage patterns.
- **Badge, Card, Input, Settings:** Refactored for modularity, improved slot/attribute API, and Storybook documentation. See examples for new usage.
- **Toast Component:** `<labs-toast>` is still available for general use, but is no longer used in the timer app (reset confirmation is now handled by overlay only).


This guide documents key learnings, best practices, and gotchas when using the Labs Design System components.

## Component Dependencies

### Critical: labs-list-item Dependencies

When using `labs-list-item` with `labs-checkbox` and `labs-dropdown`, you **must** import all component dependencies:

```html
<!-- Required imports for labs-list-item with full functionality -->
<script type="module" src="../design-system/components/labs-list-item.js"></script>
<script type="module" src="../design-system/components/labs-checkbox.js"></script>
<script type="module" src="../design-system/components/labs-dropdown.js"></script>
<script type="module" src="../design-system/components/labs-icon.js"></script>      <!-- Required by checkbox and dropdown -->
<script type="module" src="../design-system/components/labs-button.js"></script>    <!-- Required by dropdown -->
```

#### Why These Imports Are Required

- `labs-checkbox` renders `<labs-icon>` in its shadow DOM for the checkmark
- `labs-dropdown` renders `<labs-button>` and `<labs-icon>` in its shadow DOM for the trigger and menu items
- **Missing `labs-icon.js` or `labs-button.js` will cause components to render with no visible content** (shadow DOM creates undefined custom elements)

#### Symptoms of Missing Dependencies

- Components have correct dimensions (visible borders in DevTools)
- Shadow DOM exists and has correct structure
- But no visual content appears (icons/buttons are undefined elements)
- No console errors (custom elements just fail silently)

### Reference Implementation

See `docs/list-test/` for a working minimal example with all required imports.

## Design Token Usage

### Background vs Surface Colors

The design system has distinct tokens for different surface levels:

```css
/* Page/body background - deepest layer */
body {
  background: var(--color-background);
  color: var(--color-on-surface);
}

/* Component surfaces - elevated above background */
.card, labs-list-item {
  /* Components internally use --color-surface */
  background: var(--color-surface);
}

### Standardizing Background and Surface Tokens

To ensure visual consistency and predictable contrast across all flavors and themes, the following standard mapping is used for background and surface tokens:

| Mode  | `--color-background` | `--color-surface` |
|-------|----------------------|-------------------|
| Light | 200                  | 100               |
| Dark  | 800                  | 500               |

**For all flavors:**
- Light mode: `--color-background` = 200, `--color-surface` = 100
- Dark mode: `--color-background` = 800, `--color-surface` = 500

#### Example (Vanilla flavor)
```css
.flavor-vanilla.theme-light {
  --color-background: var(--palette-vanilla-200);
  --color-surface: var(--palette-vanilla-100);
}
.flavor-vanilla.theme-dark {
  --color-background: var(--palette-vanilla-800);
  --color-surface: var(--palette-vanilla-500);
}
```

#### Phase 2: Add 900 Palette Stop

To improve dark mode backgrounds, a new `--palette-<flavor>-900` will be added for each flavor. This will be a much darker color than 800 and will be used for `--color-background` in dark mode for maximum contrast.

**Example:**
```css
.flavor-strawberry.theme-dark {
  --color-background: var(--palette-strawberry-900); /* new, much darker */
  --color-surface: var(--palette-strawberry-500);
}
```

This ensures all flavors have a true dark background option and consistent surface contrast.
```

#### Common Mistake

❌ **Wrong**: Using `--color-surface` for page background
```css
body {
  background: var(--color-surface); /* Same as component backgrounds - no contrast! */
}
```

✅ **Correct**: Using `--color-background` for page background
```css
body {
  background: var(--color-background); /* Proper contrast with components */
}
```

### Token Hierarchy

1. `--color-background` - Page/app background (deepest layer)
2. `--color-surface` - Component surfaces (cards, list items, modals)
3. `--color-surface-variant` - Subtle variations within components
4. `--color-surface-secondary` - Secondary surfaces (badges, tags)

## Layout Patterns

### Container + Task List Pattern

The recommended pattern for lists of items:

```html
<labs-container padding-md>
  <labs-header title="My Page" center></labs-header>
  
  <div class="task-list">
    <labs-list-item>
      <labs-checkbox slot="control"></labs-checkbox>
      <span slot="content">Item text</span>
      <labs-dropdown slot="actions"></labs-dropdown>
    </labs-list-item>
    <!-- More items... -->
  </div>
</labs-container>
```

```css
.task-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);  /* Spacing between items */
  margin-top: var(--space-md);
}
```

#### Why This Pattern?

- `labs-container` handles:
  - Horizontal padding (via `padding-md` attribute)
  - Max-width and centering
  - Responsive behavior
  
- `.task-list` wrapper handles:
  - Vertical spacing between list items (via `gap`)
  - Flex layout for proper stacking
  - Separation of concerns (container ≠ list layout)

## Slot Usage Patterns

### labs-list-item Slots

Three named slots for composition:

```html
<labs-list-item>
  <labs-checkbox slot="control"></labs-checkbox>      <!-- Left: checkbox/radio -->
  <span slot="content">Main content</span>            <!-- Center: text content -->
  <labs-dropdown slot="actions"></labs-dropdown>      <!-- Right: actions menu -->
</labs-list-item>
```

### Programmatic Creation (Recommended)

For dynamic items, create programmatically before adding to DOM:

```javascript
const item = document.createElement('labs-list-item');

const checkbox = document.createElement('labs-checkbox');
checkbox.setAttribute('slot', 'control');

const content = document.createElement('span');
content.setAttribute('slot', 'content');
content.textContent = 'Item text';

const dropdown = document.createElement('labs-dropdown');
dropdown.setAttribute('slot', 'actions');

// Assemble before adding to DOM
item.appendChild(checkbox);
item.appendChild(content);
item.appendChild(dropdown);

// Now add to page
taskList.appendChild(item);
```

#### Why Programmatic?

- Ensures slots are ready when component initializes
- Avoids timing issues with shadow DOM projection
- Matches Storybook story patterns (reference implementation)

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

---

## Common Gotchas

### 1. Missing Component Dependencies

**Symptom**: Components render but appear empty/invisible

**Cause**: Missing `labs-icon.js` or `labs-button.js` imports

**Fix**: Import all required dependencies (see Component Dependencies above)

### 2. Same Background Color for Page and Components

**Symptom**: List items/cards blend into page background

**Cause**: Using `--color-surface` for both page and components

**Fix**: Use `--color-background` for page, `--color-surface` for components

### 3. Declarative HTML Slot Timing Issues

**Symptom**: Slotted content doesn't appear or FOUC (flash of unstyled content)

**Cause**: Browser parsing order can cause slot projection timing issues

**Fix**: Use programmatic creation pattern (see Programmatic Creation above)

### 4. Wrapper Component Anti-Pattern

**Symptom**: Created `labs-task-item` wrapper that doesn't work

**Cause**: Shadow DOM slot projection only works for direct children

**Fix**: Use `labs-list-item` directly with proper slot structure

## Testing Your Implementation

### Checklist

- [ ] All component imports included (check `labs-icon.js` and `labs-button.js`)
- [ ] Page uses `--color-background`, not `--color-surface`
- [ ] Container uses `labs-container` with `padding-md`
- [ ] List items wrapped in `.task-list` with `gap` for spacing
- [ ] Items created programmatically with slots assembled before DOM insertion
- [ ] Visual inspection: list items have visible background distinct from page
- [ ] Functional: checkboxes toggle, dropdowns open/close

### Quick Visual Check

If your list items look like this in DevTools:

```
<labs-list-item>
  #shadow-root (open)
    <style>...</style>
    <div class="row">  ← Should have visible background
      <slot name="control">
        <labs-checkbox> ← Should show icon inside
```

But you see no visual content, you're missing `labs-icon.js` or `labs-button.js`.

## Reference Files

- **Working example**: `docs/list-test/`
- **Production usage**: `docs/footer-test/`
- **Storybook reference**: `design-system/src/stories/labs-list-item-task.stories.js`
- **Component source**: `design-system/src/components/labs-list-item.js`

## Additional Resources

- See `docs/list-test/README.md` for the minimal reference implementation
- Check Storybook for live component demos: `npm run storybook`
- Review `design-system/ROADMAP.md` for planned component improvements
