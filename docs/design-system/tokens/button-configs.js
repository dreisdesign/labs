/**
 * Pre-configured button combinations for common use cases
 * These provide "grab and go" button configurations
 */

export const buttonConfigs = {
  // === Action Buttons ===
  add: {
    label: "Add",
    icon: "add",
    variant: "primary",
    checkmark: true,
    iconcolor: "var(--color-on-primary)",
  },

  save: {
    label: "Save",
    icon: "check",
    variant: "primary",
    checkmark: true,
    iconcolor: "var(--color-on-primary)",
  },

  edit: {
    label: "Edit",
    icon: "edit",
    variant: "secondary",
    iconcolor: "var(--color-on-surface)",
  },

  undo: {
    label: "Undo",
    icon: "undo",
    variant: "secondary",
    iconcolor: "var(--color-on-surface)",
  },

  // === Destructive Actions ===
  delete: {
    label: "Delete",
    icon: "delete_forever",
    variant: "danger",
    iconcolor: "var(--color-on-error)",
  },

  resetAllData: {
    label: "Reset All Data",
    icon: "delete_forever",
    variant: "danger",
    iconcolor: "var(--color-on-error)",
  },

  restore: {
    label: "Restore Tasks",
    icon: "restore",
    variant: "secondary",
    iconcolor: "var(--color-on-surface)",
  },

  // === Navigation/UI Actions ===
  close: {
    label: "Close",
    icon: "close",
    variant: "transparent",
    iconcolor: "var(--color-on-surface)",
  },

  settings: {
    label: "Settings",
    icon: "settings",
    variant: "transparent",
    iconcolor: "var(--color-on-surface)",
  },

  apps: {
    label: "All Apps",
    icon: "apps",
    variant: "transparent",
    iconcolor: "var(--color-on-surface)",
  },

  // === Dynamic Theme Toggle ===
  // This button toggles its icon and label based on current theme
  // Use setupThemeToggle() function for complete theme switching functionality
  // Example: setupThemeToggle(createButtonElement("themeToggle"))
  themeToggle: {
    label: "Turn on dark mode", // Default state - will be updated dynamically
    icon: "bedtime", // Default state - will be updated dynamically  
    variant: "transparent",
    iconcolor: "var(--color-on-surface)",
  },

  // === Container Variants (for overlays/panels) ===
  // Use these when you need full-width, rounded rectangle buttons that fill containers
  settingsContainer: {
    label: "Settings",
    iconRight: "settings",
    variant: "container",
    description: "Full-width container button for overlay/panel use",
    iconcolor: "var(--color-primary-75)",
  },

  appsContainer: {
    label: "All Apps",
    icon: "apps",
    variant: "container",
    description: "Full-width container button for overlay/panel use",
    iconcolor: "var(--color-primary-75)",
  },

  themeToggleContainer: {
    label: "Turn on dark mode", // Default state - will be updated dynamically
    icon: "bedtime", // Default state - will be updated dynamically
    variant: "container",
    description: "Full-width container button for overlay/panel use. Use setupThemeToggle() for complete functionality.",
    iconcolor: "var(--color-primary-75)",
  },

  resetAllDataContainer: {
    label: "Reset All Data",
    icon: "delete_forever",
    variant: "container-danger",
    description: "Full-width danger container button for overlay/panel use",
    iconcolor: "var(--color-error)",
  },

  restoreContainer: {
    label: "Restore Tasks",
    icon: "restore",
    variant: "container",
    description: "Full-width container button for overlay/panel use",
    iconcolor: "var(--color-primary-75)",
  },

  // === Comment Actions ===
  addComment: {
    label: "Add Comment",
    icon: "add_comment",
    variant: "secondary",
    iconcolor: "var(--color-on-surface)",
  },

  // === Utility Actions ===
  refresh: {
    label: "Refresh",
    icon: "refresh",
    variant: "transparent",
    iconcolor: "var(--color-on-surface)",
  },

  refreshApp: {
    label: "Refresh App",
    icon: "refresh",
    variant: "transparent",
    iconcolor: "var(--color-on-surface)",
  },

  // === Note-Specific Actions ===
  addNote: {
    label: "Add Note",
    icon: "add",
    variant: "primary",
    checkmark: true,
    iconcolor: "var(--color-on-primary)",
  },

  resetLabel: {
    label: "Reset Label",
    variant: "secondary",
    iconcolor: "var(--color-on-surface)",
  },
};

/**
 * Icon-only button configurations
 * These are persistent buttons that appear without labels - just icons
 */
export const iconOnlyButtons = {
  // === Persistent Footer Icons ===
  settingsIcon: {
    icon: "settings",
    variant: "icon", // New variant for truly icon-only
    iconcolor: "var(--color-on-surface)",
    "aria-label": "Settings", // Accessibility
  },

  appsIcon: {
    icon: "apps",
    variant: "icon",
    iconcolor: "var(--color-on-surface)",
    "aria-label": "All Apps",
  },

  // === Contextual Action Icons ===
  deleteIcon: {
    icon: "delete_forever",
    variant: "icon",
    iconcolor: "var(--color-error)",
    "aria-label": "Delete",
  },

  editIcon: {
    icon: "edit",
    variant: "icon",
    iconcolor: "var(--color-on-surface)",
    "aria-label": "Edit",
  },

  closeIcon: {
    icon: "close",
    variant: "icon",
    iconcolor: "var(--color-on-surface)",
    "aria-label": "Close",
  },

  addCommentIcon: {
    icon: "add_comment",
    variant: "icon",
    iconcolor: "var(--color-on-surface)",
    "aria-label": "Add Comment",
  },
};

/**
 * Helper function to create a button element with a pre-configured setup
 * @param {string} configName - Key from buttonConfigs
 * @param {object} overrides - Optional overrides for the configuration
 * @returns {string} HTML string for the button
 */
export function createButton(configName, overrides = {}) {
  const config = { ...buttonConfigs[configName], ...overrides };

  return `
    <labs-button
      label="${config.label || ""}"
      ${config.icon ? `icon="${config.icon}"` : ""}
      ${config.iconRight ? `icon-right="${config.iconRight}"` : ""}
      ${config.checkmark ? "checkmark" : ""}
      variant="${config.variant || "primary"}"
      ${config.iconcolor ? `iconcolor="${config.iconcolor}"` : ""}
    ></labs-button>
  `;
}

/**
 * Helper function to create an icon-only button
 * @param {string} configName - Key from iconOnlyButtons
 * @param {object} overrides - Optional overrides for the configuration
 * @returns {string} HTML string for the icon-only button
 */
export function createIconButton(configName, overrides = {}) {
  const config = { ...iconOnlyButtons[configName], ...overrides };

  return `
    <labs-button
      ${config.icon ? `icon="${config.icon}"` : ""}
      variant="${config.variant || "icon"}"
      ${config.iconcolor ? `iconcolor="${config.iconcolor}"` : ""}
      ${config["aria-label"] ? `aria-label="${config["aria-label"]}"` : ""}
    ></labs-button>
  `;
}

/**
 * Create a button element (DOM) with pre-configured setup
 * @param {string} configName - Key from buttonConfigs
 * @param {object} overrides - Optional overrides for the configuration
 * @returns {HTMLElement} Button element
 */
export function createButtonElement(configName, overrides = {}) {
  const config = { ...buttonConfigs[configName], ...overrides };
  const button = document.createElement("labs-button");

  if (config.label) button.setAttribute("label", config.label);
  if (config.icon) button.setAttribute("icon", config.icon);
  if (config.iconRight) button.setAttribute("icon-right", config.iconRight);
  if (config.checkmark) button.setAttribute("checkmark", "");
  if (config.variant) button.setAttribute("variant", config.variant);
  if (config.iconcolor) button.setAttribute("iconcolor", config.iconcolor);
  if (config.className) button.classList.add(config.className);

  return button;
}

/**
 * Create an icon-only button element (DOM) with pre-configured setup
 * @param {string} configName - Key from iconOnlyButtons
 * @param {object} overrides - Optional overrides for the configuration
 * @returns {HTMLElement} Button element
 */
export function createIconButtonElement(configName, overrides = {}) {
  const config = { ...iconOnlyButtons[configName], ...overrides };
  const button = document.createElement("labs-button");

  if (config.icon) button.setAttribute("icon", config.icon);
  if (config.variant) button.setAttribute("variant", config.variant);
  if (config.iconcolor) button.setAttribute("iconcolor", config.iconcolor);
  if (config["aria-label"]) button.setAttribute("aria-label", config["aria-label"]);
  if (config.className) button.classList.add(config.className);

  return button;
}

/**
 * Update a theme toggle button based on current theme state
 * This matches the behavior from your tracker app
 * @param {HTMLElement} button - The theme toggle button element
 * @param {boolean} isDarkMode - Current theme state
 */
export function updateThemeToggleButton(button, isDarkMode) {
  // Update icon based on current state
  button.setAttribute("icon", isDarkMode ? "bedtime_off" : "bedtime");
  // Update label based on current state  
  button.setAttribute("label", isDarkMode ? "Turn off dark mode" : "Turn on dark mode");
  // Keep consistent iconcolor with other container buttons
  button.setAttribute("iconcolor", "var(--color-primary-75)");
}

/**
 * Complete theme toggle function that applies theme and updates button
 * Use this in your apps for full theme switching functionality
 * @param {HTMLElement} button - The theme toggle button element
 * @param {function} onThemeChange - Optional callback when theme changes
 * @returns {function} Function to manually trigger theme toggle
 */
export function setupThemeToggle(button, onThemeChange) {
  // Get current theme from body classes, localStorage, or system preference
  const getCurrentTheme = () => {
    if (document.body.classList.contains('theme-dark') || document.body.classList.contains('dark-mode')) {
      return 'dark';
    }
    if (document.body.classList.contains('theme-light')) {
      return 'light';
    }

    // Fallback to localStorage
    try {
      const storedTheme = localStorage.getItem('theme') || localStorage.getItem('preferred-theme');
      if (storedTheme) {
        return storedTheme;
      }
    } catch (e) {
      console.warn('Cannot access localStorage:', e);
    }

    // Fallback to system preference (matches your existing theme toggle)
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  };

  // Apply theme to document and save preference (matches your existing logic)
  const applyTheme = (theme) => {
    const isDark = theme === 'dark';

    // Update body classes (supports both naming conventions)
    if (isDark) {
      document.body.classList.add('theme-dark', 'dark-mode');
      document.body.classList.remove('theme-light');
    } else {
      document.body.classList.add('theme-light');
      document.body.classList.remove('theme-dark', 'dark-mode');
    }

    // Save to localStorage (compatible with existing preference names)
    try {
      localStorage.setItem('theme', theme);
      localStorage.setItem('preferred-theme', theme); // For compatibility with existing theme toggle
    } catch (e) {
      console.warn('Cannot save theme preference:', e);
    }

    // Update button appearance if button provided
    if (button) {
      updateThemeToggleButton(button, isDark);
    }

    // Call optional callback
    if (onThemeChange) {
      onThemeChange(theme, isDark);
    }
  };

  // Initialize theme (matches your existing initialization logic)
  const currentTheme = getCurrentTheme();
  applyTheme(currentTheme);

  // Toggle function
  const toggleTheme = () => {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    return newTheme;
  };

  // Add click handler if button provided
  if (button) {
    button.addEventListener('click', toggleTheme);
  }

  // Return toggle function for manual use
  return toggleTheme;
}

// Make setupThemeToggle available globally for components
window.setupThemeToggle = setupThemeToggle;
