# Typography audit & consolidation — TODO

Goal

- Audit all font-size / font-weight / line-height tokens and usages, consolidate into a minimal, consistent token set, then apply tokens systematically across the design system and docs.

Quick checklist (high level)

```markdown
- [ ] Step 1: Inventory — find all typography tokens and inline font styles used across the repo
- [ ] Step 2: Gap analysis — compare inventory to the desired canonical token set and identify missing/duplicate tokens
- [ ] Step 3: Propose canonical token set — create `tokens/typography.css` (or update existing) with agreed names and values
- [ ] Step 4: Migrate usages — replace inline styles and ad-hoc sizes with token references across components, stories, and docs
- [ ] Step 5: Test & validate — run Storybook, docs build, and smoke-check pages for visual regressions and 404s
- [ ] Step 6: Cleanup & docs — remove deprecated tokens, update Storybook token table, and add migration notes to README/TODO
- [ ] Step 7: Final QA — automated lint/type checks, visual spot-checks (HMR/Storybook) and a small accessibility check for text scale/contrast
```

Files / areas to scan (initial pass)

- `design-system/src/styles/tokens/` (any `*.css` token files)
- `design-system/src/stories/typography.stories.js` (reference table + samples)
- `design-system/src/components/` (web components that set inline font sizes or weights)
- `docs/` (docs pages that may import tokens or contain inline values)
- `design-system/stories/` and `src/stories/` for examples
- `scripts/` (any scripts that transform or copy token/css files)

Canonical token suggestions (example)

- font-size tokens: `--font-size-display`, `--font-size-h1`, `--font-size-h2`, `--font-size-h3`, `--font-size-large`, `--font-size-base`, `--font-size-small`, `--font-size-tiny`, `--font-size-caption`, `--font-size-label`, `--font-size-toast`, `--font-size-badge`, `--font-size-input`, `--font-size-footer`, `--font-size-overlay`, `--font-size-entry-text`, `--font-size-entry-meta`, `--font-size-button`, `--font-size-card-header`, `--font-size-card-desc`, `--font-size-body-xs`
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
