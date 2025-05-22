document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const cells = document.querySelectorAll('.cell');
    const pauseBtn = document.getElementById('pause-btn');
    const playBtn = document.getElementById('play-btn');
    const restartBtn = document.getElementById('restart-btn');
    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');
    const phaseTotalDisplay = document.getElementById('phase-total');
    const totalMinutesDisplay = document.getElementById('total-minutes');
    const totalSecondsDisplay = document.getElementById('total-seconds');
    const allSubcells = document.querySelectorAll('.subcell');

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
    let overallCellIndex = 0;
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
            const elapsedSeconds = phases[currentPhase].duration * 60 - totalSeconds;
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
