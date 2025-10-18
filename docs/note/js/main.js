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
  // Update input card textarea with current note
  const textarea = noteInputCard.shadowRoot?.querySelector('textarea');
  if (textarea) {
    textarea.value = currentNote;
  }
}

// Setup event listeners
function setupEventListeners() {
  // Input card events
  noteInputCard.addEventListener('save', onNoteSave);
  noteInputCard.addEventListener('close', onNoteClose);

  // Footer events
  footer.addEventListener('add', () => {
    const textarea = noteInputCard.shadowRoot?.querySelector('textarea');
    if (textarea) textarea.focus();
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

  if (newText !== currentNote) {
    if (newText.trim() === '' && currentNote !== '') {
      // User cleared the note
      lastClearedNote = currentNote;
      currentNote = '';
      store.saveNote('');
      updateNoteDisplay();
      showUndoToast('Note cleared');
    } else if (newText.trim()) {
      // User entered new text
      currentNote = newText.trim();
      store.saveNote(currentNote);
      updateNoteDisplay();
    } else {
      // User tried to save empty text - just update display
      updateNoteDisplay();
    }
  }
}

// Handle note close/cancel from input card
function onNoteClose(e) {
  // Reload the note in case user cancelled
  loadNote();
} function clearAllNotes() {
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