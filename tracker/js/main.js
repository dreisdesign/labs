// --- DOM Element Selection ---
const totalCountElement = document.getElementById('totalCount');
const trackButton = document.querySelector('.track-button');
const resetButton = document.querySelector('.reset-button');
const timestampList = document.getElementById('timestampList');
const placeholderEntry = document.querySelector('.placeholder-entry');
const currentDateLabel = document.getElementById('currentDateLabel');
const themeToggleButton = document.getElementById('themeToggle');
const metricLabel = document.getElementById('metricLabel');
const editLabelButton = document.querySelector('.edit-label-button');

// --- Constants and State Variables ---

// Load state from Local Storage or use defaults with validation
let totalCount = 0;
let trackedEntries = [];
let customLabel = localStorage.getItem('customLabel') || 'Total';

try {
    const storedCount = localStorage.getItem('totalCount');
    const storedEntries = localStorage.getItem('trackedEntries');

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

// Formats a date object into "Weekday Month Day Year" string
function formatImessageDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

// Sets the current date in the dedicated header element
function setCurrentDateLabel() {
    const today = new Date();
    const todayLabel = formatImessageDate(today);
    currentDateLabel.textContent = todayLabel;
    currentDateLabel.style.fontWeight = 'bold';
}

// Updates the total count display and saves it to Local Storage
function updateTotalCount() {
    totalCountElement.textContent = totalCount;
    localStorage.setItem('totalCount', totalCount);
}

// --- Label Editing Functions ---
function initializeLabel() {
    metricLabel.textContent = customLabel;
}

function saveLabel() {
    const newLabel = metricLabel.textContent.trim();
    if (newLabel) {
        customLabel = newLabel;
        localStorage.setItem('customLabel', customLabel);
    } else {
        metricLabel.textContent = customLabel;
    }
}

// --- Core Rendering Logic ---

// Renders the timestamp entries, handles empty state, and saves to Local Storage
function renderTimestamps() {
    // Sort entries: newest first
    trackedEntries.sort((a, b) => b.date - a.date);

    // Clear existing time entries (leaves placeholder intact)
    timestampList.querySelectorAll('.time-entry').forEach(el => el.remove());

    // Remove animation class from any previous new entry
    const existingEntries = timestampList.querySelectorAll('.time-entry');
    existingEntries.forEach(el => el.classList.remove('new-entry'));

    // Render each entry and insert it before the placeholder
    trackedEntries.forEach((entry, idx) => {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'time-entry';

        if (idx === 0) {
            entryDiv.classList.add('new-entry');
        }

        const checkboxDiv = document.createElement('div');
        checkboxDiv.className = 'entry-checkbox';
        checkboxDiv.textContent = '✔';

        const timeDiv = document.createElement('div');
        timeDiv.className = 'time';
        
        // If entry has formattedDate use it, otherwise format the date from timestamp
        const dateStr = entry.formattedDate || new Date(entry.date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
        timeDiv.textContent = `${dateStr}, ${entry.time}`;

        entryDiv.appendChild(checkboxDiv);
        entryDiv.appendChild(timeDiv);

        timestampList.insertBefore(entryDiv, placeholderEntry);
    });

    // Toggle placeholder visibility and list styling class
    if (trackedEntries.length === 0) {
        placeholderEntry.style.display = 'block';
        timestampList.classList.add('is-empty');
        timestampList.classList.remove('has-entries');
    } else {
        placeholderEntry.style.display = 'none';
        timestampList.classList.remove('is-empty');
        timestampList.classList.add('has-entries');
    }

    // Save the current state of entries to Local Storage
    localStorage.setItem('trackedEntries', JSON.stringify(trackedEntries));

    // --- Collapsing Logic (for long lists) ---
    // Note: This logic might need review if MAX_VISIBLE constant is intended to be used
    const mainContent = document.getElementById('mainContent');
    let collapseToggle = document.getElementById('collapseToggle');
    if (collapseToggle) collapseToggle.remove(); // Remove existing toggle if present

    const entriesToCollapse = Array.from(timestampList.children).filter(e => e.classList.contains('time-entry'));

    // Ensure all entries are visible for measurement
    entriesToCollapse.forEach(e => e.style.display = '');

    let needsCollapse = false;
    let visibleCount = 0;
    let totalHeight = 0;
    const maxHeight = mainContent.clientHeight; // Max height of the scrollable area

    // Check if total height exceeds available space
    for (let i = 0; i < entriesToCollapse.length; i++) {
        const el = entriesToCollapse[i];
        // el.style.display = ''; // Already done above
        totalHeight += el.getBoundingClientRect().height;
        if (totalHeight > maxHeight) {
            needsCollapse = true;
            break;
        }
        visibleCount++;
    }

    // If collapsing is needed, hide overflowing entries and add toggle button
    if (needsCollapse) {
        let runningHeight = 0;
        for (let i = 0; i < entriesToCollapse.length; i++) {
            const el = entriesToCollapse[i];
            runningHeight += el.getBoundingClientRect().height;
            if (runningHeight > maxHeight) {
                el.style.display = 'none'; // Hide entries that overflow
            } else {
                el.style.display = ''; // Ensure visible entries are displayed
            }
        }
        // Add "Show all" button
        const toggle = document.createElement('button');
        toggle.id = 'collapseToggle';
        toggle.className = 'collapse-toggle';
        toggle.textContent = `Show all (${trackedEntries.length})`;
        toggle.onclick = () => {
            entriesToCollapse.forEach(e => e.style.display = ''); // Show all entries
            toggle.style.display = 'none'; // Hide the toggle button
        };
        mainContent.appendChild(toggle); // Add button to the scrollable container
    }
}

// --- Theme Handling ---

// Applies the selected theme (light/dark) by adding/removing class on body
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', theme); // Persist theme choice
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
    const timeStr = now.toLocaleTimeString();
    const dateStr = now.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
    trackedEntries.push({
        date: now.getTime(),
        time: timeStr,
        formattedDate: dateStr
    });
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
            // Clear Local Storage
            localStorage.removeItem('totalCount');
            localStorage.removeItem('trackedEntries');
            // Update UI
            updateTotalCount();
            timestampList.classList.remove('clearing'); // Remove animation class
            renderTimestamps(); // Render the now empty list
        }, 300); // Match fadeOutClear animation duration
    }
});

metricLabel.addEventListener('click', () => {
    if (metricLabel.getAttribute('contenteditable') !== 'true') {
        metricLabel.contentEditable = true;
        metricLabel.focus();
    }
});

metricLabel.addEventListener('blur', () => {
    metricLabel.contentEditable = false;
    saveLabel();
});

metricLabel.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        metricLabel.blur();
    }
    if (e.key === 'Escape') {
        metricLabel.textContent = customLabel;
        metricLabel.contentEditable = false;
    }
});

// --- Initial Page Load Setup ---
setCurrentDateLabel(); // Set the date header
updateTotalCount(); // Display initial count from storage
renderTimestamps(); // Render initial list from storage
initializeLabel(); // Initialize the label

// Apply saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);