# Active Tasks & Priorities

*Current work, priorities, and immediate next steps*

**Last Updated:** August 7, 2025

## 🎯 High Priority Tasks

### **Storybook UI Improvements**
From your `changes-8-5-2025.md` analysis:

- [ ] **Storybook Theme** - Switch default to light theme
- [ ] **Controls Layout** - Default controls to right side
- [ ] **Color Token Display** - Improve light/dark visibility in swatches
- [ ] **Button Styles** - Fix "Reset All Data" red styling
- [ ] **Icon Visibility** - Fix invisible "All Apps" and icon-only buttons

### **Production Issues**
- [x] **404 Errors** - ✅ RESOLVED: Removed duplicate story files, deployed clean build
- [ ] **Icon Story Testing** - Verify icons load properly in production
- [ ] **Theme Toggle Verification** - Test all UI patterns in production

### **Documentation System**
- [x] **Documentation Reorganization** - ✅ IN PROGRESS: New system being implemented
- [ ] **Archive Old Documentation** - Move completed docs to archive
- [ ] **Component Documentation** - Update component-specific docs

## 🔄 In Progress

### **Enhanced Build System** 
- [x] **Auto-port-kill scripts** - ✅ COMPLETED: No more manual port conflict resolution
- [x] **Pre-error checking** - ✅ COMPLETED: Build validation and cleanup
- [x] **Menu command integration** - ✅ COMPLETED: Use `npm run menu` for deployments

### **Theme System**
- [x] **Modular theme toggle** - ✅ COMPLETED: Function-based approach working
- [ ] **Storybook UI theme** - Configure manager.js properly
- [ ] **Default theme settings** - Ensure light theme is default

## 📝 Notes

### **AI Assistant Guidelines**
- Reference `#file:DOCUMENTATION_SYSTEM.md` for doc organization
- Use existing terminals when possible
- Prefer menu commands: `npm run menu` → option 2 for production deployment

### **Development Workflow**
1. Check this file for current priorities
2. Use enhanced build scripts (`npm run menu`)
3. Test changes in production
4. Update documentation system as needed

---

*This replaces the changelog-style tracking in DOCUMENTATION_INDEX.md*
