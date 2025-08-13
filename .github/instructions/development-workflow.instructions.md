
### **AI Chat Task Continuation Policy**

- **After completing a task, always review the conversation for any recently discussed but incomplete tasks.**
- **If there are pending tasks, immediately return to them and provide the next command, step, or context needed to continue.**
- **Never end your turn without either fully completing all tasks or clearly providing the next actionable step for the user.**
		- **After completing a task (and only when you believe the task is fully complete), always ask the user to confirm if the task is complete, and provide actionable next-step options such as:**
		- **1. Yes, review and provide next steps**
		- **2. No, keep trying**
		- **3. No, review and consider more options**
		- **4. Return to previous work (list recent tasks that would make sense to return to)**
        - **5. Update documentation and commit changes
                    ** AI Chat: If user chooses "5", search for relevant documentation to update, then proceed.
			- *(Options can be dynamic and context-aware as appropriate)*
				- **If there are options, always provide them as explicit numbered choices for the user to pick.**
					- **At the end of the options, add:**
						- *Choose an option like "1" or "2" or say "c" to continue with something else.*
                           - **If the user picks "c" continue with the next logical step in the conversation.**

---
applyTo: '**'
---

# Labs Development Workflow & VS Code Instructions

**Current workflows and development guidelines for the Labs monorepo.**

## 🚀 **Quick Start Commands**



### **Menu-Driven Development (Recommended)**

**AI Chat: Always use the following command to ensure the menu item is pre-selected and the interactive "continue" button is shown in the terminal:**

```bash
echo "1" | npm run menu
```

This is the default and preferred workflow for all AI-driven development and testing. It guarantees:
- The menu runs with option 1 pre-selected (local development)
- The "continue" button is always provided in the VS Code terminal for the next step

> **Important:** If you do not see the "continue" button, make sure you are using the built-in VS Code terminal. This is the only supported and tested environment for interactive prompts.

**Never use `npm run menu` alone for AI-driven workflows.** That command requires manual selection and does not guarantee the "continue" button will appear.

### **Direct Commands (Available as fallback)**
```bash
# Start local Storybook development
npm run storybook

# Build for production deployment  
npm run build-storybook

# Deploy to GitHub Pages
npm run deploy
```

## 📁 **Project Structure**

```
/Users/danielreis/labs/          # Project root (start here)
├── design-system/               # Labs Design System v2.1.0
│   ├── src/                    # Components, tokens, stories
│   │   ├── components/         # Web component source files
│   │   ├── stories/            # Storybook story files (.stories.js)
│   │   ├── tokens/             # Design token configurations
│   │   ├── styles/             # CSS and style files
│   │   └── Tokens.*.stories.js # Token documentation stories (stay in src/)
│   ├── .storybook/             # Storybook configuration
│   └── storybook-static/       # Generated production build
├── docs/                       # GitHub Pages deployment
│   ├── design-system/          # Deployed Storybook
│   ├── timer/, tracker/, etc.  # Deployed apps
└── scripts/                    # Build and deployment automation
```

### **⚠️ Important File Organization Rules:**
- **Token stories** (`Tokens.*.stories.js`) must stay in `design-system/src/` (NOT `src/stories/`)
- **Component stories** go in `design-system/src/stories/`
- **Never move files from `src/`** without understanding the Storybook configuration
- **Story pattern**: `../src/**/*.stories.@(js|jsx|mjs|ts|tsx)` finds all story files

## 🔧 **Enhanced Build System**

### **Auto-Port-Kill Features**
- **Automatic port management** - No manual intervention for port 6006 conflicts
- **Pre-error checking** - Validates environment before building
- **Build size reporting** - Tracks bundle size and file count
- **Icon generation** - Automatically updates icon lists and imports

### **Production Deployment**
- **One-command deployment** - `npm run menu` → Option 2
- **GitHub Pages integration** - Automatic deployment from `docs/` folder
- **Multi-app deployment** - All apps and Storybook deployed together

## 📖 **Documentation System**

### **Primary Documentation**
- **[📖 Main README](../../README.md)** - Project overview and index
- **[📋 Global Changelog](../../CHANGELOG.md)** - Project milestones
- **[🎨 Design System README](../../design-system/README.md)** - Component docs
- **[📋 Design System Features](../../design-system/FEATURES.md)** - Component API and features

### **Documentation Principles**
- **One README per project** - Single source of truth
- **One CHANGELOG per project** - Clear release tracking
- **Hierarchical organization** - Main → Project → Component docs
- **Archive outdated content** - Keep only current, relevant docs


### **AI Assistant Guidelines**

### **Command Preferences**
- **Use menu system** - `npm run menu` for all Storybook operations (shows "continue" button and interactive prompts)
- **Direct menu commands** - Use `echo "1" | npm run menu` for local dev, `echo "2" | npm run menu` for deployment (no interactive prompt)
- **Avoid new terminals** - Use existing sessions when possible
- **Reference documentation** - Use main README and design system docs for project overview

### **Development Workflow**
1. **Start from project root** - `/Users/danielreis/labs/`
2. **Use menu commands** - Interactive interface for common tasks
3. **Commit frequently** - Document changes and progress
4. **Deploy automatically** - Menu option 2 for production updates

### **AI Assistant Response Policy**
- **Always proceed with clear solutions:**
	- When the user asks a question and you have a clear solution, proceed with the solution directly rather than asking for confirmation. Take action to resolve the user's request efficiently.

## 🎯 **Current Development Priorities**

### **High Priority (Storybook UI)**
- [ ] **Light theme default** - Switch from dark theme
- [ ] **Controls positioning** - Default to right side
- [ ] **Component visibility** - Fix icon-only buttons
- [ ] **Color token display** - Improve light/dark visibility

### **Technical Infrastructure**
- ✅ **Icon path resolution** - Fixed GitHub Pages 404s
- ✅ **Auto-port-kill scripts** - Seamless development workflow
- ✅ **Menu-driven commands** - Simplified developer interface
- ✅ **Documentation consolidation** - Clean hierarchical structure

## � **Common Issues & Solutions**

### **Component Loading & Timing Issues**
- **Problem**: `overlay.open is not a function` or undefined component methods
- **Solution**: Use `customElements.whenDefined()` + `setTimeout()` for proper component loading
- **Prevention**: Always wait for custom elements before connecting event listeners

### **Double Event Listeners**
- **Problem**: Multiple alerts or duplicate actions when clicking buttons
- **Solution**: Wait for component setup before adding app-specific listeners
- **Pattern**: Use `customElements.whenDefined()` in demo/app files

### **Cache & Build Issues**  
- **Problem**: Components not updating despite code changes
- **Solution**: Clear `storybook-static/` and `docs/design-system/` then rebuild
- **Command**: `rm -rf design-system/storybook-static docs/design-system && npm run menu`

### **Styling Conflicts**
- **Problem**: Hardcoded styles instead of design system tokens
- **Solution**: Replace inline styles with CSS custom properties
- **Reference**: Use tracker app pattern as reference for proper token usage

### **Git Large Change Sets**
- **Problem**: 600+ file changes during architectural shifts
- **Expectation**: Normal during design system migration and component rebuilds
- **Review**: Focus on component patterns rather than individual file counts

## �🛠️ **Troubleshooting**

### **Common Issues**
- **Port conflicts** - Auto-resolved by enhanced build scripts
- **Icon 404s** - Fixed with hostname-based path detection
- **Build failures** - Pre-validation prevents common issues

### **Development Environment**
- **VS Code workspace** - Open entire `labs/` folder
- **Terminal usage** - Built-in terminal opens in workspace root
- **Path consistency** - Use root-relative paths in all scripts

## 📋 **Technical Stack**

- **Web Components** - Native browser APIs, framework-agnostic
- **Lit** - Lightweight web component library
- **Storybook v9.1.1** - Component development and docs
- **Vite** - Fast build tool and development server
- **GitHub Pages** - Static site hosting and deployment

---

## 🎉 **Recent Achievements**

### **v2.1.0 Features**
- ✅ **Production stability** - Reliable GitHub Pages deployment
- ✅ **Enhanced workflows** - Menu-driven development experience
- ✅ **Documentation overhaul** - Clean, hierarchical organization
- ✅ **Build automation** - Pre-error checking and validation

---

*Keep development focused on menu-driven workflows and the current documentation system.*
