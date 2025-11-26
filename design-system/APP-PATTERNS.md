# Labs Apps — Patterns & Audit

**Last Updated**: November 19, 2025  
**Scope**: Code patterns across all 5 production apps (Timer, Tracker, Today List, Note, Pad)

---

## 📋 Audit Summary

### Apps Overview
| App | Flavor/Theme Persistence | Content Storage | ThemeManager | Status |
|-----|-----|-----|-----|-----|
| **Timer** | ✅ `timer-{flavor,theme}` | N/A | ✅ Active | 🟢 Ready |
| **Tracker** | ✅ `tracker-{flavor,theme}` | `tracker-items` (JSON) | ✅ Active | 🟢 Ready |
| **Today List** | ✅ `today-list-{flavor,theme}` | `today-list-items` (JSON) | ✅ Active | 🟢 Ready |
| **Note** | ✅ `note-{flavor,theme}` | `note-YYYY-MM-DD` (text), `note-*-lastEdited` (ISO) | ✅ Active | 🟢 Ready |
| **Pad** | ✅ `pad-{flavor,theme}` | `padDrawing` (JSON strokes) | ✅ Active | 🟢 Ready |

---

## 🎨 Theme & Flavor Persistence Pattern (v2: ThemeManager)

### ✅ IMPLEMENTED: Unified ThemeManager Architecture

All apps now use a centralized `ThemeManager` utility for consistent theme/flavor persistence.

#### How It Works

**1. Early Initialization** (in `<head>` before DOM renders)
```javascript
<script type="module">
  import { ThemeManager } from '../design-system/utils/theme-manager.js';
  ThemeManager.init('app-name'); // e.g., 'timer', 'tracker', 'pad'
</script>
```

**2. Automatic Theme/Flavor Restoration**
- `ThemeManager.init(appName)` reads stored preferences from localStorage
- Uses app-specific keys: `{appName}-flavor` and `{appName}-theme`
- Applies classes to document root before page render (no flash)
- Falls back to defaults: `vanilla` flavor, `light` theme

**3. Flavor/Theme Changes** (via settings UI)
- User changes flavor in `labs-flavor-selector` component
- `labs-settings-card.js` intercepts the `flavor-changed` event
- Calls `ThemeManager.setFlavor(newFlavor)` → persists to localStorage
- Theme toggle similarly calls `ThemeManager.setTheme(newTheme)`
- Both emit custom events that bubble for parent apps to listen to

#### Benefits
✅ **Centralized**: Single source of truth (ThemeManager utility)  
✅ **Consistent**: All apps use identical pattern  
✅ **Modular**: Components (`labs-settings-card`) automatically use ThemeManager  
✅ **App-Scoped**: Each app has isolated storage namespace  
✅ **No Flash**: Theme applied before DOM renders  
✅ **Backward Compatible**: Falls back to legacy `tracker-*` keys if needed  

#### Implementation Files

| File | Purpose | Location |
|------|---------|----------|
| `ThemeManager` | Core singleton for init, setFlavor, setTheme | `design-system/src/utils/theme-manager.js` |
| `labs-settings-card.js` | Intercepts flavor/theme changes, calls ThemeManager | `design-system/src/components/labs-settings-card.js` |
| `labs-flavor-selector.js` | Dropdown UI for flavor selection | `design-system/src/components/labs-flavor-selector.js` |
| App HTML (`index.html`) | Initializes ThemeManager for app-specific keys | `docs/{app}/index.html` (lines 11-16) |

#### Setup Checklist for New Apps

To add ThemeManager to a new app:

1. Add to `docs/{app}/index.html` after `<title>`:
   ```javascript
   <script type="module">
     import { ThemeManager } from '../design-system/utils/theme-manager.js';
     ThemeManager.init('{app-name}'); // e.g., 'timer', 'my-app'
   </script>
   ```

2. Include `labs-footer-with-settings` component (if your app has settings)
3. No other code needed! `labs-settings-card.js` automatically calls `ThemeManager.setFlavor()` and `ThemeManager.setTheme()`

---

## 🔑 Storage Key Naming Convention

### Current State: Mostly Consistent

**Flavor & Theme** (already following convention):
- `{app}-flavor` → `tracker-flavor`, `today-list-flavor`, `note-flavor`, `pad-flavor`
- `{app}-theme` → `tracker-theme`, `today-list-theme`, `note-theme`, `pad-theme`

**App-Specific Data**:
- Tracker: `tracker-items` (JSON list)
- Today List: `today-list-items` (JSON list)
- Note: `note-YYYY-MM-DD` (daily notes), `note-*-lastEdited`, `note-reset-enabled`, `note-expanded`
- Pad: `padDrawing` (JSON strokes)
- Timer: None (stateless)

**Issue**: 
- Note app uses inconsistent nested keys (flags within namespace)
- Pad app uses `padDrawing` instead of `pad-drawing`
- No namespace collision risk, but inconsistent naming style

**Recommendation**: Standardize to `{app}-{feature}` everywhere

---

## 📦 Component Load Patterns

### Components Consistently Loaded Across Apps

**Core Design System** (present in all apps):
- `labs-container` — wrapper/layout
- `labs-footer-with-settings` — unified footer with settings overlay
- `labs-template-header.wrapped` — app header
- `labs-icon` — icon system
- `labs-button` — buttons
- `labs-card` — card containers
- `labs-overlay` — modal overlays
- `labs-toast` — notifications
- `labs-details` — collapsible sections

**App-Specific** (varies):
- **Tracker**: `labs-metric-card`, `labs-list-item`, `labs-checkbox`, `labs-dropdown`, `labs-input-card`
- **Today List**: `labs-metric-card`, `labs-list-item`, `labs-checkbox`, `labs-dropdown`, `labs-input-card`, `labs-list-section`
- **Note**: `note-input-card` (custom component)
- **Pad**: None (only core)
- **Timer**: None (only core)

**Observation**:
- No standard "app loader" — each app manually includes 10–15 `<script type="module">` tags
- Duplication across apps
- Easy to miss a component when adding features

---

## 🏗️ HTML Structure Pattern

### Current State: Mostly Similar

All apps follow this pattern in `<head>`:
1. Early theme injection script
2. Design system tokens (colors, spacing, typography, etc.)
3. Flavor system CSS
4. Component script imports
5. App-specific scripts
6. Inline styles

**Example** (Today List):
```html
<!-- Early theme injection -->
<script>
  // Set flavor/theme classes...
</script>

<!-- Design system tokens -->
<link rel="stylesheet" href="../design-system/tokens/colors.css">
<link rel="stylesheet" href="../design-system/tokens/spacing.css">
<!-- ... more tokens ... -->
<link rel="stylesheet" href="../design-system/styles/flavors.css">

<!-- Components -->
<script type="module" src="../design-system/components/labs-container.js"></script>
<!-- ... 10+ more components ... -->

<!-- App-specific -->
<script type="module" src="./js/main.js"></script>
```

**Pattern** is sound, but could benefit from:
1. Template/documentation for consistency
2. Reduced manual duplication
3. Optional: shared component loader

---

## 📊 Storage Data Patterns

### Per-App Storage Schema

**Tracker** (`docs/tracker/js/main.js`):
```javascript
STORAGE_KEY = 'tracker-items'
// Schema: JSON array of metric items
[
  { name: 'Run', value: 5.2, unit: 'km', ... },
  { ... }
]

// Also stores:
localStorage.getItem('tracker-flavor')
localStorage.getItem('tracker-theme')
```

**Today List** (`docs/today-list/js/main.js`):
```javascript
STORAGE_KEY = 'today-list-items'
// Schema: JSON array of list items
[
  { text: 'Task 1', completed: false, timestamp: '2025-11-18T...', ... },
  { ... }
]

// Also stores:
localStorage.getItem('today-list-flavor')
localStorage.getItem('today-list-theme')
```

**Note** (`docs/note/js/main.js`):
```javascript
// Per-day storage:
localStorage.getItem('note-YYYY-MM-DD') // Text content

// Metadata:
localStorage.getItem('note-YYYY-MM-DD-lastEdited') // ISO timestamp
localStorage.getItem('note-reset-enabled') // Boolean flag
localStorage.getItem('note-expanded') // Boolean flag
localStorage.getItem('note-flavor')
localStorage.getItem('note-theme')
```

**Pad** (`docs/pad/js/main.js`):
```javascript
localStorage.getItem('padDrawing')
// Schema: JSON array of strokes
[
  { x0, y0, x1, y1, pressure, color, ... },
  { ... }
]

// Also stores:
localStorage.getItem('pad-flavor')
localStorage.getItem('pad-theme')
```

**Timer** (`docs/timer/timer.js`):
- No localStorage usage (stateless)

---

## 🎯 Consolidation Opportunities

### Priority 1: High Impact
1. **Early theme injection utility** — Move to shared file, import in all apps
2. **Storage key documentation** — Formalize `{app}-{feature}` convention
3. **HTML boilerplate template** — Document standard `<head>` structure

### Priority 2: Medium Impact
4. **Component loader helper** — Optional utility to reduce duplication
5. **Storage API wrapper** — Centralized getItem/setItem with consistent naming
6. **Settings card integration** — Ensure all apps hook into flavor/theme changes

### Priority 3: Nice to Have
7. **App initialization script** — Consolidate early setup logic
8. **Storybook documentation** — Document app integration patterns for new developers

---

## 📝 Next Steps

1. ✅ **Document current patterns** (this file)
2. **Create shared utilities**:
   - `design-system/src/utils/theme-manager.js` — Early theme injection + listeners
   - `design-system/src/utils/storage-api.js` — Consistent localStorage wrapper
3. **Update all apps** to use shared utilities
4. **Create app boilerplate template** with recommended structure
5. **Update DEVELOPMENT.md** with app integration guide
6. **Test**: Verify flavor/theme changes persist across all apps

---

## 📚 References

- **Files audited**:
  - `docs/timer/timer.js`
  - `docs/tracker/js/main.js`
  - `docs/today-list/js/main.js`
  - `docs/note/js/main.js`
  - `docs/pad/js/main.js`

- **Related documentation**:
  - `design-system/src/components/labs-settings-card.js` — Flavor/theme selector integration
  - `design-system/src/components/labs-flavor-selector.js` — Portal-based dropdown
  - `DEVELOPMENT.md` — App integration patterns (to be updated)
