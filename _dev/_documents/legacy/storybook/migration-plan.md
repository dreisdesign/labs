# LEGACY/ARCHIVED: This document is superseded by docs/DEVELOPMENT.md. See that file for all current migration, features, and roadmap documentation.
# Storybook CSF3 Migration Plan

## Goal
Migrate all Labs Design System stories to CSF3 format for advanced controls, conditional UI, and future-proof Storybook compatibility.

---

## Migration Steps

1. **Baseline Preparation**
   - [x] Commit all current changes on main (no conditional controls, stable baseline)
   - [x] Create a new feature branch for migration

2. **CSF3 Syntax Update**
   - [ ] Ensure all stories use named exports and a default export object
   - [ ] Remove deprecated CSF2 patterns (e.g., `storiesOf`, `add`)
   - [ ] Use `args` and `argTypes` at the story or default export level
   - [ ] Add `tags: ['autodocs']` for autodocs support

3. **Conditional Controls**
   - [ ] Add conditional controls using the `if` property in `argTypes` (where supported)
   - [ ] Test for runtime errors and Storybook UI behavior
   - [ ] Document any limitations or workarounds (e.g., for icon controls)

4. **Storybook Testing**
   - [ ] Run Storybook locally and verify all stories render and controls work
   - [ ] Test saving, URL args, and docs tab
   - [ ] Validate that conditional controls show/hide as expected

5. **Documentation & Cleanup**
   - [ ] Update story docs/comments to explain new CSF3 features
   - [ ] Add migration notes to the repo (this file)
   - [ ] Remove any legacy/unused code or config

6. **Review & Merge**
   - [ ] Review changes and test with team
   - [ ] Merge feature branch to main after validation

---

## References
- [Storybook CSF3 Docs](https://storybook.js.org/docs/writing-stories/introduction#component-story-format)
- [Conditional Controls](https://storybook.js.org/docs/writing-stories/args#conditionally-showing-controls)
- [MDX vs CSF3](https://storybook.js.org/docs/writing-docs/mdx)

---

## Notes
- Use CSF3 for all interactive stories; use MDX only for custom docs pages.
- If conditional controls are not working as expected, check Storybook version and config.
- Keep migration incremental: migrate one story at a time, test, then proceed.

---

*Last updated: August 14, 2025*
