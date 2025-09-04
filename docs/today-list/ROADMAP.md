# Today List — Roadmap

Last reviewed: 2025-09-01

This document contains non-MVP items, component ideas, and longer-term features for future prioritization.

## Components to create
- `labs-input` — input wrapper with Enter-to-submit + trimmed value handling
- `labs-dropdown` / `labs-menu` — lightweight actions menu (start with `<details>` fallback)
- `labs-card` — generic card component with `welcome` variant and slots (header, description, actions)
- `labs-toast` — transient undo toast with action button
- `labs-timestamp` — small date/time formatting helper UI
- `labs-button` (if missing) — ensure a consistent button used across actions

## Low-effort implementation notes
- Actions menu: start with `<details><summary>` for MVP and implement `labs-dropdown` later if accessibility demands it.
- Use native `<input>` for MVP; create `labs-input` wrapper later for cross-app consistency.

## Non-MVP features
- Auto-archive at end of day (with optional user-configurable time)
- Cloud sync / export
- Multi-list support
- Virtualized large lists for performance

## Data & edge cases
- Timezone handling: store UTC, format for locale on render
- Restore flow: soft-delete and archived store; dedicated restore view in settings
- LocalStorage migration: version keys and safe fallbacks

## Estimates (non-MVP)
- `labs-*` components: 1–2 days each depending on accessibility polish
- Auto-archive + settings: 1–2 days
- Cloud sync: TBD (depends on backend)


When ready, we can move prioritized items from this Roadmap into the main `TODO.md` or into sprint-level tracking.
