# Labs App HTML Boilerplate Template

Use this template as the starting point for new Labs applications. It includes all standard components, design tokens, and best practices for theme/storage integration.

## Full Boilerplate

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="favicon.ico">
  <title>Labs: [App Name]</title>

  <!-- 
    EARLY THEME INJECTION
    Initialize theme/flavor from localStorage before rendering.
    Call this before any other scripts to prevent flash of unstyled content.
  -->
  <script type="module">
    import { ThemeManager } from '../design-system/utils/theme-manager.js';
    ThemeManager.init('[app-name]'); // e.g., 'note', 'pad', 'timer', 'tracker', 'today-list'
  </script>

  <!-- DESIGN SYSTEM TOKENS -->
  <link rel="stylesheet" href="../design-system/tokens/colors.css">
  <link rel="stylesheet" href="../design-system/tokens/spacing.css">
  <link rel="stylesheet" href="../design-system/tokens/typography.css">
  <link rel="stylesheet" href="../design-system/tokens/border-radius.css">
  <link rel="stylesheet" href="../design-system/tokens/shadows.css">
  <link rel="stylesheet" href="../design-system/styles/flavors.css">

  <!-- CORE DESIGN SYSTEM COMPONENTS (Always Include) -->
  <script type="module" src="../design-system/components/labs-container.js"></script>
  <script type="module" src="../design-system/components/labs-footer-with-settings.js"></script>
  <script type="module" src="../design-system/components/labs-template-header.wrapped.js"></script>
  <script type="module" src="../design-system/components/labs-icon.js"></script>
  <script type="module" src="../design-system/components/labs-button.js"></script>
  <script type="module" src="../design-system/components/labs-card.js"></script>
  <script type="module" src="../design-system/components/labs-overlay.js"></script>
  <script type="module" src="../design-system/components/labs-toast.js"></script>
  <script type="module" src="../design-system/components/labs-details.js"></script>

  <!-- OPTIONAL DESIGN SYSTEM COMPONENTS (Include As Needed) -->
  <!-- <script type="module" src="../design-system/components/labs-list-item.js"></script> -->
  <!-- <script type="module" src="../design-system/components/labs-checkbox.js"></script> -->
  <!-- <script type="module" src="../design-system/components/labs-dropdown.js"></script> -->
  <!-- <script type="module" src="../design-system/components/labs-metric-card.js"></script> -->
  <!-- <script type="module" src="../design-system/components/labs-input-card.js"></script> -->

  <!-- APP-SPECIFIC COMPONENTS -->
  <!-- Add your custom components here -->

  <!-- APP LOGIC -->
  <script type="module" src="./js/main.js"></script>

  <!-- APP-SPECIFIC STYLES -->
  <style>
    body {
      margin: 0;
      padding: 0;
      min-height: 100dvh;
      display: flex;
      flex-direction: column;
      font-family: var(--font-family-base);
      color: var(--color-on-background);
      background-color: var(--color-background);
    }

    main {
      flex: 1;
      overflow: auto;
    }
  </style>
</head>

<body>
  <labs-template-header>
    <h1 slot="title">[App Name]</h1>
  </labs-template-header>

  <labs-container>
    <main>
      <!-- Your app content here -->
    </main>
  </labs-container>

  <labs-footer-with-settings></labs-footer-with-settings>
</body>

</html>
```

---

## Key Features of This Template

### 1. Early Theme Injection (Top Priority)
```javascript
<script type="module">
  import { ThemeManager } from '../design-system/utils/theme-manager.js';
  ThemeManager.init('[app-name]');
</script>
```
- **Must come before any other scripts** to prevent flash of unstyled content
- Loads flavor/theme from localStorage (with defaults: `blueberry`, `light`)
- Sets CSS classes on `<html>` element
- Called once during initialization

### 2. Design System Tokens
All apps load the same token files:
```html
<link rel="stylesheet" href="../design-system/tokens/colors.css">
<!-- ... other token files ... -->
<link rel="stylesheet" href="../design-system/styles/flavors.css">
```

### 3. Core Components (Always Include)
These components are used by virtually all apps:
- `labs-container` — Layout wrapper
- `labs-footer-with-settings` — Footer with settings overlay, flavor/theme selectors
- `labs-template-header.wrapped` — App header
- `labs-icon` — Icon system
- `labs-button` — Buttons
- `labs-card` — Card containers
- `labs-overlay` — Modals
- `labs-toast` — Notifications
- `labs-details` — Collapsible sections

### 4. Optional Components (Include As Needed)
Comment out unnecessary components to reduce load time:
- `labs-list-item` — For list-based apps (Tracker, Today List, Note)
- `labs-checkbox` — If using checkboxes
- `labs-dropdown` — If using dropdowns
- `labs-metric-card` — For metric displays (Tracker)
- `labs-input-card` — For input forms (Note, Today List)

### 5. Storage Management
In your `main.js`, use the StorageAPI utility:

```javascript
import { StorageAPI } from '../design-system/utils/storage-api.js';

// Create storage instance (app name should match ThemeManager.init() call)
const storage = new StorageAPI('note'); // or 'pad', 'timer', etc.

// Get/set items
const items = storage.getJSON('items', []);
storage.setJSON('items', updatedItems);

// Listen for theme changes (handled by labs-settings-card)
document.addEventListener('flavor-changed', (e) => {
  console.log('New flavor:', e.detail.flavor);
});

document.addEventListener('theme-changed', (e) => {
  console.log('New theme:', e.detail.theme);
});
```

### 6. Settings Integration
The `labs-footer-with-settings` component automatically:
- Shows flavor selector dropdown
- Shows app selector dropdown
- Dispatches `flavor-changed` and `theme-changed` events
- Persists selections to localStorage (using `{app}-flavor` and `{app}-theme` keys)

Your app just needs to listen to these events and update accordingly.

---

## Storage Key Convention

All apps follow the `{app}-{feature}` naming convention:

| App | Flavor Key | Theme Key | Content Keys |
|-----|-----|-----|-----|
| Timer | — | — | (stateless) |
| Tracker | `tracker-flavor` | `tracker-theme` | `tracker-items` |
| Today List | `today-list-flavor` | `today-list-theme` | `today-list-items` |
| Note | `note-flavor` | `note-theme` | `note-YYYY-MM-DD`, `note-*-metadata` |
| Pad | `pad-flavor` | `pad-theme` | `pad-drawing` |

**Flavor values**: `vanilla`, `blueberry`, `strawberry`  
**Theme values**: `light`, `dark`

---

## Usage Example: New Note App

```javascript
// main.js
import { ThemeManager } from '../design-system/utils/theme-manager.js';
import { StorageAPI } from '../design-system/utils/storage-api.js';

const storage = new StorageAPI('note');

// ThemeManager was already called in <head>, so just listen for changes
document.addEventListener('flavor-changed', (e) => {
  console.log('Flavor changed to:', e.detail.flavor);
  // App logic: re-render if needed
});

document.addEventListener('theme-changed', (e) => {
  console.log('Theme changed to:', e.detail.theme);
  // App logic: re-render if needed
});

// Load note content
function loadNote() {
  const today = new Date().toISOString().split('T')[0];
  const content = storage.get(`content-${today}`, '');
  return content;
}

// Save note content
function saveNote(content) {
  const today = new Date().toISOString().split('T')[0];
  storage.set(`content-${today}`, content);
}

// Cleanup old notes
function cleanupOldNotes() {
  const allKeys = storage.keys();
  const today = new Date().toISOString().split('T')[0];
  allKeys.forEach(key => {
    if (key.startsWith('content-') && !key.includes(today)) {
      storage.remove(key);
    }
  });
}
```

---

## Testing the Setup

1. **Theme persistence**: Change flavor/theme in settings → refresh page → verify selection persists
2. **Storage isolation**: Open another Labs app in a different tab → verify each app has independent flavor/theme
3. **Console checks**:
   - `localStorage.getItem('app-flavor')` should return `vanilla`, `blueberry`, or `strawberry`
   - `localStorage.getItem('app-theme')` should return `light` or `dark`

---

## Migration Checklist

When adding this template to an existing app:

- [ ] Update `<head>` to include early theme injection script
- [ ] Add `ThemeManager.init('[app-name]')` call (ensure app name matches)
- [ ] Replace app-specific flavor/theme initialization with StorageAPI + event listeners
- [ ] Remove duplicate early theme injection code
- [ ] Test flavor/theme persistence
- [ ] Test storage API with your app's data
- [ ] Update app documentation to reference this template

---

## Files Reference

- **Theme Manager**: `design-system/src/utils/theme-manager.js` (or `docs/design-system/utils/theme-manager.js`)
- **Storage API**: `design-system/src/utils/storage-api.js` (or `docs/design-system/utils/storage-api.js`)
- **Component docs**: `design-system/README.md` and Storybook (`http://localhost:6006`)
