/**
 * Note App - Daily note with theme support
 * Rebuilt with design system components
 * Version: 3.0.0
 */

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

  getLabel() {
    return localStorage.getItem('note-label') || 'Today\'s Note';
  },

  saveLabel(text) {
    localStorage.setItem('note-label', text);
  },

  resetLabel() {
    localStorage.removeItem('note-label');
  }
};

// UI State
let currentNote = '';
let previousNote = '';
let lastClearedNote = '';

// Element references
const metricCard = document.getElementById('metricCard');
const noteContent = document.getElementById('noteContent');
const noteLabel = document.getElementById('noteLabel');
const editNoteOverlay = document.getElementById('editNoteOverlay');
const noteTextarea = document.getElementById('noteTextarea');
const editLabelOverlay = document.getElementById('editLabelOverlay');
const labelInput = document.getElementById('labelInput');
const footer = document.getElementById('footer');
const undoToast = document.getElementById('undoToast');
const saveBtnFromOverlay = document.getElementById('saveBtnFromOverlay');
const resetBtnFromOverlay = document.getElementById('resetBtnFromOverlay');
const saveLabelBtn = document.getElementById('saveLabelBtn');

// Initialize
window.addEventListener('DOMContentLoaded', () => {
  cleanupOldNotes();
  loadNote();
  loadLabel();
  setupEventListeners();
});

// Clean up notes from previous days
function cleanupOldNotes() {
  const today = new Date().toISOString().split('T')[0];
  const keys = Object.keys(localStorage);
  keys.forEach(key => {
    if (key.startsWith('note-') && key !== `note-${today}` && key !== 'note-label' && key !== 'note-flavor' && key !== 'note-theme') {
      localStorage.removeItem(key);
    }
  });
}

// Load note from localStorage and update display
function loadNote() {
  currentNote = store.getNote();
  updateNoteDisplay();
}

// Load label from localStorage and update display
function loadLabel() {
  const label = store.getLabel();
  noteLabel.textContent = label;
}

// Update note display
function updateNoteDisplay() {
  if (currentNote) {
    noteContent.innerHTML = `<span>${currentNote.substring(0, 100)}${currentNote.length > 100 ? '...' : ''}</span>`;
  } else {
    noteContent.innerHTML = '<span class="placeholder">Tap to add a note...</span>';
  }
}

// Setup event listeners
function setupEventListeners() {
  // Metric card click to edit
  metricCard.addEventListener('click', openEditNoteOverlay);

  // Footer events
  footer.addEventListener('add', openEditNoteOverlay);
  footer.addEventListener('reset-all', clearAllNotes);
  footer.addEventListener('flavor-changed', (e) => {
    // Flavor change handled by footer component - theme is already applied
  });

  // Overlay buttons
  saveBtnFromOverlay.addEventListener('click', saveNote);
  resetBtnFromOverlay.addEventListener('click', clearNote);

  // Label edit
  noteLabel.addEventListener('click', openEditLabelOverlay);
  saveLabelBtn.addEventListener('click', saveLabel);

  // Toast undo action
  undoToast.addEventListener('action', undoClear);
}

// Edit note overlay
function openEditNoteOverlay() {
  noteTextarea.value = currentNote;
  editNoteOverlay.open();
}

function saveNote() {
  currentNote = noteTextarea.value.trim();
  store.saveNote(currentNote);
  updateNoteDisplay();
  editNoteOverlay.close();
}

function clearNote() {
  lastClearedNote = currentNote;
  currentNote = '';
  noteTextarea.value = '';
  store.saveNote('');
  updateNoteDisplay();
  editNoteOverlay.close();
  showUndoToast('Note cleared');
}

function clearAllNotes() {
  // Reset to empty
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

// Edit label overlay
function openEditLabelOverlay(e) {
  e.stopPropagation();
  const currentLabel = store.getLabel();
  labelInput.value = currentLabel;
  editLabelOverlay.open();
}

function saveLabel() {
  const newLabel = labelInput.value.trim() || 'Today\'s Note';
  store.saveLabel(newLabel);
  loadLabel();
  editLabelOverlay.close();
}

// Toast notification
function showUndoToast(message) {
  undoToast.show(message, { actionText: 'Undo', duration: 5000 });
}
