import"./labs-button-0XNiK1kJ.js";class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["add-label","settings-hidden","variant"]}attributeChangedCallback(){this.render()}connectedCallback(){this.render(),this.setupEventListeners()}setupEventListeners(){const t=this.shadowRoot.querySelector(".add-button"),e=this.shadowRoot.querySelector(".settings-button");t&&t.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("add-click",{bubbles:!0}))}),e&&e.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("settings-click",{bubbles:!0}))})}render(){const t=this.getAttribute("add-label")||"+ Add",e=this.hasAttribute("settings-hidden");this.getAttribute("variant"),this.shadowRoot.innerHTML=`
      <style>
        :host {
          /* Use design tokens instead of hard-coded values */
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          width: 95%;
          background-color: var(--color-surface-glass);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(16px);
          transition: background-color 0.3s ease, box-shadow 0.3s ease, opacity 0.3s;
          padding: var(--space-lg) 0;
          z-index: 100;
          border-radius: 100px 100px 0 0;
          box-shadow: none;
          pointer-events: auto;
          border-top: 0.75px solid var(--color-border-glass);
          margin-left: auto;
          margin-right: auto;
        }

        /* Variant styles using design tokens */
        :host([variant="floating"]) {
          bottom: var(--space-md);
          width: 90%;
          border-radius: 9999px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .footer-container {
          display: flex;
          position: relative;
          width: 100%;
          margin: 0 auto;
          padding: 0 var(--space-md);
          box-sizing: border-box;
          min-height: 60px;
          background-color: transparent;
          pointer-events: auto;
          z-index: 101;
          align-items: center;
          justify-content: center;
        }

        /* Use CSS Grid for better layout control */
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }

        .add-button {
          grid-column: 2;
          justify-self: center;
          /* Let the button component handle its own styling */
        }

        .settings-button {
          grid-column: 3;
          justify-self: end;
          margin-right: var(--space-lg);
        }

        .settings-button[hidden] {
          display: none;
        }

        /* Responsive design using design tokens */
        @media (max-width: 480px) {
          :host {
            width: 100%;
            border-radius: 1rem 1rem 0 0;
          }
          
          .footer-container {
            padding: 0 var(--space-sm);
          }
          
          .settings-button {
            margin-right: var(--space-md);
          }
        }
      </style>
      
      <div class="footer-container">
        <div class="footer-grid">
          <!-- Primary Add Button (centered) -->
          <labs-button 
            class="add-button" 
            label="${t}" 
            variant="primary" 
            checkmark
          ></labs-button>
          
          <!-- Settings Button (positioned right) -->
          <labs-button 
            class="settings-button" 
            icon="settings" 
            variant="icon" 
            aria-label="Open Settings"
            iconcolor="var(--color-primary-75)"
            ${e?"hidden":""}
          ></labs-button>
        </div>
      </div>
    `,this.setupEventListeners()}}customElements.define("labs-footer",s);
