import "../styles/components/settings-overlay.css";
import "../components/labs-button.js";
import "../components/labs-icon.js";
import { createButtonElement, setupThemeToggle } from "../tokens/button-configs.js";

export default {
  title: "Patterns",
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
      name: "Is Open",
      description: "Toggle the visibility of the overlay",
    },
  },
};

// Settings Overlay Template
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
  const appsButton = createButtonElement("appsContainer");
  const themeButton = createButtonElement("themeToggleContainer");
  const resetButton = createButtonElement("resetAllDataContainer"); // Uses container-danger variant

  // Make theme button functional
  setupThemeToggle(themeButton);

  buttonContainer.appendChild(appsButton);
  buttonContainer.appendChild(themeButton);
  buttonContainer.appendChild(resetButton);

  overlayContent.appendChild(overlayHeader);
  overlayContent.appendChild(buttonContainer);
  overlay.appendChild(overlayContent);

  return overlay;
};

// Interactive demo: button opens overlay as modal
export const Settings = () => {
  // Container for the demo
  const wrapper = document.createElement("div");
  wrapper.style.minHeight = "300px";
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.alignItems = "flex-start";
  wrapper.style.gap = "1.5rem";

  // Settings button
  const openBtn = document.createElement("labs-button");
  openBtn.setAttribute("icon", "settings");
  openBtn.setAttribute("variant", "primary");
  openBtn.setAttribute("label", "Open Settings Overlay");

  // Overlay (initially not in DOM)
  let overlay = null;

  openBtn.addEventListener("click", () => {
    if (overlay) return;
    overlay = Template({ isOpen: true });
    // Add close logic
    overlay.querySelector(".close-button").addEventListener("click", () => {
      overlay.remove();
      overlay = null;
    });
    // Optional: close on background click
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.remove();
        overlay = null;
      }
    });
    document.body.appendChild(overlay);
  });

  wrapper.appendChild(openBtn);
  return wrapper;
};

Settings.args = {
  isOpen: true,
};

Settings.parameters = {
  docs: {
    description: {
      story: "Interactive settings overlay pattern with modal behavior. Click the button to open the overlay, which can be closed by clicking the X or clicking outside the modal.",
    },
  },
};

Settings.storyName = "Settings Overlay";
