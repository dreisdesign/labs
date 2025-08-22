# Design System TODO

_Last updated: 2025-08-21_

## Outstanding Tasks

- [ ] **Implement token-based text color logic for palette and theme backgrounds**
  - Update JS logic to resolve and use tokens for text color, not hardcoded hex.
  - For palette tokens:
    - If the background is dark (e.g., 800), use a light text token (e.g., 100) or `--color-on-surface-alt`.
    - If the background is light (e.g., 100), use a dark text token (e.g., 800) or `--color-on-surface`.
  - For theme backgrounds:
    - If the theme background is light (e.g., Blueberry 200), use the theme’s dark text (e.g., On Surface / 800).
    - If the theme background is dark (e.g., 800), use the theme’s light text (e.g., 100).
  - Use:
    - `color: var(--color-on-surface);` for light backgrounds
    - `color: var(--color-on-surface-alt);` for dark backgrounds
  - This will make the system fully token-driven and ready for any theme or flavor.

---

- [ ] Add theme switcher controls to Colors story (light/dark toggle in toolbar)
- [ ] Add light/dark comparison table to Colors story UI
