import "./labs-button.js";
import "./labs-icon.js";

class LabsSettingsOverlay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
      <style>
        @import url('../main.css');
      </style>
      <labs-button id="open-settings-btn" icon="settings" variant="primary" label="Settings"></labs-button>
      <div id="overlay" class="settings-overlay" style="display:none;">
        <div class="overlay-content">
          <div class="overlay-header">
            <h2>Settings</h2>
            <button class="close-button">
              <labs-icon name="close" class="close-icon"></labs-icon>
            </button>
          </div>
          <div class="button-container" style="display:flex; flex-direction:column; gap:0.5rem;">
            <labs-button label="All Apps" variant="container"></labs-button>
            <labs-button label="Turn On Dark Mode" variant="container"></labs-button>
            <labs-button label="Reset All Data" variant="container-danger"></labs-button>
          </div>
        </div>
      </div>
    `;

        const openBtn = this.shadowRoot.getElementById("open-settings-btn");
        const overlay = this.shadowRoot.getElementById("overlay");
        const closeBtn = this.shadowRoot.querySelector(".close-button");

        openBtn.addEventListener("click", () => {
            overlay.style.display = "flex";
        });

        closeBtn.addEventListener("click", () => {
            overlay.style.display = "none";
        });

        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) overlay.style.display = "none";
        });
    }
}

customElements.define("labs-settings-overlay", LabsSettingsOverlay);
