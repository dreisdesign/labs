# Pad App TODOs

## Current Status (last-reviewed: 2025-10-20)
- ✅ **V2.0 Complete** — Full redesign with design system integration
  - Header/Footer/Container structure (matches Note, Today List, Tracker apps)
  - Touch + Pointer event handling (iPad/Apple Pencil support)
  - Pressure-sensitive line width (2px-8px)
  - Smooth quadratic curve rendering
  - localStorage persistence of drawings
  - Theme/flavor support with persistent colors
  - Clear All button with confirmation dialog in footer

## Design System Integration Opportunities

### Phase 1 — Ready to Implement
- [ ] Brush size slider using `labs-input` (range input variant)
- [ ] Color palette selector using `labs-overlay` modal
- [ ] Toast notifications replacing confirm dialogs (use `labs-toast`)

### Phase 2 — Core Features
- [ ] Undo/Redo functionality with button states
- [ ] Keyboard shortcuts (Cmd+Z, Cmd+Shift+Z)

### Phase 3 — Polish & Export
- [ ] Save/Export drawings (PNG, SVG)
- [ ] Settings panel (persistence preferences, export formats)
- [ ] Drawing metadata (creation date, last edited, etc.)

## Known Issues & Fixes
- ✅ Theme/flavor persistence fixed (2025-10-20) — Now saves to `pad-flavor` and `pad-theme` localStorage keys
- See `DESIGN-SYSTEM-INTEGRATION.md` for full integration analysis and roadmap
