import "../components/labs-settings-overlay.js";

export default {
    title: "Components/Settings Overlay",
    component: "labs-settings-overlay",
    parameters: {
        docs: {
            description: {
                component: `
A modal overlay component for settings and configuration options with a glassmorphic backdrop.

## Features
- **Modal Overlay**: Full-screen overlay with backdrop blur
- **Event-Driven**: Emits custom events for actions and close
- **Keyboard Support**: Escape key to close
- **Click Outside**: Click backdrop to close
- **Theme Responsive**: Automatically adapts to light/dark themes
- **Modular**: Self-contained with shadow DOM encapsulation

## Usage
\`\`\`html
<labs-settings-overlay id="settings"></labs-settings-overlay>

<script>
const overlay = document.getElementById('settings');
overlay.open(); // Show the overlay
overlay.close(); // Hide the overlay
</script>
\`\`\`

## Events
- \`action-click\`: Fired when any action button is clicked (detail.action contains the action name)
- \`overlay-close\`: Fired when the overlay is closed

## Methods
- \`open()\`: Show the overlay
- \`close()\`: Hide the overlay

## Actions Available
- \`apps\`: All Apps button
- \`theme-toggle\`: Dark Mode toggle
- \`settings\`: Additional Settings
- \`reset\`: Reset Data (danger action)
        `,
            },
        },
    },
};

export const Default = () => {
    const container = document.createElement("div");
    container.style.cssText = `
    min-height: 100vh;
    background: var(--color-background);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  `;

    container.innerHTML = `
    <div style="text-align: center;">
      <h2 style="color: var(--color-on-background); margin-bottom: 1rem;">Settings Overlay Demo</h2>
      <p style="color: var(--color-on-background); opacity: 0.8; margin-bottom: 2rem;">
        Click the button below to open the settings overlay
      </p>
      <button id="openSettings" style="
        background: var(--color-primary);
        color: var(--color-on-primary);
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        cursor: pointer;
        font-size: 1rem;
      ">Open Settings</button>
    </div>
    
    <labs-settings-overlay id="settingsOverlay"></labs-settings-overlay>
  `;

    const openButton = container.querySelector('#openSettings');
    const overlay = container.querySelector('#settingsOverlay');

    if (openButton && overlay) {
        openButton.addEventListener('click', () => {
            overlay.open();
        });

        overlay.addEventListener('action-click', (e) => {
            const action = e.detail.action;

            if (action === 'theme-toggle') {
                // Don't show alert for theme toggle - it's handled automatically by the component
                // Don't close overlay for theme toggle - it's a toggle action
            } else {
                alert(`Action clicked: ${action}`);
                // Close overlay after other actions
                overlay.close();
            }
        }); overlay.addEventListener('overlay-close', () => {
            console.log('Settings overlay closed');
        });
    }

    return container;
};

export const AlwaysOpen = () => {
    const container = document.createElement("div");
    container.style.cssText = `
    min-height: 100vh;
    background: var(--color-background);
    position: relative;
  `;

    container.innerHTML = `
    <div style="position: absolute; top: 2rem; left: 2rem; z-index: 1001;">
      <h2 style="color: var(--color-on-primary); margin-bottom: 0.5rem; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">Always Open Demo</h2>
      <p style="color: var(--color-on-primary); opacity: 0.9; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">
        This shows the overlay in its open state
      </p>
    </div>
    
    <labs-settings-overlay active></labs-settings-overlay>
  `;

    const overlay = container.querySelector('labs-settings-overlay');

    if (overlay) {
        overlay.addEventListener('action-click', (e) => {
            const action = e.detail.action;
            alert(`Action clicked: ${action}`);
        });

        overlay.addEventListener('overlay-close', () => {
            // Re-open immediately for demo purposes
            setTimeout(() => overlay.open(), 100);
        });
    }

    return container;
};
