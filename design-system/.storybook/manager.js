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
    if (data && data.type === 'STORYBOOK_SET_TOOL_VISIBILITY' && data.tool === 'Theme') {
      try {
        const hide = Boolean(data.hide);
        // Find a toolbar button that looks like the theme toggle and hide/show it
        const buttons = Array.from(document.querySelectorAll('[role="toolbar"] button, [role="toolbar"] a'));
        const themeBtn = buttons.find(b => {
          const title = (b.getAttribute('title') || '').toLowerCase();
          const label = (b.getAttribute('aria-label') || '').toLowerCase();
          return title.includes('theme') || label.includes('theme');
        });
        if (themeBtn) themeBtn.style.display = hide ? 'none' : '';
      } catch (e) {
        // ignore
      }
    }

    if (data && data.type === 'STORYBOOK_CLEAR_THEME') {
      try {
        // Remove theme classes from the manager/document so any synced theme is cleared
        const root = document.documentElement;
        root.classList.remove('theme-light', 'theme-dark');
        // Also try to clear theme classes inside any preview iframe if accessible
        const iframes = Array.from(document.querySelectorAll('iframe'));
        iframes.forEach((f) => {
          try {
            const doc = f.contentDocument || f.contentWindow && f.contentWindow.document;
            if (doc && doc.documentElement) {
              doc.documentElement.classList.remove('theme-light', 'theme-dark');
            }
          } catch (e) {
            // cross-origin or not accessible - ignore
          }
        });
      } catch (e) {
        // ignore
      }
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
