import"./labs-button-BCzBXzvm.js";import"./labs-icon-BWc3JKvc.js";class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["add-label","settings-hidden","variant"]}attributeChangedCallback(){this.render()}connectedCallback(){this.render(),this.setupEventListeners()}setupEventListeners(){const t=this.shadowRoot.querySelector(".add-button"),e=this.shadowRoot.querySelector(".settings-button");t&&t.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("add-click",{bubbles:!0}))}),e&&e.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("settings-click",{bubbles:!0}))})}render(){const t=this.getAttribute("add-label")||"+ Add",e=this.hasAttribute("settings-hidden");this.getAttribute("variant"),this.shadowRoot.innerHTML=`
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
    `,this.setupEventListeners()}}customElements.define("labs-footer",i);const r={title:"Patterns/Footer",component:"labs-footer",tags:["autodocs"],parameters:{docs:{description:{component:"Modular footer component with glassmorphic design, featuring centered add button and optional settings. Emits custom events and adapts to light/dark themes. Use controls to explore all options or 'Show code' for implementation."}}},argTypes:{"add-label":{control:"text",description:"Label for the primary add button",defaultValue:"+ Add"},"settings-hidden":{control:"boolean",description:"Hide the settings button",defaultValue:!1}}},n=o=>{const t=document.createElement("labs-footer");o["add-label"]&&t.setAttribute("add-label",o["add-label"]),o["settings-hidden"]&&t.setAttribute("settings-hidden","");const e=document.createElement("div");return e.style.cssText=`
    min-height: 100vh;
    background: var(--color-background);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 120px;
  `,e.innerHTML=`
    <div style="text-align: center; max-width: 500px; padding: 2rem;">
      <h2 style="color: var(--color-on-background); margin-bottom: 1rem;">Footer Component</h2>
      <p style="color: var(--color-on-background); opacity: 0.8;">
        Glassmorphic footer with configurable add button and optional settings. Use controls to customize label, hide settings, or change variant.
      </p>
    </div>
  `,e.appendChild(t),t.addEventListener("add-click",()=>{alert("Add button clicked!")}),t.addEventListener("settings-click",()=>{alert("Settings button clicked!")}),e};n.args={"add-label":"+ Add","settings-hidden":!1,variant:"default"};n.parameters={docs:{description:{story:"Default footer component with glassmorphic design. Use controls to modify add button label, toggle settings visibility, and change variant (default/floating). Click buttons to see event handling."}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const footer = document.createElement("labs-footer");
  if (args["add-label"]) footer.setAttribute("add-label", args["add-label"]);
  if (args["settings-hidden"]) footer.setAttribute("settings-hidden", "");
  const container = document.createElement("div");
  container.style.cssText = \`
    min-height: 100vh;
    background: var(--color-background);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 120px;
  \`;
  container.innerHTML = \`
    <div style="text-align: center; max-width: 500px; padding: 2rem;">
      <h2 style="color: var(--color-on-background); margin-bottom: 1rem;">Footer Component</h2>
      <p style="color: var(--color-on-background); opacity: 0.8;">
        Glassmorphic footer with configurable add button and optional settings. Use controls to customize label, hide settings, or change variant.
      </p>
    </div>
  \`;
  container.appendChild(footer);

  // Add event listeners for demonstration
  footer.addEventListener('add-click', () => {
    alert('Add button clicked!');
  });
  footer.addEventListener('settings-click', () => {
    alert('Settings button clicked!');
  });
  return container;
}`,...n.parameters?.docs?.source}}};const d=["Default"];export{n as Default,d as __namedExportsOrder,r as default};
