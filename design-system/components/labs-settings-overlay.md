# <labs-settings-overlay>

A reusable custom element for displaying a settings modal overlay, following the design system's container button and modal patterns. Easily drop into any app or page.

## Usage

1. **Import the element:**

```js
import '/labs/design-system/components/labs-settings-overlay.js';
```

2. **Add to your HTML:**

```html
<labs-settings-overlay></labs-settings-overlay>
```

This will render a settings button (with a gear icon) in the top-right corner. Clicking it opens a modal overlay with container-style buttons for settings actions.

## Features
- Fully encapsulated modal overlay and button logic
- Uses design system container and container-danger button variants
- Keyboard and click-to-close support
- Responsive and accessible
- Styles are included via the main design system CSS

## Customization
- To customize the overlay content, fork the element or request additional slots/props.
- Button actions can be hooked by listening for events (future enhancement).

## Example
See `docs/demo/index.html` for a working example.

---

**Part of the Design System.**
