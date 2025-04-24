// --- DOM Element Selection ---
const totalCountElement = document.getElementById('totalCount');
const trackButton = document.querySelector('.track-button');
const resetButton = document.querySelector('.reset-button');
const timestampList = document.getElementById('timestampList');
const placeholderEntry = document.querySelector('.placeholder-entry');
// Remove pageDateHeading selector
const themeToggleButton = document.getElementById('themeToggle');
const themeIconSpan = document.getElementById('themeIconSpan'); // Update selector to span
const metricLabel = document.getElementById('metricLabel');
const versionNumberElement = document.querySelector('.version-number'); // Changed getElementById to querySelector by class

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

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

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
        // Group by second in testing mode
        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate() &&
            date1.getHours() === date2.getHours() &&
            date1.getMinutes() === date2.getMinutes() &&
            date1.getSeconds() === date2.getSeconds()
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
        // Show Date and Time (down to the second) for testing headers
        const dateStr = date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
        const timeStr = date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true });
        return `${dateStr}, ${timeStr}`;
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
    const containerRect = mainContent.getBoundingClientRect();
    const allEntries = Array.from(timestampList.querySelectorAll('.time-entry'));

    const visibleEntries = allEntries.filter(entry => {
        const entryRect = entry.getBoundingClientRect();
        // Check if entry is vertically within the container's viewport
        return (
            entryRect.top < containerRect.bottom &&
            entryRect.bottom > containerRect.top
        );
    });

    const visibleCount = visibleEntries.length;
    const minOpacity = 0.2;
    const maxOpacity = 1.0;
    const secondOpacity = 0.8; // Specific opacity for second item

    // Apply opacities based on position in the visible set
    visibleEntries.forEach((entry, index) => {
        let targetOpacity;
        if (index === 0) {
            // First visible entry is always 100%
            targetOpacity = maxOpacity;
        } else if (index === 1) {
            // Second visible entry is specifically 80%
            targetOpacity = secondOpacity;
        } else if (index >= 2) {
            // Position 3 and beyond: Linear distribution from 60% to 20%
            // Calculate step for remaining entries (position 3 and beyond)
            const remainingCount = Math.max(1, visibleCount - 2); // Avoid divide by zero
            const remainingStep = (secondOpacity - minOpacity) / remainingCount;
            targetOpacity = secondOpacity - (index - 1) * remainingStep;
            // Ensure we don't go below minimum opacity
            targetOpacity = Math.max(minOpacity, targetOpacity);
        }

        entry.style.opacity = targetOpacity;
    });

    // Entries not in viewport get minimum opacity
    allEntries.forEach(entry => {
        if (!visibleEntries.includes(entry)) {
            entry.style.opacity = minOpacity;
        }
    });
}

// Debounced version of the opacity update function
const debouncedUpdateOpacities = debounce(updateVisibleEntryOpacities, 50); // Adjust wait time (ms) as needed

// Listen for scroll events on the container and window resize
mainContent.addEventListener('scroll', debouncedUpdateOpacities);
window.addEventListener('resize', debouncedUpdateOpacities);

// Function to apply animations to timestamps
function applyTimestampAnimations(isTracking = false) {
    // Force reflow before adding the tracking-animation class
    timestampList.offsetHeight;

    // Add tracking animation class if needed
    if (isTracking) {
        timestampList.classList.add('tracking-animation');
    } else {
        timestampList.classList.remove('tracking-animation');
    }
}

// Function to render timestamps with proper animation timing
function renderTimestamps(isTracking = false) {
    // Sort entries: newest first
    trackedEntries.sort((a, b) => b.date - a.date);

    // Clear existing time entries and date headers
    timestampList.querySelectorAll('.time-entry, .date-header').forEach(el => el.remove());

    let lastDate = null;
    let dateHeaderAdded = new Set();

    // Render all entries
    trackedEntries.forEach((entry, idx) => {
        const entryDate = new Date(entry.date);
        const dateKey = formatGroupHeader(entryDate);

        // Add date header if needed
        if ((!lastDate || !isSameGroup(lastDate, entryDate)) && !dateHeaderAdded.has(dateKey)) {
            const headerDiv = document.createElement('div');
            headerDiv.className = 'date-header';
            headerDiv.textContent = dateKey;
            timestampList.insertBefore(headerDiv, placeholderEntry);
            lastDate = entryDate;
            dateHeaderAdded.add(dateKey);
        }

        // Create entry container
        const entryDiv = document.createElement('div');
        entryDiv.className = 'time-entry';

        if (idx === 0 && isTracking) {
            entryDiv.classList.add('new-entry');
            // Animate scale, opacity is handled by updateVisibleEntryOpacities
            requestAnimationFrame(() => {
                entryDiv.style.transform = 'scale(1)';
            });
        }

        // Create checkbox and time elements
        const checkboxDiv = document.createElement('div');
        checkboxDiv.className = 'entry-checkbox';
        checkboxDiv.textContent = '✔';

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

    // Update shadow and opacities after rendering
    updateFooterShadow();
    // Use requestAnimationFrame to ensure layout is stable before calculating opacities
    requestAnimationFrame(updateVisibleEntryOpacities);
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

    // Trigger animations after theme change
    requestAnimationFrame(() => {
        applyTimestampAnimations();
    });
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

// --- Track Button Touch/Click Handling ---

// Add touchstart listener to apply pressed style
trackButton.addEventListener('touchstart', (e) => {
    // Prevent triggering mouse events simultaneously on some devices
    // e.preventDefault(); 
    trackButton.classList.add('button-pressed');
}, { passive: true }); // Use passive: true if preventDefault is not needed, for better scroll performance

// Add touchend/touchcancel listeners to remove pressed style
const removePressedState = () => {
    trackButton.classList.remove('button-pressed');
};
trackButton.addEventListener('touchend', removePressedState);
trackButton.addEventListener('touchcancel', removePressedState);

// FLIP Animation for Track Button Click
trackButton.addEventListener('click', () => {
    // 1. First: Record positions of existing elements and their current opacities
    const existingEntries = Array.from(timestampList.querySelectorAll('.time-entry'));
    const firstPositions = existingEntries.map(el => ({
        element: el,
        top: el.getBoundingClientRect().top,
        opacity: parseFloat(el.style.opacity || 1) // Capture current opacity
    }));

    // Add new timestamp data
    totalCount++;
    updateTotalCount();
    addTimestamp(); // Adds to trackedEntries array

    // Force scroll to top BEFORE rendering to avoid jumpiness
    mainContent.scrollTop = 0;

    // Show the checkmark icon
    showTrackSuccess();

    // 2. Last: Render the list including the new item (which gets .new-entry class)
    const newEntryElement = renderTimestamps(true); // isTracking=true

    // Find all the newly rendered entries (except the newest one)
    const newlyRenderedEntries = Array.from(timestampList.querySelectorAll('.time-entry:not(.new-entry)'));

    // 3. Invert: Move old elements back to their original positions and shift opacities
    for (let i = 0; i < Math.min(firstPositions.length, newlyRenderedEntries.length); i++) {
        const pos = firstPositions[i];
        const element = newlyRenderedEntries[i]; // Match with corresponding newly rendered element

        // Shift opacity: entry gets opacity of entry above it (or 0.8 if it's now the second)
        if (i === 0) {
            // Former top entry becomes second entry with 80% opacity
            element.style.opacity = "0.8";
        } else if (i < firstPositions.length - 1) {
            // Middle entries shift down one position
            element.style.opacity = firstPositions[i - 1].opacity.toString();
        } else {
            // Last visible entry takes the opacity of the entry above it
            // or minimum opacity if it would go too low
            const shiftedOpacity = Math.max(0.2, firstPositions[i - 1].opacity);
            element.style.opacity = shiftedOpacity.toString();
        }

        // Apply transform for sliding animation
        const lastTop = element.getBoundingClientRect().top;
        const deltaY = pos.top - lastTop;

        // Only apply transform if position actually changed
        if (Math.abs(deltaY) > 0.5) { // Use a small threshold for floating point errors
            element.style.transition = 'none'; // Disable transition temporarily
            element.style.transform = `translateY(${deltaY}px)`;
        }
    }

    // Make sure the new entry has 100% opacity
    if (newEntryElement) {
        // After animation completes the opacity will be 1
        // Initial opacity 0 is set via CSS .new-entry class
    }

    // 4. Play: Animate elements to their final positions
    requestAnimationFrame(() => {
        newlyRenderedEntries.forEach(element => {
            // Re-enable transitions and clear transform to animate to final position
            if (element.style.transform !== '') {
                element.style.transition = ''; // Re-enable CSS transition
                element.style.transform = ''; // Animate back to natural position
            }
        });
    });
});

// Simplified click handler for reset button
resetButton.addEventListener('click', () => {
    // If list is already empty, do nothing or provide minimal feedback
    if (trackedEntries.length === 0) {
        console.log("Reset clicked - List is already empty.");
        // Optionally add a subtle visual cue like a brief button disabled state or border change
        resetButton.disabled = true;
        setTimeout(() => { resetButton.disabled = false; }, 300);
        return; // Exit early
    }

    // If list has entries, clear immediately without animation
    console.log("Reset clicked - Clearing entries.");
    // Clear data
    totalCount = 0;
    trackedEntries = [];
    // Clear Local Storage using constants
    localStorage.removeItem(LS_KEYS.COUNT);
    localStorage.removeItem(LS_KEYS.ENTRIES);
    // Update UI
    updateTotalCount();
    renderTimestamps(); // Render the now empty list
});

// --- Initial Page Load Setup ---
displayVersion();
updateTotalCount();
updateMetricLabel();
renderTimestamps(); // This now calls updateVisibleEntryOpacities indirectly
initializeLabel();

// Apply saved theme or default to light, and trigger initial animations
const savedTheme = localStorage.getItem(LS_KEYS.THEME) || 'light';
applyTheme(savedTheme);

// Initial opacity calculation after everything is set up
requestAnimationFrame(updateVisibleEntryOpacities);