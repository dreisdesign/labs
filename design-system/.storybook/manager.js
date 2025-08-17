// Listen for theme sync messages from the preview iframe and apply classes
function applyThemePayload(payload) {
  const root = document.documentElement;
  if (payload.theme) {
    root.classList.remove('theme-light', 'theme-dark');
    root.classList.add(`theme-${payload.theme}`);
    // Also set data-color-scheme to help form controls and native UI
    root.setAttribute('data-color-scheme', payload.theme === 'dark' ? 'dark' : 'light');
  }
  if (payload.flavor) {
    root.classList.remove('flavor-blueberry', 'flavor-strawberry');
    root.classList.add(`flavor-${payload.flavor}`);
  }
}

window.addEventListener('message', (ev) => {
  try {
    const data = ev.data || {};
    if (data && data.type === 'STORYBOOK_SYNC_THEME') {
      applyThemePayload(data);
    }
  } catch (e) {
    // ignore malformed messages
  }
});

// Initialize manager theme from existing document classes if present
(() => {
  const root = document.documentElement;
  const isDark = root.classList.contains('theme-dark') || root.getAttribute('data-color-scheme') === 'dark';
  applyThemePayload({ theme: isDark ? 'dark' : 'light' });
})();
