document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const cells = document.querySelectorAll('.cell');
    const pauseBtn = document.getElementById('pause-btn');
    const playBtn = document.getElementById('play-btn');
    const restartBtn = document.getElementById('restart-btn');
    const testSoundBtn = document.getElementById('test-sound');
    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');
    const phaseTotalDisplay = document.getElementById('phase-total');
    const totalMinutesDisplay = document.getElementById('total-minutes');
    const totalSecondsDisplay = document.getElementById('total-seconds');
    const allSubcells = document.querySelectorAll('.subcell');

    // Create audio elements for sound effects with relative paths
    const clickSound1 = new Audio('assets/click-1.mp3');
    const clickSound2 = new Audio('assets/click-2.mp3');

    // Set volume to 50%
    clickSound1.volume = 0.05;
    clickSound2.volume = 0.05;

    // Preload sounds
    clickSound1.load();
    clickSound2.load();

    // Debug sound file paths
    console.log('Sound file path 1:', clickSound1.src);
    console.log('Sound file path 2:', clickSound2.src);
    console.log('Current page URL:', window.location.href);

    // Function to play sounds with error handling
    function playSound(sound) {
        console.log('Attempting to play sound');
        sound.currentTime = 0;
        sound.play().catch(error => {
            console.error('Error playing sound:', error);
        });
    }

    // Add sound effects to all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
            playSound(clickSound1);
        });

        button.addEventListener('mouseup', () => {
            playSound(clickSound2);
        });
    });

    // Add test sound functionality
    if (testSoundBtn) {
        testSoundBtn.addEventListener('click', () => {
            console.log('Test sound button clicked');
            // Try loading with different paths
            const sound1 = new Audio('assets/click-1.mp3');
            sound1.volume = 0.5; // Set volume to 50%
            sound1.play().catch(e => console.error('Failed with relative path:', e));

            // Try with absolute path from root
            setTimeout(() => {
                const sound2 = new Audio('/assets/click-1.mp3');
                sound2.volume = 0.5; // Set volume to 50%
                sound2.play().catch(e => console.error('Failed with absolute path:', e));
            }, 300);
        });
    }

    // Timer variables
    let timer;
    let isRunning = false;
    let totalSeconds = 25 * 60; // 25 minutes
    let currentPhase = 0;

    // Pomodoro phases (in minutes)
    const phases = [
        { duration: 25, cells: 5 }, // Work phase 1
        { duration: 5, cells: 1 },  // Break phase 1
        { duration: 25, cells: 5 }, // Work phase 2
        { duration: 5, cells: 1 }   // Break phase 2
    ];

    // Track which cells are active per phase
    let activeCellsInPhase = 0;
    let activeSubcellIndex = 0;

    // Format time for display
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return {
            minutes: mins < 10 ? '0' + mins : mins,
            seconds: secs < 10 ? '0' + secs : secs
        };
    }

    // Calculate total remaining time across all phases
    function calculateTotalRemainingTime() {
        let remainingSeconds = totalSeconds; // Current phase remaining time

        // Add remaining time from future phases
        for (let i = currentPhase + 1; i < phases.length; i++) {
            remainingSeconds += phases[i].duration * 60;
        }

        return remainingSeconds;
    }

    // Update timer displays
    function updateDisplay() {
        // Update current phase timer
        const time = formatTime(totalSeconds);
        minutesDisplay.textContent = time.minutes;
        secondsDisplay.textContent = time.seconds;

        // Set the total time for current phase
        const currentPhaseTotalMinutes = phases[currentPhase].duration;
        phaseTotalDisplay.textContent =
            (currentPhaseTotalMinutes < 10 ? '0' + currentPhaseTotalMinutes : currentPhaseTotalMinutes) +
            ':00';

        // Update total time remaining
        const totalRemainingTime = calculateTotalRemainingTime();
        const totalTime = formatTime(totalRemainingTime);
        totalMinutesDisplay.textContent = totalTime.minutes;
        totalSecondsDisplay.textContent = totalTime.seconds;
    }

    // Reset all cells and subcells
    function resetCells() {
        cells.forEach(cell => {
            cell.classList.remove('active');
        });

        allSubcells.forEach(subcell => {
            subcell.classList.remove('active', 'flash');
        });
    }

    // Update active cells and subcells based on time remaining
    function updateCells() {
        resetCells();

        // Calculate which cell and subcell should be active
        let completedCells = 0;
        let currentCellIndex = 0;

        // Activate completed cells for previous phases
        for (let i = 0; i < currentPhase; i++) {
            completedCells += phases[i].cells;
        }

        // Activate cells for current phase
        for (let i = 0; i < activeCellsInPhase; i++) {
            currentCellIndex = completedCells + i;
            if (currentCellIndex < cells.length) {
                const cell = cells[currentCellIndex];
                cell.classList.add('active');

                // Activate all subcells for fully completed cells
                const subcells = cell.querySelectorAll('.subcell');
                subcells.forEach(subcell => {
                    subcell.classList.add('active');
                });
            }
        }

        // Handle current in-progress cell
        currentCellIndex = completedCells + activeCellsInPhase;

        if (currentCellIndex < cells.length) {
            const currentCell = cells[currentCellIndex];
            const subcells = currentCell.querySelectorAll('.subcell');

            // Activate completed subcells
            for (let i = 0; i < activeSubcellIndex; i++) {
                if (i < subcells.length) {
                    subcells[i].classList.add('active');
                }
            }

            // Flash the current subcell
            if (activeSubcellIndex < subcells.length) {
                subcells[activeSubcellIndex].classList.add('flash');
            }
        }
    }

    // Start timer
    function startTimer() {
        if (isRunning) return;
        isRunning = true;

        // Initialize the first subcell to flash when pressing play
        if (totalSeconds === phases[currentPhase].duration * 60) {
            activeSubcellIndex = 0;
            updateCells();
        }

        timer = setInterval(() => {
            if (totalSeconds <= 0) {
                // Move to next phase
                currentPhase = (currentPhase + 1) % phases.length;
                totalSeconds = phases[currentPhase].duration * 60;
                activeCellsInPhase = 0;
                activeSubcellIndex = 0;

                updateDisplay();
                updateCells();
                return;
            }

            totalSeconds--;

            // Calculate progress
            const currentPhaseSeconds = phases[currentPhase].duration * 60;
            const elapsedSeconds = currentPhaseSeconds - totalSeconds;
            const minutesPerCell = 5; // Each cell represents 5 minutes
            const secondsPerCell = minutesPerCell * 60;
            const secondsPerSubcell = secondsPerCell / 5; // 5 subcells per cell

            // Calculate which cell and subcell should be active
            activeCellsInPhase = Math.floor(elapsedSeconds / secondsPerCell);
            const remainingSeconds = elapsedSeconds % secondsPerCell;
            activeSubcellIndex = Math.floor(remainingSeconds / secondsPerSubcell);

            updateDisplay();
            updateCells();
        }, 1000);
    }

    // Pause timer
    function pauseTimer() {
        clearInterval(timer);
        isRunning = false;

        // Stop the flashing but keep cells filled
        const flashingCells = document.querySelectorAll('.subcell.flash');
        flashingCells.forEach(cell => {
            cell.classList.remove('flash');
            cell.classList.add('active');
        });
    }

    // Restart timer
    function restartTimer() {
        pauseTimer();
        currentPhase = 0;
        totalSeconds = phases[currentPhase].duration * 60;
        activeCellsInPhase = 0;
        activeSubcellIndex = 0;

        updateDisplay();
        resetCells();
    }

    // Additional initialization for phase total display
    function initializeDisplay() {
        updateDisplay();

        // Set initial phase total time
        const currentPhaseTotalMinutes = phases[currentPhase].duration;
        phaseTotalDisplay.textContent =
            (currentPhaseTotalMinutes < 10 ? '0' + currentPhaseTotalMinutes : currentPhaseTotalMinutes) +
            ':00';
    }

    // Event listeners
    playBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    restartBtn.addEventListener('click', restartTimer);

    // Initialize display
    initializeDisplay();

    // Set up initial state where first subcell will flash when play is pressed
    resetCells();
});