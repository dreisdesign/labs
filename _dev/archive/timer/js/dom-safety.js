/**
 * DOM Safety Utilities
 * 
 * This script provides safety and resilience for DOM operations.
 * It handles missing elements gracefully and prevents JavaScript errors.
 */

(function () {
    // Execute immediately but in isolated scope

    console.log('DOM safety script loaded');

    // Track missing elements to avoid repeated warnings
    const reportedMissingElements = {};

    // Specific elements to ignore in warnings (elements we've intentionally removed)
    const ignoredElements = {
        'focusMusicToggleFooter': true,
        'focusMusicToggle': true
    };

    // Patch getElementById to return safe proxies
    var originalGetElementById = document.getElementById;
    document.getElementById = function (id) {
        var element = originalGetElementById.call(document, id);
        if (!element) {
            // Only warn once per element ID and don't warn for intentionally removed elements
            if (!reportedMissingElements[id] && !ignoredElements[id]) {
                console.warn('Element not found by ID: ' + id);
                reportedMissingElements[id] = true;
            }

            // Return a safe proxy that won't cause errors when methods are called
            return new Proxy({}, {
                get: function (target, prop) {
                    if (prop === 'addEventListener') {
                        return function (event, handler) {
                            // Only log warnings for non-ignored elements
                            if (!reportedMissingElements[id + ':' + event] && !ignoredElements[id]) {
                                console.warn('Attempted to add ' + event + ' listener to missing element: ' + id);
                                reportedMissingElements[id + ':' + event] = true;
                            }
                            // Store the listener for later if element becomes available
                            window.app = window.app || {};
                            window.app.pendingListeners = window.app.pendingListeners || {};
                            window.app.pendingListeners[id] = window.app.pendingListeners[id] || [];
                            window.app.pendingListeners[id].push({ event: event, handler: handler });
                        };
                    }
                    if (prop === 'querySelector' || prop === 'querySelectorAll') {
                        return function () { return prop === 'querySelector' ? null : []; };
                    }
                    if (prop === 'classList') {
                        return {
                            add: function () { },
                            remove: function () { },
                            toggle: function () { },
                            contains: function () { return false; }
                        };
                    }
                    if (prop === 'style') {
                        return new Proxy({}, {
                            set: function () { return true; },
                            get: function () { return ''; }
                        });
                    }
                    return undefined;
                },
                set: function () { return true; }
            });
        }
        return element;
    };

    // Add a safety check for document.addEventListener
    const originalDocAddEventListener = document.addEventListener;
    document.addEventListener = function (type, listener, options) {
        try {
            return originalDocAddEventListener.call(document, type, listener, options);
        } catch (e) {
            console.warn(`Error adding document event listener (${type}):`, e);
            setTimeout(() => {
                try {
                    originalDocAddEventListener.call(document, type, listener, options);
                } catch (retryError) {
                    console.error(`Failed retry of document event listener (${type}):`, retryError);
                }
            }, 100);
        }
    };

    // Try to apply pending listeners when DOM is ready
    document.addEventListener('DOMContentLoaded', function () {
        console.log('DOM content loaded, checking for pending element listeners');

        // Process any stored listeners for elements that now exist
        if (window.app && window.app.pendingListeners) {
            setTimeout(function () {
                Object.keys(window.app.pendingListeners).forEach(function (id) {
                    // Skip processing for ignored elements
                    if (ignoredElements[id]) {
                        delete window.app.pendingListeners[id];
                        return;
                    }

                    const element = originalGetElementById.call(document, id);
                    if (element) {
                        console.log('Element now available: ' + id + ', applying pending listeners');
                        window.app.pendingListeners[id].forEach(function (listener) {
                            element.addEventListener(listener.event, listener.handler);
                        });
                        // Clear processed listeners
                        delete window.app.pendingListeners[id];
                    }
                });
            }, 100); // Small delay to ensure all elements are available
        }
    });

    // Add shim for focusMusicToggleFooter functions if being called from main.js
    window.app = window.app || {};
    window.app.shimFunctions = {
        toggleFocusMusic: function () {
            console.log("Focus music functionality has been removed");
            return false;
        }
    };

    // Automatically hook into main.js after it loads
    window.addEventListener('load', function () {
        // If we detect focus music functions being called, intercept them
        if (window.toggleFocusMusic) {
            const originalToggle = window.toggleFocusMusic;
            window.toggleFocusMusic = function () {
                console.log("Focus music functionality intercepted");
                return false;
            };
        }
    });
})();
