# Labs Home — App Cards Grid

Goal: Update Labs home to use the design system App Card pattern and a two-column responsive grid.

Pattern: App Card — icon left, text (title, description, link) right.

Acceptance criteria
- App cards render in a responsive two-column grid on desktop and single column on narrow screens.
- App card uses a `labs-card` variant (or a documented pattern) with a left slot for the icon and right content area for title/description/link.
- Labs home uses `.container-responsive` and token-driven spacing.

Tasks
- [ ] Create `design-system` story demonstrating App Card pattern and add a `layout-app-cards` story.
- [ ] Add an `app-card` variant pattern to `labs-card` (minimal API, no extra variants beyond what's necessary).
- [ ] Update `docs/index.html` (Labs home) to use the App Card grid and `.container-responsive`.
- [ ] Visual smoke test and Storybook build.

Notes
- Prefer token-based approach (use `--app-container-max`) and keep the `app-card` variant minimal — do not add unrelated variants.
- Coordinate changes across `docs/index.html` and `docs/design-system/` through the normal build/deploy flow.
