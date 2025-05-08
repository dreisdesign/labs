// keyboard-fix.js - Fixes for mobile keyboard issues
// This script helps maintain the position of overlays when the on-screen keyboard opens

/**
 * Updates the position of an overlay when a keyboard appears
 * @param {HTMLElement} overlay - The overlay container element
 * @param {HTMLElement} overlayContent - The overlay content element
 * @param {HTMLElement} inputElement - The input element that will receive focus
 */
function setupKeyboardFix(overlay, overlayContent, inputElement) {
    if (!overlay || !overlayContent || !inputElement) return;

    // Store the original viewport height to detect keyboard appearance
    const originalViewportHeight = window.innerHeight;

    // Handle focus event which usually triggers keyboard on mobile
    inputElement.addEventListener('focus', () => {
        // Add class to indicate keyboard is open
        overlay.classList.add('keyboard-open');

        // Small delay to allow keyboard to fully appear
        setTimeout(() => {
            // On iOS, scroll the input into view
            inputElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Set position to ensure overlay content stays visible
            overlayContent.style.position = 'sticky';
            overlayContent.style.top = '1rem';
        }, 300);
    });

    // Handle resize events which occur when keyboard appears/disappears
    const handleResize = () => {
        if (window.innerHeight < originalViewportHeight * 0.75) {
            // Keyboard is likely open - ensure the overlay is positioned correctly
            overlay.classList.add('keyboard-open');

            // Force input element to be visible
            setTimeout(() => {
                inputElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 50);
        } else {
            // Keyboard likely closed
            overlay.classList.remove('keyboard-open');
            overlayContent.style.position = '';
            overlayContent.style.top = '';
        }
    };

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Clean up function to remove event listeners
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}

// Add method to window object to make it accessible
window.setupKeyboardFix = setupKeyboardFix;
