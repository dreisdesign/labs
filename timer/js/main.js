/**
 * Pomodoro Timer - A 25/5 minute work/break timer
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

    // Timer blocks
    const timerBlocks = document.querySelectorAll('.timer-block');

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

    settingsButton.addEventListener('mousedown', function () {
        this.classList.add('button-pressed');
    });

    settingsButton.addEventListener('mouseup', function () {
        this.classList.remove('button-pressed');
    });

    settingsButton.addEventListener('mouseout', function () {
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

    // Initialize the timer display
    function initializeTimer() {
        // Set the current block to 0 (first work period)
        currentBlock = 0;

        // Update the active block indicator
        updateActiveBlock();

        // Set the timer to the work duration
        currentTime = workDuration * 60;
        updateTimerDisplay();
        updateBlockTimers();

        // Update the timer status
        timerStatus.textContent = "Work Time";

        // Reset visual state
        timerContent.classList.remove('timer-paused');
        startButtonText.textContent = "Start Timer";

        // Remove any existing fill elements
        document.querySelectorAll('.timer-block-fill').forEach(el => el.remove());

        // Initialize timer blocks with empty fill elements
        timerBlocks.forEach(block => {
            const fill = document.createElement('div');
            fill.className = 'timer-block-fill';
            fill.style.height = '0%';
            block.appendChild(fill);
        });

        // Set total time display to 1 hour
        timerMinutes.textContent = '60';
        timerSeconds.textContent = '00';

        // Stop focus drums
        stopFocusDrums();
        isTimerRunning = false;
        isPaused = false;
    }

    // Update timer display (MM:SS)
    function updateTimerDisplay() {
        const minutes = Math.floor(currentTime / 60);
        const seconds = currentTime % 60;

        // Update block timer for active block
        updateBlockTimers();

        // Update the main timer with current time
        const blockMinutes = document.querySelector('.block-minutes');
        const blockSeconds = document.querySelector('.block-seconds');
        if (blockMinutes && blockSeconds) {
            blockMinutes.textContent = String(minutes).padStart(2, '0');
            blockSeconds.textContent = String(seconds).padStart(2, '0');
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
    }

    // Update which block is active and show its timer
    function updateActiveBlock() {
        timerBlocks.forEach((block, index) => {
            if (index === currentBlock) {
                block.classList.add('active');
                // Show timer in active block
                const blockTimer = block.querySelector('.block-timer');
                if (blockTimer) {
                    blockTimer.classList.remove('hidden');
                }

                // Update ARIA labels for accessibility
                const blockType = index % 2 === 0 ? 'Work' : 'Break';
                const blockNumber = Math.floor(index / 2) + 1;
                const duration = index % 2 === 0 ? workDuration : breakDuration;
                const ariaLabel = `${blockType} period ${blockNumber}, ${duration} minutes, active now`;
                block.setAttribute('aria-label', ariaLabel);
                block.setAttribute('title', ariaLabel);
            } else {
                block.classList.remove('active');
                // Hide timer in inactive blocks
                const blockTimer = block.querySelector('.block-timer');
                if (blockTimer) {
                    blockTimer.classList.add('hidden');
                }

                // Update ARIA labels for inactive blocks
                const blockType = index % 2 === 0 ? 'Work' : 'Break';
                const blockNumber = Math.floor(index / 2) + 1;
                const duration = index % 2 === 0 ? workDuration : breakDuration;
                const ariaLabel = `${blockType} period ${blockNumber}, ${duration} minutes`;
                block.setAttribute('aria-label', ariaLabel);
                block.setAttribute('title', ariaLabel);
            }
        });
    }

    // Update the block timers with current times
    function updateBlockTimers() {
        timerBlocks.forEach((block, index) => {
            const minutes = block.querySelector('.block-minutes');
            const seconds = block.querySelector('.block-seconds');

            if (index === currentBlock) {
                // Update active block timer with current time
                const mins = Math.floor(currentTime / 60);
                const secs = currentTime % 60;

                if (minutes && seconds) {
                    minutes.textContent = String(mins).padStart(2, '0');
                    seconds.textContent = String(secs).padStart(2, '0');
                }
            }
        });
    }

    // Update timer fill
    function updateTimerFill() {
        const block = timerBlocks[currentBlock];
        const fill = block.querySelector('.timer-block-fill');

        if (!fill) return;

        let totalSeconds;
        if (currentBlock % 2 === 0) { // Work periods (0, 2)
            totalSeconds = workDuration * 60;
        } else { // Break periods (1, 3)
            totalSeconds = breakDuration * 60;
        }

        // Calculate exact percentage with 2 decimal precision for smoother animation
        const percentRemaining = ((totalSeconds - currentTime) / totalSeconds * 100).toFixed(2);
        fill.style.height = `${percentRemaining}%`;

        // Update aria attributes for accessibility
        block.setAttribute('aria-valuenow', currentTime);
        block.setAttribute('aria-valuemin', 0);
        block.setAttribute('aria-valuemax', totalSeconds);
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
                updateTimerFill();
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

        // Update the active block indicator
        updateActiveBlock();

        // Set the appropriate duration based on whether it's a work or break period
        if (currentBlock % 2 === 0) { // Work periods (0, 2)
            currentTime = workDuration * 60;
            timerStatus.textContent = "Work Time";

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
        updateBlockTimers();
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

            // Add event listener for when audio ends to restart it smoothly
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

        // Update block labels
        const workBlocks = document.querySelectorAll('.timer-block.work .block-label');
        const breakBlocks = document.querySelectorAll('.timer-block.break .block-label');

        workBlocks.forEach(block => {
            block.textContent = workDuration;
        });

        breakBlocks.forEach(block => {
            block.textContent = breakDuration;
        });

        // Update block timers
        timerBlocks.forEach((block, index) => {
            const minutes = block.querySelector('.block-minutes');
            if (minutes) {
                if (index % 2 === 0) { // Work blocks
                    minutes.textContent = String(workDuration).padStart(2, '0');
                } else { // Break blocks
                    minutes.textContent = String(breakDuration).padStart(2, '0');
                }
            }
        });
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
