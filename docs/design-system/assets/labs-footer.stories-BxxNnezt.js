import"./labs-footer-CFe758QF.js";import"./labs-button-CHI3Ygmz.js";import"./labs-icon-C9bsLa-d.js";const g={title:"Components/Footer",component:"labs-footer",parameters:{docs:{description:{component:`
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
  `,t.appendChild(e),e.addEventListener("add-click",()=>{alert("Floating footer create clicked!")}),e.addEventListener("settings-click",()=>{alert("Floating footer settings clicked!")}),t},c=()=>{const e=document.createElement("labs-footer");e.setAttribute("with-settings-overlay","");const t=document.createElement("div");return t.style.cssText=`
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};const m=["Default","CustomLabel","NoSettings","FloatingVariant","WithIntegratedOverlay"];export{r as CustomLabel,o as Default,i as FloatingVariant,a as NoSettings,c as WithIntegratedOverlay,m as __namedExportsOrder,g as default};
