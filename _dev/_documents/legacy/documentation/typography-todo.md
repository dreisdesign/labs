
# Typography audit & consolidation — COMPLETE (as of v2.4.7, 2025-10-12)

Goal

- Audit all font-size / font-weight / line-height tokens and usages, consolidate into a minimal, consistent token set, then apply tokens systematically across the design system and docs.


## ✅ All steps complete

- All typography tokens have been inventoried, normalized, and consolidated into `tokens/typography.css`.
- All usages migrated to canonical tokens across components, stories, and docs.
- Storybook and docs are up to date; visual and lint checks passed.
- Deprecated tokens removed; migration notes and changelog updated.

# Typography audit & consolidation — ARCHIVED

All work for the typography token audit and migration is complete as of v2.4.7 (2025-10-12).

This file has been archived. See `_dev/_documents/legacy/documentation/TODO-archive-2025-10.md` for the full completion record.

Files / areas to scan (initial pass)

- `design-system/src/styles/tokens/` (any `*.css` token files)
- `design-system/src/stories/typography.stories.js` (reference table + samples)
- `design-system/src/components/` (web components that set inline font sizes or weights)
- `docs/` (docs pages that may import tokens or contain inline values)
- `design-system/stories/` and `src/stories/` for examples
- `scripts/` (any scripts that transform or copy token/css files)

Canonical token suggestions (example)

- font-size tokens: `--font-size-display`, `--font-size-h1`, `--font-size-h2`, `--font-size-h3`, `--font-size-large`, `--font-size-base`, `--font-size-sm` (alias: `--font-size-small`), `--font-size-xxs` (alias: `--font-size-tiny`), `--font-size-xs` (alias: `--font-size-body-xs`), `--font-size-caption`, `--font-size-label`, `--font-size-toast`, `--font-size-badge`, `--font-size-input`, `--font-size-footer`, `--font-size-overlay`, `--font-size-entry-text`, `--font-size-entry-meta`, `--font-size-button`, `--font-size-card-header`, `--font-size-card-desc`
- font-weight tokens: `--font-weight-heading`, `--font-weight-strong`, `--font-weight-regular`, `--font-weight-medium`
- line-height tokens: `--line-height-heading`, `--line-height-base`, `--line-height-tight`, `--line-height-relaxed`

Deliverables

- `design-system/src/styles/tokens/typography.css` (canonical token file)
- Updated `design-system/src/stories/typography.stories.js` table (already partially done) to reflect canonical names and values
- Migration notes: `typography-todo.md` (this file) and a short `docs/design-system/TYPING-MIGRATION.md` (if needed)

Acceptance criteria / quality gates

- Storybook renders without 404s for token files
- Typography table lists the canonical tokens and values
- No duplicate token names remain in `tokens/` files
- Visual smoke check of `docs/today-list` shows header, toast, and other elements using tokens correctly
- Lint/type check: no syntax errors introduced

Commands (quick try-it)

Run Storybook (dev):
```bash
npm run storybook
```

Build docs / storybook (to verify static output):
```bash
npm run build-storybook
# then run any repo-specific post-build sync script if required
```

Notes / assumptions

- Assume HMR is enabled for the design-system dev flow (Storybook). If a config change is made to token files, Storybook may need a restart.
- Prefer editing tokens in `design-system/src/styles/tokens/` (per project guidelines) and not `docs/` copies.
- Small, iterative migration is safer: replace high-priority components first (headers, toast, inputs), then continue.

Next immediate tasks (what I'll do if you want me to continue)

- [ ] Run a repository-wide grep for font-size/line-height/weight strings and summarize duplicates and inline styles
- [ ] Produce a proposed canonical `typography.css` with the tokens above (values can be tuned)
- [ ] Create small automated find/replace patches for the highest-impact components/stories and run Storybook to verify


---
Generated: 2025-09-09
