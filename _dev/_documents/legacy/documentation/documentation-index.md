# [ARCHIVED] This document is no longer maintained. See [../DEVELOPMENT.md](../DEVELOPMENT.md) for current documentation.
# ⚠️ This File Has Been Superseded

**This documentation index has been replaced by a consolidated system.**

## 🏠 **New Documentation Structure**

The Labs project now uses a clean, hierarchical documentation system:

### **📖 Main Documentation**
- **[🏠 Labs README (Main Index)](../../README.md)** - Primary project documentation and overview
- **[📋 Global Changelog](../../CHANGELOG.md)** - Project-wide updates and releases
- **[🎨 Design System README](../../design-system/README.md)** - Component library documentation
- **[📋 Design System Changelog](../../design-system/CHANGELOG.md)** - Design system releases

### **📱 Application Documentation**
- **[⏰ Timer README](../../docs/timer/README.md)** - Focus timer features and usage
- **[📊 Tracker README](../../docs/tracker/README.md)** - Habit tracking documentation  
- **[📝 Note README](../../docs/note/README.md)** - Daily note-taking features
- **[✅ Today List README](../../docs/today-list/README.md)** - Task management features

### **🔧 Development Documentation**
- **[📋 Active Tasks](ACTIVE_TASKS.md)** - Current work and priorities
- **[🏠 Documentation Hub](DOCUMENTATION_HUB.md)** - Central navigation
- **[🔄 Development Changelog](CHANGELOG.md)** - Development-specific changes
- **[📋 Documentation System](DOCUMENTATION_SYSTEM.md)** - Organization overview

## 🎯 **Consolidation Complete**

### ✅ **Completed Actions**
- ✅ **Main README Updated** - Now serves as primary project index
- ✅ **Global Changelog Created** - Project-wide updates and milestones
- ✅ **Clear Hierarchy Established** - One README + CHANGELOG per project
- ✅ **Development Docs Organized** - Active vs. reference vs. archive separation
- ✅ **Outdated Docs Archived** - Superseded planning documents moved to archive

### 📋 **Documentation Principles**
1. **One README per project** - Single source of truth for each app/system
2. **One CHANGELOG per project** - Clear release and update tracking  
3. **Hierarchical Organization** - Main → Project → Component documentation
4. **Archive Outdated Content** - Keep only current, relevant documentation

## 🤖 **AI Assistant Guidelines**

- **Reference `../../README.md`** as the primary project index
- **Use `#file:ACTIVE_TASKS.md`** for current development priorities
- **Avoid creating new terminals** unless necessary for isolation
- **Use menu commands** - `npm run menu` for all Storybook operations

---

*This file is preserved for reference but the new consolidated system should be used instead.*

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

## 🎉 Recently Completed & Committed

### ✅ Auto-Port-Kill Scripts (Aug 7, 2025) - COMMITTED (aa14e72)
- ✅ **Enhanced build scripts** - Auto-kill port conflicts, pre-error checking
- ✅ **Seamless development** - No manual intervention for port 6006 conflicts  
- ✅ **Error prevention** - Pre-checks for common build issues
- ✅ **Status reporting** - Build size and file count reporting
- ✅ **Fallback commands** - Original commands preserved as *-original

### ✅ 404 Error Resolution (Aug 7, 2025) - COMMITTED (8e8fccb)
- ✅ **Removed duplicate stories** - Cleaned conflicting empty story files
- ✅ **Updated production build** - Fresh deployment ready
- ✅ **Clean story organization** - All references point to correct locations

### ✅ Theme Toggle Implementation (Aug 7, 2025) - COMMITTED (5385257)
- ✅ **Fixed theme toggle functionality** - Working in all UI patterns
- ✅ **Implemented modular architecture** - Function-based approach
- ✅ **Cleaned up unused code** - Removed standalone component
- ✅ **Fixed build errors** - Storybook builds successfully
- ✅ **Updated documentation** - Theme implementation guide current

**Files Committed:**
- `/design-system/src/components/labs-settings-overlay.js` - Updated to use function-based theme toggle
- `/design-system/src/tokens/button-configs.js` - Enhanced theme toggle configuration
- `_dev/_documents/THEME_IMPLEMENTATION.md` - Added modular theme toggle section
- `_dev/_documents/DOCUMENTATION_INDEX.md` - Created comprehensive documentation tracking

**Commit Details:**
- Hash: `5385257`
- Message: "feat: implement modular theme toggle and documentation system"
- Stats: 4 files, 367 insertions, 3 deletions

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

## 💡 Next Steps & Guidelines

### 🤖 **AI Assistant Guidelines (Updated Aug 7, 2025)**
- **Reference #file:DOCUMENTATION_INDEX.md** as source of truth for all documentation status
- **Avoid creating new terminals** unless absolutely necessary for isolation
- **Use existing terminal sessions** for command execution when possible
- **Use menu commands for Storybook** - `npm run menu` then select appropriate option
  - Option 1: Build, preview, and serve Storybook (local dev)
  - Option 2: Build and deploy Storybook to production (GitHub Pages)
  - Direct commands available as fallback: `npm run build-storybook`, `npm run storybook`

### 🎯 **Immediate Priorities**
1. ✅ **Test Live Site** - Verify 404 fixes are deployed
2. **Enhanced Build Scripts** - Pre-error checking and validation
3. **Tackle High Priority Tasks** - Storybook UI improvements from changes list
4. **Commit Script Improvements** - Enhanced error checking and reporting

### 📋 **Development Workflow**
1. ✅ **Commit Current Changes** - Auto-port-kill scripts COMPLETED
2. **Push Enhanced Scripts** - Deploy improved build process  
3. **Test Production Site** - Verify 404 resolution
4. **Continue High Priority** - UI improvements and component fixes
5. **Update This Index** - Keep as living document per new guidelines

---

*Use this file to track progress and avoid forgetting documentation updates!*
