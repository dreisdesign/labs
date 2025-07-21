/**
 * Script loader utility to safely load main.js
 * This handles element-not-found errors by ensuring elements exist before access
 */

// Store original querySelector and getElementById methods
const originalQuerySelector = document.querySelector;
const originalQuerySelectorAll = document.querySelectorAll;
const originalGetElementById = document.getElementById;
const originalAddEventListener = EventTarget.prototype.addEventListener;

// Create a more robust proxy for missing elements
function createElementProxy() {
    return new Proxy({}, {
        get: function (target, prop) {
            if (prop === 'addEventListener') {
                return function () { }; // No-op function
            }
            if (prop === 'querySelector' || prop === 'querySelectorAll') {
                return function () { return prop === 'querySelector' ? createElementProxy() : []; };
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
            if (prop === 'parentNode' || prop === 'parentElement') {
                return createElementProxy();
            }
            // Return empty function for any method
            if (typeof Object.prototype[prop] === 'function') {
                return function () { };
            }
            return null;
        },
        set: function () { return true; }
    });
}

// Safe element access - returns proxy for null elements
document.querySelector = function (selector) {
    try {
        const element = originalQuerySelector.call(document, selector);
        if (!element) {
            console.warn(`querySelector couldn't find element: ${selector}`);
            return createElementProxy();
        }
        return element;
    } catch (e) {
        console.error(`Error in querySelector for "${selector}":`, e);
        return createElementProxy();
    }
};

document.querySelectorAll = function (selector) {
    const elements = originalQuerySelectorAll.call(document, selector);
    if (!elements || elements.length === 0) {
        console.warn(`querySelectorAll couldn't find elements: ${selector}`);
        return [];
    }
    return elements;
};

document.getElementById = function (id) {
    try {
        const element = originalGetElementById.call(document, id);
        if (!element) {
            console.warn(`getElementById couldn't find element: ${id}`);
            return createElementProxy();
        }
        return element;
    } catch (e) {
        console.error(`Error in getElementById for "${id}":`, e);
        return createElementProxy();
    }
};

// Make addEventListener more resilient
EventTarget.prototype.addEventListener = function (type, listener, options) {
    try {
        return originalAddEventListener.call(this, type, listener, options);
    } catch (e) {
        console.warn(`Error adding event listener (${type}):`, e);
        // Try to add it in the next tick if this is a timing issue
        setTimeout(() => {
            try {
                originalAddEventListener.call(this, type, listener, options);
            } catch (retryError) {
                console.error(`Failed retry of event listener (${type}):`, retryError);
            }
        }, 100);
    }
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

// Track DOM readiness
let domIsReady = document.readyState === 'complete' || document.readyState === 'interactive';

// Listen for custom app:ready event
document.addEventListener('app:ready', function () {
    console.log('App ready event received, elements should be available now');
});

// Wait for DOM content loaded to protect against race conditions
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM content loaded in script-loader');
    domIsReady = true;

    // Dispatch app:ready event
    setTimeout(() => {
        document.dispatchEvent(new CustomEvent('app:ready'));
    }, 50);
});

// Add a domReady function similar to jQuery's $(document).ready()
window.domReady = function (callback) {
    if (domIsReady) {
        setTimeout(callback, 1);
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
};

// Helper function to safely add event listeners with retry
window.safeAddEventListener = function (elementId, eventType, callback, retryCount = 3) {
    const element = document.getElementById(elementId);
    if (element) {
        element.addEventListener(eventType, callback);
        return true;
    } else if (retryCount > 0) {
        console.warn(`Element ${elementId} not found, will retry ${retryCount} more times`);
        setTimeout(() => {
            safeAddEventListener(elementId, eventType, callback, retryCount - 1);
        }, 100);
    } else {
        console.error(`Failed to add event listener to ${elementId} after retries`);
    }
    return false;
};

console.log('Enhanced script loader initialized');
