# App Migration Process - Design System Integration
**Created**: October 9, 2025  
**Based on**: Tracker app migration (feature/tracker-footer)  
**Reference**: `docs/tracker/MIGRATION-2025-10-08.md`

---

## Overview

This document outlines the proven process for migrating Labs apps to the complete modular design system, based on the successful Tracker app migration.

---

## Prerequisites

### Before You Start
1. **Reference Implementation**: Use `docs/footer-test/index.html` as the template
2. **Branch Strategy**: Create feature branch (e.g., `feature/app-name-footer`)
3. **Backup Original**: Always create `.backup` file before starting
4. **Design System Knowledge**: Familiarize yourself with available components

### Key Resources
- **Components**: `design-system/src/components/`
- **Utils**: `design-system/src/utils/` (theme.js, date-format.js)
- **Tokens**: `design-system/src/styles/tokens/`
- **Modularity Guide**: `.github/instructions/modularity.instructions.md`

---

## The Four-Phase Process

### Phase 1: Template Foundation (30 minutes)
**Goal**: Create clean HTML structure based on footer-test

#### Tasks:
1. Backup current app: `cp index.html index.html.backup`
2. Copy footer-test structure
3. Update page title and metadata
4. Preserve app-specific localStorage keys
5. Add app-specific components (keep minimal)
6. Test that template loads

#### Checkpoint:
- [ ] Template loads without errors
- [ ] Theme system works (light/dark/flavors)
- [ ] Footer visible and functional
- [ ] No console errors

#### Expected Outcome:
- HTML: <150 lines
- Zero CSS hacks
- Clean component imports
- Proper slot usage

---

### Phase 2: JavaScript Modernization (45 minutes)
**Goal**: Simplify JavaScript using design system patterns

#### Tasks:
1. Refactor data store (keep localStorage structure)
2. Simplify rendering with slots
3. Use design system utils (`formatHuman`, etc.)
4. Remove manual DOM manipulation complexity
5. Keep working event handlers
6. Add proper icons to list items

#### Anti-Patterns to Avoid:
- ❌ Manual DOM creation with custom styling
- ❌ Complex positioning logic
- ❌ Hardcoded colors/spacing
- ❌ Fighting shadow DOM boundaries

#### Best Practices:
- ✅ Use component slots for content
- ✅ Use semantic attributes (`variant="text-only"`)
- ✅ Leverage design system utilities
- ✅ Keep code under 100 lines

#### Expected Outcome:
- JavaScript: <100 lines
- Clean, readable code
- Proper component usage
- Zero custom CSS

---

### Phase 3: Data & Features (30 minutes)
**Goal**: Restore all original functionality

#### Core Features Checklist:
- [ ] Primary action button works (add/track/create)
- [ ] Data displays correctly
- [ ] Metric/counter updates
- [ ] List rendering with proper formatting
- [ ] Delete functionality with undo toast
- [ ] Reset-all functionality with undo toast
- [ ] Data persists across reloads
- [ ] Empty state displays properly

#### Common Issues & Solutions:

**Issue**: Metric showing wrong value
- **Check**: Component slot support (attributes vs. slots)
- **Fix**: Ensure component supports both patterns

**Issue**: Undo not working correctly
- **Check**: Toast event listener cleanup
- **Fix**: Track current handler, remove old before adding new

**Issue**: Footer buttons not working
- **Check**: Event listener registration
- **Fix**: Verify `labs-footer-with-settings` events

#### Expected Outcome:
- Full feature parity with original
- All interactions working
- Proper error handling
- Undo functionality for destructive actions

---

### Phase 4: Polish & Testing (60 minutes)
**Goal**: Visual consistency and quality assurance

#### Visual Testing:
- [ ] Compare with footer-test aesthetic
- [ ] Verify borders on cards and list items
- [ ] Check spacing consistency
- [ ] Test light mode
- [ ] Test dark mode
- [ ] Test all flavors (Blueberry, Strawberry, Vanilla)

#### Functional Testing:
- [ ] Theme switching works
- [ ] Theme persists across reloads
- [ ] Mobile responsiveness
- [ ] Keyboard navigation
- [ ] Toast positioning (not blocking footer)
- [ ] All undo operations work correctly

#### Edge Cases:
- [ ] Empty state
- [ ] Single item
- [ ] Many items (scrolling)
- [ ] Long text/timestamps
- [ ] Rapid interactions

#### Expected Outcome:
- Visually consistent with design system
- All functionality polished
- No console errors
- Production-ready code

---

## Common Bugs & Solutions

### Bug 1: Component Showing Placeholder Values
**Example**: Metric card always showing "42"

**Root Cause**: Component only supports attributes, not slots

**Solution**:
```javascript
// In component's render() method, support both:
${label ? `<div class="metric-label">${label}</div>` : '<slot name="label"></slot>'}
${value ? `<div class="metric-value">${value}</div>` : '<slot name="value"></slot>'}
```

### Bug 2: Add Button Not Working After Delete
**Example**: Footer becomes unresponsive after delete action

**Root Cause**: Toast positioned at bottom (24px) overlaps footer

**Solution**:
```css
labs-toast {
  --toast-bottom: 120px; /* Position above footer */
}
```

### Bug 3: Duplicate Events Firing
**Example**: Reset-all fires twice, causing incorrect counts

**Root Cause**: Component bug firing events multiple times

**Solution**:
```javascript
let _isProcessing = false;
footer.addEventListener('reset-all', () => {
  if (_isProcessing) return;
  _isProcessing = true;
  // ... handle event
  setTimeout(() => { _isProcessing = false; }, 100);
});
```

### Bug 4: Undo Restoring Wrong State
**Example**: Undo restores items from previous operations

**Root Cause**: Toast event listeners stacking without cleanup

**Solution**:
```javascript
let _currentUndoHandler = null;

function showUndoToast(message, onUndo) {
  const toast = getToast();
  
  // Remove old handler
  if (_currentUndoHandler) {
    toast.removeEventListener('action', _currentUndoHandler);
  }
  
  // Add new handler
  _currentUndoHandler = () => {
    onUndo();
    _currentUndoHandler = null;
  };
  
  toast.show(message, { actionText: 'Undo', duration: 5000 });
  toast.addEventListener('action', _currentUndoHandler, { once: true });
}
```

---

## Code Patterns

### Template Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Labs: App Name</title>
  
  <!-- Early Theme -->
  <script type="module" src="../_includes/early-theme.js"></script>
  
  <!-- Design System Tokens -->
  <link rel="stylesheet" href="../design-system/styles/tokens/colors.css">
  <link rel="stylesheet" href="../design-system/styles/flavors.css">
  
  <!-- Component Imports -->
  <script type="module" src="../design-system/components/labs-template-header.wrapped.js"></script>
  <script type="module" src="../design-system/components/labs-metric-card.js"></script>
  <script type="module" src="../design-system/components/labs-list-item.js"></script>
  <script type="module" src="../design-system/components/labs-dropdown.js"></script>
  <script type="module" src="../design-system/components/labs-icon.js"></script>
  <script type="module" src="../design-system/components/labs-footer-with-settings.js"></script>
  <script type="module" src="../design-system/components/labs-toast.js"></script>
  
  <!-- App Logic -->
  <script type="module" src="js/main.js"></script>
  
  <style>
    /* Toast positioning only */
    labs-toast {
      --toast-bottom: 120px;
    }
  </style>
</head>
<body>
  <labs-template-header-wrapped></labs-template-header-wrapped>
  
  <main class="content-wrapper">
    <labs-metric-card id="app-metric" variant="metric">
      <span slot="label">Metric Label</span>
      <span slot="value">0</span>
    </labs-metric-card>
    
    <div id="list-container"></div>
  </main>
  
  <labs-footer-with-settings></labs-footer-with-settings>
</body>
</html>
```

### JavaScript Structure
```javascript
// App Logic - Simplified with Design System
import { applyTheme } from '../../design-system/utils/theme.js';
import { formatHuman } from '../../design-system/utils/date-format.js';

const STORAGE_KEY = 'app-items';

// Data store
const store = {
    items: [],
    load() {
        try {
            this.items = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        } catch (e) {
            this.items = [];
        }
    },
    save() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
        } catch (e) {
            console.warn('Failed to save:', e);
        }
    }
};

// Toast singleton
let _toastInstance = null;
let _currentUndoHandler = null;

function getToast() {
    if (!_toastInstance) {
        _toastInstance = document.createElement('labs-toast');
        document.body.appendChild(_toastInstance);
    }
    return _toastInstance;
}

function showUndoToast(message, onUndo) {
    const toast = getToast();
    
    if (_currentUndoHandler) {
        toast.removeEventListener('action', _currentUndoHandler);
        _currentUndoHandler = null;
    }
    
    _currentUndoHandler = () => {
        onUndo();
        _currentUndoHandler = null;
    };
    
    toast.setAttribute('variant', 'destructive');
    toast.show(message, { actionText: 'Undo', duration: 5000 });
    toast.addEventListener('action', _currentUndoHandler, { once: true });
}

// Render everything
function renderAll() {
    // Update metric
    const metricCard = document.getElementById('app-metric');
    const valueSlot = metricCard?.querySelector('[slot="value"]');
    if (valueSlot) {
        valueSlot.textContent = store.items.length;
    }

    // Render list (implement based on app needs)
    const list = document.getElementById('list-container');
    if (!list) return;

    list.innerHTML = '';

    if (store.items.length === 0) {
        const empty = document.createElement('div');
        empty.style.cssText = 'color:var(--color-on-surface-variant);text-align:center;padding:var(--space-lg)';
        empty.textContent = 'No items yet';
        list.appendChild(empty);
        return;
    }

    store.items.forEach(item => {
        const li = document.createElement('labs-list-item');
        // ... implement item rendering
        list.appendChild(li);
    });
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    applyTheme({
        flavor: localStorage.getItem('app-flavor') || 'blueberry',
        theme: localStorage.getItem('app-theme') || 'light'
    });

    store.load();
    customElements.whenDefined('labs-metric-card').then(renderAll);

    const footer = document.querySelector('labs-footer-with-settings');
    if (footer) {
        footer.addEventListener('add', () => {
            store.items.unshift({ ts: Date.now() });
            store.save();
            renderAll();
        });
        
        footer.addEventListener('reset-all', () => {
            const backup = [...store.items];
            const count = backup.length;
            store.items = [];
            store.save();
            renderAll();
            
            const message = `${count} ${count === 1 ? 'item' : 'items'} deleted`;
            showUndoToast(message, () => {
                store.items = backup;
                store.save();
                renderAll();
            });
        });
    }
});
```

---

## Success Metrics

### Code Quality
- HTML: <150 lines
- JavaScript: <100 lines (exceptions for complex features up to ~160 lines)
- CSS: Only toast positioning, no hacks
- Zero `!important` overrides

### Functionality
- All original features working
- Undo functionality for destructive actions
- Data persistence working
- Empty states handled
- Error handling present

### Visual
- Matches footer-test aesthetic
- Proper borders and spacing
- Light/dark mode working
- All flavors working
- Mobile responsive

### Performance
- Fast initial load
- Smooth interactions
- No memory leaks
- Clean console (no errors)

---

## Timeline Template

- **Phase 1**: 30 minutes (Template Foundation)
- **Phase 2**: 45 minutes (JavaScript Modernization)
- **Phase 3**: 30 minutes (Data & Features)
- **Phase 4**: 60 minutes (Polish & Testing)

**Total**: ~2.5 hours for standard app

**Note**: Complex apps may take 3-4 hours

---

## Post-Migration Checklist

### Before Committing
- [ ] All features tested and working
- [ ] No console errors
- [ ] Code cleaned up (no debug logs)
- [ ] Documentation updated
- [ ] Migration doc created
- [ ] Visual comparison done

### Merge Criteria
- [ ] Code review completed
- [ ] All tests passing
- [ ] Migration doc reviewed
- [ ] No regressions in other apps
- [ ] Production ready

### Documentation
- [ ] Create `MIGRATION-YYYY-MM-DD.md` in app directory
- [ ] Document issues encountered and solutions
- [ ] Update main README if needed
- [ ] Add to todo-index.md completion list

---

## Next Apps Queue

Priority order for migration:

1. ✅ **Tracker** - Complete (Oct 9, 2025)
2. **Today-List** - Todo app with checkboxes
3. **Note** - Daily note with date picker
4. **Timer** - Focus timer with controls
5. **Pad** - Drawing canvas

---

## References

- **Tracker Migration**: `docs/tracker/MIGRATION-2025-10-08.md`
- **Footer Test**: `docs/footer-test/index.html`
- **Design System**: `design-system/src/components/`
- **Modularity Guide**: `.github/instructions/modularity.instructions.md`

---

**Document Status**: Living document - update after each successful migration
