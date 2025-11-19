# Labs Apps — Patterns & Audit

**Last Updated**: November 18, 2025  
**Scope**: Code patterns across all 5 production apps (Timer, Tracker, Today List, Note, Pad)

---

## 📋 Audit Summary

### Apps Overview
| App | Flavor/Theme Storage | Content Storage | Early Theme Injection | Components Loaded |
|-----|-----|-----|-----|-----|
| **Timer** | ❌ None | N/A | ✅ Yes | ~10 design system + core |
| **Tracker** | ✅ `tracker-{flavor,theme}` | `tracker-items` (JSON) | ✅ Yes | ~10 design system |
| **Today List** | ✅ `today-list-{flavor,theme}` | `today-list-items` (JSON) | ✅ Yes | ~14 design system |
| **Note** | ✅ `note-{flavor,theme}` | `note-YYYY-MM-DD` (text), `note-*-lastEdited` (ISO), `note-reset-enabled`, `note-expanded` | ✅ Yes | ~7 design system |
| **Pad** | ✅ `pad-{flavor,theme}` | `padDrawing` (JSON strokes) | ✅ Yes | ~8 design system |

---

## 🎨 Flavor & Theme Persistence Pattern

### Current State: Duplicated in Every App

Each app has identical early theme injection code in `<head>`:

```javascript
<script>
  (function () {
    var root = document.documentElement;
    var flavor = localStorage.getItem('{APP}-flavor') || 'blueberry';
    var theme = localStorage.getItem('{APP}-theme') || 'light';
    root.classList.remove('flavor-blueberry', 'flavor-strawberry', 'flavor-vanilla');
    root.classList.remove('theme-light', 'theme-dark');
    root.classList.add('flavor-' + flavor);
    root.classList.add('theme-' + theme);
    root.setAttribute('data-color-scheme', theme);
  })();
</script>
```

**Problem**: 
- Duplicated in all 5 apps (`docs/{app}/index.html`)
- Inconsistent app identifiers: `timer` (none), `tracker`, `today-list`, `note`, `pad`
- Changes must be made in 5 places
- If design system changes theme mechanism, all 5 apps must be updated

**Solution**: Move to shared utility or standardized template

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
