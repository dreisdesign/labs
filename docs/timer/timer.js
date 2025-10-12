// Focus Timer - Clean and Simple
class FocusTimer {
    constructor() {
        // Timer state
        this.currentTime = 25 * 60; // Start at 25:00 (in seconds)
        this.isRunning = false;
        this.interval = null;
        this.lastTime = null; // For undo

        // Get DOM elements
        this.display = document.getElementById('timerDisplay');
        this.footer = document.querySelector('labs-footer-media-controls');
        this.overlay = document.getElementById('resetWarning');
        this.resetConfirm = document.getElementById('resetConfirm');
        this.resetCancel = document.getElementById('resetCancel');

        // Initialize
        this.updateDisplay();
        this.setupEvents();
    }

    setupEvents() {
        if (!this.footer) return;

        // Timer mode: Start → Pause ↔ Resume
        // The button label tells us what will happen on the NEXT click
        this.footer.addEventListener('media-action', (e) => {
            const buttonLabel = e.detail.label;

            if (buttonLabel === 'Pause') {
                // Button shows "Pause" - timer is running, ready to be paused
                this.start();
            } else if (buttonLabel === 'Resume') {
                // Button shows "Resume" - timer is paused, ready to be resumed
                this.pause();
            }
        });

        // Listen for reset button
        this.footer.addEventListener('reset-media', () => {
            this.showResetWarning();
        });

        // Timer display click/tap toggles the same as the button
        if (this.display) {
            this.display.addEventListener('click', () => {
                // Simulate a click on the footer button
                if (this.footer && this.footer.shadowRoot) {
                    const btn = this.footer.shadowRoot.getElementById('media-btn');
                    if (btn) btn.click();
                }
            });
        }

        // Overlay confirm/cancel
        if (this.resetConfirm) {
            this.resetConfirm.addEventListener('click', () => {
                this.hideResetWarning();
                this.doResetWithUndo();
            });
        }
        if (this.resetCancel) {
            this.resetCancel.addEventListener('click', () => {
                this.hideResetWarning();
            });
        }
        if (this.overlay) {
            this.overlay.addEventListener('close', () => {
                this.hideResetWarning();
            });
        }
        // Toast undo
    }

    showResetWarning() {
        if (this.overlay) this.overlay.style.display = '';
    }
    hideResetWarning() {
        if (this.overlay) this.overlay.style.display = 'none';
    }
    doResetWithUndo() {
        this.lastTime = this.currentTime;
        this.reset();
    }
    undoReset() {
        if (this.lastTime != null) {
            this.currentTime = this.lastTime;
            this.updateDisplay();
            this.lastTime = null;
        }
    }
    updateResetButtonVisibility() {
        if (!this.footer) return;
        const resetBtn = this.footer.shadowRoot && this.footer.shadowRoot.getElementById('reset-btn');
        if (resetBtn) {
            resetBtn.style.display = (this.currentTime === 25 * 60) ? 'none' : '';
        }
    }

    start() {
        if (this.isRunning) return;

        this.isRunning = true;
        this.interval = setInterval(() => {
            this.currentTime--;
            this.updateDisplay();

            // When we hit -5:00, reset to 25:00
            if (this.currentTime === -300) { // -5:00 in seconds
                this.reset();
            }
        }, 1000);
    }

    pause() {
        this.isRunning = false;
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    reset() {
        this.pause();
        this.currentTime = 25 * 60; // Reset to 25:00
        this.updateDisplay();
    }

    updateDisplay() {
        const isNegative = this.currentTime < 0;
        const absTime = Math.abs(this.currentTime);
        const minutes = Math.floor(absTime / 60);
        const seconds = absTime % 60;
        const timeString = `${isNegative ? '-' : ''}${minutes}:${seconds.toString().padStart(2, '0')}`;

        if (this.display) {
            this.display.textContent = timeString;
        }
        this.updateResetButtonVisibility();
    }
}

// Initialize when ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.timer = new FocusTimer();
    });
} else {
    window.timer = new FocusTimer();
}
