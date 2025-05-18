document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const cells = document.querySelectorAll('.cell');
    const pauseBtn = document.getElementById('pause-btn');
    const playBtn = document.getElementById('play-btn');
    const restartBtn = document.getElementById('restart-btn');
    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');

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

    // Format time for display
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return {
            minutes: mins < 10 ? '0' + mins : mins,
            seconds: secs < 10 ? '0' + secs : secs
        };
    }

    // Update timer display
    function updateDisplay() {
        const time = formatTime(totalSeconds);
        minutesDisplay.textContent = time.minutes;
        secondsDisplay.textContent = time.seconds;
    }

    // Reset all cells
    function resetCells() {
        cells.forEach(cell => {
            cell.classList.remove('active');
        });
    }

    // Update active cells based on time remaining
    function updateCells() {
        resetCells();

        // Activate cells based on current phase and time
        for (let i = 0; i <= overallCellIndex; i++) {
            if (i < cells.length) {
                cells[i].classList.add('active');
            }
        }
    }

    // Start timer
    function startTimer() {
        if (isRunning) return;

        isRunning = true;

        timer = setInterval(() => {
            if (totalSeconds <= 0) {
                // Move to next phase
                currentPhase = (currentPhase + 1) % phases.length;
                totalSeconds = phases[currentPhase].duration * 60;
                activeCellsInPhase = 0;

                // Calculate the starting cell index for the new phase
                overallCellIndex = 0;
                for (let i = 0; i < currentPhase; i++) {
                    overallCellIndex += phases[i].cells;
                }

                updateDisplay();
                updateCells();
                return;
            }

            totalSeconds--;

            // Calculate when to activate next cell
            const currentPhaseSeconds = phases[currentPhase].duration * 60;
            const secondsPerCell = currentPhaseSeconds / phases[currentPhase].cells;
            const elapsedSeconds = phases[currentPhase].duration * 60 - totalSeconds;

            const cellsToActivate = Math.floor(elapsedSeconds / secondsPerCell);

            if (cellsToActivate > activeCellsInPhase) {
                activeCellsInPhase = cellsToActivate;
                overallCellIndex = 0;

                // Calculate overall cell index
                for (let i = 0; i < currentPhase; i++) {
                    overallCellIndex += phases[i].cells;
                }
                overallCellIndex += activeCellsInPhase;

                updateCells();
            }

            updateDisplay();
        }, 1000);
    }

    // Pause timer
    function pauseTimer() {
        clearInterval(timer);
        isRunning = false;
    }

    // Restart timer
    function restartTimer() {
        pauseTimer();
        currentPhase = 0;
        totalSeconds = phases[currentPhase].duration * 60;
        activeCellsInPhase = 0;
        overallCellIndex = 0;

        updateDisplay();
        resetCells();
    }

    // Event listeners
    playBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    restartBtn.addEventListener('click', restartTimer);

    // Initialize display
    updateDisplay();
});
