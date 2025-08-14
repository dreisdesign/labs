// === Helper Functions ===
export function createButton(configName, overrides = {}) {
  const config = { ...buttonConfigs[configName], ...overrides };
  return `
    <labs-button
      label="${config.label || ''}"
      ${config.icon ? `icon="${config.icon}"` : ''}
      ${config.iconRight ? `icon-right="${config.iconRight}"` : ''}
      ${config.checkmark ? 'checkmark' : ''}
      variant="${config.variant || 'primary'}"
    ></labs-button>
  `;
}

export function createButtonElement(configName, overrides = {}) {
  const config = { ...buttonConfigs[configName], ...overrides };
  const button = document.createElement('labs-button');
  if (config.label) button.setAttribute('label', config.label);
  if (config.icon) button.setAttribute('icon', config.icon);
  if (config.iconRight) button.setAttribute('icon-right', config.iconRight);
  if (config.checkmark) button.setAttribute('checkmark', '');
  if (config.variant) button.setAttribute('variant', config.variant);
  if (config.className) button.classList.add(config.className);
  return button;
}

export function createIconButton(configName, overrides = {}) {
  const config = { ...iconOnlyButtons[configName], ...overrides };
  return `
    <labs-button
      ${config.icon ? `icon="${config.icon}"` : ''}
      variant="${config.variant || 'icon'}"
      ${config['aria-label'] ? `aria-label="${config['aria-label']}"` : ''}
    ></labs-button>
  `;
}

export function createIconButtonElement(configName, overrides = {}) {
  const config = { ...iconOnlyButtons[configName], ...overrides };
  const button = document.createElement('labs-button');
  if (config.icon) button.setAttribute('icon', config.icon);
  if (config.variant) button.setAttribute('variant', config.variant);
  if (config['aria-label']) button.setAttribute('aria-label', config['aria-label']);
  if (config.className) button.classList.add(config.className);
  return button;
}

export function updateThemeToggleButton(button, isDarkMode) {
  button.setAttribute('icon', isDarkMode ? 'bedtime_off' : 'bedtime');
  button.setAttribute('label', isDarkMode ? 'Turn off dark mode' : 'Turn on dark mode');
}

export function setupThemeToggle(button, onThemeChange) {
  const getCurrentTheme = () => {
    if (document.body.classList.contains('theme-dark') || document.body.classList.contains('dark-mode')) {
      return 'dark';
    }
    if (document.body.classList.contains('theme-light')) {
      return 'light';
    }
    try {
      const storedTheme = localStorage.getItem('theme') || localStorage.getItem('preferred-theme');
      if (storedTheme) return storedTheme;
    } catch (e) { }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  };
  const applyTheme = (theme) => {
    const isDark = theme === 'dark';
    if (isDark) {
      document.body.classList.add('theme-dark', 'dark-mode');
      document.body.classList.remove('theme-light');
    } else {
      document.body.classList.add('theme-light');
      document.body.classList.remove('theme-dark', 'dark-mode');
    }
    try {
      localStorage.setItem('theme', theme);
      localStorage.setItem('preferred-theme', theme);
    } catch (e) { }
    if (button) updateThemeToggleButton(button, isDark);
    if (onThemeChange) onThemeChange(theme, isDark);
  };
  const currentTheme = getCurrentTheme();
  applyTheme(currentTheme);
  const toggleTheme = () => {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    return newTheme;
  };
  if (button) button.addEventListener('click', toggleTheme);
  return toggleTheme;
}
window.setupThemeToggle = setupThemeToggle;
export const buttonConfigs = {
  add: { label: "Add", icon: "add", variant: "primary" },
  save: { label: "Save", icon: "check", variant: "primary" },
  edit: { label: "Edit", icon: "edit", variant: "secondary" },
  undo: { label: "Undo", icon: "undo", variant: "secondary" },
  delete: { label: "Delete", icon: "delete_forever", variant: "danger" },
  resetAllData: { label: "Reset All Data", icon: "delete_forever", variant: "danger" },
  restore: { label: "Restore Tasks", icon: "restore", variant: "secondary" },
  close: { label: "Close", icon: "close", variant: "transparent" },
  closeRounded: { label: "Close", icon: "close", variant: "rounded-secondary" },
  settings: { label: "Settings", icon: "settings", variant: "transparent" },
  apps: { label: "All Apps", icon: "apps", variant: "transparent" },
  themeToggle: { label: "Turn on dark mode", icon: "bedtime", variant: "transparent" },
  settingsContainer: { label: "Settings", iconRight: "settings", variant: "container", description: "Full-width container button for overlay/panel use" },
  themeToggleContainer: { label: "Turn on dark mode", variant: "container", description: "Full-width container button for overlay/panel use. Use setupThemeToggle() for complete functionality." },
  resetAllDataContainer: { label: "Reset All Data", variant: "container-danger", description: "Full-width danger container button for overlay/panel use" },
  restoreContainer: { label: "Restore Tasks", variant: "container", description: "Full-width container button for overlay/panel use" },
  addComment: { label: "Add Comment", icon: "add_comment", variant: "secondary" },
  refresh: { label: "Refresh", icon: "refresh", variant: "transparent" },
  refreshApp: { label: "Refresh App", icon: "refresh", variant: "transparent" },
  addNote: { label: "Add Note", icon: "add", variant: "primary", checkmark: true },
  resetLabel: { label: "Reset Label", variant: "secondary" },
  savePill: { label: "Save", icon: "check", variant: "pill", checkmark: true },
  cancelPill: { label: "Cancel", variant: "pill-secondary" },
  saveRounded: { label: "Save", icon: "check", variant: "rounded", checkmark: true },
  cancelRounded: { label: "Cancel", variant: "rounded-secondary" },
  addPill: { label: "Add", icon: "add", variant: "pill", checkmark: true },
  editPill: { label: "Edit", icon: "edit", variant: "pill-secondary" }
};

export const iconOnlyButtons = {
  settingsIcon: { icon: "settings", variant: "icon", "aria-label": "Settings" },
  appsIcon: { icon: "apps", variant: "icon", "aria-label": "All Apps" },
  deleteIcon: { icon: "delete_forever", variant: "icon", "aria-label": "Delete" },
  editIcon: { icon: "edit", variant: "icon", "aria-label": "Edit" },
  closeIcon: { icon: "close", variant: "icon", "aria-label": "Close" },
  addCommentIcon: { icon: "add_comment", variant: "icon", "aria-label": "Add Comment" },
  checkboxUnchecked: { icon: "check_box_outline_blank", variant: "icon", checkmark: true, "aria-label": "Mark as complete", "data-checkbox-state": "unchecked" },
  checkboxChecked: { icon: "check_box", variant: "icon", "aria-label": "Mark as incomplete", "data-checkbox-state": "checked" }
};