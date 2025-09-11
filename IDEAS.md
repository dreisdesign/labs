## Ideas and wishlist

- Ability to change the word "item" used across the Today List UI to a custom label chosen by the user (for example: "Task", "To-do", "Note").

  Implementation notes:
  - Expose a small translation map or config object that components reference for labels (e.g., `labels.item = 'Task'`).
  - Provide UI in Settings to change the label and persist in `localStorage` as `today-list-label-item`.
  - Components that render text like "Add first item", field placeholders, or item ARIA labels should read from this config at render-time and update when the setting changes.
  - Consider pluralization (item/items) and simple interpolation for strings like "Add first {item}".
