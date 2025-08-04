import"./labs-button-TwfSpcbC.js";import{b as l,a as e}from"./button-configs-6lF73jOI.js";import"./labs-icon-BtJ2RHil.js";const c={title:"Tokens/Button Configs",parameters:{docs:{description:{component:'Pre-configured button combinations for common use cases. These provide "grab and go" button setups.'}}}},a=()=>{const t=document.createElement("div");return t.style.display="grid",t.style.gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))",t.style.gap="1rem",t.style.padding="1rem",Object.keys(l).forEach(s=>{const n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.alignItems="center",n.style.gap="0.5rem";const r=document.createElement("p");r.textContent=s,r.style.margin="0",r.style.fontSize="0.875rem",r.style.color="var(--color-on-surface)",n.innerHTML=e(s),n.appendChild(r),t.appendChild(n)}),t};a.storyName="All Pre-configured Buttons";const o=()=>{const t=document.createElement("div");return t.style.display="flex",t.style.flexDirection="column",t.style.gap="2rem",t.style.padding="1rem",t.innerHTML=`
        <div>
            <h3>Usage Examples</h3>
            <p>Import and use pre-configured buttons:</p>
            <pre style="background: var(--color-surface); padding: 1rem; border-radius: 8px; overflow-x: auto;">
import { createButton, createButtonElement } from '../tokens/button-configs.js';

// As HTML string
const html = createButton('delete');

// As DOM element
const button = createButtonElement('add', { label: 'Add Item' });

// With overrides
const customSave = createButton('save', { 
  label: 'Save Changes',
  variant: 'success' 
});
            </pre>
        </div>
        
        <div>
            <h4>Common Action Buttons</h4>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                ${e("add")}
                ${e("save")}
                ${e("edit")}
                ${e("delete")}
            </div>
        </div>
        
        <div>
            <h4>Destructive Actions</h4>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                ${e("delete")}
                ${e("deleteSubtle")}
                ${e("resetAllData")}
            </div>
        </div>
        
        <div>
            <h4>UI/Navigation Buttons</h4>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                ${e("close")}
                ${e("settings")}
                ${e("allApps")}
                ${e("undo")}
            </div>
        </div>
        
        <div>
            <h4>Theme Buttons</h4>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                ${e("toggleTheme")}
                ${e("turnOnDarkMode")}
            </div>
        </div>
    `,t};o.storyName="Usage Guide";a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const wrapper = document.createElement("div");
  wrapper.style.display = "grid";
  wrapper.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
  wrapper.style.gap = "1rem";
  wrapper.style.padding = "1rem";

  // Create buttons for each configuration
  Object.keys(buttonConfigs).forEach(configName => {
    const section = document.createElement("div");
    section.style.display = "flex";
    section.style.flexDirection = "column";
    section.style.alignItems = "center";
    section.style.gap = "0.5rem";
    const label = document.createElement("p");
    label.textContent = configName;
    label.style.margin = "0";
    label.style.fontSize = "0.875rem";
    label.style.color = "var(--color-on-surface)";
    section.innerHTML = createButton(configName);
    section.appendChild(label);
    wrapper.appendChild(section);
  });
  return wrapper;
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.gap = "2rem";
  wrapper.style.padding = "1rem";
  wrapper.innerHTML = \`
        <div>
            <h3>Usage Examples</h3>
            <p>Import and use pre-configured buttons:</p>
            <pre style="background: var(--color-surface); padding: 1rem; border-radius: 8px; overflow-x: auto;">
import { createButton, createButtonElement } from '../tokens/button-configs.js';

// As HTML string
const html = createButton('delete');

// As DOM element
const button = createButtonElement('add', { label: 'Add Item' });

// With overrides
const customSave = createButton('save', { 
  label: 'Save Changes',
  variant: 'success' 
});
            </pre>
        </div>
        
        <div>
            <h4>Common Action Buttons</h4>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                \${createButton("add")}
                \${createButton("save")}
                \${createButton("edit")}
                \${createButton("delete")}
            </div>
        </div>
        
        <div>
            <h4>Destructive Actions</h4>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                \${createButton("delete")}
                \${createButton("deleteSubtle")}
                \${createButton("resetAllData")}
            </div>
        </div>
        
        <div>
            <h4>UI/Navigation Buttons</h4>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                \${createButton("close")}
                \${createButton("settings")}
                \${createButton("allApps")}
                \${createButton("undo")}
            </div>
        </div>
        
        <div>
            <h4>Theme Buttons</h4>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                \${createButton("toggleTheme")}
                \${createButton("turnOnDarkMode")}
            </div>
        </div>
    \`;
  return wrapper;
}`,...o.parameters?.docs?.source}}};const m=["AllConfigs","Usage"];export{a as AllConfigs,o as Usage,m as __namedExportsOrder,c as default};
