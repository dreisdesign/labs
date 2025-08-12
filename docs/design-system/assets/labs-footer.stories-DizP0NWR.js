import"./labs-button-DEUKwH7W.js";import"./labs-icon-BgHZyyah.js";class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["add-label","settings-hidden","variant"]}attributeChangedCallback(){this.render()}connectedCallback(){this.render(),this.setupEventListeners()}setupEventListeners(){const t=this.shadowRoot.querySelector(".add-button"),n=this.shadowRoot.querySelector(".settings-button");t&&t.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("add-click",{bubbles:!0}))}),n&&n.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("settings-click",{bubbles:!0}))})}render(){const t=this.getAttribute("add-label")||"+ Add",n=this.hasAttribute("settings-hidden");this.getAttribute("variant"),this.shadowRoot.innerHTML=`
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
            ${n?"hidden":""}
          ></labs-button>
        </div>
      </div>
    `,this.setupEventListeners()}}customElements.define("labs-footer",d);const g={title:"Components/Footer",component:"labs-footer",parameters:{docs:{description:{component:`
A modular footer component with glassmorphic design, featuring a centered add button and optional settings button.

## Features
- **Glassmorphic Design**: Blur and transparency effects with theme-responsive colors
- **Event-Driven**: Emits custom events for add and settings clicks
- **Configurable**: Customizable add button label and optional settings button
- **Theme Responsive**: Automatically adapts to light/dark themes
- **Modular**: Self-contained with shadow DOM encapsulation

## Usage
\`\`\`html
<labs-footer add-label="+ Create"></labs-footer>
\`\`\`

## Events
- \`add-click\`: Fired when the add button is clicked
- \`settings-click\`: Fired when the settings button is clicked

## CSS Custom Properties
- \`--color-surface-glass\`: Background color with transparency
- \`--color-border-glass\`: Border color with transparency
- All spacing and typography tokens from the design system
        `}}},argTypes:{"add-label":{control:"text",description:"Label for the primary add button",defaultValue:"+ Add"},"settings-hidden":{control:"boolean",description:"Hide the settings button",defaultValue:!1},variant:{control:{type:"select"},options:["default","floating"],description:"Footer variant style",defaultValue:"default"},"with-settings-overlay":{control:"boolean",description:"Auto-create and connect a settings overlay",defaultValue:!1}}},o=e=>{const t=document.createElement("labs-footer");e["add-label"]&&t.setAttribute("add-label",e["add-label"]),e["settings-hidden"]&&t.setAttribute("settings-hidden",""),e.variant&&t.setAttribute("variant",e.variant),e["with-settings-overlay"]&&t.setAttribute("with-settings-overlay","");const n=document.createElement("div");return n.style.cssText=`
    min-height: 100vh;
    background: var(--color-background);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 120px;
  `,n.innerHTML=`
    <div style="text-align: center; max-width: 500px; padding: 2rem;">
      <h2 style="color: var(--color-on-background); margin-bottom: 1rem;">Footer Component Demo</h2>
      <p style="color: var(--color-on-background); opacity: 0.8;">
        This demonstrates the labs-footer component. Try clicking the buttons to see the events.
      </p>
    </div>
  `,n.appendChild(t),t.addEventListener("add-click",()=>{alert("Add button clicked!")}),t.addEventListener("settings-click",()=>{alert("Settings button clicked!")}),n},r=()=>{const e=document.createElement("labs-footer");e.setAttribute("add-label","Create New");const t=document.createElement("div");return t.style.cssText=`
    min-height: 100vh;
    background: var(--color-background);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 120px;
  `,t.innerHTML=`
    <div style="text-align: center; max-width: 500px; padding: 2rem;">
      <h2 style="color: var(--color-on-background); margin-bottom: 1rem;">Custom Label</h2>
      <p style="color: var(--color-on-background); opacity: 0.8;">
        Footer with custom add button label "Create New"
      </p>
    </div>
  `,t.appendChild(e),e.addEventListener("add-click",()=>{alert("Create New clicked!")}),e.addEventListener("settings-click",()=>{alert("Settings clicked!")}),t},a=()=>{const e=document.createElement("labs-footer");e.setAttribute("settings-hidden","");const t=document.createElement("div");return t.style.cssText=`
    min-height: 100vh;
    background: var(--color-background);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 120px;
  `,t.innerHTML=`
    <div style="text-align: center; max-width: 500px; padding: 2rem;">
      <h2 style="color: var(--color-on-background); margin-bottom: 1rem;">No Settings Button</h2>
      <p style="color: var(--color-on-background); opacity: 0.8;">
        Footer with the settings button hidden
      </p>
    </div>
  `,t.appendChild(e),e.addEventListener("add-click",()=>{alert("Add clicked - no settings button!")}),t},i=()=>{const e=document.createElement("labs-footer");e.setAttribute("variant","floating"),e.setAttribute("add-label","Create");const t=document.createElement("div");return t.style.cssText=`
    min-height: 100vh;
    background: var(--color-background);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 120px;
  `,t.innerHTML=`
    <div style="text-align: center; max-width: 500px; padding: 2rem;">
      <h2 style="color: var(--color-on-background); margin-bottom: 1rem;">Floating Variant</h2>
      <p style="color: var(--color-on-background); opacity: 0.8;">
        Floating footer with enhanced shadows and custom spacing
      </p>
    </div>
  `,t.appendChild(e),e.addEventListener("add-click",()=>{alert("Floating footer create clicked!")}),e.addEventListener("settings-click",()=>{alert("Floating footer settings clicked!")}),t},s=()=>{const e=document.createElement("labs-footer");e.setAttribute("with-settings-overlay","");const t=document.createElement("div");return t.style.cssText=`
    min-height: 100vh;
    background: var(--color-background);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 120px;
  `,t.innerHTML=`
    <div style="text-align: center; max-width: 500px; padding: 2rem;">
      <h2 style="color: var(--color-on-background); margin-bottom: 1rem;">Integrated Settings Overlay</h2>
      <p style="color: var(--color-on-background); opacity: 0.8;">
        Footer automatically creates and connects a settings overlay. Click the settings icon to see it in action.
      </p>
    </div>
  `,t.appendChild(e),e.addEventListener("add-click",()=>{alert("Add clicked with integrated overlay!")}),t};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const footer = document.createElement("labs-footer");
  if (args["add-label"]) {
    footer.setAttribute("add-label", args["add-label"]);
  }
  if (args["settings-hidden"]) {
    footer.setAttribute("settings-hidden", "");
  }
  if (args["variant"]) {
    footer.setAttribute("variant", args["variant"]);
  }
  if (args["with-settings-overlay"]) {
    footer.setAttribute("with-settings-overlay", "");
  }

  // Demo container to show the footer in context
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
      <h2 style="color: var(--color-on-background); margin-bottom: 1rem;">Footer Component Demo</h2>
      <p style="color: var(--color-on-background); opacity: 0.8;">
        This demonstrates the labs-footer component. Try clicking the buttons to see the events.
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const footer = document.createElement("labs-footer");
  footer.setAttribute("add-label", "Create New");
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
      <h2 style="color: var(--color-on-background); margin-bottom: 1rem;">Custom Label</h2>
      <p style="color: var(--color-on-background); opacity: 0.8;">
        Footer with custom add button label "Create New"
      </p>
    </div>
  \`;
  container.appendChild(footer);
  footer.addEventListener('add-click', () => {
    alert('Create New clicked!');
  });
  footer.addEventListener('settings-click', () => {
    alert('Settings clicked!');
  });
  return container;
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const footer = document.createElement("labs-footer");
  footer.setAttribute("settings-hidden", "");
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
      <h2 style="color: var(--color-on-background); margin-bottom: 1rem;">No Settings Button</h2>
      <p style="color: var(--color-on-background); opacity: 0.8;">
        Footer with the settings button hidden
      </p>
    </div>
  \`;
  container.appendChild(footer);
  footer.addEventListener('add-click', () => {
    alert('Add clicked - no settings button!');
  });
  return container;
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const footer = document.createElement("labs-footer");
  footer.setAttribute("variant", "floating");
  footer.setAttribute("add-label", "Create");
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
      <h2 style="color: var(--color-on-background); margin-bottom: 1rem;">Floating Variant</h2>
      <p style="color: var(--color-on-background); opacity: 0.8;">
        Floating footer with enhanced shadows and custom spacing
      </p>
    </div>
  \`;
  container.appendChild(footer);
  footer.addEventListener('add-click', () => {
    alert('Floating footer create clicked!');
  });
  footer.addEventListener('settings-click', () => {
    alert('Floating footer settings clicked!');
  });
  return container;
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const footer = document.createElement("labs-footer");
  footer.setAttribute("with-settings-overlay", "");
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
      <h2 style="color: var(--color-on-background); margin-bottom: 1rem;">Integrated Settings Overlay</h2>
      <p style="color: var(--color-on-background); opacity: 0.8;">
        Footer automatically creates and connects a settings overlay. Click the settings icon to see it in action.
      </p>
    </div>
  \`;
  container.appendChild(footer);
  footer.addEventListener('add-click', () => {
    alert('Add clicked with integrated overlay!');
  });
  return container;
}`,...s.parameters?.docs?.source}}};const u=["Default","CustomLabel","NoSettings","FloatingVariant","WithIntegratedOverlay"];export{r as CustomLabel,o as Default,i as FloatingVariant,a as NoSettings,s as WithIntegratedOverlay,u as __namedExportsOrder,g as default};
