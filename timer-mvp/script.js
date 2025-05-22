document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const cells = document.querySelectorAll('.cell');
    const pauseBtn = document.getElementById('pause-btn');
    const playBtn = document.getElementById('play-btn');
    const resetBtn = document.getElementById('Reset-btn'); // Fixed: Changed from ResetBtn to match the HTML ID
    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');
    const phaseTotalDisplay = document.getElementById('phase-total');
    const totalMinutesDisplay = document.getElementById('total-minutes');
    const totalSecondsDisplay = document.getElementById('total-seconds');
    const allSubcells = document.querySelectorAll('.subcell');

    // Create audio elements for sound effects and focus music
    const clickSound1 = new Audio('assets/click-1.mp3');
    const clickSound2 = new Audio('assets/click-2.mp3');
    const focusMusic = new Audio('assets/focus-drums-25.mp3');

    // Set volume
    clickSound1.volume = 0.05;
    clickSound2.volume = 0.05;
    focusMusic.volume = 0.2; // Set focus music to 20% volume

    // Preload sounds
    clickSound1.load();
    clickSound2.load();
    focusMusic.load();

    // Function to play sounds with error handling
    function playSound(sound) {
        sound.currentTime = 0;
        sound.play().catch(error => {
            console.error('Error playing sound:', error);
        });
    }

    // Add sound effects to buttons (except play button)
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        // Skip the play button
        if (button.id === 'play-btn') return;

        button.addEventListener('mousedown', () => {
            playSound(clickSound1);
        });

        button.addEventListener('mouseup', () => {
            playSound(clickSound2);
        });
    });

    // Timer variables
    let timer;
    let isRunning = false;
    let totalSeconds = 25 * 60; // 25 minutes
    let currentPhase = 0;

    // Pomodoro phases (in minutes)
    const phases = [
        { duration: 25, cells: 5, isFocusPhase: true }, // Work phase 1
        { duration: 5, cells: 1, isFocusPhase: false }, // Break phase 1
        { duration: 25, cells: 5, isFocusPhase: true }, // Work phase 2
        { duration: 5, cells: 1, isFocusPhase: false }  // Break phase 2
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
    function ResetCells() {
        cells.forEach(cell => {
            cell.classList.remove('active');
        });

        allSubcells.forEach(subcell => {
            subcell.classList.remove('active', 'flash');
        });
    }

    // Update active cells and subcells based on time remaining
    function updateCells() {
        ResetCells();

        // Calculate which cell and subcell should be active
        let completedCells = 0;
        let currentCellIndex = 0;

        // Calculate total completed cells from previous phases
        for (let i = 0; i < currentPhase; i++) {
            completedCells += phases[i].cells;
        }

        // Activate all cells from previous phases
        for (let i = 0; i < completedCells; i++) {
            if (i < cells.length) {
                const cell = cells[i];
                cell.classList.add('active');

                // Fill all subcells in previous phases
                const subcells = cell.querySelectorAll('.subcell');
                subcells.forEach(subcell => {
                    subcell.classList.add('active');
                });
            }
        }

        // Activate cells for current phase
        for (let i = 0; i < activeCellsInPhase; i++) {
            currentCellIndex = completedCells + i;
            if (currentCellIndex < cells.length) {
                const cell = cells[currentCellIndex];
                cell.classList.add('active');

                // Activate all subcells for fully completed cells in current phase
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
        console.log('Starting timer...');
        console.log('isRunning:', isRunning);
        console.log('currentPhase:', currentPhase);
        console.log('totalSeconds:', totalSeconds);

        if (isRunning) {
            console.log('Timer already running, returning');
            return;
        }
        isRunning = true;

        // Initialize the first subcell to flash when pressing play
        if (totalSeconds === phases[currentPhase].duration * 60) {
            console.log('At beginning of phase, initializing first subcell');
            activeSubcellIndex = 0;
            updateCells();

            // Start focus music if it's a focus phase and we're at the beginning
            if (phases[currentPhase].isFocusPhase) {
                focusMusic.currentTime = 0; // Reset to beginning
                focusMusic.play().catch(error => {
                    console.error('Error playing focus music:', error);
                });
            }
        } else {
            // Resume music if paused in a focus phase
            if (phases[currentPhase].isFocusPhase) {
                // Calculate how far into the music we should be based on elapsed time
                const elapsedSeconds = phases[currentPhase].duration * 60 - totalSeconds;
                focusMusic.currentTime = elapsedSeconds;
                focusMusic.play().catch(error => {
                    console.error('Error resuming focus music:', error);
                });
            }
        }

        timer = setInterval(() => {
            if (totalSeconds <= 0) {
                // Move to next phase
                currentPhase = (currentPhase + 1) % phases.length;
                totalSeconds = phases[currentPhase].duration * 60;
                activeCellsInPhase = 0;
                activeSubcellIndex = 0;

                // Handle focus music on phase change
                if (phases[currentPhase].isFocusPhase) {
                    // Start focus music for new work phase
                    focusMusic.currentTime = 0;
                    focusMusic.play().catch(error => {
                        console.error('Error playing focus music:', error);
                    });
                } else {
                    // Pause focus music during break phases
                    focusMusic.pause();
                }

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

        console.log('Timer started successfully');
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

        // Pause focus music
        if (phases[currentPhase].isFocusPhase && !focusMusic.paused) {
            focusMusic.pause();
        }
    }

    // Reset timer
    function ResetTimer() {
        pauseTimer();
        currentPhase = 0;
        totalSeconds = phases[currentPhase].duration * 60;
        activeCellsInPhase = 0;
        activeSubcellIndex = 0;

        // Stop focus music
        focusMusic.pause();
        focusMusic.currentTime = 0;

        updateDisplay();
        ResetCells();
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

    // Add click handler to cells for skipping
    function setupCellClickHandlers() {
        cells.forEach((cell, index) => {
            cell.addEventListener('click', (event) => {
                // Start timer if not running
                if (!isRunning) {
                    startTimer();
                }

                // Determine which phase and position this cell corresponds to
                let targetPhase = 0;
                let phaseStartCellIndex = 0;
                let cellsInCurrentPhase = 0;
                let found = false;

                // Find which phase this cell belongs to
                for (let i = 0; i < phases.length; i++) {
                    cellsInCurrentPhase = phases[i].cells;

                    if (index >= phaseStartCellIndex && index < phaseStartCellIndex + cellsInCurrentPhase) {
                        targetPhase = i;
                        found = true;
                        break;
                    }

                    phaseStartCellIndex += cellsInCurrentPhase;
                }

                if (!found) return; // Cell index out of range

                // Calculate position within the phase
                const cellIndexInPhase = index - phaseStartCellIndex;
                const minutesPerCell = 5; // Each cell represents 5 minutes

                // Calculate the time position for this cell
                currentPhase = targetPhase;
                const phaseSeconds = phases[currentPhase].duration * 60;
                const secondsPerCell = minutesPerCell * 60;

                // Calculate position within cell (click position)
                // Get click position in cell
                let subcellIndex = 0;

                // Check if user clicked on a subcell
                const clickedSubcell = event.target.closest('.subcell');
                if (clickedSubcell) {
                    subcellIndex = parseInt(clickedSubcell.getAttribute('data-index') || '0');
                    console.log('Clicked subcell index:', subcellIndex);
                }

                const secondsPerSubcell = secondsPerCell / 5;

                // Set timer to the correct position
                const targetSeconds = phaseSeconds - (cellIndexInPhase * secondsPerCell + subcellIndex * secondsPerSubcell);
                totalSeconds = Math.max(1, Math.floor(targetSeconds)); // Ensure at least 1 second

                // Update cell display and music position
                activeCellsInPhase = cellIndexInPhase;
                activeSubcellIndex = subcellIndex;

                // Update focus music position if active
                if (phases[currentPhase].isFocusPhase) {
                    const elapsedSeconds = phases[currentPhase].duration * 60 - totalSeconds;
                    focusMusic.currentTime = elapsedSeconds;

                    if (focusMusic.paused) {
                        focusMusic.play().catch(error => {
                            console.error('Error playing focus music:', error);
                        });
                    }
                } else {
                    focusMusic.pause();
                }

                updateDisplay();
                updateCells();

                // Show visual feedback
                cell.classList.add('clicked');
                setTimeout(() => {
                    cell.classList.remove('clicked');
                }, 300);
            });
        });
    }

    // Add click-to-skip functionality for subcells as well
    function setupSubcellClickHandlers() {
        allSubcells.forEach(subcell => {
            subcell.addEventListener('click', (event) => {
                // Prevent event from bubbling to parent cell
                event.stopPropagation();

                // Start timer if not running
                if (!isRunning) {
                    startTimer();
                }

                // Find parent cell
                const parentCell = subcell.closest('.cell');
                if (!parentCell) return;

                // Find the cell index in the grid
                const cellIndex = Array.from(cells).indexOf(parentCell);

                // Find the subcell index within the parent
                const subcellIndex = parseInt(subcell.getAttribute('data-index') || '0');

                // Now determine which phase this cell is in
                let targetPhase = 0;
                let phaseStartCellIndex = 0;
                let cellsInCurrentPhase = 0;

                // Find which phase this cell belongs to
                for (let i = 0; i < phases.length; i++) {
                    cellsInCurrentPhase = phases[i].cells;

                    if (cellIndex >= phaseStartCellIndex && cellIndex < phaseStartCellIndex + cellsInCurrentPhase) {
                        targetPhase = i;
                        break;
                    }

                    phaseStartCellIndex += cellsInCurrentPhase;
                }

                // Calculate position within the phase
                const cellIndexInPhase = cellIndex - phaseStartCellIndex;
                const minutesPerCell = 5; // Each cell represents 5 minutes

                // Calculate the time position
                currentPhase = targetPhase;
                const phaseSeconds = phases[currentPhase].duration * 60;
                const secondsPerCell = minutesPerCell * 60;
                const secondsPerSubcell = secondsPerCell / 5;

                // Set timer position precisely based on subcell
                const targetSeconds = phaseSeconds - (cellIndexInPhase * secondsPerCell + subcellIndex * secondsPerSubcell);
                totalSeconds = Math.max(1, Math.floor(targetSeconds)); // Ensure at least 1 second

                // Update active cell and subcell indices
                activeCellsInPhase = cellIndexInPhase;
                activeSubcellIndex = subcellIndex;

                // Update focus music position if active
                if (phases[currentPhase].isFocusPhase) {
                    const elapsedSeconds = phases[currentPhase].duration * 60 - totalSeconds;
                    focusMusic.currentTime = elapsedSeconds;

                    if (focusMusic.paused) {
                        focusMusic.play().catch(error => {
                            console.error('Error playing focus music:', error);
                        });
                    }
                } else {
                    focusMusic.pause();
                }

                updateDisplay();
                updateCells();

                // Show visual feedback
                subcell.classList.add('clicked');
                setTimeout(() => {
                    subcell.classList.remove('clicked');
                }, 300);
            });
        });
    }

    // Initialize click handlers
    setupCellClickHandlers();
    setupSubcellClickHandlers();

    // Initialize display
    initializeDisplay();

    // Set up initial state where first subcell will flash when play is pressed
    ResetCells();

    // Add CSS for clicked state
    const style = document.createElement('style');
    style.textContent = `
        .cell.clicked {
            transition: transform 0.3s, box-shadow 0.3s;
            transform: scale(0.95);
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
        }
    `;
    document.head.appendChild(style);

    // Event listeners
    playBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', ResetTimer);
});