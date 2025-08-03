# <labs-settings-overlay>

A fully modular and self-contained custom element for displaying a settings modal overlay. Built with CSS custom properties for maximum configurability while maintaining complete encapsulation.

## Usage

1. **Import the element:**

```js
import '/labs/design-system/components/labs-settings-overlay.js';
```

2. **Add to your HTML:**

```html
<labs-settings-overlay></labs-settings-overlay>
```

This will render a settings button (with a gear icon). Clicking it opens a modal overlay with container-style buttons for settings actions.

## Features
- **Fully encapsulated**: All styles included in shadow DOM
- **Modular**: Works independently without external CSS dependencies
- **Configurable**: Customizable via CSS custom properties
- **Accessible**: Keyboard and click-to-close support
- **Responsive**: Adapts to different screen sizes

## Customization

Customize appearance using CSS custom properties:

```css
labs-settings-overlay {
  /* Overlay appearance */
  --overlay-background: rgba(0, 0, 0, 0.8);
  --overlay-blur: 30px;
  --overlay-z-index: 1500;
  
  /* Content styling */
  --surface-color: #f5f5f5;
  --on-surface-color: #333;
  --border-radius: 16px;
  --overlay-padding: 24px;
  --overlay-max-width: 500px;
  
  /* Typography */
  --title-size: 1.75rem;
  --font-family: 'SF Pro Display', system-ui;
  
  /* Buttons */
  --button-font-size: 1rem;
  --button-padding: 0.875rem;
  --button-radius: 8px;
  --button-gap: 0.75rem;
  --button-hover-bg: rgba(0, 123, 255, 0.1);
  
  /* Close button */
  --close-button-size: 2.5rem;
  --close-icon-size: 1.25rem;
  --close-button-hover: rgba(255, 0, 0, 0.1);
  
  /* Colors */
  --error-color: #dc3545;
  --on-error-color: white;
}
```

## Modularity Benefits

✅ **Self-contained**: No external CSS dependencies  
✅ **Portable**: Drop into any project and it works  
✅ **Configurable**: Extensive customization via CSS custom properties  
✅ **Encapsulated**: Shadow DOM prevents style conflicts  
✅ **Maintainable**: Single source of truth for component styles  

## Example
See `docs/demo/index.html` for a working example.

---

**Part of the Labs Design System - Built for Modularity**
