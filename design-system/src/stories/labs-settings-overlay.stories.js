import "../components/labs-settings-overlay.js";

export default {
  title: "Patterns/Settings Overlay",
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
    <div>
      <h2 style="text-align: center; margin-bottom: 2rem;">Settings Overlay Demo</h2>
      <button 
        id="openOverlay"
        style="
          padding: 16px 32px;
          background: var(--color-primary);
          color: var(--color-on-primary);
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          box-shadow: var(--shadow-elevation-medium);
        "
      >
        Open Settings
      </button>
    </div>
    <labs-settings-overlay></labs-settings-overlay>
  `;

  setTimeout(() => {
    const overlay = container.querySelector("labs-settings-overlay");
    const openButton = container.querySelector("#openOverlay");

    openButton.addEventListener("click", () => {
      overlay.open();
    });

    overlay.addEventListener('action', (e) => {
      console.log('Settings action:', e.detail.action);
      alert(`Action: ${e.detail.action}`);
    });

    overlay.addEventListener('overlay-close', () => {
      console.log('Settings overlay closed');
    });
  }, 100);

  return container;
};
Default.parameters = {
  docs: {
    description: {
      story: "Default settings overlay component. Click button to open and explore all actions (apps, theme-toggle, settings, reset). Provides modular settings interface with action events.",
    },
  },
};
