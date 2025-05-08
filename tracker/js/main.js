// --- DOM Element Selection ---
const totalCountElement = document.getElementById('totalCount');
const trackButton = document.querySelector('.track-button');
const resetButton = document.getElementById('resetButton');
const undoButton = document.getElementById('undoButton');
const timestampList = document.getElementById('timestampList');
const placeholderEntry = document.querySelector('.placeholder-entry');
const metricLabel = document.getElementById('metricLabel');
const metricLabelContainer = document.querySelector('.metric-label-container');
const editLabelIcon = document.querySelector('.edit-label-icon');
const versionNumberElement = document.querySelector('.version-number');
const settingsButton = document.getElementById('settingsButton');
const settingsOverlay = document.getElementById('settingsOverlay');
const closeSettingsButton = document.getElementById('closeSettingsButton');
const menuThemeToggle = document.getElementById('menuThemeToggle'); // Added for menu theme toggle
const menuThemeIcon = document.getElementById('menuThemeIcon'); // Added for menu theme icon
const menuThemeText = document.getElementById('menuThemeText'); // Added for menu theme text

// Comment functionality elements
const commentOverlay = document.getElementById('commentOverlay');
const commentTextarea = document.getElementById('commentTextarea');
const saveCommentButton = document.getElementById('saveCommentButton');
const cancelCommentButton = document.getElementById('cancelCommentButton');
const closeCommentButton = document.getElementById('closeCommentButton');

// Label edit functionality elements
const labelEditOverlay = document.getElementById('labelEditOverlay');
const labelEditInput = document.getElementById('labelEditInput');
const saveLabelButton = document.getElementById('saveLabelButton');
const deleteLabelButton = document.getElementById('deleteLabelButton');
const closeLabelEditButton = document.getElementById('closeLabelEditButton');

// --- Constants and State Variables ---
const LS_KEYS = {
    COUNT: 'totalCount',
    ENTRIES: 'trackedEntries',
    LABEL: 'metricLabel',
    THEME: 'theme'
};

let isTestingMode = false;
let isAnimating = false;
let metricLabelText = localStorage.getItem(LS_KEYS.LABEL) || 'Total';
let currentEditingEntry = null; // Track which entry is being edited

// Backup variables to support undo functionality
let backupTotalCount = 0;
let backupTrackedEntries = [];
let backupLabelText = ''; // Added backup for label text
let deletedEntry = null; // Track deleted entry for undo
let undoTimerId = null;
let countdownInterval = null;
let countdownValue = 5; // Starting countdown value
let resetPending = false; // Flag to track if a reset is waiting for countdown

// Variables to track comment deletion for undo
let deletedCommentEntry = null;
let deletedCommentText = '';

// Load state from Local Storage or use defaults with validation
let totalCount = 0;
let trackedEntries = [];

try {
    const storedCount = localStorage.getItem(LS_KEYS.COUNT);
    const storedEntries = localStorage.getItem(LS_KEYS.ENTRIES);

    if (storedCount !== null) {
        const parsed = parseInt(storedCount);
        totalCount = !isNaN(parsed) && parsed >= 0 ? parsed : 0;
    }

    if (storedEntries) {
        const parsed = JSON.parse(storedEntries);
        if (Array.isArray(parsed)) {
            trackedEntries = parsed.filter(entry =>
                typeof entry === 'object' &&
                entry !== null &&
                typeof entry.date === 'number' &&
                typeof entry.time === 'string'
            );
        }
    }
} catch (error) {
    console.error('Error loading from localStorage:', error);
    // Use defaults if there's an error
    totalCount = 0;
    trackedEntries = [];
}

// --- Utility Functions ---

// Compare if two dates are the same day
function isSameDay(date1, date2) {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
}

// Compare if two dates are in the same group (day or second depending on mode)
function isSameGroup(date1, date2) {
    if (isTestingMode) {
        // Group by 10-second intervals in testing mode
        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate() &&
            date1.getHours() === date2.getHours() &&
            date1.getMinutes() === date2.getMinutes() &&
            Math.floor(date1.getSeconds() / 10) === Math.floor(date1.getSeconds() / 10)
        );
    }
    // Default: Group by day
    return isSameDay(date1, date2);
}

// Format time with seconds
function formatTime(date) {
    // Updated to format as H:MM AM/PM (e.g., 4:42 PM)
    return date.toLocaleTimeString(undefined, {
        hour: 'numeric', // Use 'numeric' for non-padded hour (e.g., 4 instead of 04)
        minute: '2-digit',
        hour12: true
    });
}

// Format group header based on mode
function formatGroupHeader(date) {
    if (isTestingMode) {
        // Show Date and 10-second range for testing headers
        const dateStr = date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
        const hour = date.getHours();
        const minute = date.getMinutes();
        const startSec = Math.floor(date.getSeconds() / 10) * 10;
        const endSec = startSec + 9;
        const startTime = new Date(date);
        startTime.setSeconds(startSec);
        const endTime = new Date(date);
        endTime.setSeconds(endSec);
        const timeStr = startTime.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true });
        const endTimeStr = endTime.toLocaleTimeString(undefined, { second: '2-digit', hour12: true });
        return `${dateStr}, ${timeStr}–${endTimeStr}`;
    }
    // Default: Show full date for normal headers
    return formatDateHeader(date); // formatDateHeader already formats the full date
}

// Format date header (Simplified for just the heading)
function formatDateHeader(date) {
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

// Updates the total count display and saves it to Local Storage
function updateTotalCount() {
    totalCountElement.textContent = totalCount;
    localStorage.setItem(LS_KEYS.COUNT, totalCount);
}

// Updates the metric label display (saving happens in disableLabelEditing)
function updateMetricLabel() {
    metricLabel.textContent = metricLabelText;
}

// --- Comment Functionality ---

// Show comment overlay with existing comment (if any)
function showCommentOverlay(entryId) {
    // Find the entry in trackedEntries
    const entry = trackedEntries.find(entry => entry.date === entryId);
    if (!entry) return;

    // Store the current entry being edited
    currentEditingEntry = entry;

    // Set the textarea value to the existing comment or empty
    const isNewComment = !entry.comment;
    commentTextarea.value = entry.comment || '';

    // Get formatted time for the overlay title
    const entryDate = new Date(entryId);
    const formattedTime = formatTime(entryDate);

    // Update the overlay title to include the timestamp
    const commentOverlayTitle = document.querySelector('#commentOverlay .overlay-header h2');
    if (commentOverlayTitle) {
        commentOverlayTitle.textContent = `Note @ ${formattedTime}`;
    }

    // Update the delete button text based on whether this is a new comment or edit
    updateDeleteButtonState();

    // Prevent page scroll first (before showing the overlay)
    preventPageScroll();

    // Pre-position overlay content before showing to prevent flash
    const overlayContent = commentOverlay.querySelector('.overlay-content');
    if (overlayContent) {
        // Store original width for consistency
        const originalWidth = overlayContent.offsetWidth || '90%';

        overlayContent.style.transition = 'none'; // Disable transitions temporarily
        overlayContent.style.position = 'relative';
        overlayContent.style.top = '';
        overlayContent.style.maxHeight = '80vh';
        overlayContent.style.transform = '';
        if (typeof originalWidth === 'number' && originalWidth > 0) {
            overlayContent.style.width = originalWidth + 'px'; // Lock width 
        }
        overlayContent.scrollTop = 0; // Reset scroll position
    }

    // Show the overlay
    commentOverlay.classList.remove('hidden');

    // Force reflow before re-enabling transitions
    if (overlayContent) {
        void overlayContent.offsetHeight;
        overlayContent.style.transition = '';
        // Reset width after initial positioning to prevent layout shift
        setTimeout(() => {
            overlayContent.style.width = '';
        }, 50);
    }

    // Use the exact same approach as label editing - consistent delay and forcing method
    setTimeout(() => {
        forceKeyboardOpen(commentTextarea);

        // Apply keyboard fix if available
        if (typeof window.setupKeyboardFix === 'function') {
            window.setupKeyboardFix(commentOverlay, overlayContent, commentTextarea);
        }
    }, 100);
}

// Helper function to detect mobile devices
function isMobileDevice() {
    return (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        (window.innerWidth <= 800 && window.innerHeight <= 800)
    );
}

// Helper function to force keyboard to appear on mobile devices
function forceKeyboardOpen(inputElement) {
    if (!inputElement) return;

    // Delay focus to allow the overlay animation to complete first
    setTimeout(() => {
        // For iOS Safari specifically
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            // Use requestAnimationFrame for smoother visual transitions
            requestAnimationFrame(() => {
                // Focus and position cursor at end of text
                inputElement.focus();

                // Move cursor to end of text (especially important for iOS)
                if (inputElement.tagName.toLowerCase() === 'input') {
                    const length = inputElement.value.length;
                    inputElement.setSelectionRange(length, length);
                } else if (inputElement.tagName.toLowerCase() === 'textarea') {
                    inputElement.selectionStart = inputElement.value.length;
                    inputElement.selectionEnd = inputElement.value.length;
                }
            });
        }
        // For Android
        else if (/Android/i.test(navigator.userAgent)) {
            // Use requestAnimationFrame for smoother animation
            requestAnimationFrame(() => {
                inputElement.focus();
            });
        }
        // General fallback for other mobile browsers
        else {
            // Standard focus
            inputElement.focus();
        }
    }, 300); // Use a slightly longer delay to ensure overlay is fully shown first
}

// Update delete button state between "Delete" and "Cancel" based on comment content
function updateDeleteButtonState() {
    const deleteButton = document.getElementById('deleteCommentButton');
    const hasExistingComment = currentEditingEntry && currentEditingEntry.comment;

    if (!hasExistingComment) {
        // If no existing comment, always show "Cancel" regardless of text in field
        deleteButton.textContent = 'Cancel';
        deleteButton.classList.add('cancel');
    } else {
        // Only if there's an existing comment, show "Delete"
        deleteButton.textContent = 'Delete';
        deleteButton.classList.remove('cancel');
    }
}

// Listen for changes in the textarea to update the delete button accordingly
commentTextarea.addEventListener('input', updateDeleteButtonState);

// Hide comment overlay
function hideCommentOverlay() {
    commentOverlay.classList.add('hidden');
    currentEditingEntry = null;
    commentTextarea.value = '';
    restorePageScroll();
}

// Delete/cancel comment 
function deleteComment() {
    const deleteButton = document.getElementById('deleteCommentButton');
    const isCancel = deleteButton.classList.contains('cancel');

    if (isCancel) {
        // If in cancel mode, just close the overlay
        hideCommentOverlay();
        return;
    }

    // If in delete mode, backup and remove the comment
    if (currentEditingEntry && currentEditingEntry.comment) {
        // Backup the comment for undo
        deletedCommentEntry = { ...currentEditingEntry };
        deletedCommentText = currentEditingEntry.comment;

        const entryIndex = trackedEntries.findIndex(entry => entry.date === currentEditingEntry.date);
        if (entryIndex !== -1) {
            // Delete the comment property
            delete trackedEntries[entryIndex].comment;

            // Save to localStorage
            localStorage.setItem(LS_KEYS.ENTRIES, JSON.stringify(trackedEntries));

            // Re-render timestamps to update UI
            renderTimestamps();

            // Reinitialize delete functionality to ensure swipe works on entries with deleted comments
            if (typeof window.reinitializeDeleteFunctionality === 'function') {
                window.reinitializeDeleteFunctionality();
            }

            // Show the undo button
            showUndoCommentDeleteButton();
        }
    }

    // Hide the overlay
    hideCommentOverlay();
}

// Show the undo button for comment deletion
function showUndoCommentDeleteButton() {
    console.log("Showing undo button for comment deletion");
    // Set button text to show it's an Undo action
    undoButton.innerHTML = '<span>Undo Delete</span>';

    // Clear any existing timers
    if (undoTimerId) {
        clearTimeout(undoTimerId);
    }
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    // Remove any existing classes
    undoButton.classList.remove('hidden');

    // Force browser to recognize the initial state before animating
    void undoButton.offsetHeight;

    // Add the show class which triggers the slide-in animation
    undoButton.classList.add('show');

    // Set a timer to auto-hide the undo button after 5 seconds
    undoTimerId = setTimeout(() => {
        hideUndoButton();
        // Clear the deleted comment backup after timeout
        deletedCommentEntry = null;
        deletedCommentText = '';
    }, 5000);
}

// Save comment to the entry
function saveComment() {
    if (!currentEditingEntry) return;

    const comment = commentTextarea.value.trim();

    // Update the entry in the trackedEntries array
    const entryIndex = trackedEntries.findIndex(entry => entry.date === currentEditingEntry.date);
    if (entryIndex !== -1) {
        if (comment) {
            trackedEntries[entryIndex].comment = comment;
        } else {
            // If comment is empty, remove the property
            delete trackedEntries[entryIndex].comment;
        }

        // Save to localStorage
        localStorage.setItem(LS_KEYS.ENTRIES, JSON.stringify(trackedEntries));

        // Re-render timestamps to update UI
        renderTimestamps();

        // Reinitialize delete functionality to ensure hover/swipe works on entries after adding/modifying comments
        if (typeof window.reinitializeDeleteFunctionality === 'function') {
            window.reinitializeDeleteFunctionality();
        }
    }

    // Hide the overlay
    hideCommentOverlay();
}

// Event listeners for comment functionality
saveCommentButton.addEventListener('click', saveComment);
document.getElementById('deleteCommentButton').addEventListener('click', deleteComment);
closeCommentButton.addEventListener('click', hideCommentOverlay);

// Close comment overlay when clicking outside the content
commentOverlay.addEventListener('click', (event) => {
    if (event.target === commentOverlay) {
        hideCommentOverlay();
    }
});

// --- Label Editing Functions ---
function initializeLabel() {
    metricLabel.textContent = metricLabelText; // Use metricLabelText directly
}

// Enable editing when the label or edit button is clicked
function enableLabelEditing() {
    // Prevent re-triggering if already editable
    if (metricLabel.getAttribute('contenteditable') !== 'true') {
        metricLabel.contentEditable = true;
        // Use a tiny timeout to ensure focus works reliably in Safari
        setTimeout(() => {
            metricLabel.focus();
            // Optional: Select text for easier editing (execCommand is deprecated, consider alternatives if needed)
            // document.execCommand('selectAll', false, null);
        }, 0); // 0ms delay is often enough
    }
}

// Disable editing and save the new label
function disableLabelEditing() {
    metricLabel.contentEditable = false;
    const newLabel = metricLabel.textContent.trim();
    if (newLabel) {
        metricLabelText = newLabel; // Update state variable
        localStorage.setItem(LS_KEYS.LABEL, metricLabelText); // Save to localStorage using constant
    } else {
        // Revert if label is empty
        metricLabel.textContent = metricLabelText;
    }
}

// Add event listeners for label editing
metricLabel.addEventListener('click', enableLabelEditing);

metricLabel.addEventListener('blur', disableLabelEditing); // Save when focus is lost
metricLabel.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevent newline in contenteditable
        disableLabelEditing(); // Save and exit edit mode
        metricLabel.blur(); // Explicitly blur to ensure state change
    } else if (e.key === 'Escape') {
        metricLabel.textContent = metricLabelText; // Revert changes
        disableLabelEditing(); // Exit edit mode without saving current input
        metricLabel.blur(); // Explicitly blur
    }
});

// --- Label Edit Overlay Functions ---

// Show label edit overlay
function showLabelEditOverlay() {
    // Set the input value based on whether the label is default or custom
    const isDefaultLabel = metricLabelText === 'Total';

    if (isDefaultLabel) {
        // Use empty input with placeholder for default label
        labelEditInput.value = '';
        labelEditInput.placeholder = 'Total (default)';
    } else {
        // Set the input value to the current custom label
        labelEditInput.value = metricLabelText;
        labelEditInput.placeholder = 'Enter label name...';
    }

    // Update the delete button text based on whether the label is default or custom
    deleteLabelButton.textContent = isDefaultLabel ? 'Cancel' : 'Clear';
    deleteLabelButton.classList.toggle('cancel', isDefaultLabel);

    // Prevent page scroll first (before showing the overlay)
    preventPageScroll();

    // Pre-position overlay content before showing to prevent flash
    const overlayContent = labelEditOverlay.querySelector('.overlay-content');
    if (overlayContent) {
        // Store original width for consistency
        const originalWidth = overlayContent.offsetWidth || '90%';

        overlayContent.style.transition = 'none'; // Disable transitions temporarily
        overlayContent.style.position = 'relative';
        overlayContent.style.top = '';
        overlayContent.style.maxHeight = '80vh';
        overlayContent.style.transform = '';
        if (typeof originalWidth === 'number' && originalWidth > 0) {
            overlayContent.style.width = originalWidth + 'px'; // Lock width 
        }
        overlayContent.scrollTop = 0; // Reset scroll position
    }

    // Show the overlay
    labelEditOverlay.classList.remove('hidden');

    // Force reflow before re-enabling transitions
    if (overlayContent) {
        void overlayContent.offsetHeight;
        overlayContent.style.transition = '';
        // Reset width after initial positioning to prevent layout shift
        setTimeout(() => {
            overlayContent.style.width = '';
        }, 50);
    }

    // Focus the input and force keyboard to appear with same timing as comments
    setTimeout(() => {
        // Always use our robust keyboard opening function
        forceKeyboardOpen(labelEditInput);

        // Apply keyboard fix if available
        if (typeof window.setupKeyboardFix === 'function') {
            window.setupKeyboardFix(labelEditOverlay, overlayContent, labelEditInput);
        }
    }, 300); // Increased from 100ms to match comment overlay timing
}

// Hide label edit overlay
function hideLabelEditOverlay() {
    labelEditOverlay.classList.add('hidden');
    labelEditInput.value = '';
    restorePageScroll();
}

// Save the edited label
function saveEditedLabel() {
    const newLabel = labelEditInput.value.trim();
    if (newLabel) {
        // Save the old label for potential undo
        backupLabelText = metricLabelText;

        // Update with new label
        metricLabelText = newLabel;
        metricLabel.textContent = newLabel;
        localStorage.setItem(LS_KEYS.LABEL, newLabel);

        // Hide edit icon if label was modified
        updateLabelEditIcon();
    }
    hideLabelEditOverlay();
}

// Reset label to default "Total"
function resetLabelToDefault() {
    // Save the old label for potential undo
    backupLabelText = metricLabelText;

    // Reset to "Total"
    metricLabelText = 'Total';
    metricLabel.textContent = 'Total';
    localStorage.removeItem(LS_KEYS.LABEL);

    // Hide edit icon if label was modified
    updateLabelEditIcon();

    hideLabelEditOverlay();
}

// Update visibility of the edit icon based on whether the label has been modified
function updateLabelEditIcon() {
    // If the label is the default "Total", hide the edit icon when not hovering
    const isDefault = metricLabelText === 'Total' || !metricLabelText;
    if (isDefault) {
        metricLabelContainer.classList.remove('has-custom-label');
    } else {
        metricLabelContainer.classList.add('has-custom-label');
    }
}

// Event listeners for label edit overlay
metricLabelContainer.addEventListener('click', showLabelEditOverlay);

closeLabelEditButton.addEventListener('click', hideLabelEditOverlay);

saveLabelButton.addEventListener('click', saveEditedLabel);

deleteLabelButton.addEventListener('click', resetLabelToDefault);

// Close label edit overlay when clicking outside the content
labelEditOverlay.addEventListener('click', (event) => {
    if (event.target === labelEditOverlay) {
        hideLabelEditOverlay();
    }
});

// Update label edit icon visibility on initialization
updateLabelEditIcon();

// --- Core Rendering Logic ---

const mainContent = document.getElementById('mainContent');

// Add scroll handler for footer shadow
const bottomButtonsWrapper = document.querySelector('.bottom-buttons-wrapper');

// Update shadow based on scroll position
function updateFooterShadow() {
    if (mainContent.scrollHeight > mainContent.clientHeight &&
        mainContent.scrollTop < (mainContent.scrollHeight - mainContent.clientHeight)) {
        bottomButtonsWrapper.classList.add('shadow');
    } else {
        bottomButtonsWrapper.classList.remove('shadow');
    }
}

// Function to update opacity based on viewport visibility
function updateVisibleEntryOpacities() {
    requestAnimationFrame(() => {
        const containerRect = mainContent.getBoundingClientRect();
        const allEntries = Array.from(timestampList.querySelectorAll('.time-entry'));

        if (allEntries.length === 0) return;

        const minOpacity = 0.2;       // Minimum opacity is 10%
        const maxOpacity = 1.0;       // First entry gets 100% opacity
        const secondOpacity = 0.5;   // Second entry gets 75% opacity
        const opacityStep = 0.20;     // Each subsequent entry decreases by 5%
        const scrolledOpacity = 0.6;  // Scrolled away from top: all entries at 60% opacity

        // Check if we're at the top with the most recent entry visible
        const mostRecentEntry = allEntries[0]; // First entry is most recent
        const mostRecentRect = mostRecentEntry.getBoundingClientRect();
        const isAtTop = mostRecentRect.top >= containerRect.top - 10; // Allow slight offset

        if (isAtTop) {
            // We're at the top, use gradual opacity
            const visibleEntries = allEntries.filter(entry => {
                const entryRect = entry.getBoundingClientRect();
                return (
                    entryRect.top < containerRect.bottom &&
                    entryRect.bottom > containerRect.top
                );
            });

            visibleEntries.forEach((entry, index) => {
                let targetOpacity;
                if (index === 0) {
                    targetOpacity = maxOpacity;  // First entry: 100%
                } else if (index === 1) {
                    targetOpacity = secondOpacity; // Second entry: 75%
                } else {
                    // If we have 16+ entries, calculate opacity based on position
                    if (visibleEntries.length >= 16) {
                        // Calculate opacity by distributing between 75% and 10% for entries after the second
                        const totalRemaining = visibleEntries.length - 2;
                        const position = index - 1; // Position after the second entry (index = 2 means position = 1)
                        const opacityRange = secondOpacity - minOpacity; // Range from 75% to 10%

                        // Calculate opacity proportionally based on position
                        targetOpacity = secondOpacity - (opacityRange * (position / totalRemaining));
                    } else {
                        // For fewer than 16 entries, decrease by 5% for each entry starting at 70%
                        targetOpacity = secondOpacity - ((index - 1) * opacityStep);
                    }

                    // Don't go below minimum opacity of 10%
                    targetOpacity = Math.max(minOpacity, targetOpacity);
                }
                entry.style.opacity = targetOpacity;
            });

            // Entries not in viewport get minimum opacity of 10%
            allEntries.forEach(entry => {
                if (!visibleEntries.includes(entry)) {
                    entry.style.opacity = minOpacity;
                }
            });
        } else {
            // We've scrolled away from top, all visible entries get 60% opacity
            allEntries.forEach(entry => {
                const entryRect = entry.getBoundingClientRect();
                if (entryRect.bottom > containerRect.top && entryRect.top < containerRect.bottom) {
                    // Entry is visible in viewport
                    entry.style.opacity = scrolledOpacity;
                } else {
                    // Entry is not visible
                    entry.style.opacity = minOpacity;
                }
            });
        }
    });
}

// More efficient throttle that uses requestAnimationFrame
function rafThrottle(callback) {
    let requestId = null;

    return function () {
        if (requestId === null) {
            requestId = requestAnimationFrame(() => {
                callback();
                requestId = null;
            });
        }
    };
}

// Replace current throttle with RAF-based throttle
const throttledUpdateOpacities = rafThrottle(updateVisibleEntryOpacities);

// Listen for scroll events using the throttled function
mainContent.addEventListener('scroll', throttledUpdateOpacities);
window.addEventListener('resize', throttledUpdateOpacities);

// --- Grouping and Rendering Entries ---

// Group entries by date for organized display
function groupEntriesByDate(entries) {
    const groups = [];
    let lastKey = '';
    let lastGroup = null;

    entries.forEach(entry => {
        const entryDate = new Date(entry.date);
        const dateKey = formatGroupHeader(entryDate);
        if (dateKey !== lastKey) {
            lastGroup = { dateKey, date: entryDate, entries: [] };
            groups.push(lastGroup);
            lastKey = dateKey;
        }
        lastGroup.entries.push(entry);
    });
    return groups;
}

// Refactored renderTimestamps for nested .date-group structure
function renderTimestamps(isTracking = false) {
    // Sort entries: newest first
    trackedEntries.sort((a, b) => b.date - a.date);
    timestampList.innerHTML = '';

    const groups = groupEntriesByDate(trackedEntries);
    let newDateGroupEl = null;
    let newTimeEntryEl = null;

    groups.forEach((group, groupIdx) => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'date-group';
        // Animate new group if it's the newest and isTracking
        if (groupIdx === 0 && isTracking && group.entries.length === 1) {
            groupDiv.classList.add('new-date-group');
            newDateGroupEl = groupDiv;
        }

        const headerDiv = document.createElement('div');
        headerDiv.className = 'date-header';
        headerDiv.textContent = group.dateKey;
        groupDiv.appendChild(headerDiv);

        group.entries.forEach((entry, entryIdx) => {
            const entryDiv = document.createElement('div');
            entryDiv.className = 'time-entry';
            entryDiv.setAttribute('data-key', entry.date); // Use timestamp as unique key

            // Add has-comment class if the entry has a comment
            if (entry.comment) {
                entryDiv.classList.add('has-comment');
            }

            if (groupIdx === 0 && entryIdx === 0 && isTracking) {
                entryDiv.classList.add('new-entry');
                newTimeEntryEl = entryDiv;
                entryDiv.style.opacity = '0';
                entryDiv.style.transform = 'scale(0.5)'; // Start at 0.5x scale
                requestAnimationFrame(() => {
                    entryDiv.style.transition = 'opacity 0.3s, transform 0.3s';
                    entryDiv.style.opacity = '1';
                    entryDiv.style.transform = 'scale(1)';
                });
                setTimeout(() => {
                    entryDiv.classList.remove('new-entry');
                    entryDiv.style.transition = '';
                }, 350);
            } else {
                // All other entries: set opacity instantly, no transition
                entryDiv.style.transition = 'none';
                entryDiv.style.opacity = '1';
                entryDiv.style.transform = 'scale(1)';
            }

            // Create time div
            const timeDiv = document.createElement('div');
            timeDiv.className = 'time';
            timeDiv.textContent = formatTime(new Date(entry.date));

            // Create comment icon (shown when entry has a comment)
            const commentIcon = document.createElement('div');
            commentIcon.className = 'comment-icon';

            // Create comment edit icon (explicitly hidden to prevent hover issues)
            const commentEditIcon = document.createElement('div');
            commentEditIcon.className = 'comment-edit-icon';
            commentEditIcon.style.display = 'none'; // Force hide in JS too
            commentEditIcon.style.visibility = 'hidden'; // Double ensure it's hidden
            commentEditIcon.style.opacity = '0'; // Triple ensure it's hidden

            // Create add comment icon (shown on hover when entry has no comment)
            const addCommentIcon = document.createElement('div');
            addCommentIcon.className = 'add-comment-icon';

            // Add event listener to the entry div to open comment overlay
            entryDiv.addEventListener('click', () => {
                // Check if we're in a swipe action using the data-swiping attribute
                // or check the swipe detection function if available
                const isCurrentlySwipingAttr = entryDiv.getAttribute('data-swiping') === 'true';
                const isSwipingFunc = typeof window.isSignificantSwipeDetected === 'function' && window.isSignificantSwipeDetected();

                // Only open comment overlay if not swiping
                if (!isCurrentlySwipingAttr && !isSwipingFunc) {
                    showCommentOverlay(entry.date);
                }
            });

            // Add time div and all icons to entry div
            entryDiv.appendChild(timeDiv);
            entryDiv.appendChild(commentIcon);
            entryDiv.appendChild(commentEditIcon);
            entryDiv.appendChild(addCommentIcon);
            groupDiv.appendChild(entryDiv);
        });
        timestampList.appendChild(groupDiv);
    });

    // Add placeholder if empty
    if (trackedEntries.length === 0) {
        placeholderEntry.style.display = 'block';
        timestampList.classList.add('is-empty');
        timestampList.classList.remove('has-entries');
        timestampList.appendChild(placeholderEntry);
    } else {
        placeholderEntry.style.display = 'none';
        timestampList.classList.remove('is-empty');
        timestampList.classList.add('has-entries');
    }

    // Update reset button state based on entry count
    updateResetButtonState();

    // Save entries to localStorage
    localStorage.setItem(LS_KEYS.ENTRIES, JSON.stringify(trackedEntries));
    updateFooterShadow();
    // After rendering, set correct opacities for all entries
    requestAnimationFrame(updateVisibleEntryOpacities);
    return { newDateGroupEl, newTimeEntryEl };
}

/**
 * Updates the reset button state based on whether there are entries
 * - Makes button non-clickable when there are no entries
 * - Enables the button when entries exist
 */
function updateResetButtonState() {
    // If no entries, disable the reset button
    if (trackedEntries.length === 0) {
        resetButton.classList.add('inactive');
        resetButton.setAttribute('aria-disabled', 'true');

        // Make the button non-clickable by adding a disabled attribute
        resetButton.disabled = true;

        console.log("Reset button disabled - no entries to reset");
    } else {
        resetButton.classList.remove('inactive');
        resetButton.removeAttribute('aria-disabled');

        // Make the button clickable by removing the disabled attribute
        resetButton.disabled = false;

        console.log("Reset button enabled - entries available to reset");
    }
}

// --- Theme Handling ---

// --- Updates theme-color meta tag
function updateThemeVisuals(theme) {
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
        const color = theme === 'dark' ? '#121212' : '#c1c1ff';
        themeColorMeta.setAttribute('content', color);
    }

    // Update menu theme display
    updateMenuThemeDisplay(theme);
}

// Updates the theme display in the settings menu
function updateMenuThemeDisplay(theme) {
    if (menuThemeText) {
        menuThemeText.textContent = theme === 'dark' ? 'Turn off dark mode' : 'Turn on dark mode';
    }
}

// Applies the selected theme (light/dark) by adding/removing class on body
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    localStorage.setItem(LS_KEYS.THEME, theme);
    updateThemeVisuals(theme); // This updates the bottom toolbar theme icon
    updateMenuThemeDisplay(theme); // This updates the menu theme icon and text
}

// --- Testing Functions ---
function addTestEntry(dateString) {
    const date = new Date(dateString);
    trackedEntries.push({
        date: date.getTime(),
        time: date.toLocaleTimeString()
    });
    totalCount++;
    updateTotalCount();
    renderTimestamps();
}

// Function to add multiple test entries
function addTestEntries() {
    const now = new Date(); // Base time for test entries

    // Helper to create date offsets easily
    const createDate = (offsetSeconds) => {
        const d = new Date(now);
        d.setSeconds(d.getSeconds() + offsetSeconds);
        return d.toISOString(); // Use ISO string for consistency
    };

    // Clear existing test entries first if needed
    // trackedEntries = [];
    // totalCount = 0;

    // Add entries simulating different seconds within the same minute/hour/day
    addTestEntry(createDate(-125)); // ~2 minutes ago
    addTestEntry(createDate(-120)); // ~2 minutes ago (different second)
    addTestEntry(createDate(-65));  // ~1 minute ago
    addTestEntry(createDate(-5));   // 5 seconds ago
    addTestEntry(createDate(-2));   // 2 seconds ago
    addTestEntry(createDate(0));    // Now

    // Example of an entry from a different day (if needed for testing headers)
    // const yesterday = new Date(now);
    // yesterday.setDate(yesterday.getDate() - 1);
    // addTestEntry(yesterday.toISOString());

    renderTimestamps(); // Re-render after adding all test entries
}

// Add testing mode toggle function
function toggleTestingMode() {
    isTestingMode = !isTestingMode;
    renderTimestamps();
    return isTestingMode;
}

// Add keyboard shortcut for testing mode (Ctrl/Cmd + Shift + T)
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
        const enabled = toggleTestingMode();
        console.log(`Testing mode ${enabled ? 'enabled' : 'disabled'}`);
    }
});

// Function to add a new timestamp entry
function addTimestamp() {
    const now = new Date();
    trackedEntries.push({
        date: now.getTime(),
        time: formatTime(now)
    });
}

/**
 * Delete a time entry by its timestamp key
 * @param {number} dateKey - The timestamp of the entry to delete
 */
function deleteTimeEntry(dateKey) {
    // Find the entry index in the tracked entries
    const entryIndex = trackedEntries.findIndex(entry => entry.date === dateKey);

    if (entryIndex !== -1) {
        // Backup the entry before deletion for undo
        deletedEntry = { ...trackedEntries[entryIndex] };

        // Remove the entry
        trackedEntries.splice(entryIndex, 1);

        // Update the total count
        totalCount--;

        // Save changes to localStorage
        updateTotalCount();
        localStorage.setItem(LS_KEYS.ENTRIES, JSON.stringify(trackedEntries));

        // Show the undo button
        showUndoForDeletedEntry();
    }
}

/**
 * Show the undo button for a deleted entry
 */
function showUndoForDeletedEntry() {
    // Set button text to show it's an Undo Delete action
    undoButton.innerHTML = '<span>Undo Delete</span>';

    // Clear any existing timers
    if (undoTimerId) {
        clearTimeout(undoTimerId);
    }
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    // Remove any existing classes
    undoButton.classList.remove('hidden');

    // Force browser to recognize the initial state before animating
    void undoButton.offsetHeight;

    // Add the show class which triggers the slide-in animation
    undoButton.classList.add('show');

    // Set a timer to auto-hide the undo button after 5 seconds
    undoTimerId = setTimeout(() => {
        hideUndoButton();
        // Clear the deleted entry backup after timeout
        deletedEntry = null;
    }, 5000);
}

// Function to show the track success checkmark animation
function showTrackSuccess() {
    trackButton.classList.add('success');
    setTimeout(() => {
        trackButton.classList.remove('success');
    }, 800); // Reduced duration from 1500ms to 800ms
}

// --- Version Display --- //
function displayVersion() {
    // Check if element exists before setting text content
    if (versionNumberElement) {
        // Assuming the version is hardcoded or fetched elsewhere
        // For now, let's use the text content from the HTML
        // versionNumberElement.textContent = 'v1.0.2';
    } else {
        console.warn('Version number element not found.');
    }
}

// --- Event Listeners ---

// --- Settings Menu Logic ---

// Open Settings Overlay
settingsButton.addEventListener('click', () => {
    settingsOverlay.classList.remove('hidden');
    // Prevent page scroll
    preventPageScroll();
    // Update menu items based on current state when opening
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    updateMenuThemeDisplay(currentTheme);
});

// Close Settings Overlay (using the close button)
closeSettingsButton.addEventListener('click', () => {
    settingsOverlay.classList.add('hidden');
    restorePageScroll();
});

// Close Settings Overlay (clicking outside the content)
settingsOverlay.addEventListener('click', (event) => {
    // Check if the click is directly on the overlay background
    if (event.target === settingsOverlay) {
        settingsOverlay.classList.add('hidden');
        restorePageScroll();
    }
});

// Add click listener for the theme toggle button inside the menu
menuThemeToggle.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    // applyTheme handles updating visuals and saving
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    // Close the menu immediately
    settingsOverlay.classList.add('hidden');
    restorePageScroll();
});

// --- Add click handler for the reset button
resetButton.addEventListener('click', () => {
    console.log("Reset button clicked.");
    // If the button is disabled or list is already empty, do nothing
    if (resetButton.disabled || trackedEntries.length === 0) {
        console.log("Reset clicked - Button disabled or list already empty.");
        return; // Exit early
    }

    // Backup the current data
    backupCurrentData();

    // Immediately perform the reset (changed behavior)
    performReset();

    // Show the Undo button instead of countdown
    showUndoButton();

    // Auto-close the menu after starting the reset process
    settingsOverlay.classList.add('hidden');
    restorePageScroll();
});

// --- Backup and Restore Functions ---

// Function to backup the current data for the undo feature
function backupCurrentData() {
    console.log("Backing up current data...");
    backupTotalCount = totalCount;
    backupTrackedEntries = JSON.parse(JSON.stringify(trackedEntries)); // Deep clone the array
    backupLabelText = metricLabelText; // Add backup of the metric label text
    resetPending = true; // Set the flag indicating a reset is pending
    console.log("Data backup complete. Total count:", backupTotalCount, "Entries:", backupTrackedEntries.length, "Label:", backupLabelText);
}

// Function to restore data from backup
function restoreFromBackup() {
    console.log("Restoring from backup...");
    if (backupTrackedEntries.length > 0) {
        totalCount = backupTotalCount;
        trackedEntries = backupTrackedEntries;
        metricLabelText = backupLabelText; // Restore the label text

        // Save restored data to localStorage
        localStorage.setItem(LS_KEYS.COUNT, totalCount);
        localStorage.setItem(LS_KEYS.ENTRIES, JSON.stringify(trackedEntries));
        localStorage.setItem(LS_KEYS.LABEL, metricLabelText); // Save restored label to localStorage

        // Update UI
        updateTotalCount();
        updateMetricLabel(); // Update the label in the UI
        renderTimestamps();
        console.log("Data restored successfully.");
    } else {
        console.log("No backup data available to restore.");
    }

    // Reinitialize delete functionality to ensure swipe works on restored entries
    if (typeof window.reinitializeDeleteFunctionality === 'function') {
        window.reinitializeDeleteFunctionality();
    }

    // Hide the undo button
    hideUndoButton();
}

// Function to actually perform the reset operation
function performReset() {
    console.log("Performing reset immediately");

    // Clear data
    totalCount = 0;
    trackedEntries = [];

    // Reset the metric label to the default 'Total'
    metricLabelText = 'Total';

    // Clear Local Storage
    localStorage.removeItem(LS_KEYS.COUNT);
    localStorage.removeItem(LS_KEYS.ENTRIES);
    localStorage.removeItem(LS_KEYS.LABEL); // Remove the saved label
    console.log("Local storage cleared.");

    // Update UI
    updateTotalCount();
    updateMetricLabel(); // Update the label display
    renderTimestamps(); // Render the now empty list
    console.log("UI updated after reset.");
}

// --- Initial Page Load Setup ---
displayVersion();
updateTotalCount();
updateMetricLabel();
renderTimestamps();
setInitialEntryOpacities();
initializeLabel();
updateResetButtonState(); // Initialize reset button state on page load

// Apply saved theme or default to light, and trigger initial animations
const savedTheme = localStorage.getItem(LS_KEYS.THEME) || 'light';
applyTheme(savedTheme);
// Explicitly update menu theme display on initial load
updateMenuThemeDisplay(savedTheme);

// Initial opacity calculation after everything is set up
requestAnimationFrame(updateVisibleEntryOpacities);

// Function to set the correct opacity for all .time-entry elements immediately after rendering, with transitions disabled, to prevent flash. Call this function after renderTimestamps on page load and after tracking.
function setInitialEntryOpacities() {
    const allEntries = Array.from(timestampList.querySelectorAll('.time-entry'));
    allEntries.forEach(entry => {
        if (!entry.classList.contains('new-entry')) {
            entry.style.opacity = '1';
        }
    });
    // Force reflow
    void timestampList.offsetHeight;
    // Re-enable transitions
    allEntries.forEach(entry => {
        entry.style.transition = '';
    });
}

// FLIP Animation for smooth entry addition
function playFLIPAnimation(prevRects) {
    const newEls = Array.from(timestampList.querySelectorAll('.date-header, .time-entry'));
    newEls.forEach(el => {
        if (el.classList.contains('new-entry')) return; // Skip new entry for FLIP
        let key;
        if (el.classList.contains('time-entry')) {
            key = el.getAttribute('data-key');
        } else {
            key = el.textContent + el.className;
        }
        const prevRect = prevRects.get(key);
        if (prevRect) {
            const newRect = el.getBoundingClientRect();
            const deltaY = prevRect.top - newRect.top;
            if (Math.abs(deltaY) > 0.5) {
                el.style.transition = 'none';
                el.style.transform = `translateY(${deltaY}px)`;
                // Force reflow
                void el.offsetHeight;
                el.style.transition = 'transform 0.35s cubic-bezier(0.4,0.7,0.4,1.2)';
                el.style.transform = '';
            }
        }
    });
}

// Add click handler for the undo button
undoButton.addEventListener('click', () => {
    console.log("Undo button clicked");

    if (deletedCommentEntry && deletedCommentText) {
        // Restore the deleted comment
        const entryIndex = trackedEntries.findIndex(entry => entry.date === deletedCommentEntry.date);
        if (entryIndex !== -1) {
            trackedEntries[entryIndex].comment = deletedCommentText;

            // Save to localStorage
            localStorage.setItem(LS_KEYS.ENTRIES, JSON.stringify(trackedEntries));

            // Re-render timestamps to update UI
            renderTimestamps();

            // Reinitialize delete functionality to ensure swipe works after restoring a comment
            if (typeof window.reinitializeDeleteFunctionality === 'function') {
                window.reinitializeDeleteFunctionality();
            }
        }

        // Clear the deleted comment backup
        deletedCommentEntry = null;
        deletedCommentText = '';
    } else if (deletedEntry) {
        // Restore the deleted entry
        trackedEntries.push(deletedEntry);

        // Update the total count
        totalCount++;
        updateTotalCount();

        // Save changes to localStorage
        localStorage.setItem(LS_KEYS.ENTRIES, JSON.stringify(trackedEntries));

        // Re-render timestamps to update UI
        renderTimestamps();

        // Reinitialize delete functionality to ensure swipe works on restored entries
        if (typeof window.reinitializeDeleteFunctionality === 'function') {
            window.reinitializeDeleteFunctionality();
        }

        // Clear the deleted entry backup
        deletedEntry = null;
    } else {
        // Regular undo for reset operation
        restoreFromBackup();
    }

    // Hide the undo button
    hideUndoButton();
});

// Function to show the Undo button
function showUndoButton() {
    console.log("Showing undo button");
    // Set button text to show it's an Undo action
    undoButton.innerHTML = '<span>Undo</span>';

    // Clear any existing timers
    if (undoTimerId) {
        clearTimeout(undoTimerId);
    }
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    // Remove any existing classes
    undoButton.classList.remove('hidden');

    // Force browser to recognize the initial state before animating
    void undoButton.offsetHeight;

    // Add the show class which triggers the slide-in animation
    undoButton.classList.add('show');

    // Set a timer to auto-hide the undo button after 5 seconds
    undoTimerId = setTimeout(() => {
        hideUndoButton();
    }, 5000);
}

// Function to hide the undo button
function hideUndoButton() {
    console.log("hideUndoButton called.");
    // Clear any pending timers associated with the undo process
    if (undoTimerId) {
        console.log("Clearing undoTimerId.");
        clearTimeout(undoTimerId);
        undoTimerId = null;
    }
    if (countdownInterval) {
        console.log("Clearing countdownInterval.");
        clearInterval(countdownInterval);
        countdownInterval = null;
    }

    // Remove the show class to trigger the slide-out animation
    undoButton.classList.remove('show');

    // Add hidden class after animation completes
    setTimeout(() => {
        undoButton.classList.add('hidden');
    }, 300);

    // Reset the pending flag if the action was cancelled
    if (resetPending) {
        console.log("Reset was pending, setting resetPending to false in hideUndoButton.");
        resetPending = false;
    }
}

// --- Track Button Click Handler ---
trackButton.addEventListener('click', () => {
    if (trackButton.disabled || isAnimating) return; // Prevent double click or animation overlap
    trackButton.disabled = true;
    isAnimating = true;

    // 1. Record positions BEFORE render
    const prevEls = Array.from(timestampList.querySelectorAll('.date-header, .time-entry'));
    const prevRects = new Map();
    prevEls.forEach(el => {
        let key;
        if (el.classList.contains('time-entry')) {
            key = el.getAttribute('data-key');
        } else {
            // Use text content + class name for header uniqueness
            key = el.textContent + el.className;
        }
        if (key) { // Ensure key is not null/undefined
            prevRects.set(key, el.getBoundingClientRect());
        }
    });

    // 2. Update state and render
    totalCount++;
    updateTotalCount();
    addTimestamp();
    mainContent.scrollTop = 0; // Scroll to top to see new entry
    showTrackSuccess();
    const { newTimeEntryEl } = renderTimestamps(true); // Pass true for tracking animation
    setInitialEntryOpacities(); // Set initial opacities correctly

    // 3. Animate using FLIP
    playFLIPAnimation(prevRects);

    // 4. Reinitialize delete functionality for the new entry
    if (typeof window.reinitializeDeleteFunctionality === 'function') {
        window.reinitializeDeleteFunctionality();
    } else if (typeof window.setupEntryHoverFunctionality === 'function' && newTimeEntryEl) {
        // If full reinitialization isn't available, try to set up just the new entry
        window.setupEntryHoverFunctionality(newTimeEntryEl);
    }

    // 5. Re-enable after animation and ensure .new-entry styles are managed
    setTimeout(() => {
        trackButton.disabled = false;
        isAnimating = false;
        // Ensure the new-entry class is removed if the animation timeout didn't catch it
        if (newTimeEntryEl && newTimeEntryEl.classList.contains('new-entry')) {
            newTimeEntryEl.classList.remove('new-entry');
            newTimeEntryEl.style.transition = ''; // Clear inline transition
        }
    }, 450); // Slightly longer than animation duration
});

// Add a cache-busting reload mechanism
document.addEventListener('DOMContentLoaded', () => {
    // Setup mobile keyboard handling as soon as DOM is ready
    setupMobileKeyboardHandling();

    // Only reload once to avoid infinite reload loops
    const hasReloaded = sessionStorage.getItem('hasReloaded');

    if (!hasReloaded) {
        // Set the flag to prevent multiple reloads
        sessionStorage.setItem('hasReloaded', 'true');

        // Force a hard reload after a brief delay
        setTimeout(() => {
            window.location.reload(true); // true forces a reload from server, not cache
        }, 100);
    }

    // The rest of your DOMContentLoaded code continues...
    // Fix settings menu icon colors with a direct approach
    // Create a style element to inject our custom CSS
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        /* Force theme icon to correct color */
        #menuThemeIconLight, #menuThemeIconDark {
            background-color: var(--color-on-surface) !important;
        }
        
        /* Force reset button colors */
        #resetButton {
            color: var(--color-error) !important;
        }
        
        #resetButton .settings-icon {
            background-color: var(--color-error) !important;
        }
        
        #resetButton:hover {
            background-color: var(--color-error) !important;
            color: var(--color-on-error) !important;
        }
        
        #resetButton:hover .settings-icon {
            background-color: var(--color-on-error) !important;
        }
    `;

    // Inject the styles into the page
    document.head.appendChild(styleElement);
});

// Add a function to explicitly recalculate entry opacities that can be called from entry-delete.js
window.recalculateEntryOpacities = function () {
    // Force an immediate update of opacities
    updateVisibleEntryOpacities();

    // Scroll to top if this was the top entry deletion
    // This helps ensure the proper opacity gradient is applied
    const allEntries = Array.from(timestampList.querySelectorAll('.time-entry'));
    if (allEntries.length > 0) {
        const firstEntryRect = allEntries[0].getBoundingClientRect();
        const mainContentRect = mainContent.getBoundingClientRect();

        // If the top entry is not at the top of the viewport, scroll to top
        if (firstEntryRect.top > mainContentRect.top + 5) { // Small buffer
            mainContent.scrollTop = 0;
        }
    }
};

// --- Mobile Keyboard Handling --- 
// Function to adjust overlay position when mobile keyboard appears
function setupMobileKeyboardHandling() {
    // Check if visualViewport API is available (modern mobile browsers support this)
    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', handleVisualViewportResize);
        window.visualViewport.addEventListener('scroll', handleVisualViewportResize);
    }

    // Also listen for input focus events which often trigger keyboard
    commentTextarea.addEventListener('focus', () => {
        // Short delay to allow keyboard to appear before adjusting
        setTimeout(handleVisualViewportResize, 50);
    });

    labelEditInput.addEventListener('focus', () => {
        // Short delay to allow keyboard to appear before adjusting
        setTimeout(handleVisualViewportResize, 50);
    });
}

// Handle visual viewport changes (primarily triggered by keyboard)
function handleVisualViewportResize() {
    // Identify which overlay is currently visible
    const activeOverlay = getVisibleOverlay();
    if (!activeOverlay) return;

    const activeContent = activeOverlay.querySelector('.overlay-content');
    if (!activeContent) return;

    // Get viewport dimensions
    const viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    const windowHeight = window.innerHeight;

    // If viewport height is significantly less than window height, keyboard is likely visible
    if (viewportHeight < windowHeight * 0.75) {
        // Keyboard is visible, adjust the overlay content position
        activeContent.style.transition = 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)';
        activeContent.style.position = 'fixed';
        activeContent.style.top = '2%'; // Position it higher on the screen
        activeContent.style.maxHeight = `${viewportHeight * 0.9}px`; // Use more of the available space

        // Don't reposition input fields - let the user control scrolling manually
        // This prevents the automatic scrolling that was causing issues
    } else {
        // Keyboard is hidden, reset to default centered position with smooth animation
        activeContent.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';

        // Set the element to animated state
        requestAnimationFrame(() => {
            activeContent.style.position = 'relative';
            activeContent.style.top = '';
            activeContent.style.maxHeight = '80vh';
            activeContent.style.transform = '';

            // Don't reset scroll position - let user maintain their scroll position
            // activeContent.scrollTop = 0;
        });
    }
}

// Helper to find which overlay is currently visible
function getVisibleOverlay() {
    if (!commentOverlay.classList.contains('hidden')) return commentOverlay;
    if (!labelEditOverlay.classList.contains('hidden')) return labelEditOverlay;
    if (!settingsOverlay.classList.contains('hidden')) return settingsOverlay;
    return null;
}

// Helper to find the active input element in an overlay
function getActiveInput(overlay) {
    if (overlay === commentOverlay) return commentTextarea;
    if (overlay === labelEditOverlay) return labelEditInput;
    return null;
}

// Enhance show overlay functions to trigger keyboard handling
const originalShowCommentOverlay = showCommentOverlay;
showCommentOverlay = function (entryId) {
    originalShowCommentOverlay(entryId);
    // Trigger after a delay to ensure overlay is fully visible
    setTimeout(handleVisualViewportResize, 50);
};

const originalShowLabelEditOverlay = showLabelEditOverlay;
showLabelEditOverlay = function () {
    originalShowLabelEditOverlay();
    // Trigger after a delay to ensure overlay is fully visible
    setTimeout(handleVisualViewportResize, 50);
};

// --- Initial Page Load Setup ---
setupMobileKeyboardHandling();

// Function to prevent and restore page scroll
let savedScrollPosition = 0;

function preventPageScroll() {
    // Store current scroll position
    savedScrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Add a class to prevent scrolling on the body
    document.body.classList.add('overlay-open');

    // On mobile devices, don't use fixed positioning as it can cause layout issues with keyboards
    if (!isMobileDevice()) {
        // Apply fixed positioning to prevent scrolling while maintaining visual position
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `-${savedScrollPosition}px`;
    } else {
        // For mobile, use overflow hidden which is smoother with keyboards
        document.body.style.overflow = 'hidden';
    }
}

function restorePageScroll() {
    // Remove the overlay-open class
    document.body.classList.remove('overlay-open');

    if (!isMobileDevice()) {
        // Restore normal positioning for desktop
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        // Restore the scroll position
        window.scrollTo(0, savedScrollPosition);
    } else {
        // For mobile, just remove the overflow restriction
        document.body.style.overflow = '';
    }
}