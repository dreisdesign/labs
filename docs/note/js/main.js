/**
 * Note App - Daily note with theme support
 * Rebuilt with design system components and overlay editing
 * Version: 4.0.0
 */

// Settings
const settings = {
  resetEnabled: true
};

// Data Store
const store = {
  getNote() {
    const today = new Date().toISOString().split('T')[0];
    return localStorage.getItem(`note-${today}`) || '';
  },

  saveNote(text) {
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem(`note-${today}`, text);
  },

  isResetEnabled() {
    return localStorage.getItem('note-reset-enabled') !== 'false';
  },

  setResetEnabled(enabled) {
    localStorage.setItem('note-reset-enabled', enabled ? 'true' : 'false');
  }
};

// UI State
let currentNote = '';
let lastClearedNote = '';

// Element references
const noteInputCard = document.getElementById('noteInputCard');
const footer = document.getElementById('footer');
const undoToast = document.getElementById('undoToast');

// Initialize
window.addEventListener('DOMContentLoaded', () => {
  cleanupOldNotes();
  setupEventListeners();
  loadNote();
});

// Clean up notes from previous days
function cleanupOldNotes() {
  const today = new Date().toISOString().split('T')[0];
  const keys = Object.keys(localStorage);
  keys.forEach(key => {
    if (key.startsWith('note-') && key !== `note-${today}` && key !== 'note-label' && key !== 'note-flavor' && key !== 'note-theme' && key !== 'note-reset-enabled') {
      localStorage.removeItem(key);
    }
  });
}

// Load note from localStorage and update display
function loadNote() {
  currentNote = store.getNote();
  updateNoteDisplay();
}

// Update note display
function updateNoteDisplay() {
  // Update input card with current note using component method
  if (noteInputCard && noteInputCard.setValue) {
    noteInputCard.setValue(currentNote);
  }
}

// Setup event listeners
function setupEventListeners() {
  // Input card events - listen for auto-save and clear
  noteInputCard.addEventListener('autosave', onAutoSave);
  noteInputCard.addEventListener('clear', clearAllNotes);

  // Footer button events
  const themeBtn = document.getElementById('themeBtn');
  const flavorBtn = document.getElementById('flavorBtn');
  const allAppsBtn = document.getElementById('allAppsBtn');

  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  if (flavorBtn) flavorBtn.addEventListener('click', toggleFlavor);
  if (allAppsBtn) allAppsBtn.addEventListener('click', goToAllApps);

  // Toast undo action
  undoToast.addEventListener('action', undoClear);
}

// Handle auto-save from input card (triggered on input with debounce)
function onAutoSave(e) {
  const newText = e.detail?.value || '';
  const trimmedText = newText.trim();

  console.log('onAutoSave called with:', { newText, trimmedText, currentNote });

  if (!trimmedText) {
    // Empty text - clear the note
    if (currentNote !== '') {
      console.log('Clearing note (empty text)');
      currentNote = '';
      store.saveNote(currentNote);
    }
    return;
  }

  // Only save if text changed
  if (trimmedText !== currentNote) {
    console.log('Saving auto-save text:', trimmedText);
    currentNote = trimmedText;
    store.saveNote(currentNote);
  }
}

function clearAllNotes() {
  lastClearedNote = currentNote;
  currentNote = '';
  store.saveNote('');
  updateNoteDisplay();
  showUndoToast('Note cleared');
}

function undoClear() {
  currentNote = lastClearedNote;
  store.saveNote(currentNote);
  updateNoteDisplay();
}

// Toast notification
function showUndoToast(message) {
  undoToast.show(message, { actionText: 'Undo', duration: 5000 });
}

// Toggle between light and dark theme
function toggleTheme() {
  const currentTheme = localStorage.getItem('note-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('note-theme', newTheme);
  document.documentElement.setAttribute('data-color-scheme', newTheme);
  document.documentElement.classList.remove('theme-light', 'theme-dark');
  document.documentElement.classList.add('theme-' + newTheme);
  console.log('Theme toggled to:', newTheme);
}

// Cycle through flavor options
function toggleFlavor() {
  const flavors = ['blueberry', 'strawberry', 'vanilla'];
  const currentFlavor = localStorage.getItem('note-flavor') || 'blueberry';
  const currentIndex = flavors.indexOf(currentFlavor);
  const nextFlavor = flavors[(currentIndex + 1) % flavors.length];
  localStorage.setItem('note-flavor', nextFlavor);
  document.documentElement.classList.remove('flavor-blueberry', 'flavor-strawberry', 'flavor-vanilla');
  document.documentElement.classList.add('flavor-' + nextFlavor);
  console.log('Flavor changed to:', nextFlavor);
}

// Navigate to all apps page
function goToAllApps() {
  window.location.href = '../index.html';
}