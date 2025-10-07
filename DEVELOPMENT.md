# Labs Design System — Development & Storybook Conventions

## Storybook Story Types and Naming (List Item Example)

| Type                              | Directory      | List Item (File Name)                      | Storybook Directory      | Storybook Title      |
|------------------------------------|---------------|--------------------------------------------|-------------------------|----------------------|
| Canonical component                | components/   | labs-list-item.js                          | —                       | —                    |
| Canonical component story          | stories/      | labs-list-item.stories.js                  | Components              | List Item            |
| Wrapped canonical component story  | stories/      | labs-list-item-text-only.stories.js        | Components (Wrapped)    | List Item - Text Only|
| Wrapped canonical component story  | stories/      | labs-list-item-timestamp.stories.js        | Components (Wrapped)    | List Item - Timestamp|
| Wrapped canonical component story  | stories/      | labs-list-item-task.stories.js             | Components (Wrapped)    | List Item - Task     |

- The canonical story exposes all controls and variants for the base component.
- Each wrapped story demonstrates a real-world usage/variant with only relevant controls.

## Canonical Story Controls
- `variant`: Switches between `text-only`, `timestamp`, and `task` variants.
- `text`: Content for the list item.
- `timestamp`: ISO string for timestamp variant.
- `checked`: Only shown for the `task` variant; controls the checked state of the checkbox.

## Visual & Slot Parity
- The canonical story for `labs-list-item` now matches the structure and slot usage of the wrapped stories:
  - **Text Only:** `<span slot="content">`
  - **Timestamp:** `<labs-icon slot="control">`, `<div slot="content">`
  - **Task:** `<labs-checkbox slot="control">`, `<div slot="content">`, `<labs-dropdown slot="actions">`

## Storybook Testing Links
1. **List Item — Default (Canonical):** `http://localhost:6006/?path=/story/components-list-item--default`
   - **Controls:** `variant`, `text`, `timestamp`, `checked` (only for task)
   - **Visual:** Matches wrapped stories for each variant
2. **List Item — Text Only:** `http://localhost:6006/?path=/story/components-wrapped-list-item-text-only--default`
   - **Controls:** `text`
3. **List Item — Timestamp:** `http://localhost:6006/?path=/story/components-wrapped-list-item-timestamp--default`
   - **Controls:** `icon`
4. **List Item — Task:** `http://localhost:6006/?path=/story/components-wrapped-list-item-task--default`
   - **Controls:** `text`, `checked`

---

Refer to `.github/instructions/github-copilot-expert.instructions.md` for the full conventions and patterns.
