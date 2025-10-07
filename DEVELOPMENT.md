
# Labs Design System — Development & Storybook Conventions

## Storybook Section Numbering & Navigation Order

0. Tokens
1. Foundations
2. Components
3. Components (Wrapped)
4. Patterns

### Example Navigation
```
0. Tokens/Colors
0. Tokens/Spacing
0. Tokens/Typography
1. Foundations/Theme System
1. Foundations/Icons
1. Foundations/Container
2. Components/Button
2. Components/Card - Welcome
2. Components/Card - Metric
2. Components/List Item
2. Components/Dropdown
2. Components/Checkbox
2. Components/Badge
2. Components/Overlay
2. Components/Input
2. Components/Toast
2. Components/Header
2. Components/Input Card
3. Components (Wrapped)/Card - Welcome
3. Components (Wrapped)/Card - Metric
3. Components (Wrapped)/List Item - Text Only
3. Components (Wrapped)/List Item - Timestamp
3. Components (Wrapped)/List Item - Task
3. Components (Wrapped)/Template - Footer
4. Patterns/Buttons
4. Patterns/Buttons/Appearance
4. Patterns/Buttons/Icon Only
4. Patterns/Dropdown
4. Patterns/Cards/Settings Card
4. Patterns/Toast
```

### Best Practices
- Always use section numbers in `title` fields for new stories.
- Update section numbers if you reorganize or add new categories.
- Keep this file in sync with `.github/instructions/github-copilot-expert.instructions.md`.

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
