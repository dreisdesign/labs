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

  deleteSubtle: {
    label: "Delete",
    icon: "delete_forever",
    variant: "transparent",
    className: "button-delete-subtle",
    iconcolor: "var(--color-on-surface)",
  },

  resetAllData: {
    label: "Reset All Data",
    icon: "delete_forever",
    variant: "transparent",
    className: "button-delete-subtle",
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
    iconRight: "settings",
    variant: "transparent",
    iconcolor: "var(--color-on-surface)",
  },

  allApps: {
    label: "All Apps",
    icon: "settings",
    variant: "transparent",
    iconcolor: "var(--color-on-surface)",
  },

  // === Theme Actions ===
  toggleTheme: {
    label: "Toggle Theme",
    icon: "bedtime",
    variant: "transparent",
    iconcolor: "var(--color-on-surface)",
  },

  turnOnDarkMode: {
    label: "Turn on dark mode",
    icon: "bedtime",
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

  allAppsContainer: {
    label: "All Apps",
    icon: "settings",
    variant: "container",
    description: "Full-width container button for overlay/panel use",
    iconcolor: "var(--color-primary-75)",
  },

  turnOnDarkModeContainer: {
    label: "Turn on dark mode",
    icon: "bedtime",
    variant: "container",
    description: "Full-width container button for overlay/panel use",
    iconcolor: "var(--color-primary-75)",
  },

  resetAllDataContainer: {
    label: "Reset All Data",
    icon: "delete_forever",
    variant: "container-danger",
    description: "Full-width danger container button for overlay/panel use",
    iconcolor: "var(--color-error)",
  },

  // === Comment Actions ===
  addComment: {
    label: "Add Comment",
    icon: "add_comment",
    variant: "secondary",
    iconcolor: "var(--color-on-surface)",
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
