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
        // Store original dimensions before any changes
        const originalWidth = overlayContent.offsetWidth;

        // Add class to indicate keyboard is open before any changes
        requestAnimationFrame(() => {
            // Use requestAnimationFrame for smoother transitions
            overlay.classList.add('keyboard-open');

            // Set explicit width to prevent layout shift
            overlayContent.style.width = originalWidth + 'px';

            // After a short delay, reset to CSS-controlled width
            setTimeout(() => {
                overlayContent.style.width = '';
            }, 100);
        });

        // Don't scroll or reposition immediately, wait for keyboard
        setTimeout(() => {
            // Use minimal direct DOM manipulation - let CSS handle most of the positioning
            if (window.innerHeight < originalViewportHeight * 0.8) {
                // Only make adjustments if the keyboard is actually visible
                overlayContent.style.transform = 'translateY(0)';
            }
        }, 350); // Slightly longer delay for iOS keyboard animation to complete
    });

    // Handle resize events which occur when keyboard appears/disappears
    const handleResize = () => {
        // Use a smoother threshold detection
        const keyboardThreshold = originalViewportHeight * 0.8;
        const isKeyboardOpen = window.innerHeight < keyboardThreshold;

        // Store current width before any changes
        const currentWidth = overlayContent.offsetWidth;

        // Debounce changes to prevent flickering
        clearTimeout(window.keyboardResizeTimer);
        window.keyboardResizeTimer = setTimeout(() => {
            if (isKeyboardOpen) {
                // Keyboard is open - Add class for CSS-driven positioning
                overlay.classList.add('keyboard-open');

                // Ensure width remains consistent during transition
                if (currentWidth > 0) {
                    overlayContent.style.width = currentWidth + 'px';

                    // After transition completes, let CSS take control again
                    setTimeout(() => {
                        overlayContent.style.width = '';
                    }, 300);
                }
            } else {
                // Keyboard is closed - set width to prevent shift during transition
                if (currentWidth > 0) {
                    overlayContent.style.width = currentWidth + 'px';
                }

                // After a brief delay, remove the class and restore CSS control
                setTimeout(() => {
                    overlay.classList.remove('keyboard-open');
                    // Remove any inline styles we added
                    overlayContent.style.transform = '';
                    overlayContent.style.width = '';
                }, 50);
            }
        }, 100); // Small debounce delay
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
