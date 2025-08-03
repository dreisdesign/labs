import "../styles/components/settings-overlay.css";
import "../components/labs-button.js";
import "../components/labs-icon.js";
import { createButtonElement } from "../tokens/button-configs.js";

export default {
  title: "Patterns/Settings Overlay",
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
      name: "Is Open",
      description: "Toggle the visibility of the overlay",
    },
  },
};

// Default Settings Overlay story
const Template = ({ isOpen = true }) => {
  if (!isOpen) {
    return "";
  }

  const overlay = document.createElement("div");
  overlay.className = "settings-overlay";

  const overlayContent = document.createElement("div");
  overlayContent.className = "overlay-content";

  const overlayHeader = document.createElement("div");
  overlayHeader.className = "overlay-header";

  const title = document.createElement("h2");
  title.textContent = "Settings";

  const closeButtonHeader = document.createElement("button");
  closeButtonHeader.className = "close-button";
  closeButtonHeader.innerHTML =
    '<labs-icon name="close" class="close-icon"></labs-icon>';

  overlayHeader.appendChild(title);
  overlayHeader.appendChild(closeButtonHeader);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";
  buttonContainer.style.display = "flex";
  buttonContainer.style.flexDirection = "column";
  buttonContainer.style.gap = "0.5rem";

  // Use container button variants for proper overlay styling
  const allAppsButton = createButtonElement("allAppsContainer");
  const themeButton = createButtonElement("turnOnDarkModeContainer");
  const resetButton = createButtonElement("resetAllDataContainer"); // Uses container-danger variant

  buttonContainer.appendChild(allAppsButton);
  buttonContainer.appendChild(themeButton);
  buttonContainer.appendChild(resetButton);

  overlayContent.appendChild(overlayHeader);
  overlayContent.appendChild(buttonContainer);
  overlay.appendChild(overlayContent);

  return overlay;
};

// Default export: basic settings overlay
export const Default = Template.bind({});
Default.args = {
  isOpen: true,
};
