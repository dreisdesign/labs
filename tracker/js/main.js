// --- DOM Element Selection ---
const totalCountElement = document.getElementById('totalCount');
const trackButton = document.querySelector('.track-button');
const resetButton = document.querySelector('.reset-button');
const timestampList = document.getElementById('timestampList');
const placeholderEntry = document.querySelector('.placeholder-entry');
const currentDateLabel = document.getElementById('currentDateLabel');
const themeToggleButton = document.getElementById('themeToggle');
const metricLabel = document.getElementById('metricLabel');
const versionNumberElement = document.getElementById('versionNumber'); // Added missing selector

// --- Constants and State Variables ---
const LS_KEYS = {
    COUNT: 'totalCount',
    ENTRIES: 'trackedEntries',
    LABEL: 'metricLabel',
    THEME: 'theme'
};

let isTestingMode = false;
let metricLabelText = localStorage.getItem(LS_KEYS.LABEL) || 'Total';

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
        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate() &&
            date1.getHours() === date2.getHours() &&
            date1.getMinutes() === date2.getMinutes() &&
            date1.getSeconds() === date2.getSeconds()
        );
    }
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
        const dateStr = date.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
        const timeStr = date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit', hour12: true });
        return `${dateStr} ${timeStr}`;
    }
    return formatDateHeader(date);
}

// Format date header
function formatDateHeader(date) {
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

// Sets the current date in the dedicated header element
function setCurrentDateLabel() {
    const today = new Date();
    const todayLabel = formatDateHeader(today);
    currentDateLabel.textContent = todayLabel;
    currentDateLabel.style.fontWeight = 'bold';
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

function renderTimestamps() {
    // Sort entries: newest first
    trackedEntries.sort((a, b) => b.date - a.date);

    // Clear existing time entries and date headers
    timestampList.querySelectorAll('.time-entry, .date-header').forEach(el => el.remove());

    let lastDate = null;

    // Render all entries (no limit)
    trackedEntries.forEach((entry, idx) => {
        const entryDate = new Date(entry.date);

        // Check if we need a new group header
        if (!lastDate || !isSameGroup(lastDate, entryDate)) {
            const headerDiv = document.createElement('div');
            headerDiv.className = 'date-header';
            headerDiv.textContent = formatGroupHeader(entryDate);
            timestampList.insertBefore(headerDiv, placeholderEntry);
            lastDate = entryDate;
        }

        // Create entry container
        const entryDiv = document.createElement('div');
        entryDiv.className = 'time-entry';
        if (idx === 0) entryDiv.classList.add('new-entry');

        // Create checkbox
        const checkboxDiv = document.createElement('div');
        checkboxDiv.className = 'entry-checkbox';
        checkboxDiv.textContent = '✔';

        // Create time container
        const timeDiv = document.createElement('div');
        timeDiv.className = 'time';
        timeDiv.textContent = formatTime(entryDate);

        entryDiv.appendChild(checkboxDiv);
        entryDiv.appendChild(timeDiv);
        timestampList.insertBefore(entryDiv, placeholderEntry);
    });

    // Toggle placeholder visibility
    if (trackedEntries.length === 0) {
        placeholderEntry.style.display = 'block';
        timestampList.classList.add('is-empty');
        timestampList.classList.remove('has-entries');
    } else {
        placeholderEntry.style.display = 'none';
        timestampList.classList.remove('is-empty');
        timestampList.classList.add('has-entries');
    }

    // Save entries to localStorage
    localStorage.setItem(LS_KEYS.ENTRIES, JSON.stringify(trackedEntries));
}

// --- Theme Handling ---

// Updates theme-color meta tag for Safari tab bar
function updateThemeColorMetaTag(theme) {
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
        // Set the color based on current theme
        const color = theme === 'dark' ? '#121212' : '#c1c1ff';
        themeColorMeta.setAttribute('content', color);
    }
}

// Applies the selected theme (light/dark) by adding/removing class on body
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    localStorage.setItem(LS_KEYS.THEME, theme); // Persist theme choice using constant

    // Update theme color meta tag for Safari
    updateThemeColorMetaTag(theme);
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
    // Yesterday's entries
    addTestEntry('2025-04-19 09:58:40');
    addTestEntry('2025-04-19 09:59:03');

    // Today's entries for comparison
    addTestEntry('2025-04-20 06:52:19');
    addTestEntry('2025-04-20 06:53:05');

    renderTimestamps();
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

// Toggle theme when button is clicked
themeToggleButton.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    applyTheme(currentTheme);
});

// Adds a new timestamp entry object to the array
function addTimestamp() {
    const now = new Date();
    const timestamp = now.toLocaleTimeString(); // Format time as locale string
    trackedEntries.push({
        date: now.getTime(), // Store date as timestamp for sorting
        time: timestamp
    });
    // Note: renderTimestamps() is called after this in the trackButton listener
}

// Handle click on the "Track" button
trackButton.addEventListener('click', () => {
    totalCount++;
    updateTotalCount(); // Update display and save count
    addTimestamp(); // Add new entry data
    renderTimestamps(); // Re-render the list and save entries
});

// Handle click on the "Reset" button
resetButton.addEventListener('click', () => {
    // If list is already empty, pulse the placeholder
    if (trackedEntries.length === 0) {
        console.log("Reset clicked - List is empty, attempting to pulse placeholder.");
        if (placeholderEntry.style.display !== 'block') {
            placeholderEntry.style.display = 'block';
        }
        placeholderEntry.classList.add('pulsing');
        setTimeout(() => {
            console.log("Removing pulsing class.");
            placeholderEntry.classList.remove('pulsing');
        }, 600); // Match pulse animation duration
    } else {
        // If list has entries, fade them out before clearing
        console.log("Reset clicked - Clearing entries.");
        timestampList.classList.add('clearing');
        setTimeout(() => {
            // Clear data
            totalCount = 0;
            trackedEntries = [];
            // Clear Local Storage using constants
            localStorage.removeItem(LS_KEYS.COUNT);
            localStorage.removeItem(LS_KEYS.ENTRIES);
            // Update UI
            updateTotalCount();
            timestampList.classList.remove('clearing'); // Remove animation class
            renderTimestamps(); // Render the now empty list
        }, 300); // Match fadeOutClear animation duration
    }
});

// --- Initial Page Load Setup ---
displayVersion(); // Display the version number
setCurrentDateLabel(); // Set the date header
updateTotalCount(); // Display initial count from storage
updateMetricLabel(); // Display initial label from storage
renderTimestamps(); // Render initial list from storage
initializeLabel(); // Initialize the label

// Apply saved theme or default to light
const savedTheme = localStorage.getItem(LS_KEYS.THEME) || 'light';
applyTheme(savedTheme);