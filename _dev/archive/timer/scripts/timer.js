/**
 * Pomodoro Timer - A 25/5 minute work/break timer
 * timer.js - Main timer functionality
 * Version: 1.0.0
 */

// Timer configuration
const TIMER_CONFIG = {
    work: {
        minutes: 25,
        label: 'Work Session',
        blockClass: 'work'
    },
    break: {
        minutes: 5,
        label: 'Break',
        blockClass: 'break'
    }
};

// Timer state
let timerState = {
    currentMode: 'work',  // 'work' or 'break'
    timeRemaining: TIMER_CONFIG.work.minutes * 60, // in seconds
    isRunning: false,
    intervalId: null,
    soundEnabled: true,
    completedPomodoros: 0,
    completedBreaks: 0,
    currentBlockIndex: 0
};

// DOM elements cache
const elements = {
    startButton: null,
    resetButton: null,
    settingsButton: null,
    soundButton: null,
    timerBlocks: null,
    timerDisplay: null,
    timerStatus: null,
    timerContent: null,
    timerCircles: null
};

// Initialize the timer
function initTimer() {
    // Cache DOM elements
    elements.startButton = document.getElementById('startTimerButton');
    elements.resetButton = document.getElementById('resetTimerButton');
    elements.settingsButton = document.getElementById('settingsButton');
    elements.soundButton = document.getElementById('soundToggleButton');
    elements.timerBlocks = document.querySelectorAll('.timer-block');
    elements.timerDisplay = document.querySelector('.timer-display');
    elements.timerStatus = document.querySelector('.timer-status');
    elements.timerContent = document.querySelector('.timer-content');
    elements.timerCircles = {
        work: document.querySelectorAll('.timer-circle.work'),
        break: document.querySelectorAll('.timer-circle.break')
    };

    // Initialize the timer display
    updateTimerDisplay();
    updateActiveBlock();
    updateCircleIndicators();

    // Initialize event listeners
    initEventListeners();

    // Load saved preferences
    loadThemePreference();
}

// Set up event listeners
function initEventListeners() {
    // Start/pause button
    elements.startButton.addEventListener('click', toggleTimer);

    // Reset button
    elements.resetButton.addEventListener('click', resetTimer);

    // Settings button
    elements.settingsButton = document.getElementById('settingsButton');
    elements.settingsButton.addEventListener('click', function () {
        console.log('Settings button clicked');
        showSettingsOverlay();

        // Apply button pressed effect temporarily
        elements.settingsButton.classList.add('button-pressed');
        setTimeout(() => elements.settingsButton.classList.remove('button-pressed'), 150);
    });

    // Close settings button
    const closeSettingsButton = document.getElementById('closeSettingsButton');
    if (closeSettingsButton) {
        closeSettingsButton.addEventListener('click', hideSettingsOverlay);
    }

    // Theme toggle
    const themeToggleButton = document.getElementById('menuThemeToggle');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }

    // Sound toggle button
    elements.soundButton.addEventListener('click', toggleSound);

    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

// Handle keyboard shortcuts
function handleKeyboardShortcuts(event) {
    // Space bar: toggle timer
    if (event.code === 'Space') {
        event.preventDefault();
        toggleTimer();
    }

    // 'R' key: reset timer
    if (event.code === 'KeyR') {
        resetTimer();
    }

    // 'M' key: toggle sound
    if (event.code === 'KeyM') {
        toggleSound();
    }
}

// Toggle timer between running and paused
function toggleTimer() {
    if (timerState.isRunning) {
        pauseTimer();
    } else {
        startTimer();
    }
}

// Start the timer
function startTimer() {
    timerState.isRunning = true;
    elements.timerContent.classList.add('timer-running');
    elements.timerContent.classList.remove('timer-paused');
    elements.startButton.querySelector('.track-button-text').textContent = 'Pause';

    // Start the interval
    timerState.intervalId = setInterval(updateTimer, 1000);

    // Apply button pressed effect temporarily
    elements.startButton.classList.add('button-pressed');
    setTimeout(() => elements.startButton.classList.remove('button-pressed'), 150);
}

// Pause the timer
function pauseTimer() {
    timerState.isRunning = false;
    elements.timerContent.classList.remove('timer-running');
    elements.timerContent.classList.add('timer-paused');
    elements.startButton.querySelector('.track-button-text').textContent = 'Resume';

    // Clear the interval
    clearInterval(timerState.intervalId);

    // Apply button pressed effect temporarily
    elements.startButton.classList.add('button-pressed');
    setTimeout(() => elements.startButton.classList.remove('button-pressed'), 150);
}

// Reset the timer
function resetTimer() {
    // Stop the timer if it's running
    if (timerState.isRunning) {
        pauseTimer();
    }

    // Reset to work mode
    timerState.currentMode = 'work';
    timerState.timeRemaining = TIMER_CONFIG.work.minutes * 60;
    timerState.completedPomodoros = 0;
    timerState.completedBreaks = 0;
    timerState.currentBlockIndex = 0;

    // Update UI
    elements.startButton.querySelector('.track-button-text').textContent = 'Start Timer';
    elements.timerContent.classList.remove('timer-running', 'timer-paused');

    updateTimerDisplay();
    updateActiveBlock();
    updateCircleIndicators();

    // Apply button pressed effect temporarily
    elements.resetButton.classList.add('button-pressed');
    setTimeout(() => elements.resetButton.classList.remove('button-pressed'), 150);
}

// Toggle sound on/off
function toggleSound() {
    timerState.soundEnabled = !timerState.soundEnabled;

    // Update UI
    if (timerState.soundEnabled) {
        elements.soundButton.classList.remove('sound-disabled');
    } else {
        elements.soundButton.classList.add('sound-disabled');
    }

    // Apply button pressed effect temporarily
    elements.soundButton.classList.add('button-pressed');
    setTimeout(() => elements.soundButton.classList.remove('button-pressed'), 150);
}

// Update the timer display
function updateTimerDisplay() {
    const minutes = Math.floor(timerState.timeRemaining / 60);
    const seconds = timerState.timeRemaining % 60;

    // Format display to always show two digits
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    // Update the main timer display
    elements.timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;

    // Update the timer status text
    elements.timerStatus.textContent = TIMER_CONFIG[timerState.currentMode].label;

    // Update document title
    document.title = `${formattedMinutes}:${formattedSeconds} - ${TIMER_CONFIG[timerState.currentMode].label}`;

    // Update timer block fill
    if (timerState.isRunning) {
        const totalSeconds = TIMER_CONFIG[timerState.currentMode].minutes * 60;
        const percentComplete = ((totalSeconds - timerState.timeRemaining) / totalSeconds) * 100;

        // Update the active block's fill height
        updateBlockFill(percentComplete);

        // Update the active circle's fill height
        updateCircleFill(percentComplete);
    }
}

// Update the fill height of the active block
function updateBlockFill(percentComplete) {
    elements.timerBlocks.forEach(block => {
        if (block.classList.contains('active')) {
            const fill = block.querySelector('.timer-block-fill');
            if (fill) {
                fill.style.height = `${percentComplete}%`;
            }
        }
    });
}

// Update the fill height of the active circle
function updateCircleFill(percentComplete) {
    const circles = timerState.currentMode === 'work'
        ? elements.timerCircles.work
        : elements.timerCircles.break;

    const activeCircleIndex = timerState.currentMode === 'work'
        ? timerState.completedPomodoros
        : timerState.completedBreaks;

    if (circles && circles[activeCircleIndex]) {
        circles[activeCircleIndex].classList.add('filling');
        circles[activeCircleIndex].style.setProperty('--fill-height', `${percentComplete}%`);
    }
}

// Update which timer block is active
function updateActiveBlock() {
    elements.timerBlocks.forEach(block => {
        // Remove active class from all blocks
        block.classList.remove('active');

        // Hide all timers
        const timer = block.querySelector('.block-timer');
        if (timer) {
            timer.classList.add('hidden');
        }
    });

    // Get the current block based on mode
    let currentBlock;
    if (timerState.currentMode === 'work') {
        currentBlock = elements.timerBlocks[0]; // First work block
    } else {
        currentBlock = elements.timerBlocks[2]; // First break block
    }

    // Mark as active
    if (currentBlock) {
        currentBlock.classList.add('active');

        // Show the timer
        const timer = currentBlock.querySelector('.block-timer');
        if (timer) {
            timer.classList.remove('hidden');
        }

        // Update the timer text
        updateBlockTimerText(currentBlock);
    }
}

// Update the timer text in active block
function updateBlockTimerText(block) {
    const minutes = Math.floor(timerState.timeRemaining / 60);
    const seconds = timerState.timeRemaining % 60;

    // Format display to always show two digits
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    const minutesElement = block.querySelector('.block-minutes');
    const secondsElement = block.querySelector('.block-seconds');

    if (minutesElement) {
        minutesElement.textContent = formattedMinutes;
    }

    if (secondsElement) {
        secondsElement.textContent = formattedSeconds;
    }
}

// Update circle indicators for progress
function updateCircleIndicators() {
    // Reset all circles
    elements.timerCircles.work.forEach(circle => {
        circle.classList.remove('active', 'filled', 'filling');
        circle.style.removeProperty('--fill-height');
    });

    elements.timerCircles.break.forEach(circle => {
        circle.classList.remove('active', 'filled', 'filling');
        circle.style.removeProperty('--fill-height');
    });

    // Mark completed circles as filled
    for (let i = 0; i < timerState.completedPomodoros; i++) {
        if (elements.timerCircles.work[i]) {
            elements.timerCircles.work[i].classList.add('filled');
        }
    }

    for (let i = 0; i < timerState.completedBreaks; i++) {
        if (elements.timerCircles.break[i]) {
            elements.timerCircles.break[i].classList.add('filled');
        }
    }

    // Mark current active circle
    const activeWorkIndex = timerState.currentMode === 'work'
        ? timerState.completedPomodoros
        : timerState.completedPomodoros - 1;

    const activeBreakIndex = timerState.currentMode === 'break'
        ? timerState.completedBreaks
        : timerState.completedBreaks - 1;

    if (timerState.currentMode === 'work' && elements.timerCircles.work[activeWorkIndex]) {
        elements.timerCircles.work[activeWorkIndex].classList.add('active');
    } else if (timerState.currentMode === 'break' && elements.timerCircles.break[activeBreakIndex]) {
        elements.timerCircles.break[activeBreakIndex].classList.add('active');
    }
}

// Update timer (called every second)
function updateTimer() {
    timerState.timeRemaining--;

    // Check if timer has completed
    if (timerState.timeRemaining < 0) {
        handleTimerComplete();
    } else {
        updateTimerDisplay();
    }
}

// Handle timer completion
function handleTimerComplete() {
    // Play sound if enabled
    if (timerState.soundEnabled) {
        playTimerCompleteSound();
    }

    // Switch modes
    if (timerState.currentMode === 'work') {
        // Completed a work session
        timerState.completedPomodoros++;
        timerState.currentMode = 'break';
        timerState.timeRemaining = TIMER_CONFIG.break.minutes * 60;
    } else {
        // Completed a break
        timerState.completedBreaks++;
        timerState.currentMode = 'work';
        timerState.timeRemaining = TIMER_CONFIG.work.minutes * 60;
    }

    // Update UI
    updateTimerDisplay();
    updateActiveBlock();
    updateCircleIndicators();
}

// Play timer complete sound
function playTimerCompleteSound() {
    // Implement sound playing here
    console.log('Playing timer complete sound');
    // Example:
    // const audio = new Audio('assets/sounds/timer-complete.mp3');
    // audio.play();
}

// Show settings overlay
function showSettingsOverlay() {
    const settingsOverlay = document.getElementById('settingsOverlay');
    if (settingsOverlay) {
        settingsOverlay.classList.add('show');
        settingsOverlay.classList.remove('hidden');
    }
}

// Hide settings overlay
function hideSettingsOverlay() {
    const settingsOverlay = document.getElementById('settingsOverlay');
    if (settingsOverlay) {
        settingsOverlay.classList.remove('show');
        settingsOverlay.classList.add('hidden');
    }
}

// Toggle theme
function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    // Save theme preference
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Function to load saved theme preference
function loadThemePreference() {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// Initialize timer when DOM is loaded
document.addEventListener('DOMContentLoaded', initTimer);