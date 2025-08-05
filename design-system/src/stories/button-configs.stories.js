import "../components/labs-button.js";
import { buttonConfigs, createButton, createButtonElement, createIconButton, createIconButtonElement, iconOnlyButtons, updateThemeToggleButton, setupThemeToggle } from "../tokens/button-configs.js";

export default {
  title: "Tokens/Button Configs",
  parameters: {
    docs: {
      description: {
        component:
          'Pre-configured button combinations for common use cases. These provide "grab and go" button setups.',
      },
    },
  },
};

export const Usage = () => {
  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.gap = "2rem";
  wrapper.style.padding = "1rem";

  // Add the content sections
  const contentDiv = document.createElement("div");
  contentDiv.innerHTML = `
        <div>
            <h4>Common Action Buttons</h4>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                ${createButton("add")}
                ${createButton("save")}
                ${createButton("edit")}
                ${createButton("themeToggle")}
            </div>
        </div>
        
        <div>
            <h4>Destructive Actions</h4>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                ${createButton("delete")}
                ${createButton("resetAllData")}
            </div>
        </div>
        
        <div>
            <h4>UI/Navigation Buttons</h4>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                ${createButton("close")}
                ${createButton("settings")}
                ${createButton("allApps")}
                ${createButton("undo")}
            </div>
        </div>

        <div>
            <h4>Icon-Only Buttons</h4>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
                ${createIconButton("settingsIcon")}
                ${createIconButton("allAppsIcon")}
                ${createIconButton("deleteIcon")}
                ${createIconButton("editIcon")}
                ${createIconButton("closeIcon")}
                ${createIconButton("addCommentIcon")}
            </div>
        </div>

        <div>
            <h3>Usage Examples</h3>
            <p>Import and use pre-configured buttons:</p>
            <pre style="background: var(--color-surface); padding: 1rem; border-radius: 8px; overflow-x: auto;">
import { createButton, createButtonElement, createIconButton, createIconButtonElement, iconOnlyButtons } from '../tokens/button-configs.js';

// As HTML string
const html = createButton('delete');

// As DOM element
const button = createButtonElement('add', { label: 'Add Item' });

// Icon-only buttons
const iconHtml = createIconButton('settingsIcon');
const iconElement = createIconButtonElement('settingsIcon');

// With overrides
const customSave = createButton('save', { 
  label: 'Save Changes',
  variant: 'success' 
});
            </pre>
        </div>
    `;

  wrapper.appendChild(contentDiv);

  // Setup theme toggle functionality
  const themeButton = wrapper.querySelector('labs-button[icon="bedtime"]');
  if (themeButton) {
    setupThemeToggle(themeButton);
  }

  return wrapper;
};

Usage.storyName = "Usage Guide";
