# List Item Test Page

A minimal test page demonstrating the correct usage of `labs-list-item` with all required component dependencies.

## Purpose

This page serves as a reference implementation showing:
- Proper import order for `labs-list-item` and its dependencies
- Programmatic creation of list items (matching Storybook pattern)
- Correct slot usage (`control`, `content`, `actions`)
- Event handling for list item interactions

## Key Learning

The `labs-list-item` component requires these imports:
- `labs-list-item.js` (the component itself)
- `labs-checkbox.js` (for the control slot)
- `labs-dropdown.js` (for the actions slot)
- `labs-icon.js` (used internally by checkbox and dropdown)
- `labs-button.js` (used internally by dropdown)

Missing `labs-icon.js` or `labs-button.js` will cause the components to render with no visible content.

## Usage

View at: http://localhost:8000/list-test/

## Related Files

- Source: `design-system/src/components/labs-list-item.js`
- Storybook: `design-system/src/stories/labs-list-item-task.stories.js`
- Production: `docs/footer-test/index.html`
