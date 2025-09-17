/**
 * Entry Delete Functionality
 * Provides swipe-to-delete for mobile and hover-to-delete for desktop
 */

// --- Feature Detection and State Variables ---
const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
let swipeState = {
  startX: 0,
  currentX: 0,
  startY: 0,
  currentY: 0,
  thresholdExceeded: false,
  activeEntry: null,
  swiping: false,
};

// --- Constants ---
const SWIPE_THRESHOLD = 30; // Minimum distance to trigger swipe in pixels
const SWIPE_POSITION = 50; // Distance to move entry when swiped
const SWIPE_RESET_THRESHOLD = 15; // Distance to trigger reset when swiping back
const EXTENDED_DELETE_THRESHOLD = 80; // Distance to trigger delete on extended swipe
const HOVER_ZONE_WIDTH = 40; // Width of the hover zone in pixels

// --- Implementation ---

/**
 * Initialize delete functionality based on device capabilities
 */
function initDeleteFunctionality() {
  console.log(
    `Initializing delete functionality for ${isTouchDevice ? "touch" : "mouse"} device`,
  );

  // Reset any existing classes or state
  resetAllEntries();

  // Set up appropriate event listeners based on device type
  if (isTouchDevice) {
    setupMobileSwipe();
  } else {
    setupDesktopHover();
  }
}

/**
 * Reset all entries to their default state
 */
function resetAllEntries() {
  const entries = document.querySelectorAll(".time-entry");
  entries.forEach((entry) => {
    entry.classList.remove("time-entry--swiped");

    // Remove any existing delete icons
    const existingIcons = entry.querySelectorAll(".delete-icon-wrapper");
    existingIcons.forEach((icon) => icon.remove());

    // Remove any existing hover zones
    const existingHoverZones = entry.querySelectorAll(".entry-hover-zone");
    existingHoverZones.forEach((zone) => zone.remove());
  });
}

/**
 * Create a hover zone element for the entry
 * @returns {HTMLElement} The hover zone element
 */
function createHoverZone() {
  const hoverZone = document.createElement("div");
  hoverZone.className = "entry-hover-zone";
  return hoverZone;
}

/**
 * Set up touch event listeners for mobile swipe functionality
 */
function setupMobileSwipe() {
  const entries = document.querySelectorAll(".time-entry");

  entries.forEach((entry) => {
    // Touch start event - record initial position
    entry.addEventListener("touchstart", handleTouchStart);

    // Touch move event - track finger movement and update UI
    entry.addEventListener("touchmove", handleTouchMove);

    // Touch end event - finalize the action based on swipe distance
    entry.addEventListener("touchend", handleTouchEnd);
  });

  // Listen for new entries being added to the DOM
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1 && node.classList.contains("time-entry")) {
            node.addEventListener("touchstart", handleTouchStart);
            node.addEventListener("touchmove", handleTouchMove);
            node.addEventListener("touchend", handleTouchEnd);
          }
        });
      }
    });
  });

  observer.observe(document.getElementById("timestampList"), {
    childList: true,
    subtree: true,
  });
}

/**
 * Set up hover functionality for a single entry
 * @param {HTMLElement} entry - The time entry element to set up hover for
 */
function setupEntryHover(entry) {
  // Create delete icon with wrapper for this entry
  const deleteIconWrapper = createDeleteIcon();
  deleteIconWrapper.classList.add("delete-icon-wrapper--hover");

  // Get reference to the actual icon inside the wrapper
  const deleteIcon = deleteIconWrapper.querySelector(".delete-icon");

  // Create hover zone for right side of the entry
  const hoverZone = createHoverZone();
  entry.appendChild(hoverZone);

  // Function to handle showing the delete icon
  const showDeleteIcon = () => {
    if (!entry.contains(deleteIconWrapper)) {
      entry.appendChild(deleteIconWrapper);
    }
    deleteIcon.style.opacity = "1";
  };

  // Function to handle hiding the delete icon
  const hideDeleteIcon = (e) => {
    const relatedTarget = e.relatedTarget;
    // Don't hide if moving to the delete icon wrapper, icon itself, hover zone or entry
    if (
      relatedTarget === deleteIconWrapper ||
      relatedTarget === deleteIcon ||
      relatedTarget === hoverZone ||
      relatedTarget === entry ||
      (relatedTarget && entry.contains(relatedTarget))
    ) {
      return;
    }

    deleteIcon.style.opacity = "0";
    setTimeout(() => {
      if (
        deleteIconWrapper.parentNode === entry &&
        deleteIcon.style.opacity === "0"
      ) {
        entry.removeChild(deleteIconWrapper);
      }
    }, 200);
  };

  // Add mouse enter/leave events to the entry
  entry.addEventListener("mouseenter", showDeleteIcon);
  entry.addEventListener("mouseleave", hideDeleteIcon);

  // Add mouse enter/leave events to the hover zone
  hoverZone.addEventListener("mouseenter", showDeleteIcon);
  hoverZone.addEventListener("mouseleave", hideDeleteIcon);

  // Add events to the delete icon wrapper
  deleteIconWrapper.addEventListener("mouseenter", showDeleteIcon);
  deleteIconWrapper.addEventListener("mouseleave", hideDeleteIcon);

  // Add click event to the delete icon wrapper
  deleteIconWrapper.addEventListener("click", (e) => {
    e.stopPropagation();
    deleteEntry(entry);
  });
}

/**
 * Set up mouse event listeners for desktop hover functionality
 */
function setupDesktopHover() {
  const entries = document.querySelectorAll(".time-entry");
  entries.forEach((entry) => {
    setupEntryHover(entry);
  });

  // Listen for new entries being added to the DOM
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1 && node.classList.contains("time-entry")) {
            setupEntryHover(node);
          }
        });
      }
    });
  });

  observer.observe(document.getElementById("timestampList"), {
    childList: true,
    subtree: true,
  });
}

/**
 * Track if a significant swipe is occurring to prevent triggering click events
 */
let significantSwipeDetected = false;

/**
 * Handle touch start event
 * @param {TouchEvent} e - Touch event
 */
function handleTouchStart(e) {
  // Reset swipe detection flag at the start of each touch
  significantSwipeDetected = false;

  const touch = e.touches[0];
  swipeState.startX = touch.clientX;
  swipeState.currentX = touch.clientX;
  swipeState.startY = touch.clientY;
  swipeState.currentY = touch.clientY;
  swipeState.activeEntry = this;
  swipeState.swiping = false;
  swipeState.thresholdExceeded = false;
}

/**
 * Handle touch move event
 * @param {TouchEvent} e - Touch event
 */
function handleTouchMove(e) {
  if (!swipeState.activeEntry) return;

  const touch = e.touches[0];
  swipeState.currentX = touch.clientX;
  swipeState.currentY = touch.clientY;

  // Calculate horizontal and vertical distance
  const deltaX = swipeState.startX - swipeState.currentX;
  const deltaY = Math.abs(swipeState.startY - swipeState.currentY);

  // Determine if we should handle this as a swipe
  // Only if horizontal movement is greater than vertical and exceeds threshold
  if (
    !swipeState.swiping &&
    Math.abs(deltaX) > deltaY &&
    Math.abs(deltaX) > SWIPE_THRESHOLD
  ) {
    swipeState.swiping = true;
    swipeState.thresholdExceeded = true;
    significantSwipeDetected = true;

    // Add a data attribute to the entry to indicate we're in a significant swipe
    // This will be used to prevent the click event from firing
    swipeState.activeEntry.setAttribute("data-swiping", "true");
  }

  // If we're swiping, prevent default to avoid scrolling
  if (swipeState.swiping) {
    e.preventDefault();

    // If the entry is already swiped
    if (swipeState.activeEntry.classList.contains("time-entry--swiped")) {
      if (deltaX < 0) {
        // Swiping back to reset (right to left)
        const moveDistance = Math.min(0, -deltaX);
        swipeState.activeEntry.style.transform = `translateX(${-SWIPE_POSITION + moveDistance}px)`;
      } else if (deltaX > EXTENDED_DELETE_THRESHOLD) {
        // Extended swipe to delete (continue swiping left)
        const extraDistance = deltaX - EXTENDED_DELETE_THRESHOLD;
        swipeState.activeEntry.style.transform = `translateX(${-(SWIPE_POSITION + extraDistance)}px)`;
      }
    } else {
      // Initial swipe - only handle swipe from right to left (deltaX > 0)
      if (deltaX > 0) {
        // Limit to max swipe position
        const moveDistance = Math.min(SWIPE_POSITION, deltaX);
        swipeState.activeEntry.style.transform = `translateX(${-moveDistance}px)`;

        // Show delete icon when swiped more than halfway
        if (moveDistance > SWIPE_POSITION / 2) {
          ensureDeleteIcon(swipeState.activeEntry);
        }
      }
    }
  }
}

/**
 * Handle touch end event
 * @param {TouchEvent} e - Touch event
 */
function handleTouchEnd(e) {
  if (!swipeState.activeEntry || !swipeState.swiping) return;

  const deltaX = swipeState.startX - swipeState.currentX;

  // If entry is already in swiped position
  if (swipeState.activeEntry.classList.contains("time-entry--swiped")) {
    if (deltaX < -SWIPE_RESET_THRESHOLD) {
      // Swipe right - reset position
      resetEntryPosition(swipeState.activeEntry);
    } else if (deltaX > EXTENDED_DELETE_THRESHOLD) {
      // Extended swipe left - delete the entry
      deleteEntry(swipeState.activeEntry);
    } else {
      // Return to swiped position
      swipeState.activeEntry.style.transform = `translateX(${-SWIPE_POSITION}px)`;
    }
  } else {
    // First-time swipe
    if (deltaX > SWIPE_THRESHOLD) {
      // Swipe left - move to reveal delete icon
      setEntryToSwipedPosition(swipeState.activeEntry);
    } else {
      // Short swipe - reset position
      resetEntryPosition(swipeState.activeEntry);
    }
  }

  // Set a timeout to remove the data-swiping attribute
  setTimeout(() => {
    if (swipeState.activeEntry) {
      swipeState.activeEntry.removeAttribute("data-swiping");
    }
  }, 50); // Short timeout to ensure it's removed after the touch end is fully processed

  // Reset swipe state
  swipeState.swiping = false;
  swipeState.activeEntry.style.transition = "";
}

/**
 * Create a delete icon element
 * @returns {HTMLElement} The delete icon element
 */
function createDeleteIcon() {
  // Create wrapper for circular hover effect
  const wrapper = document.createElement("div");
  wrapper.className = "delete-icon-wrapper";

  // Create the actual icon
  const deleteIcon = document.createElement("div");
  deleteIcon.className = "delete-icon";

  // Add the icon to the wrapper
  wrapper.appendChild(deleteIcon);

  return wrapper;
}

/**
 * Ensure the entry has a delete icon
 * @param {HTMLElement} entry - The time entry element
 */
function ensureDeleteIcon(entry) {
  if (!entry.querySelector(".delete-icon-wrapper")) {
    const deleteIconWrapper = createDeleteIcon();

    // Add click event for the delete icon wrapper
    deleteIconWrapper.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteEntry(entry);
    });

    entry.appendChild(deleteIconWrapper);
  }
}

/**
 * Set the entry to the swiped position
 * @param {HTMLElement} entry - The time entry element
 */
function setEntryToSwipedPosition(entry) {
  entry.classList.add("time-entry--swiped");
  entry.style.transition = "transform 0.2s ease";
  entry.style.transform = `translateX(${-SWIPE_POSITION}px)`;

  // Store the has-comment class state before adding delete icon
  const hasComment = entry.classList.contains("has-comment");

  // Add delete icon
  ensureDeleteIcon(entry);

  // Restore the has-comment class if it was present before
  // This ensures comment styling remains correct during swipe actions
  if (hasComment && !entry.classList.contains("has-comment")) {
    entry.classList.add("has-comment");
  }
}

/**
 * Reset the entry to its default position
 * @param {HTMLElement} entry - The time entry element
 */
function resetEntryPosition(entry) {
  entry.classList.remove("time-entry--swiped");
  entry.style.transition = "transform 0.2s ease";
  entry.style.transform = "";

  // Remove the delete icon after animation completes
  setTimeout(() => {
    const deleteIconWrapper = entry.querySelector(".delete-icon-wrapper");
    if (deleteIconWrapper) {
      deleteIconWrapper.remove();
    }
  }, 200);
}

/**
 * Delete the time entry
 * @param {HTMLElement} entry - The time entry element
 */
function deleteEntry(entry) {
  // Store the date key from the entry's data-key attribute
  const entryKey = parseInt(entry.getAttribute("data-key"));

  // Add a class for delete animation
  entry.classList.add("time-entry--deleting");

  // After animation completes, remove the entry and update data
  setTimeout(() => {
    // Find the parent date group
    const dateGroup = entry.closest(".date-group");

    // Remove the entry from the DOM
    entry.remove();

    // If this was the last entry in a date group, remove the group
    if (dateGroup && dateGroup.querySelectorAll(".time-entry").length === 0) {
      dateGroup.remove();
    }

    // Call external function to update data
    // This will be implemented in main.js
    if (typeof deleteTimeEntry === "function") {
      deleteTimeEntry(entryKey);

      // After deletion and data update, recalculate opacity values
      if (typeof window.recalculateEntryOpacities === "function") {
        setTimeout(() => {
          window.recalculateEntryOpacities();
        }, 50); // Small delay to ensure DOM has updated
      }
    } else {
      console.error("deleteTimeEntry function not found");
    }
  }, 300); // Match the CSS animation duration
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", initDeleteFunctionality);

// Re-initialize when entries are rendered or on orientation change
window.addEventListener("orientationchange", initDeleteFunctionality);

// Expose the reinitialize function globally so it can be called from main.js
window.reinitializeDeleteFunctionality = function () {
  initDeleteFunctionality();
};

// Expose a function to setup hover for a specific entry
window.setupEntryHoverFunctionality = function (entry) {
  if (!isTouchDevice) {
    setupEntryHover(entry);
  }
};

// Expose the swipe detection variable globally so it can be accessed from main.js
window.isSignificantSwipeDetected = function () {
  return significantSwipeDetected;
};
