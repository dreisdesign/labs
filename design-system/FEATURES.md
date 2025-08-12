# Design System v2.0 Features & API

## 🎨 Theme System

### Global Theme Switching
- **Storybook Integration:** Built-in theme switcher in toolbar using `@storybook/addon-themes` (v9.1.2)
- **CSS Classes:** `theme-light` and `theme-dark` applied to document body
- **Storage:** Automatic localStorage persistence with system preference fallback
- **Inheritance:** CSS custom properties cascade properly through shadow DOM

### App Integration API
```javascript
import { setupThemeToggle, updateThemeToggleButton } from './src/tokens/button-configs.js';

// Complete theme setup (recommended)
const themeButton = createButtonElement('themeToggle');
setupThemeToggle(themeButton, (theme, isDark) => {
  console.log(`Theme changed to: ${theme}`);
});

// Manual theme button updates
updateThemeToggleButton(button, isDarkMode);
```

## 🔘 Button Configuration System

### Pre-Configured Buttons (15+ Ready-to-Use)

#### Common Actions
- `add` - Primary add button with checkmark
- `save` - Primary save button with checkmark
- `edit` - Secondary edit button
- `themeToggle` - Dynamic theme toggle (updates icon/label)

#### Destructive Actions  
- `delete` - Danger variant delete button
- `resetAllData` - Transparent destructive action

#### UI/Navigation
- `close` - Transparent close button
- `settings` - Settings with right icon
- `allApps` - All apps navigation
- `undo` - Undo action button

#### Container Variants (Overlay/Panel Use)
- `settingsContainer` - Full-width settings for overlays
- `themeToggleContainer` - Full-width theme toggle
- `resetAllDataContainer` - Full-width danger action

### API Functions
```javascript
import { 
  createButton, 
  createButtonElement, 
  createIconButton, 
  createIconButtonElement 
} from './src/tokens/button-configs.js';

// HTML string generation
const html = createButton('delete');
const iconHtml = createIconButton('settingsIcon');

// DOM element creation
const button = createButtonElement('add', { label: 'Add Item' });
const iconButton = createIconButtonElement('closeIcon');

// With overrides
const customSave = createButton('save', { 
  label: 'Save Changes',
  variant: 'success' 
});
```

## 🎯 Icon-Only Buttons

### Persistent UI Elements
- `settingsIcon` - Settings access icon
- `allAppsIcon` - App navigation icon
- `deleteIcon` - Contextual delete action
- `editIcon` - Contextual edit action
- `closeIcon` - Close/dismiss action
- `addCommentIcon` - Add comment action

### Features
- **Accessibility:** Built-in `aria-label` attributes
- **Consistent Sizing:** 44px minimum touch target
- **Hover States:** Proper feedback with theme colors
- **Icon Variant:** Special `icon` variant for circular buttons

## 🛠 Component Architecture

### labs-button
**Variants:** `primary`, `secondary`, `danger`, `transparent`, `container`, `container-danger`, `icon`

**Features:**
- Icon support (left, right, or icon-only)
- Checkmark animations
- Theme-aware colors
- Touch-friendly sizing
- Accessibility support

---
**Note:**
Labs Design System and Storybook are now on v9.1.2. If you see version mismatch or upgrade banners, see the troubleshooting section in `FEATURES-TODO.md`.

### labs-icon
**Features:**
- **High-Performance SVG Rendering:** Direct SVG manipulation with optimized attribute reactivity
- **Interactive Scaling:** Real-time size control (16px-64px) without performance lag
- **Dynamic Color System:** Instant color changes with proper CSS token integration
- **Responsive Grid Layout:** Content-aware multi-column display (180px → 120px responsive)
- **Smart Typography:** Uses proper font size tokens (14px) instead of "tiny" (9.6px) for readability
- **Modular Architecture:** Self-contained shadow DOM with CSS custom properties and fallbacks

**New v2.1.0 Capabilities:**
- **Attribute Observation:** Width, height, color attributes trigger immediate re-rendering
- **SVG Processing:** Direct fill attribute replacement for reliable color control
- **Text Wrapping:** Smart code snippet wrapping that breaks at natural word boundaries
- **Performance Optimized:** Removed debug logging for smooth interactions

### labs-settings-overlay
**Features:**
- Modal overlay functionality
- Container button integration
- Modular CSS custom properties
- Keyboard navigation support

## 📱 Storybook Integration

### Organization
- **Tokens:** Colors, Button Configs, Typography, Spacing
- **Icons:** Preview grid with all available icons
- **Components:** Individual component documentation
- **Patterns:** Real-world usage examples

### Theme Testing
- **Global Switcher:** Test all stories with toolbar theme switcher
- **Smart Colors:** Colors page adapts to theme changes
- **Consistent Behavior:** All components work in both themes

### Developer Experience
- **Live Reload:** Instant preview of changes
- **Accessibility Testing:** Built-in a11y addon
- **Visual Testing:** Consistent component behavior
- **Documentation:** Comprehensive usage examples

## 🚀 Migration & Integration

### From Individual App Buttons
1. **Replace manual button creation** with `createButton()` calls
2. **Use pre-configured variants** instead of manual attribute setting
3. **Implement theme system** with `setupThemeToggle()`
4. **Update icon buttons** to use `createIconButton()`

### Ready for Apps
- **Note App:** All button configurations match current usage
- **Timer App:** Theme toggle and action buttons ready
- **Tracker App:** Container variants for overlays ready
- **Consistent API:** Same functions work across all apps

## 📦 Build & Deployment

### Development
```bash
npm run storybook          # Start development server
npm run build-storybook    # Build static files
```

### Integration
```javascript
// Copy button-configs.js to your app
import { createButton, setupThemeToggle } from './path/to/button-configs.js';

// Import lab components
import './path/to/labs-button.js';
import './path/to/labs-icon.js';
```

---

## Version History

**v2.0.0** - Complete theme system overhaul, modular button configurations, Storybook v9.1.1
**v1.x** - Legacy system with manual button configuration and basic Storybook setup
