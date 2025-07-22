# Labs Design System Migration Guide

## Overview
This guide consolidates migration steps for all Labs apps (Timer, Tracker, Note, Today List, Demo) to adopt the unified design system, focusing on scalable tokens, components, and best practices. It includes phased migration for styling, buttons, overlays, accessibility, and more.

# Migration Phases (for all apps)

This guide replaces legacy migration docs and is referenced in the Storybook plan and button system plan. Use this as the single source for migration steps, lessons learned, and checklist items.

---

## Current State Analysis (Example: Timer App)

### Example: Timer App (Current)
- ✅ Basic responsive layout with tracker-style app container
- ✅ Functional overlay system
- ✅ Circle-based timer UI (unique feature to preserve)
- ❌ No dark mode support
- ❌ No CSS custom properties/variables
- ❌ Basic typography (system fonts)
- ❌ Limited accessibility features
- ❌ Simple button styling
- ❌ No safe area support for PWA

### Example: Tracker/Note Apps (Target)
- ✅ Comprehensive CSS custom properties system
- ✅ Full dark mode with toggle functionality
- ✅ Professional typography (Source Sans 3 font)
- ✅ Consistent color palette and theming
- ✅ Advanced overlay system with accessibility
- ✅ Sophisticated button styling and hover states
- ✅ Focus management and ARIA support
- ✅ PWA safe area support for iOS
- ✅ Professional scrollbar styling
- ✅ Consistent spacing and layout systems

## Migration Phases (Applies to All Apps)

> **Note:** This migration plan applies to all Labs apps, but active replacement of components from Storybook will occur in later phases. Initial migration focuses on establishing the design system foundation and preparing for future integration.

### Phase 1: Foundation & Typography
**Goal**: Establish the design system foundation while preserving current functionality.

#### 1.1 CSS Variables & Design Tokens
- [ ] Add comprehensive CSS custom properties from tracker/note
- [ ] Add font size system variables
- [ ] Add spacing and layout variables
- [ ] Test that existing layout remains functional

#### 1.2 Typography System
- [ ] Add Source Sans 3 font loading
- [ ] Apply typography system to all text elements
- [ ] Ensure timer circle text maintains readability
- [ ] Update version number styling to match other apps

#### 1.3 Base Layout Refinements
- [ ] Add iOS PWA safe area support
- [ ] Refine spacing using design system variables
- [ ] Ensure consistent border radius and shadows

**Deliverable**: Timer app with new design foundation, same functionality

### Phase 2: Dark Mode System
**Goal**: Implement full dark mode support with toggle functionality.

#### 2.1 Dark Mode CSS Variables
- [ ] Add dark mode color overrides
- [ ] Implement CSS custom property switching
- [ ] Ensure timer circles work in both themes
- [ ] Add proper contrast ratios for accessibility

#### 2.2 Dark Mode Toggle
- [ ] Add theme toggle button to settings overlay
- [ ] Implement JavaScript theme switching logic
- [ ] Add localStorage persistence
- [ ] Add system preference detection
- [ ] Update HTML with early theme application (prevent flash)

#### 2.3 Component Dark Mode Support
- [ ] Update all UI components for dark mode
- [ ] Ensure timer circles maintain visibility
- [ ] Test overlay contrast in both modes
- [ ] Verify button states in both themes

**Deliverable**: Fully functional dark/light mode timer app

### Phase 3: Enhanced Components
**Goal**: Upgrade all UI components to match tracker/note sophistication.

#### 3.1 Button System Upgrade
- [ ] Implement tracker-style button classes
- [ ] Add hover and focus states
- [ ] Upgrade settings button styling
- [ ] Add proper button transitions and animations
- [ ] Ensure play/pause/reset buttons maintain timer-specific styling

#### 3.2 Overlay System Enhancement
- [ ] Upgrade overlay styling to match tracker/note
- [ ] Improve overlay accessibility (focus trapping, ARIA)
- [ ] Add smooth overlay transitions
- [ ] Enhance settings overlay layout

#### 3.3 Icon System
- [ ] Standardize icon styling approach
**Goal**: Ensure full accessibility compliance and visual polish.

#### 4.1 Focus Management
- [ ] Implement proper focus visible styles
- [ ] Add focus trapping for overlays
- [ ] Ensure keyboard navigation works throughout app
- [ ] Test screen reader compatibility

#### 4.2 Micro-interactions & Animations
- [ ] Add smooth transitions between states
- [ ] Implement hover animations for interactive elements
- [ ] Ensure timer circle animations remain smooth
- [ ] Add subtle loading states where appropriate

#### 4.3 Mobile & PWA Enhancements
- [ ] Test and refine mobile responsive behavior
- [ ] Ensure touch targets meet accessibility guidelines
- [ ] Verify PWA safe area handling on iOS
- [ ] Test landscape and portrait orientations

**Deliverable**: Fully polished, accessible timer app

### Phase 5: Advanced Features (Optional)
**Goal**: Add advanced features present in other apps if applicable.

#### 5.1 Enhanced Settings
- [ ] Consider adding refresh button (if useful for timer)
- [ ] Evaluate need for additional timer-specific settings
- [ ] Ensure settings overlay matches other apps exactly

#### 5.2 Performance Optimizations
- [ ] Optimize CSS for performance
- [ ] Ensure smooth timer animations
- [ ] Test memory usage during long timer sessions

#### 5.3 Code Quality
- [ ] Clean up CSS organization
- [ ] Add comprehensive CSS comments
- [ ] Ensure maintainable code structure

**Deliverable**: Feature-complete timer app with advanced capabilities

## Implementation Strategy (Generalized)

### File Structure (Example: Timer)
```
timer/
├── styles.css (current - to be updated)
├── styles-migration.css (temporary backup)
└── fonts/ (to be added)
    └── SourceSans3VF.woff2
```

### Testing Approach (Recommended for All Apps)
1. **After each phase**: Test core timer functionality
2. **Cross-browser testing**: Chrome, Safari, Firefox
3. **Mobile testing**: iOS Safari, Android Chrome
4. **Accessibility testing**: Screen readers, keyboard navigation
5. **Dark mode testing**: Toggle functionality, visual consistency

### Risk Mitigation (Best Practices)
- **Backup current styles** before each phase
- **Incremental commits** after each sub-task
- **Preserve timer circle functionality** as highest priority
- **Test on multiple devices** throughout process

### Quality Checklist (Universal)
- [ ] Timer circles work perfectly in both themes
- [ ] All interactive elements have proper focus states
- [ ] PWA functionality preserved
- [ ] Performance remains smooth
- [ ] Visual consistency with tracker/note apps
- [ ] All accessibility standards met

## Timeline Estimate (Example)
- **Total estimated time**: 13-18 hours
- **Recommended approach**: 2-3 phases per week
- **Target completion**: 2-3 weeks

## Success Criteria (Universal)
1. ✅ Timer functionality fully preserved
2. ✅ Visual design matches tracker/note sophistication
3. ✅ Dark mode toggle works perfectly
4. ✅ Full accessibility compliance
5. ✅ PWA functionality maintained
6. ✅ Performance equivalent or better
7. ✅ Code maintainability improved

## Next Steps (For All Labs Apps)
1. Review and approve this plan
2. Create backup of current styles
3. Begin Phase 1: Foundation & Typography
4. Commit progress after each sub-task
5. Test thoroughly before proceeding to next phase


## Reference: Sample File Tree for Design System & Storybook

```
design-system/
├── package.json
├── README.md
├── .storybook/
│   ├── main.js
│   ├── preview.js
│   └── manager.js
├── src/
│   ├── components/
│   │   └── Button/
│   │       ├── Button.jsx
│   │       ├── Button.css
│   │       └── index.js
│   ├── tokens/
│   │   ├── colors.css
│   │   ├── spacing.css
│   │   └── typography.css
│   └── stories/
│       ├── Button.stories.js
│       ├── ColorPalette.stories.js
│       ├── Typography.stories.js
│       └── Playground.stories.js
├── docs/
│   ├── button-system-plan.md
│   └── ...
├── storybook-static/ (build output)
└── ...
```

**Best Practices:**
- Keep all Storybook config in `.storybook/`
- Place all components in `src/components/`
- Use `src/tokens/` for design tokens (colors, spacing, typography)
- Organize stories in `src/stories/`
- Use `docs/` for design system documentation and migration plans
- Build output goes to `storybook-static/`

Reference this structure for all migration, Storybook, and design system work.

---

## Demo Page as Design System QA Playground

**Recommendation:**
Use the demo page (`demo/index.html`) as the official playground for all design system components and tokens. This enables rapid iteration, visual QA, and accessibility testing before integrating components into any app.

**Workflow:**
- Expand the demo to showcase all button variants, typography, color palette, spacing, overlays, and interactive states.
- Add sections for token previews (colors, spacing, typography) and accessibility checks.
- Use the demo page for real-world QA and feedback.
- Integrate components into apps only after they are fully tested and approved in the demo.

Document all major demo page changes and QA results in this migration guide for future reference.
---
**Reference this guide for all future design system migrations. See also:**
- `design-system/docs/button-system-plan.md` (Unified Button API & migration plan)
