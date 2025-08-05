import "../components/labs-button.js";
import { createButton, createButtonElement, setupThemeToggle } from "../tokens/button-configs.js";

export default {
  title: "Patterns/Demo Page",
  parameters: {
    docs: {
      description: {
        component:
          "Example of how to use pre-configured buttons in a real application interface.",
      },
    },
  },
};

export const AppInterface = () => {
  const container = document.createElement("div");
  container.style.cssText = `
        padding: 2rem;
        background: var(--color-background);
        color: var(--color-on-background);
        min-height: 80vh;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    `;

  // Header with actions
  const header = document.createElement("div");
  header.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background: var(--color-surface);
        border-radius: 8px;
    `;

  header.innerHTML = `
        <h1 style="margin: 0; color: var(--color-on-surface);">My App</h1>
        <div style="display: flex; gap: 0.5rem; margin-left: 1rem;">
            ${createButton("settings")}
            ${createButton("themeToggle")}
        </div>
    `;

  // Main content area
  const content = document.createElement("div");
  content.style.cssText = `
        flex: 1;
        background: var(--color-surface);
        padding: 2rem;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    `;

  content.innerHTML = `
        <h2 style="margin: 0; color: var(--color-on-surface);">Content Area</h2>
        <p style="color: var(--color-on-surface); margin: 0;">This is where your app content would go.</p>
        
        <div style="display: flex; gap: 1rem; margin-top: 1rem;">
            ${createButton("add")}
            ${createButton("edit")}
            ${createButton("addComment")}
        </div>
    `;

  // Bottom action bar
  const actionBar = document.createElement("div");
  actionBar.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background: var(--color-surface);
        border-radius: 8px;
    `;

  actionBar.innerHTML = `
        <div style="display: flex; gap: 0.5rem;">
            ${createButton("undo")}
            ${createButton("save")}
        </div>
        <div style="display: flex; gap: 0.5rem;">
            ${createButton("delete")}
            ${createButton("resetAllData")}
        </div>
    `;

  container.appendChild(header);
  container.appendChild(content);
  container.appendChild(actionBar);

  // Make the theme toggle button functional
  const themeButton = container.querySelector('labs-button[icon="bedtime"]');
  if (themeButton) {
    setupThemeToggle(themeButton);
  }

  return container;
};
