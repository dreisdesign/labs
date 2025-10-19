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
  // Input card events
  noteInputCard.addEventListener('save', onNoteSave);

  // Footer events
  footer.addEventListener('add', () => {
    if (noteInputCard && noteInputCard.focus) {
      noteInputCard.focus();
    }
  });
  footer.addEventListener('reset-all', clearAllNotes);
  footer.addEventListener('flavor-changed', (e) => {
    // Flavor change handled by footer component
  });

  // Toast undo action
  undoToast.addEventListener('action', undoClear);
}

// Handle note save from input card
function onNoteSave(e) {
  const newText = e.detail?.value || '';
  const trimmedText = newText.trim();

  console.log('onNoteSave called with:', { newText, trimmedText, currentNote });

  if (!trimmedText) {
    // User tried to save empty text - don't save, just reload
    console.log('Empty text - not saving');
    updateNoteDisplay(); // Reload current note
    return;
  }

  // Always save non-empty text that the user submitted
  // (They explicitly clicked save, so we should respect that)
  console.log('Saving new text:', trimmedText);
  currentNote = trimmedText;
  store.saveNote(currentNote);

  // Show visual feedback that note was saved
  undoToast.show('Note saved', { duration: 2000 });
  updateNoteDisplay();
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