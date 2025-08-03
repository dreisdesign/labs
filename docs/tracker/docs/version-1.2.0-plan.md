# Tracker App V2 Implementation Plan

This document outlines a phased approach for implementing new features and improvements to the Tracker app.

## Overview of Changes

The main changes include:

1. Adding a consolidated menu system for customization actions (theme, layout orientation, reset)
2. Supporting both bottom-up and top-down entry layouts
3. Keeping the track button in the bottom footer for both layouts
4. Improving the visual design and user experience

## Phase 1: HTML Structure Updates (Broken Down Into Steps)

### Step 1.1: Move Track Button to Footer

- Move the track button to the footer
- Add both top and bottom track buttons in HTML
- Test functionality with both buttons

### Step 1.2: Add Settings Menu Overlay Structure

- Add the HTML for the settings menu overlay
- Add menu items (Theme, Layout, Reset)
- Include appropriate icons for each menu item

### Step 1.3: Add Menu Toggle Button

- Add the menu toggle button to the footer
- Position it to the right of the track button
- Use "more_horiz" icon for the toggle

## Phase 2: CSS Styling Updates (Broken Down Into Steps)

### Step 2.1: Style Track Button in Footer

- Update CSS to style the track button in its new position
- Center the button in the footer
- Maintain original button styling with solid hover state

### Step 2.2: Style Settings Menu

- Match the menu styling to the metric card design
- Add proper transitions for menu appearance/disappearance
- Style menu items with left-aligned icons and right-aligned text

### Step 2.3: Style Menu Toggle Button

- Make it circular with the same height as track button
- Position it 20px from the right edge
- Add proper hover and active states

### Step 2.4: Preserve Original Styling

- Ensure metric card styling is preserved
- Maintain version number in top right with proper margin
- Keep "No entries yet" placeholder styling

## Phase 3: JavaScript Implementation (Broken Down Into Steps)

### Step 3.1: Toggle Menu Functionality

- Implement menu open/close function
- Add click handlers for the menu toggle button
- Close menu when clicking outside

### Step 3.2: Theme Toggle in Menu

- Implement theme toggle from menu item
- Update menu text to show current theme ("Light"/"Dark")
- Update theme icon to match current theme

### Step 3.3: Layout Toggle in Menu

- Implement layout switching from menu item
- Update menu text to show current layout ("Bottom Up"/"Top Down")
- Update layout icon to match current orientation

### Step 3.4: Reset Button in Menu

- Move reset functionality to menu item
- Ensure reset countdown works properly
- Close menu after reset is triggered

## Phase 4: Testing and Refinement

### Step 4.1: Test Basic Functionality

- Verify menu opens and closes correctly
- Test theme toggle functionality
- Test layout orientation toggle
- Verify reset button works

### Step 4.2: Test Entry Handling

- Test entry creation in both layouts
- Verify proper stacking order in both layouts
- Test scrolling behavior in both layouts

### Step 4.3: Test Edge Cases

- Test with many entries
- Test with no entries
- Test undo functionality
- Verify proper state persistence after page refresh

### Step 4.4: UI Refinements

- Adjust any spacing or alignment issues
- Ensure proper visual feedback on all interactions
- Optimize transitions and animations

## Implementation Details

### HTML Updates

- Add `.settings-menu-overlay` container with menu items
- Create menu items with icons and text: `<span class="settings-icon"></span><span class="settings-text"></span>`
- Add `.menu-toggle-button` with "more_horiz" icon
- Add `.top-track-button` and `.bottom-track-button` classes

### CSS Updates

- Style the settings menu to match the metric card layout
- Style the menu toggle button as a circle with 20px spacing from the right edge
- Add styles for different layouts (bottom-up vs. top-down)
- Create transition effects for menu appearance/disappearance
- Preserve original styling for metric card, version number, and track button

### JavaScript Updates

- Implement `toggleSettingsMenu()` function to show/hide menu
- Add layout switching with `applyLayout()` function
- Update menu text with `updateMenuText()` function to show current settings
- Add click handlers for all menu items
- Implement dynamic icon updates based on current settings

## Commit Strategy

Each step will be implemented and tested separately before moving to the next:

1. Commit after Step 1.1: Move Track Button to Footer
2. Commit after Step 1.2-1.3: Add Menu Structure and Toggle
3. Commit after Step 2.1-2.4: Style Updates
4. Commit after Step 3.1-3.4: JavaScript Implementation
5. Final commit after Testing and Refinements

This step-by-step approach will ensure we maintain a working application throughout the development process and can easily identify and fix any issues that arise.
