/**
 * Pomodoro Timer - A 25/5 minute work/break timer with circle visualization
 * main.js - Core functionality
 * Version: 1.0.0
 */

document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const timerCard = document.getElementById('timerCard');
    const timerContent = document.getElementById('timerContent');
    const timerDisplay = document.getElementById('timerDisplay');
    const timerMinutes = document.getElementById('timerMinutes');
    const timerSeconds = document.getElementById('timerSeconds');
    const timerStatus = document.getElementById('timerStatus');
    const currentMinutes = document.getElementById('currentMinutes');
    const currentSeconds = document.getElementById('currentSeconds');
    const currentBlockLabel = document.getElementById('currentBlock');
    const startTimerButton = document.getElementById('startTimerButton');
    const startButtonText = startTimerButton.querySelector('.track-button-text');
    const resetTimerButton = document.getElementById('resetTimerButton');
    const settingsButton = document.getElementById('settingsButton');
    const settingsOverlay = document.getElementById('settingsOverlay');
    const closeSettingsOverlay = document.getElementById('closeSettingsOverlay');
    const menuThemeToggle = document.getElementById('menuThemeToggle');
    const menuThemeText = document.getElementById('menuThemeText');
    const bottomButtonsWrapper = document.getElementById('bottomButtonsWrapper');
    const soundToggleFooter = document.getElementById('soundToggleFooter');

    // Audio element for focus drums
    const focusDrumsAudio = new Audio('assets/audio/focus-drums-25.mp3');

    // Add error handling for audio file
    focusDrumsAudio.addEventListener('error', function () {
        console.error('Error loading focus drums audio file');
        // Disable focus music if audio cannot be loaded
        localStorage.setItem('focusMusicEnabled', 'false');
        if (focusMusicToggleText) {
            focusMusicToggleText.textContent = "Enable Focus Music";
        }
    });

    // Timer circles
    const timerCircles = document.querySelectorAll('.timer-circle');

    // Timer variables
    let timerInterval;
    let isTimerRunning = false;
    let isPaused = false;
    let currentTime = 0;
    let currentBlock = 0; // 0-3 (work-break-work-break)
    let totalBlocks = 4;

    // Settings
    const workDuration = 25; // Fixed at 25 minutes
    const breakDuration = 5; // Fixed at 5 minutes
    let soundEnabled = localStorage.getItem('soundEnabled') !== 'false'; // default to true
    let focusMusicEnabled = localStorage.getItem('focusMusicEnabled') !== 'false'; // default to true

    // Focus music toggle elements (must be defined before updateSettingsUI)
    const focusMusicToggle = document.getElementById('focusMusicToggle');
    const focusMusicToggleText = document.getElementById('focusMusicToggleText');

    // Initialize the UI
    initTheme();
    updateSettingsUI();
    initializeTimer();

    // Initialize sound button state
    if (!soundEnabled) {
        soundToggleFooter.classList.add('sound-disabled');
    }

    // Event Listeners
    console.log("Setting up event listeners");
    console.log("startTimerButton:", startTimerButton);

    startTimerButton.addEventListener('click', function (e) {
        try {
            console.log("Start button clicked directly");
            toggleTimer();
        } catch (error) {
            console.error("Error in start button click handler:", error);
        }
    });
    resetTimerButton.addEventListener('click', resetTimer);
    settingsButton.addEventListener('click', showSettingsOverlay);
    closeSettingsOverlay.addEventListener('click', hideSettingsOverlay);
    menuThemeToggle.addEventListener('click', toggleTheme);
    soundToggleFooter.addEventListener('click', toggleSound);

    // Add focus music toggle event listener
    if (focusMusicToggle) {
        focusMusicToggle.addEventListener('click', toggleFocusMusic);
    }

    // Mobile refresh button
    const refreshBtn = document.getElementById('refreshButton');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function () {
            window.location.reload();
        });
    }

    // Button press feedback effect
    startTimerButton.addEventListener('mousedown', function () {
        this.classList.add('button-pressed');
    });

    startTimerButton.addEventListener('mouseup', function () {
        this.classList.remove('button-pressed');
    });

    startTimerButton.addEventListener('mouseout', function () {
        this.classList.remove('button-pressed');
    });

    resetTimerButton.addEventListener('mousedown', function () {
        this.classList.add('button-pressed');
    });

    resetTimerButton.addEventListener('mouseup', function () {
        this.classList.remove('button-pressed');
    });

    resetTimerButton.addEventListener('mouseout', function () {
        this.classList.remove('button-pressed');
    });

    soundToggleFooter.addEventListener('mousedown', function () {
        this.classList.add('button-pressed');
    });

    soundToggleFooter.addEventListener('mouseup', function () {
        this.classList.remove('button-pressed');
    });

    soundToggleFooter.addEventListener('mouseout', function () {
        this.classList.remove('button-pressed');
    });

    settingsButton.addEventListener('mousedown', function () {
        this.classList.add('button-pressed');
    });

    settingsButton.addEventListener('mouseup', function () {
        this.classList.remove('button-pressed');
    });

    settingsButton.addEventListener('mouseout', function () {
        this.classList.remove('button-pressed');
    });

    // Initialize the timer display
    function initializeTimer() {
        // Set the current block to 0 (first work period)
        currentBlock = 0;

        // Update the active block indicator
        updateActiveCircle();

        // Set the timer to the work duration
        currentTime = workDuration * 60;
        updateTimerDisplay();

        // Update the timer status and currentBlock label
        timerStatus.textContent = "Work Time";
        if (currentBlockLabel) {
            currentBlockLabel.textContent = "Work Time";
        }

        // Reset visual state
        timerContent.classList.remove('timer-paused');
        startButtonText.textContent = "Start Timer";

        // Reset all circles
        timerCircles.forEach(circle => {
            circle.classList.remove('filled', 'active');
        });

        // Set total time display to 1 hour
        timerMinutes.textContent = '60';
        timerSeconds.textContent = '00';

        // Set current time display
        if (currentMinutes && currentSeconds) {
            currentMinutes.textContent = String(workDuration).padStart(2, '0');
            currentSeconds.textContent = '00';
        }

        // Stop focus drums
        stopFocusDrums();
        isTimerRunning = false;
        isPaused = false;
    }

    // Update timer display (MM:SS)
    function updateTimerDisplay() {
        const minutes = Math.floor(currentTime / 60);
        const seconds = currentTime % 60;

        // Update current time display
        if (currentMinutes && currentSeconds) {
            currentMinutes.textContent = String(minutes).padStart(2, '0');
            currentSeconds.textContent = String(seconds).padStart(2, '0');
        }

        // Calculate total time remaining (60 minutes - elapsed time)
        let totalSecondsElapsed = 0;

        // Add completed blocks
        for (let i = 0; i < currentBlock; i++) {
            if (i % 2 === 0) { // Work periods
                totalSecondsElapsed += workDuration * 60;
            } else { // Break periods
                totalSecondsElapsed += breakDuration * 60;
            }
        }

        // Add time elapsed in current block
        let currentBlockTotal;
        if (currentBlock % 2 === 0) { // Work periods
            currentBlockTotal = workDuration * 60;
        } else { // Break periods
            currentBlockTotal = breakDuration * 60;
        }
        totalSecondsElapsed += (currentBlockTotal - currentTime);

        // Calculate remaining time out of 60 minutes
        const totalSecondsRemaining = 3600 - totalSecondsElapsed;
        const totalMinutesRemaining = Math.floor(totalSecondsRemaining / 60);
        const totalSecondsRemainder = totalSecondsRemaining % 60;

        // Update the main timer display
        timerMinutes.textContent = String(totalMinutesRemaining).padStart(2, '0');
        timerSeconds.textContent = String(totalSecondsRemainder).padStart(2, '0');

        // Update circle fills based on progress
        updateCircleFills(totalSecondsElapsed);
    }

    // Update which circle is active
    function updateActiveCircle() {
        // Calculate which circle should be active based on the current block
        let activeCircleIndex = 0;
        if (currentBlock === 0) {
            // First work period (circles 0-4)
            activeCircleIndex = Math.floor((workDuration * 60 - currentTime) / 300);
            if (activeCircleIndex > 4) activeCircleIndex = 4;
        } else if (currentBlock === 1) {
            // First break period (circle 5)
            activeCircleIndex = 5;
        } else if (currentBlock === 2) {
            // Second work period (circles 6-10)
            activeCircleIndex = 6 + Math.floor((workDuration * 60 - currentTime) / 300);
            if (activeCircleIndex > 10) activeCircleIndex = 10;
        } else if (currentBlock === 3) {
            // Second break period (circle 11)
            activeCircleIndex = 11;
        }

        // Update circle active states
        timerCircles.forEach((circle, index) => {
            if (index === activeCircleIndex) {
                circle.classList.add('active');
                // Set ARIA attributes for accessibility
                const blockType = currentBlock % 2 === 0 ? 'Work' : 'Break';
                const blockNumber = Math.floor(currentBlock / 2) + 1;
                const duration = currentBlock % 2 === 0 ? workDuration : breakDuration;
                const minutesLeft = Math.floor(currentTime / 60);
                const ariaLabel = `${blockType} period ${blockNumber}, ${minutesLeft} minutes remaining, active now`;
                circle.setAttribute('aria-label', ariaLabel);
            } else {
                circle.classList.remove('active');
            }
        });

        // Update current block label
        if (currentBlockLabel) {
            currentBlockLabel.textContent = currentBlock % 2 === 0 ? "Work Time" : "Break Time";
        }
    }

    // Update circle fills based on elapsed time
    function updateCircleFills(totalSecondsElapsed) {
        // Total of 12 circles representing 60 minutes (5 minutes per circle)
        // Calculate how many circles should be fully filled
        const fullCircles = Math.floor(totalSecondsElapsed / 300); // 300 seconds = 5 minutes

        // Calculate how much of the current circle should be filled (0-100%)
        const currentCircleSeconds = totalSecondsElapsed % 300;
        const currentCircleFillPercent = (currentCircleSeconds / 300);

        // Update circle fill states
        timerCircles.forEach((circle, index) => {
            if (index < fullCircles) {
                // Fully fill circles for passed time
                circle.classList.add('filled');
                circle.style.setProperty('--fill-height', '100%');
                circle.style.opacity = 0.9;
            } else if (index === fullCircles) {
                // Current circle being filled
                circle.classList.add('filling');

                // Set the fill percentage as a CSS variable for animation
                const fillPercentage = Math.max(5, Math.min(100, currentCircleFillPercent * 100));
                circle.style.setProperty('--fill-height', `${fillPercentage}%`);

                // Adjust opacity based on fill percentage
                circle.style.opacity = 0.3 + (currentCircleFillPercent * 0.7);
            } else {
                // Future circles - not filled
                circle.classList.remove('filled');
                circle.classList.remove('filling');
                circle.style.removeProperty('--fill-height');
                circle.style.opacity = "";
            }
        });
    }

    // Toggle timer start/pause
    function toggleTimer() {
        try {
            console.log("Toggle Timer called. isTimerRunning:", isTimerRunning, "isPaused:", isPaused);

            if (!isTimerRunning) {
                // Start the timer
                startTimer();
                startButtonText.textContent = "Pause Timer";
                isTimerRunning = true;
                isPaused = false;
                timerContent.classList.remove('timer-paused');

                // Start focus drums audio if it's a work block and enabled
                if (currentBlock % 2 === 0 && focusMusicEnabled && soundEnabled) {
                    playFocusDrums();
                }

                console.log("Timer started. isTimerRunning:", isTimerRunning);
            } else {
                if (isPaused) {
                    // Resume the timer
                    startTimer();
                    startButtonText.textContent = "Pause Timer";
                    isPaused = false;
                    timerContent.classList.remove('timer-paused');

                    // Resume focus drums if it's a work block and enabled
                    if (currentBlock % 2 === 0 && focusMusicEnabled && soundEnabled) {
                        focusDrumsAudio.play();
                    }
                } else {
                    // Pause the timer
                    pauseTimer();
                    startButtonText.textContent = "Resume Timer";
                    isPaused = true;
                    timerContent.classList.add('timer-paused');

                    // Pause focus drums
                    focusDrumsAudio.pause();
                }
            }
        } catch (error) {
            console.error("Error in toggleTimer function:", error);
        }
    }

    // Start the timer
    function startTimer() {
        console.log("startTimer called");
        clearInterval(timerInterval);

        timerInterval = setInterval(() => {
            console.log("Timer tick, currentTime:", currentTime);
            if (currentTime > 0) {
                currentTime--;
                updateTimerDisplay();
                updateActiveCircle();
            } else {
                // Timer finished for this block
                playSound();
                moveToNextBlock();
            }
        }, 1000);

        console.log("timerInterval created:", timerInterval);
    }

    // Pause the timer
    function pauseTimer() {
        clearInterval(timerInterval);
    }

    // Reset the timer
    function resetTimer() {
        clearInterval(timerInterval);
        stopFocusDrums();
        initializeTimer();
    }

    // Move to the next timer block
    function moveToNextBlock() {
        currentBlock = (currentBlock + 1) % totalBlocks;

        // Update the active circle indicator
        updateActiveCircle();

        // Set the appropriate duration based on whether it's a work or break period
        if (currentBlock % 2 === 0) { // Work periods (0, 2)
            currentTime = workDuration * 60;
            timerStatus.textContent = "Work Time";
            if (currentBlockLabel) {
                currentBlockLabel.textContent = "Work Time";
            }

            // Announce for screen readers
            timerStatus.setAttribute('aria-live', 'assertive');
            setTimeout(() => {
                timerStatus.setAttribute('aria-live', 'polite');
            }, 1000);

            // Start focus drums for work periods if enabled
            if (focusMusicEnabled && soundEnabled && isTimerRunning) {
                playFocusDrums();
            }
        } else { // Break periods (1, 3)
            currentTime = breakDuration * 60;
            timerStatus.textContent = "Break Time";
            if (currentBlockLabel) {
                currentBlockLabel.textContent = "Break Time";
            }

            // Announce for screen readers
            timerStatus.setAttribute('aria-live', 'assertive');
            setTimeout(() => {
                timerStatus.setAttribute('aria-live', 'polite');
            }, 1000);

            // Stop focus drums for break periods
            stopFocusDrums();
        }

        // Update the display
        updateTimerDisplay();
    }

    // Play sound when timer completes
    function playSound() {
        if (soundEnabled) {
            // Create a simple beep using the Web Audio API
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                oscillator.type = 'sine';
                oscillator.frequency.value = 880; // A5

                gainNode.gain.value = 0.5;

                oscillator.start();
                oscillator.stop(audioContext.currentTime + 0.5);
            } catch (e) {
                console.error('Error playing sound:', e);
            }
        }
    }

    // Toggle sound on/off
    function toggleSound() {
        soundEnabled = !soundEnabled;
        localStorage.setItem('soundEnabled', soundEnabled);
        updateSettingsUI();

        // Update sound button UI
        if (soundEnabled) {
            soundToggleFooter.classList.remove('sound-disabled');
            soundToggleFooter.setAttribute('aria-label', 'Disable Sound');
        } else {
            soundToggleFooter.classList.add('sound-disabled');
            soundToggleFooter.setAttribute('aria-label', 'Enable Sound');
        }

        // Handle focus drums based on new sound setting
        if (!soundEnabled) {
            stopFocusDrums();
        } else if (soundEnabled && focusMusicEnabled && isTimerRunning && currentBlock % 2 === 0) {
            playFocusDrums();
        }
    }

    // Play focus drums for work periods
    function playFocusDrums() {
        if (!focusMusicEnabled || !soundEnabled) return;

        try {
            // Reset the audio to the beginning if it's already played
            focusDrumsAudio.currentTime = 0;

            // Set to loop
            focusDrumsAudio.loop = true;

            // Set volume to a reasonable level
            focusDrumsAudio.volume = 0.6;

            // Add event listener for when audio ends to reset it smoothly
            focusDrumsAudio.addEventListener('ended', function () {
                focusDrumsAudio.currentTime = 0;
                focusDrumsAudio.play();
            });

            // Play the audio with better error handling
            const playPromise = focusDrumsAudio.play();

            // Handle the promise returned by play()
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error('Error playing focus drums:', error);
                    // If there's an autoplay error, temporarily disable focus music
                    if (error.name === 'NotAllowedError') {
                        console.warn('Autoplay prevented by browser. User interaction required.');
                    }
                });
            }
        } catch (error) {
            console.error('Error setting up focus drums:', error);
        }
    }

    // Stop focus drums
    function stopFocusDrums() {
        try {
            if (!focusDrumsAudio.paused) {
                focusDrumsAudio.pause();
            }
            focusDrumsAudio.currentTime = 0;
        } catch (error) {
            console.error('Error stopping focus drums:', error);
        }
    }

    // Toggle focus music on/off
    function toggleFocusMusic() {
        focusMusicEnabled = !focusMusicEnabled;
        localStorage.setItem('focusMusicEnabled', focusMusicEnabled);
        updateSettingsUI();

        // Handle focus drums based on new setting
        if (!focusMusicEnabled) {
            stopFocusDrums();
        } else if (focusMusicEnabled && soundEnabled && isTimerRunning && currentBlock % 2 === 0) {
            playFocusDrums();
        }
    }

    // Update settings UI
    function updateSettingsUI() {
        // Update sound button UI
        if (soundEnabled) {
            soundToggleFooter.classList.remove('sound-disabled');
            soundToggleFooter.setAttribute('aria-label', 'Disable Sound');
        } else {
            soundToggleFooter.classList.add('sound-disabled');
            soundToggleFooter.setAttribute('aria-label', 'Enable Sound');
        }

        // Update focus music toggle text if element exists
        if (focusMusicToggleText) {
            focusMusicToggleText.textContent = focusMusicEnabled ? "Disable Focus Music" : "Enable Focus Music";
        }
    }

    // Save sound and music settings
    function saveTimerSettings() {
        // We no longer save work and break durations since they're fixed
        localStorage.setItem('soundEnabled', soundEnabled);
        localStorage.setItem('focusMusicEnabled', focusMusicEnabled);
    }

    // Show settings overlay
    function showSettingsOverlay() {
        settingsOverlay.classList.remove('hidden');
        document.body.classList.add('overlay-open');
    }

    // Hide settings overlay
    function hideSettingsOverlay() {
        settingsOverlay.classList.add('hidden');
        document.body.classList.remove('overlay-open');
    }

    // Initialize theme based on stored preference
    function initTheme() {
        const darkModePreference = localStorage.getItem('darkMode');
        const isDarkMode = darkModePreference === 'true' ||
            (darkModePreference === null &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);

        if (isDarkMode) {
            document.documentElement.classList.add('dark-mode');
            document.body.classList.add('dark-mode');
            menuThemeText.textContent = 'Turn off dark mode';
        } else {
            document.documentElement.classList.remove('dark-mode');
            document.body.classList.remove('dark-mode');
            menuThemeText.textContent = 'Turn on dark mode';
        }
    }

    // Toggle theme between light and dark
    function toggleTheme() {
        const isDarkMode = document.documentElement.classList.contains('dark-mode');

        if (isDarkMode) {
            document.documentElement.classList.remove('dark-mode');
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
            menuThemeText.textContent = 'Turn on dark mode';
            document.getElementById('theme-color-meta').setAttribute('content', '#c1c1ff');
        } else {
            document.documentElement.classList.add('dark-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
            menuThemeText.textContent = 'Turn off dark mode';
            document.getElementById('theme-color-meta').setAttribute('content', '#121212');
        }
    }

    // Add shadow effect to the bottom bar when scrolling
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            bottomButtonsWrapper.classList.add('shadow');
        } else {
            bottomButtonsWrapper.classList.remove('shadow');
        }
    });
});
