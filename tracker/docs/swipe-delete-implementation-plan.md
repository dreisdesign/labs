# Swipe & Hover Delete Implementation Plan

This document outlines a step-by-step approach for implementing the swipe-to-delete (mobile) and hover-to-delete (desktop) functionality for time entries in the Tracker app.

## Overview of Feature

The main goals include:
1. Adding swipe-to-delete functionality for mobile/touchscreen devices
2. Adding hover-to-delete functionality for desktop devices
3. Implementing consistent delete and undo experience across device types
4. Preserving existing app styling and functionality

## Phase 1: Setup and Feature Detection

### Step 1.1: Feature Detection Setup
- Create utility functions to detect touch vs. mouse capability
- Set up conditional logic for applying the appropriate interaction model
- Test the detection on different devices

### Step 1.2: CSS Variables and Base Classes
- Add CSS variables for animation durations and distances
- Create base classes for the different entry states
- Define placeholder styles for the delete icon positioning

### Step 1.3: Add Delete Icon Asset
- Verify the existing trash icon in assets/images directory
- Create any additional icon states needed (hover, active)

## Phase 2: Mobile Swipe Implementation

### Step 2.1: Basic Swipe Detection
- Implement touch event listeners (touchstart, touchmove, touchend)
- Track horizontal swipe distance and direction
- Add threshold detection for activating the swipe action
- Test that swipe events are correctly detected

### Step 2.2: Swipe Animation
- Implement the sliding animation when swiping left
- Make the entry stop at approximately 50px from original position
- Ensure smooth transition during the swipe
- Test animation performance on mobile devices

### Step 2.3: Delete Icon Reveal
- Show the trash can icon when entry is swiped
- Position icon correctly with 0.75rem padding on both sides
- Set icon size to 24px × 24px
- Test that the icon appears correctly positioned

### Step 2.4: Swipe Position Lock
- Implement logic to keep entry in swiped position after touch end
- Add JavaScript to maintain the entry's state
- Test that entries remain in position after swipe

### Step 2.5: Swipe Reset Function
- Implement left-to-right swipe to return to default position
- Hide the delete icon when entry returns to original position
- Test the reset swipe functionality on swiped entries

## Phase 3: Desktop Hover Implementation

### Step 3.1: Hover Detection
- Implement mouseenter/mouseleave event listeners or CSS :hover
- Add class toggle for hover state
- Test hover detection works correctly

### Step 3.2: Delete Icon Hover Display
- Position delete icon on hover without moving the time entry
- Apply the same icon styling (24px with 0.75rem padding)
- Ensure icon appears and disappears smoothly
- Test hover functionality across desktop browsers

## Phase 4: Delete Action Implementation

### Step 4.1: Delete Icon Click/Tap Handler
- Implement event listener for delete icon
- Add animation for entry removal
- Remove entry from DOM when animation completes
- Test that entries are removed correctly

### Step 4.2: Extended Swipe to Delete
- Implement detection for extended swipe on already-swiped entries
- Determine threshold for triggering delete action
- Add same removal animation as click/tap
- Test extended swipe deletion works correctly

### Step 4.3: Data Persistence Updates
- Update localStorage to remove deleted entries
- Ensure entry counts are updated correctly
- Test that entries remain deleted after page refresh

## Phase 5: Undo Functionality

### Step 5.1: Undo UI Implementation
- Show undo button after deletion (matching reset undo style)
- Position undo notification correctly
- Implement countdown timer for undo option
- Test undo notification appears consistently

### Step 5.2: Undo Action Implementation
- Restore deleted entry when undo is clicked
- Re-insert entry in original position in DOM
- Add animation for entry restoration
- Test that entries are correctly restored

### Step 5.3: Undo Data Persistence
- Update localStorage when entry is restored
- Restore entry counts correctly
- Test that restored entries persist after page refresh

## Phase 6: Refinement and Testing

### Step 6.1: Cross-device Testing
- Test on various mobile devices (iOS, Android)
- Test on desktop browsers (Chrome, Firefox, Safari, Edge)
- Verify both interaction models work correctly

### Step 6.2: Accessibility Improvements
- Add appropriate ARIA attributes
- Ensure keyboard navigation works
- Test with screen readers
- Add focus management for delete icon

### Step 6.3: Performance Optimization
- Optimize animations for performance
- Reduce unnecessary DOM operations
- Implement event delegation where appropriate
- Test with large numbers of time entries

### Step 6.4: Edge Case Handling
- Test behavior with a single entry
- Test behavior with many entries
- Verify scroll behavior during swipe
- Test during active timer counting

## Implementation Details

### HTML Updates
- No initial HTML structure changes needed
- Time entry elements will have classes dynamically added/removed
- Delete icon will be injected via JavaScript

### CSS Updates
```css
/* Base styles for entry positioning */
.time-entry {
  position: relative;
  transition: transform 0.3s ease;
}

/* Swiped state for mobile */
.time-entry--swiped {
  transform: translateX(-50px);
}

/* Delete icon styling */
.delete-icon {
  position: absolute;
  width: 24px;
  height: 24px;
  padding: 0 0.75rem;
}

/* Mobile-specific positioning */
.time-entry--swiped .delete-icon {
  right: -40px;
  top: 50%;
  transform: translateY(-50%);
}

/* Desktop hover state */
.time-entry:hover .delete-icon {
  opacity: 1;
}

/* Animation for deletion */
.time-entry--deleting {
  animation: slide-out 0.3s forwards;
}

@keyframes slide-out {
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
}
```

### JavaScript Updates
- Implement feature detection: `const isTouchDevice = 'ontouchstart' in window`
- Add touch event handlers: `touchstart`, `touchmove`, `touchend`
- Track swipe distance: `const swipeDistance = startX - currentX`
- Implement position threshold logic
- Add delete functionality with undo option
- Update localStorage management for deletions

## Testing Strategy

Each step will be tested individually:
1. After feature detection: Verify correct detection on different devices
2. After swipe detection: Verify correct distance and direction tracking
3. After animation implementation: Test smoothness and performance
4. After delete implementation: Verify entries are properly removed
5. After undo implementation: Test full delete-undo flow
6. Final testing: Cross-browser and cross-device testing

## Commit Strategy

Each phase will be committed separately:
1. Commit after Phase 1: Setup and Feature Detection
2. Commit after Phase 2: Mobile Swipe Implementation
3. Commit after Phase 3: Desktop Hover Implementation
4. Commit after Phase 4: Delete Action Implementation
5. Commit after Phase 5: Undo Functionality
6. Final commit after Refinement and Testing

This phased approach ensures we maintain a working application throughout development and can easily identify and fix any issues that arise.