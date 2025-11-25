# Design System: List Item + Dropdown Outstanding Tasks

This TODO focuses on remaining work for the list item and dropdown components.

## Outstanding Tasks

### Phase 4 — Documentation & Integration
- [ ] Update Storybook docs and examples for both components
- [ ] Update `design-system/CHANGELOG.md` when Phase 4 work completes

### Slot Naming Standardization
- [ ] Decide canonical slot name (`actions` vs `meta`) and standardize across component + stories
  - **Recommended:** use `slot="actions"` as the canonical slot name for overflow/menu/action controls
- [ ] Update Storybook docs to document the slot-driven API and show recommended usage patterns

## Completed (Moved to CHANGELOG)

- ✅ Dropdown icon-only variant with `open` state (verified 2025-09-19)
- ✅ List item slot-driven API with multiple story patterns
- ✅ Footer migrated to shared `labs-footer` component
- ✅ `date-format.js` utility created with unit tests
- ✅ Mobile responsive layout for list items (completed 2025-09-20)
- ✅ **Phase 5 — Container System Extensions** (completed 2025-09-20)
  - `labs-container` component with `small/medium/large/fill` attributes
  - Storybook story at `1. Foundations/Container`
  - See changelog v2.1.7
- ✅ **Container Pattern Migration** (completed 2025-09-20)
  - All apps now use `labs-container` with consistent sizing attributes
  - See changelog v2.1.7

## Notes

- Components use `slot="actions"` for consistency
- Stories fully rebuild DOM on arg changes for deterministic Storybook Controls behavior

---

## Reference: Container Design System Architecture

**Problem Solved**: Consistent, reusable responsive container patterns across apps.

**Solution**:
- Container Tokens — CSS custom properties for responsive behavior
- `labs-container` component — Programmatic control with `small/medium/large/fill` attributes
- Storybook story at `1. Foundations/Container`

**Usage**:
```html
<labs-container medium>
  <labs-card metric><!-- metric card --></labs-card>
  <labs-list-item><!-- automatically mobile-responsive --></labs-list-item>
</labs-container>
```

---

## Reference: Original Request (Historical)

<details>
<summary>Original component reorganization request</summary>

**Dropdown** — Separated from list item into standalone icon-only component with `open` state variant.

**List Item** — Converted to slot-driven API with Controls for patterns (Button, Checkbox, Dropdown).

</details>