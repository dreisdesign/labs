// --- DOM Element Selection ---
const totalCountElement = document.getElementById('totalCount');
const trackButton = document.querySelector('.track-button');
const resetButton = document.querySelector('.reset-button');
const undoButton = document.getElementById('undoButton');
const timestampList = document.getElementById('timestampList');
const placeholderEntry = document.querySelector('.placeholder-entry');
const themeToggleButton = document.getElementById('themeToggle');
const themeIconSpan = document.getElementById('themeIconSpan');
const metricLabel = document.getElementById('metricLabel');
const versionNumberElement = document.querySelector('.version-number');
const settingsButton = document.getElementById('settingsButton'); // Added
const settingsOverlay = document.getElementById('settingsOverlay'); // Added
const closeSettingsButton = document.getElementById('closeSettingsButton'); // Added

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

// Backup variables to support undo functionality
let backupTotalCount = 0;
let backupTrackedEntries = [];
let undoTimerId = null;
let countdownInterval = null;
let countdownValue = 5; // Starting countdown value
let resetPending = false; // Flag to track if a reset is waiting for countdown

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
            Math.floor(date1.getSeconds() / 10) === Math.floor(date2.getSeconds() / 10)
        );
    }
    // Default: Group by day
    return isSameDay(date1, date2);
}

// Format time with seconds
function formatTime(date) {
    return date.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
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

        const minOpacity = 0.1;       // Minimum opacity is 10%
        const maxOpacity = 1.0;       // First entry gets 100% opacity
        const secondOpacity = 0.75;   // Second entry gets 75% opacity
        const opacityStep = 0.05;     // Each subsequent entry decreases by 5%
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
            const checkboxDiv = document.createElement('div');
            checkboxDiv.className = 'entry-checkbox';
            checkboxDiv.textContent = '✔';
            const timeDiv = document.createElement('div');
            timeDiv.className = 'time';
            timeDiv.textContent = formatTime(new Date(entry.date));
            entryDiv.appendChild(checkboxDiv);
            entryDiv.appendChild(timeDiv);
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

    // Save entries to localStorage
    localStorage.setItem(LS_KEYS.ENTRIES, JSON.stringify(trackedEntries));
    updateFooterShadow();
    // After rendering, set correct opacities for all entries
    requestAnimationFrame(updateVisibleEntryOpacities);
    return { newDateGroupEl, newTimeEntryEl };
}

// --- Theme Handling ---

// Updates theme-color meta tag and the theme icon mask
function updateThemeVisuals(theme, isPressing = false) {
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
        const color = theme === 'dark' ? '#121212' : '#c1c1ff';
        themeColorMeta.setAttribute('content', color);
    }
    if (themeIconSpan && themeToggleButton) {
        let iconPath;
        if (isPressing) {
            iconPath = theme === 'dark' ? 'assets/icons/mode=light-to-dark.svg' : 'assets/icons/mode=dark-to-light.svg';
        } else {
            iconPath = theme === 'dark' ? 'assets/icons/mode=dark.svg' : 'assets/icons/mode=light.svg';
        }
        themeIconSpan.style.webkitMaskImage = `url('${iconPath}')`;
        themeIconSpan.style.maskImage = `url('${iconPath}')`;

        // Apply color changes with transitions
        themeIconSpan.style.transition = 'transform 0.2s ease, background-color 0.3s ease';
        const nextTheme = theme === 'dark' ? 'Light' : 'Dark';
        themeToggleButton.setAttribute('aria-label', `Switch to ${nextTheme} Mode`);
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
    updateThemeVisuals(theme);
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

// Theme toggle press handlers for mouse and touch
themeToggleButton.addEventListener('mousedown', () => {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    updateThemeVisuals(currentTheme, true);
    themeToggleButton.classList.add('button-pressed');
});

themeToggleButton.addEventListener('mouseup', () => {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    updateThemeVisuals(currentTheme);
    themeToggleButton.classList.remove('button-pressed');
});

themeToggleButton.addEventListener('mouseleave', () => {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    updateThemeVisuals(currentTheme);
    themeToggleButton.classList.remove('button-pressed');
});

// Add touch support for theme toggle transitions
themeToggleButton.addEventListener('touchstart', () => {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    updateThemeVisuals(currentTheme, true);
    themeToggleButton.classList.add('button-pressed');
}, { passive: true });

themeToggleButton.addEventListener('touchend', () => {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    updateThemeVisuals(currentTheme);
    themeToggleButton.classList.remove('button-pressed');
});

themeToggleButton.addEventListener('touchcancel', () => {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    updateThemeVisuals(currentTheme);
    themeToggleButton.classList.remove('button-pressed');
});

// Update click handler to use regular icon after theme change
themeToggleButton.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    applyTheme(newTheme);
});

// --- Settings Menu Logic ---

// Open Settings Overlay
settingsButton.addEventListener('click', () => {
    settingsOverlay.classList.remove('hidden');
});

// Close Settings Overlay (using the close button)
closeSettingsButton.addEventListener('click', () => {
    settingsOverlay.classList.add('hidden');
});

// Close Settings Overlay (clicking outside the content)
settingsOverlay.addEventListener('click', (event) => {
    // Check if the click is directly on the overlay background
    if (event.target === settingsOverlay) {
        settingsOverlay.classList.add('hidden');
    }
});

// --- Initial Page Load Setup ---
displayVersion();
updateTotalCount();
updateMetricLabel();
renderTimestamps();
setInitialEntryOpacities();
initializeLabel();

// Apply saved theme or default to light, and trigger initial animations
const savedTheme = localStorage.getItem(LS_KEYS.THEME) || 'light';
applyTheme(savedTheme);

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
    console.log("Undo/Cancel button clicked."); // Added log
    restoreFromBackup();
    // console.log("Undo clicked - Restored previous entries."); // Original log moved into restoreFromBackup
});

// Function to display the reset countdown and handle reset after completion
function showResetCountdown() {
    console.log("showResetCountdown started."); // Added log
    // Reset countdown value
    countdownValue = 5;

    // Set button text to show it's a reset countdown
    undoButton.textContent = `Cancel (${countdownValue})`;

    // Clear any existing timers
    if (undoTimerId) {
        clearTimeout(undoTimerId);
    }
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    // First set the initial position (below viewport)
    undoButton.classList.remove('show');
    undoButton.classList.remove('hidden');

    // Force browser to recognize the initial state before animating
    void undoButton.offsetHeight;

    // Add the show class which triggers the slide-in animation
    undoButton.classList.add('show');

    // Start the countdown interval
    countdownInterval = setInterval(() => {
        countdownValue--;
        console.log(`Countdown: ${countdownValue}`); // Added log
        undoButton.textContent = `Cancel (${countdownValue})`;

        if (countdownValue <= 0) {
            console.log("Countdown finished, calling performReset."); // Added log
            // When countdown reaches zero, perform the actual reset
            performReset();
            clearInterval(countdownInterval);
            hideUndoButton();
        }
    }, 1000);

    // Set a timer as a backup to ensure reset happens
    undoTimerId = setTimeout(() => {
        console.log("Undo timer expired."); // Added log
        if (resetPending) {
            console.log("Reset was pending, calling performReset from timer."); // Added log
            performReset();
        }
        hideUndoButton();
    }, 5000);
}

// Function to actually perform the reset operation
function performReset() {
    if (!resetPending) {
        console.log("performReset called but resetPending is false. Aborting."); // Added log
        return; // Safety check
    }

    console.log("Performing reset after countdown");

    // Clear data
    totalCount = 0;
    trackedEntries = [];

    // Clear Local Storage
    localStorage.removeItem(LS_KEYS.COUNT);
    localStorage.removeItem(LS_KEYS.ENTRIES);
    console.log("Local storage cleared."); // Added log

    // Update UI
    updateTotalCount();
    renderTimestamps(); // Render the now empty list
    console.log("UI updated after reset."); // Added log

    // Reset the flag
    resetPending = false;
}

// Function to backup current data before reset
function backupCurrentData() {
    backupTotalCount = totalCount;
    // Deep copy the array of objects to prevent mutation issues
    backupTrackedEntries = JSON.parse(JSON.stringify(trackedEntries));
    console.log("Data backed up for potential undo.");
}

// Function to restore data from backup
function restoreFromBackup() {
    console.log("Restoring data from backup..."); // Added log
    totalCount = backupTotalCount;
    // Deep copy back if needed, though direct assignment might be okay if backup isn't mutated elsewhere
    trackedEntries = JSON.parse(JSON.stringify(backupTrackedEntries));

    updateTotalCount();
    renderTimestamps(); // Re-render with restored data
    hideUndoButton(); // Hide the undo/cancel button
    resetPending = false; // Ensure reset is no longer pending
    console.log("Data restored from backup.");
}

// Function to hide the undo button
function hideUndoButton() {
    console.log("hideUndoButton called."); // Added log
    // Clear any pending timers associated with the undo process
    if (undoTimerId) {
        console.log("Clearing undoTimerId."); // Added log
        clearTimeout(undoTimerId);
        undoTimerId = null;
    }
    if (countdownInterval) {
        console.log("Clearing countdownInterval."); // Added log
        clearInterval(countdownInterval);
        countdownInterval = null;
    }

    // Remove the show class to trigger the slide-out animation
    undoButton.classList.remove('show');

    // Reset the pending flag if the action was cancelled
    if (resetPending) {
        console.log("Reset was pending, setting resetPending to false in hideUndoButton."); // Added log
        resetPending = false;
    }

    // Optional: Add a small delay before setting visibility to hidden
    // to allow the animation to complete smoothly.
    // setTimeout(() => {
    //     if (!undoButton.classList.contains('show')) { // Check if it wasn't shown again
    //         undoButton.classList.add('hidden');
    //     }
    // }, 500); // Match transition duration
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

    // 4. Re-enable after animation and ensure .new-entry styles are managed
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

// --- Reset Button Click Handler ---
resetButton.addEventListener('click', () => {
    console.log("Reset button clicked."); // Added log
    // If list is already empty, do nothing or provide minimal feedback
    if (trackedEntries.length === 0) {
        console.log("Reset clicked - List is already empty.");
        resetButton.disabled = true;
        setTimeout(() => { resetButton.disabled = false; }, 300);
        return; // Exit early
    }

    // Backup the current data
    backupCurrentData();

    // Set the reset pending flag
    resetPending = true;
    console.log("Set resetPending = true"); // Added log

    // Show the reset warning countdown
    showResetCountdown();
});