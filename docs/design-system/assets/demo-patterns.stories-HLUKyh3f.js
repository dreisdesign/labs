import"./labs-button-TwfSpcbC.js";import{a as e}from"./button-configs-6lF73jOI.js";import"./labs-icon-BtJ2RHil.js";const i={title:"Patterns/Demo Page",parameters:{docs:{description:{component:"Example of how to use pre-configured buttons in a real application interface."}}}},o=()=>{const n=document.createElement("div");n.style.cssText=`
        padding: 2rem;
        background: var(--color-background);
        color: var(--color-on-background);
        min-height: 80vh;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    `;const r=document.createElement("div");r.style.cssText=`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background: var(--color-surface);
        border-radius: 8px;
    `,r.innerHTML=`
        <h1 style="margin: 0; color: var(--color-on-surface);">My App</h1>
        <div style="display: flex; gap: 0.5rem;">
            ${e("settings")}
            ${e("toggleTheme")}
        </div>
    `;const t=document.createElement("div");t.style.cssText=`
        flex: 1;
        background: var(--color-surface);
        padding: 2rem;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    `,t.innerHTML=`
        <h2 style="margin: 0; color: var(--color-on-surface);">Content Area</h2>
        <p style="color: var(--color-on-surface); margin: 0;">This is where your app content would go.</p>
        
        <div style="display: flex; gap: 1rem; margin-top: 1rem;">
            ${e("add")}
            ${e("edit")}
            ${e("addComment")}
        </div>
    `;const d=document.createElement("div");return d.style.cssText=`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background: var(--color-surface);
        border-radius: 8px;
    `,d.innerHTML=`
        <div style="display: flex; gap: 0.5rem;">
            ${e("undo")}
            ${e("save")}
        </div>
        <div style="display: flex; gap: 0.5rem;">
            ${e("delete")}
            ${e("resetAllData")}
        </div>
    `,n.appendChild(r),n.appendChild(t),n.appendChild(d),n},a=()=>{const n=document.createElement("div");n.style.cssText=`
        padding: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        background: var(--color-background);
    `;const r=document.createElement("div");r.style.cssText=`
        padding: 1rem;
        background: var(--color-surface);
        border-radius: 8px;
    `,r.innerHTML=`
        <h3 style="color: var(--color-on-surface);">❌ Old Way (Manual)</h3>
        <pre style="font-size: 0.875rem; background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto;">
&lt;labs-button 
  label="Reset All Data" 
  icon="delete_forever" 
  variant="danger"
  iconcolor="#b5005a"
&gt;&lt;/labs-button&gt;

&lt;labs-button 
  label="Add Item" 
  icon="add" 
  variant="primary"
  checkmark
  iconcolor="#fff"
&gt;&lt;/labs-button&gt;
        </pre>
    `;const t=document.createElement("div");return t.style.cssText=`
        padding: 1rem;
        background: var(--color-surface);
        border-radius: 8px;
    `,t.innerHTML=`
        <h3 style="color: var(--color-on-surface);">✅ New Way (Pre-configured)</h3>
        <pre style="font-size: 0.875rem; background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto;">
// Import once
import { createButton } from '../tokens/button-configs.js';

// Use anywhere
createButton('resetAllData')
createButton('add')

// Or with overrides
createButton('add', { label: 'Add New Item' })
        </pre>
        <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
            ${e("resetAllData")}
            ${e("add")}
        </div>
    `,n.appendChild(r),n.appendChild(t),n};a.storyName="Old vs New Approach";o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const container = document.createElement("div");
  container.style.cssText = \`
        padding: 2rem;
        background: var(--color-background);
        color: var(--color-on-background);
        min-height: 80vh;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    \`;

  // Header with actions
  const header = document.createElement("div");
  header.style.cssText = \`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background: var(--color-surface);
        border-radius: 8px;
    \`;
  header.innerHTML = \`
        <h1 style="margin: 0; color: var(--color-on-surface);">My App</h1>
        <div style="display: flex; gap: 0.5rem;">
            \${createButton("settings")}
            \${createButton("toggleTheme")}
        </div>
    \`;

  // Main content area
  const content = document.createElement("div");
  content.style.cssText = \`
        flex: 1;
        background: var(--color-surface);
        padding: 2rem;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    \`;
  content.innerHTML = \`
        <h2 style="margin: 0; color: var(--color-on-surface);">Content Area</h2>
        <p style="color: var(--color-on-surface); margin: 0;">This is where your app content would go.</p>
        
        <div style="display: flex; gap: 1rem; margin-top: 1rem;">
            \${createButton("add")}
            \${createButton("edit")}
            \${createButton("addComment")}
        </div>
    \`;

  // Bottom action bar
  const actionBar = document.createElement("div");
  actionBar.style.cssText = \`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background: var(--color-surface);
        border-radius: 8px;
    \`;
  actionBar.innerHTML = \`
        <div style="display: flex; gap: 0.5rem;">
            \${createButton("undo")}
            \${createButton("save")}
        </div>
        <div style="display: flex; gap: 0.5rem;">
            \${createButton("delete")}
            \${createButton("resetAllData")}
        </div>
    \`;
  container.appendChild(header);
  container.appendChild(content);
  container.appendChild(actionBar);
  return container;
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const container = document.createElement("div");
  container.style.cssText = \`
        padding: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        background: var(--color-background);
    \`;
  const oldWay = document.createElement("div");
  oldWay.style.cssText = \`
        padding: 1rem;
        background: var(--color-surface);
        border-radius: 8px;
    \`;
  oldWay.innerHTML = \`
        <h3 style="color: var(--color-on-surface);">❌ Old Way (Manual)</h3>
        <pre style="font-size: 0.875rem; background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto;">
&lt;labs-button 
  label="Reset All Data" 
  icon="delete_forever" 
  variant="danger"
  iconcolor="#b5005a"
&gt;&lt;/labs-button&gt;

&lt;labs-button 
  label="Add Item" 
  icon="add" 
  variant="primary"
  checkmark
  iconcolor="#fff"
&gt;&lt;/labs-button&gt;
        </pre>
    \`;
  const newWay = document.createElement("div");
  newWay.style.cssText = \`
        padding: 1rem;
        background: var(--color-surface);
        border-radius: 8px;
    \`;
  newWay.innerHTML = \`
        <h3 style="color: var(--color-on-surface);">✅ New Way (Pre-configured)</h3>
        <pre style="font-size: 0.875rem; background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto;">
// Import once
import { createButton } from '../tokens/button-configs.js';

// Use anywhere
createButton('resetAllData')
createButton('add')

// Or with overrides
createButton('add', { label: 'Add New Item' })
        </pre>
        <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
            \${createButton("resetAllData")}
            \${createButton("add")}
        </div>
    \`;
  container.appendChild(oldWay);
  container.appendChild(newWay);
  return container;
}`,...a.parameters?.docs?.source}}};const p=["AppInterface","ComparisonOldVsNew"];export{o as AppInterface,a as ComparisonOldVsNew,p as __namedExportsOrder,i as default};
