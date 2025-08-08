import"./labs-footer-DhxTskys.js";import"./labs-settings-overlay-GXBvOQtH.js";import"./labs-button-JZi7o1_n.js";import"./labs-icon-mNfcruWU.js";import"./labs-theme-toggle-button-EBbyR9Xb.js";import"./button-configs-UvNeOF8F.js";class s extends HTMLElement{constructor(){super()}static get observedAttributes(){return["add-label","variant"]}attributeChangedCallback(){this.render()}connectedCallback(){this.render(),this.setupEventListeners()}setupEventListeners(){setTimeout(()=>{const t=this.querySelector("labs-footer"),e=this.querySelector("labs-settings-overlay");t&&e?(t.addEventListener("settings-click",()=>e.open()),t.addEventListener("add-click",()=>{this.dispatchEvent(new CustomEvent("add-click",{bubbles:!0}))}),e.addEventListener("action-click",o=>{this.dispatchEvent(new CustomEvent("action-click",{bubbles:!0,detail:o.detail}))})):console.warn("labs-app-footer: Child components not found",{footer:t,overlay:e})},0)}render(){const t=this.getAttribute("add-label")||"+ Add",e=this.getAttribute("variant")||"default";this.innerHTML=`
      <!-- Footer Component -->
      <labs-footer 
        add-label="${t}" 
        ${e!=="default"?`variant="${e}"`:""}
      ></labs-footer>
      
      <!-- Settings Overlay Component -->
      <labs-settings-overlay></labs-settings-overlay>
    `,this.setupEventListeners()}}customElements.define("labs-app-footer",s);const u={title:"Patterns/Footer with Settings",component:"labs-app-footer",parameters:{docs:{description:{component:`
A footer pattern that combines the footer and settings overlay components for complete functionality.

## Features
- **Pre-composed**: Footer + Settings Overlay already connected
- **Zero Setup**: Just add to your page and handle events
- **Two Variants**: Default glassmorphic and floating styles
- **Event Forwarding**: Forwards all events from child components
- **Simple API**: Minimal attributes, maximum functionality

## Usage
\`\`\`html
<!-- Default footer with settings -->
<labs-app-footer></labs-app-footer>

<!-- Floating variant with custom label -->
<labs-app-footer add-label="Create" variant="floating"></labs-app-footer>
\`\`\`

## Events
- \`add-click\`: Fired when the add button is clicked
- \`action-click\`: Fired when any settings action is clicked (detail.action contains the action)

## When to Use
- **Complete Footer**: When you need footer + settings functionality
- **Quick Setup**: Get full footer experience with minimal code
- **Standard Apps**: Most common footer use case

## When to Use Basic Footer Instead
- **No Settings**: Use \`labs-footer\` component directly when you don't need settings
- **Custom Settings**: Use separate components for non-standard settings overlay
- **Performance Critical**: Use separate components for fine-grained control
        `}}},argTypes:{"add-label":{control:"text",description:"Label for the primary add button",defaultValue:"+ Add"},variant:{control:{type:"select"},options:["default","floating"],description:"Footer variant style",defaultValue:"default"}}},a=n=>{const t=document.createElement("labs-app-footer");n["add-label"]&&t.setAttribute("add-label",n["add-label"]),n.variant&&t.setAttribute("variant",n.variant);const e=document.createElement("div");return e.style.cssText=`
    min-height: 100vh;
    background: var(--color-background);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 120px;
  `,e.innerHTML=`
    <div style="text-align: center; max-width: 500px; padding: 2rem;">
      <h2 style="color: var(--color-on-background); margin-bottom: 1rem;">Footer with Settings</h2>
      <p style="color: var(--color-on-background); opacity: 0.8;">
        Complete footer with settings overlay pre-connected. Click the settings button to see the overlay in action.
      </p>
    </div>
  `,e.appendChild(t),t&&(t.addEventListener("add-click",()=>{alert("Add button clicked from app footer pattern!")}),t.addEventListener("action-click",o=>{const i=o.detail.action;i!=="theme-toggle"&&alert(`Settings action: ${i}`)})),e},r=()=>{const n=document.createElement("labs-app-footer");n.setAttribute("variant","floating"),n.setAttribute("add-label","Create New");const t=document.createElement("div");return t.style.cssText=`
    min-height: 100vh;
    background: var(--color-background);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 120px;
  `,t.innerHTML=`
    <div style="text-align: center; max-width: 500px; padding: 2rem;">
      <h2 style="color: var(--color-on-background); margin-bottom: 1rem;">Floating Footer with Settings</h2>
      <p style="color: var(--color-on-background); opacity: 0.8;">
        Floating variant with enhanced shadows and custom spacing
      </p>
    </div>
  `,t.appendChild(n),n&&(n.addEventListener("add-click",()=>{alert("Create New clicked!")}),n.addEventListener("action-click",e=>{const o=e.detail.action;o!=="theme-toggle"&&alert(`Settings action: ${o}`)})),t};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  const appFooter = document.createElement("labs-app-footer");
  if (args["add-label"]) {
    appFooter.setAttribute("add-label", args["add-label"]);
  }
  if (args["variant"]) {
    appFooter.setAttribute("variant", args["variant"]);
  }

  // Demo container
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
      <h2 style="color: var(--color-on-background); margin-bottom: 1rem;">Footer with Settings</h2>
      <p style="color: var(--color-on-background); opacity: 0.8;">
        Complete footer with settings overlay pre-connected. Click the settings button to see the overlay in action.
      </p>
    </div>
  \`;
  container.appendChild(appFooter);

  // Handle events with error checking
  if (appFooter) {
    appFooter.addEventListener('add-click', () => {
      alert('Add button clicked from app footer pattern!');
    });
    appFooter.addEventListener('action-click', e => {
      const action = e.detail.action;

      // Only show alerts for non-theme actions (theme toggle is handled by component)
      if (action !== 'theme-toggle') {
        alert(\`Settings action: \${action}\`);
      }
    });
  }
  return container;
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const appFooter = document.createElement("labs-app-footer");
  appFooter.setAttribute("variant", "floating");
  appFooter.setAttribute("add-label", "Create New");
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
      <h2 style="color: var(--color-on-background); margin-bottom: 1rem;">Floating Footer with Settings</h2>
      <p style="color: var(--color-on-background); opacity: 0.8;">
        Floating variant with enhanced shadows and custom spacing
      </p>
    </div>
  \`;
  container.appendChild(appFooter);
  if (appFooter) {
    appFooter.addEventListener('add-click', () => {
      alert('Create New clicked!');
    });
    appFooter.addEventListener('action-click', e => {
      const action = e.detail.action;
      if (action !== 'theme-toggle') {
        alert(\`Settings action: \${action}\`);
      }
    });
  }
  return container;
}`,...r.parameters?.docs?.source}}};const b=["DefaultFooter","FloatingFooter"];export{a as DefaultFooter,r as FloatingFooter,b as __namedExportsOrder,u as default};
