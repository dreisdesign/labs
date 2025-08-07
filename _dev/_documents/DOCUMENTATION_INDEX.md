# Labs Documentation Index & Running Tasks

*Last Updated: August 7, 2025*

## 📋 Documentation Organization

### Active Documentation
| Document | Purpose | Status | Last Updated |
|----------|---------|--------|--------------|
| `README.md` (root) | Labs monorepo overview | ✅ Current | - |
| `design-system/README.md` | Design system usage guide | ✅ Current | v2.1.0 |
| `design-system/CHANGELOG.md` | Design system releases | ✅ Current | v2.1.0 |
| `design-system/FEATURES.md` | Feature documentation & API | ✅ Current | v2.0 |
| `THEME_IMPLEMENTATION.md` | Theme system progress | ✅ Current | Aug 7, 2025 |
| `changes-8-5-2025.md` | Storybook UI improvements | 🔄 In Progress | Aug 5, 2025 |
| `settings-overlay.md` | Settings component docs | ❓ Check status | - |
| `storybook-reorganization-plan.md` | Storybook structure | ❓ Check status | - |

### Component-Specific Documentation
| Document | Purpose | Status |
|----------|---------|--------|
| `design-system/components/labs-settings-overlay.md` | Settings overlay docs | ❓ Check status |

### App Documentation (Per-App Folders)
| Document | Purpose | Status |
|----------|---------|--------|
| `docs/README.md` | Apps documentation hub | ✅ Current |
| `docs/timer/README.md` | Timer app docs | ✅ Current |
| `docs/timer/CHANGELOG.md` | Timer releases | ❓ Check status |
| `docs/tracker/CHANGELOG.md` | Tracker releases | ❓ Check status |
| `docs/note/README.md` | Note app docs | ✅ Current |
| `docs/note/CHANGELOG.md` | Note releases | ❓ Check status |
| `docs/today-list/README.md` | Today List docs | ✅ Current |
| `docs/CHANGELOG.md` | Overall apps changelog | ❓ Check status |

### Development Documentation  
| Document | Purpose | Status |
|----------|---------|--------|
| `docs/timer/STYLING-MIGRATION-PLAN.md` | Timer styling updates | ❓ Check status |
| `docs/tracker/docs/version-1.2.0-plan.md` | Tracker v1.2.0 plan | ❓ Check status |
| `docs/tracker/docs/swipe-to-delete-feature.md` | Tracker swipe feature | ❓ Check status |
| `docs/tracker/docs/swipe-delete-implementation-plan.md` | Swipe implementation | ❓ Check status |

### System Documentation
| Document | Purpose | Status |
|----------|---------|--------|
| `.github/instructions/Modularity.instructions.md` | AI coding guidelines | ✅ Current |
| `.github/instructions/vs-code-paths-instructions.md.instructions.md` | VS Code setup | ❓ Check status |

### Completed Documentation (Archive-Ready)
| Document | Purpose | Status |
|----------|---------|--------|
| `completed/LABS-MIGRATION-SUMMARY.md` | Migration guide | ✅ Complete |
| `completed/design-system-storybook-plan.md` | Initial Storybook setup | ✅ Complete |
| `completed/DESIGN-SYSTEM-MIGRATION-GUIDE.md` | Design system migration | ✅ Complete |

## 🚀 Recently Completed (Ready to Commit)

### Theme Toggle Implementation (Aug 7, 2025)
- ✅ **Fixed theme toggle functionality** - Working in all UI patterns
- ✅ **Implemented modular architecture** - Function-based approach
- ✅ **Cleaned up unused code** - Removed standalone component
- ✅ **Fixed build errors** - Storybook builds successfully
- ✅ **Updated documentation** - Theme implementation guide current

**Files Changed:**
- `/design-system/src/components/labs-settings-overlay.js` - Updated to use function-based theme toggle
- `/design-system/src/stories/labs-theme-toggle.stories.js` - Removed (cleanup)
- `/design-system/src/components/labs-theme-toggle.js` - Removed (cleanup)

**Documentation Updated:**
- `THEME_IMPLEMENTATION.md` - Added modular theme toggle section
- `DOCUMENTATION_INDEX.md` - Created comprehensive documentation tracking

## 📝 Active Tasks (From changes-8-5-2025.md)

### High Priority
- [ ] **Storybook Theme** - Switch default to light theme
- [ ] **Controls Layout** - Default controls to right side
- [ ] **Color Token Display** - Improve light/dark visibility in swatches
- [ ] **Button Styles** - Fix "Reset All Data" red styling
- [ ] **Icon Visibility** - Fix invisible "All Apps" and icon-only buttons

### Medium Priority  
- [ ] **Sidebar Organization** - Modernize story organization
- [ ] **Token Showcases** - Improve Typography & Spacing displays
- [ ] **Icon Grid** - Increase default size, fix size controls
- [ ] **Button Stories** - Expand beyond just Primary
- [ ] **Demo Page** - Consider moving to top of sidebar

### Questions to Resolve
- [ ] Better ways to showcase color tokens?
- [ ] Better ways to showcase typography tokens?
- [ ] Better ways to showcase spacing tokens?
- [ ] Better ways to showcase icons?
- [ ] Better ways to showcase buttons?
- [ ] Better ways to showcase settings overlay?

## 🗂️ Documentation Consolidation Plan

### Keep Active
- `THEME_IMPLEMENTATION.md` - Ongoing theme work
- `changes-8-5-2025.md` - Current improvement list  
- This file (`DOCUMENTATION_INDEX.md`) - Master tracking

### Review & Consolidate
- `settings-overlay.md` - Check if still relevant
- `themes.md` - Merge into theme implementation?
- `storybook-reorganization-plan.md` - Check completion status
- Component-specific docs - Consolidate or move to component folders?
- App changelogs - Update with recent changes
- Development plans - Archive completed items

### Archive Candidates
- Any docs that are fully implemented
- Outdated planning documents  
- Superseded guides
- Completed migration plans
- Old version plans that are shipped

### Documentation Health Check Needed
- [ ] Review all `❓ Check status` files for current relevance
- [ ] Update app changelogs with recent changes
- [ ] Consolidate related documentation (themes, settings)
- [ ] Move component docs to appropriate folders
- [ ] Archive completed development plans

## 💡 Next Steps

1. **Commit Current Changes** - Theme toggle implementation
2. **Review Active Docs** - Consolidate or archive as needed
3. **Tackle High Priority Tasks** - From changes list
4. **Update This Index** - Keep as living document

---

*Use this file to track progress and avoid forgetting documentation updates!*
