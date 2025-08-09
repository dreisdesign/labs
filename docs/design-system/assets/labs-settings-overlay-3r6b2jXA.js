import"./labs-button-DO-8kIze.js";import"./labs-icon-CWhhJZRA.js";import"./labs-theme-toggle-button-D75b0QSc.js";class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render(),this.setupEventListeners()}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .settings-container {
          display: flex;
          flex-direction: column;
          gap: var(--space-md, 1rem);
        }

        .settings-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm, 0.75rem);
        }

        .section-title {
          font-size: var(--font-size-small, 0.875rem);
          font-weight: var(--font-weight-medium, 500);
          color: var(--color-on-surface-variant);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0;
        }

        .button-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs, 0.5rem);
        }

        labs-button {
          width: 100%;
        }

        /* Divider */
        .divider {
          height: 1px;
          background: var(--color-outline-variant);
          margin: var(--space-sm, 0.75rem) 0;
        }
      </style>

      <div class="settings-container">
        <!-- Navigation Section -->
        <div class="settings-section">
          <h4 class="section-title">Navigation</h4>
          <div class="button-list">
            <labs-button 
              variant="container" 
              icon="apps" 
              icon-position="left"
              id="apps-button"
            >
              All Apps
            </labs-button>
          </div>
        </div>

        <div class="divider"></div>

        <!-- Appearance Section -->
        <div class="settings-section">
          <h4 class="section-title">Appearance</h4>
          <div class="button-list">
            <labs-theme-toggle-button variant="container"></labs-theme-toggle-button>
          </div>
        </div>

        <div class="divider"></div>

        <!-- Data Section -->
        <div class="settings-section">
          <h4 class="section-title">Data</h4>
          <div class="button-list">
            <labs-button 
              variant="container-danger" 
              icon="delete_forever" 
              icon-position="left"
              id="reset-button"
            >
              Reset All Data
            </labs-button>
          </div>
        </div>
      </div>
    `}setupEventListeners(){const t=this.shadowRoot.getElementById("apps-button"),e=this.shadowRoot.getElementById("reset-button");t.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("settings-action",{detail:{action:"apps"},bubbles:!0}))}),e.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("settings-action",{detail:{action:"reset"},bubbles:!0}))})}}customElements.define("labs-settings",a);class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["active"]}attributeChangedCallback(){this.render()}connectedCallback(){this.render(),this.setupEventListeners(),this.setupThemeObserver()}setupThemeObserver(){this.themeObserver=new MutationObserver(t=>{t.forEach(e=>{e.type==="attributes"&&e.attributeName==="class"&&this.updateIconColors()})}),this.themeObserver.observe(document.body,{attributes:!0,attributeFilter:["class"]})}updateIconColors(){const t=this.shadowRoot.querySelector(".close-button labs-icon");t&&t.setAttribute("color","var(--color-on-surface)")}setupEventListeners(){this.shadowRoot.addEventListener("click",t=>{(t.target===this.shadowRoot.host||t.target.classList.contains("overlay-background"))&&this.close()}),setTimeout(()=>{const t=this.shadowRoot.querySelector(".close-button");t&&t.addEventListener("click",()=>this.close())},0),this.handleEscape=t=>{t.key==="Escape"&&this.hasAttribute("active")&&this.close()},document.addEventListener("keydown",this.handleEscape)}disconnectedCallback(){document.removeEventListener("keydown",this.handleEscape),this.themeObserver&&this.themeObserver.disconnect()}open(){this.setAttribute("active","")}close(){this.removeAttribute("active"),this.dispatchEvent(new CustomEvent("overlay-close",{bubbles:!0}))}render(){const t=this.hasAttribute("active");this.shadowRoot.innerHTML=`
      <style>
        :host {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          display: ${t?"flex":"none"};
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .overlay-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .overlay-content {
          background: var(--surface-color, #ffffff);
          border-radius: var(--border-radius-large, 12px);
          padding: var(--spacing-large, 24px);
          max-width: 90vw;
          max-height: 90vh;
          width: 100%;
          max-width: 400px;
          box-shadow: var(--shadow-large, 0 8px 32px rgba(0, 0, 0, 0.15));
          border: 1px solid var(--border-color, #e0e0e0);
          overflow-y: auto;
        }        .overlay-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-md);
        }

        .overlay-header h2 {
          font-size: var(--font-size-h2);
          font-weight: var(--font-weight-semibold);
          color: var(--color-on-surface);
          margin: 0;
        }

        .close-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: var(--space-xs);
          border-radius: 8px;
        }
      </style>
      
      <div class="overlay-background"></div>
      <div class="overlay-content">
        <div class="overlay-header">
          <h2>Settings</h2>
          <button class="close-button">
            <labs-icon name="close" width="24" height="24" color="var(--color-on-surface)"></labs-icon>
          </button>
        </div>

        <labs-settings></labs-settings>
      </div>
    `;const e=this.shadowRoot.querySelector("labs-settings");e&&e.addEventListener("settings-action",o=>{const{action:s,data:n}=o.detail;this.dispatchEvent(new CustomEvent("action-click",{bubbles:!0,detail:{action:s,data:n}})),(s==="apps"||s==="reset")&&this.close()}),this.setupEventListeners()}}customElements.define("labs-settings-overlay",r);
