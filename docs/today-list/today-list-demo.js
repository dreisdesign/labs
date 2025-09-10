// Demo module for Today List page
// Imports required web components
import '/labs/design-system/components/labs-overlay.js';
import '/labs/design-system/components/labs-settings-card.js';
import '/labs/design-system/components/labs-input-card.js';
import '/labs/design-system/components/labs-list-item.js';

// Theme management utilities (mirrored from Pad/Today List)
function applyTheme({ flavor = 'blueberry', theme = 'light' } = {}) {
  const root = document.documentElement;
  root.classList.remove('flavor-vanilla', 'flavor-blueberry', 'flavor-strawberry');
  root.classList.add(`flavor-${flavor}`);
  root.classList.remove('theme-light', 'theme-dark');
  root.classList.add(`theme-${theme}`);
  root.setAttribute('data-color-scheme', theme);
  localStorage.setItem('today-list-theme', theme);
  localStorage.setItem('today-list-flavor', flavor);
  // Update meta theme-color for PWA
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  const bgColor = getComputedStyle(root).getPropertyValue('--color-background').trim();
  if (themeColorMeta && bgColor) {
    themeColorMeta.setAttribute('content', bgColor);
  }
  document.dispatchEvent(new CustomEvent('themeChanged'));
}

function initSystemTheme(defaultTheme = 'light') {
  const savedTheme = localStorage.getItem('today-list-theme');
  const savedFlavor = localStorage.getItem('today-list-flavor');
  applyTheme({
    flavor: savedFlavor || 'blueberry',
    theme: savedTheme || 'light',
  });
}

function updateThemeToggleButton() {
  const themeIcon = document.getElementById('themeIcon');
  const themeButton = document.getElementById('themeToggle');
  const isDark = document.documentElement.classList.contains('theme-dark');
  if (themeIcon) {
    themeIcon.setAttribute('name', isDark ? 'bedtime_off' : 'bedtime');
  }
  if (themeButton) {
    themeButton.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('theme-dark');
  const currentFlavor = getCurrentFlavor();
  applyTheme({ flavor: currentFlavor, theme: isDark ? 'light' : 'dark' });
  updateThemeToggleButton();
}

function getCurrentFlavor() {
  const flavors = ['vanilla', 'blueberry', 'strawberry'];
  for (const f of flavors) {
    if (document.documentElement.classList.contains(`flavor-${f}`)) return f;
  }
  return 'blueberry';
}

function cycleFlavor() {
  const flavors = ['vanilla', 'blueberry', 'strawberry'];
  const current = getCurrentFlavor();
  const idx = flavors.indexOf(current);
  const next = flavors[(idx + 1) % flavors.length];
  const isDark = document.documentElement.classList.contains('theme-dark');
  applyTheme({ flavor: next, theme: isDark ? 'dark' : 'light' });
}

// Initialize theme system
initSystemTheme();

// Persistence helpers for Today List items
const STORAGE_KEY = 'today-list-items-v1';

function saveItemsToStorage() {
  try {
    const items = [];
    const today = document.getElementById('todayItems');
    const archived = document.getElementById('archivedItems');
    // gather today items
    Array.from(today.children).forEach(child => {
      if (child.tagName && child.tagName.toLowerCase() === 'labs-list-item') {
        items.push({ id: child.getAttribute('data-id') || null, text: child.getAttribute('value') || '', checked: child.hasAttribute('checked'), archived: false });
      }
    });
    // gather archived items
    Array.from(archived.children).forEach(child => {
      if (child.tagName && child.tagName.toLowerCase() === 'labs-list-item') {
        items.push({ id: child.getAttribute('data-id') || null, text: child.getAttribute('value') || '', checked: child.hasAttribute('checked'), archived: true });
      }
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) { console.warn('Could not persist items', e); }
}

function loadItemsFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) { return []; }
}

// Render welcome card when empty
function renderWelcomeIfEmpty() {
  const today = document.getElementById('todayItems');
  const container = document.getElementById('welcomeCardContainer');
  container.innerHTML = '';
  if (!today || today.children.length === 0) {
    const card = document.createElement('div');
    card.style.background = 'var(--color-surface)';
    card.style.border = '1px solid color-mix(in srgb, var(--color-on-surface) 6%, transparent)';
    card.style.padding = '16px';
    card.style.borderRadius = '12px';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.gap = '8px';
    const h = document.createElement('div');
    h.textContent = 'Welcome — start your day';
    h.style.fontSize = 'var(--font-size-card-header, 1.125rem)';
    h.style.fontWeight = 'var(--font-weight-card-header, 600)';
    h.style.color = 'var(--color-on-surface)';
    const p = document.createElement('div');
    p.textContent = 'Add your first item to get started. You can archive or remove items and undo actions from the toast.';
    p.style.color = 'var(--color-on-surface-variant, #6b7280)';
    const btn = document.createElement('labs-button');
    btn.setAttribute('pill', '');
    btn.setAttribute('variant', 'primary');
    btn.textContent = 'Add first item';
    btn.addEventListener('click', () => {
      const overlay = document.getElementById('inputOverlay');
      if (overlay && typeof overlay.open === 'function') overlay.open();
    });
    card.appendChild(h);
    card.appendChild(p);
    card.appendChild(btn);
    container.appendChild(card);
  }
}

// Hydrate items from storage on load
function hydrateFromStorage() {
  const items = loadItemsFromStorage();
  if (!items || !items.length) return;
  items.forEach(it => {
    const el = document.createElement('labs-list-item');
    if (it.id) el.setAttribute('data-id', it.id);
    el.setAttribute('value', it.text || '');
    if (it.checked) el.setAttribute('checked', '');
    if (it.archived) document.getElementById('archivedItems').appendChild(el); else document.getElementById('todayItems').appendChild(el);
    // wire events for persistence
    wireItemPersistence(el);
  });
  document.getElementById('archivedTitle').style.display = document.getElementById('archivedItems').children.length ? '' : 'none';
}

function wireItemPersistence(item) {
  if (!item) return;
  // when an item requests archive, move DOM and persist; offer undo
  item.addEventListener('archive', (ev) => {
    const today = document.getElementById('todayItems');
    const archived = document.getElementById('archivedItems');
    const archivedTitle = document.getElementById('archivedTitle');
    const previousParent = item.parentElement;
    const snapshot = { parent: previousParent, index: Array.from(previousParent.children).indexOf(item) };
    archived.prepend(item);
    archivedTitle.style.display = archived.children.length ? '' : 'none';
    saveItemsToStorage();
    renderWelcomeIfEmpty();
    showUndoToast('Item archived', () => {
      if (snapshot.parent && snapshot.parent.insertBefore) snapshot.parent.insertBefore(item, snapshot.parent.children[snapshot.index] || null);
      saveItemsToStorage();
      renderWelcomeIfEmpty();
    });
  });

  // when remove triggered, detach and persist; offer undo
  item.addEventListener('remove', (ev) => {
    const parent = item.parentElement;
    const snapshot = { parent, index: Array.from(parent.children).indexOf(item) };
    item.remove();
    saveItemsToStorage();
    renderWelcomeIfEmpty();
    showUndoToast('Item removed', () => {
      if (snapshot.parent && snapshot.parent.insertBefore) {
        snapshot.parent.insertBefore(item, snapshot.parent.children[snapshot.index] || null);
        saveItemsToStorage();
        renderWelcomeIfEmpty();
      }
    });
  });

  // toggling checkboxes only needs persistence
  item.addEventListener('toggle', () => { saveItemsToStorage(); });
}

// Setup DOM handlers on load
document.addEventListener('DOMContentLoaded', () => {
  // Setup flavor switcher button
  const flavorToggle = document.getElementById('flavorToggle');
  if (flavorToggle) {
    flavorToggle.addEventListener('click', cycleFlavor);
  }
  // Settings overlay wiring
  const settingsBtn = document.getElementById('footer-settings-btn');
  const settingsOverlay = document.getElementById('settingsOverlay');
  if (settingsBtn && settingsOverlay) {
    settingsBtn.addEventListener('click', () => settingsOverlay.open());
    // Listen for close event from labs-settings-card
    const settingsCard = settingsOverlay.querySelector('labs-settings-card');
    if (settingsCard) {
      settingsCard.addEventListener('close', () => settingsOverlay.close());
    }
  }

  // Input overlay wiring (Add button)
  const addBtn = document.getElementById('footerAddBtn');
  const inputOverlay = document.getElementById('inputOverlay');
  if (addBtn && inputOverlay) {
    addBtn.addEventListener('click', () => inputOverlay.open());
    const inputCard = inputOverlay.querySelector('labs-input-card');
    if (inputCard) {
      inputCard.addEventListener('close', () => inputOverlay.close());
      inputCard.addEventListener('save', (e) => {
        const { value } = e.detail || {};
        if (value && value.trim()) {
          appendItem(value.trim());
        }
        inputOverlay.close();
      });
    }
  }

  // Demo control buttons
  const archiveDayBtn = document.getElementById('archiveDayBtn');
  const resetDataBtn = document.getElementById('resetDataBtn');
  const simNextDayBtn = document.getElementById('simNextDayBtn');
  if (archiveDayBtn) archiveDayBtn.addEventListener('click', archiveDay);
  if (resetDataBtn) resetDataBtn.addEventListener('click', resetAllData);
  if (simNextDayBtn) simNextDayBtn.addEventListener('click', simulateNextDay);

  // Ensure labs-toast exists for undo actions
  function ensureToast() {
    if (!document.body.querySelector('labs-toast')) {
      const t = document.createElement('labs-toast');
      document.body.appendChild(t);
    }
    return document.body.querySelector('labs-toast');
  }

  // Load persisted items and render welcome state
  hydrateFromStorage();
  renderWelcomeIfEmpty();
});

// Append item to the today list
function appendItem(text) {
  const today = document.getElementById('todayItems');
  const archivedTitle = document.getElementById('archivedTitle');
  const archived = document.getElementById('archivedItems');
  const item = document.createElement('labs-list-item');
  const id = `item-${Math.random().toString(36).slice(2, 9)}`;
  item.setAttribute('data-id', id);
  item.setAttribute('value', text);
  today.prepend(item);

  // wire persistence and event handlers
  wireItemPersistence(item);
  saveItemsToStorage();
  renderWelcomeIfEmpty();
}

// Archive entire day: move all today items to archived with undo
function archiveDay() {
  const today = document.getElementById('todayItems');
  const archived = document.getElementById('archivedItems');
  const archivedTitle = document.getElementById('archivedTitle');
  if (!today || !today.children.length) return;
  const moved = [];
  while (today.firstChild) {
    const node = today.firstChild;
    moved.push(node);
    archived.prepend(node);
  }
  archivedTitle.style.display = archived.children.length ? '' : 'none';
  saveItemsToStorage();
  renderWelcomeIfEmpty();
  showUndoToast('Day archived', () => {
    // restore moved nodes back to today in original order
    for (let i = moved.length - 1; i >= 0; i--) {
      today.prepend(moved[i]);
    }
    saveItemsToStorage();
    renderWelcomeIfEmpty();
  });
}

// Reset all data: clear storage and DOM with undo
function resetAllData() {
  const today = document.getElementById('todayItems');
  const archived = document.getElementById('archivedItems');
  const snapshot = { today: Array.from(today.children), archived: Array.from(archived.children) };
  // clear
  today.innerHTML = '';
  archived.innerHTML = '';
  document.getElementById('archivedTitle').style.display = 'none';
  saveItemsToStorage();
  renderWelcomeIfEmpty();
  showUndoToast('All data reset', () => {
    // restore
    snapshot.today.reverse().forEach(n => today.prepend(n));
    snapshot.archived.reverse().forEach(n => archived.prepend(n));
    document.getElementById('archivedTitle').style.display = archived.children.length ? '' : 'none';
    saveItemsToStorage();
    renderWelcomeIfEmpty();
  });
}

// Simulate next day: mark as archived state (for testing)
function simulateNextDay() {
  // simple behavior: move all today items to archived but keep them present (like archiveDay)
  archiveDay();
}

// Simple toast helper using existing labs-toast
function showUndoToast(message, undoFn) {
  try {
    const toast = document.body.querySelector('labs-toast');
    if (toast && typeof toast.show === 'function') {
      toast.show(message, { actionText: 'Undo', duration: 5000 });
      const onAction = () => { undoFn && undoFn(); toast.removeEventListener('action', onAction); };
      toast.addEventListener('action', onAction, { once: true });
    }
  } catch (e) { console.warn('Toast unavailable', e); }
}
