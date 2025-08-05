import"./labs-button-DVUtlooW.js";import{a as e,b as o,s}from"./button-configs-B4KyLDXm.js";import"./labs-icon-D-jGsLwe.js";const d={title:"Tokens/Button Configs",parameters:{docs:{description:{component:'Pre-configured button combinations for common use cases. These provide "grab and go" button setups.'}}}},r=()=>{const n=document.createElement("div");n.style.cssText=`
    padding: 2rem;
    background: var(--color-background);
    max-width: 1200px;
    font-family: system-ui, -apple-system, sans-serif;
  `;const t=document.createElement("div");t.innerHTML=`
    <div style="margin-bottom: 3rem;">
      <h3 style="margin: 0 0 1.5rem 0; color: var(--color-on-background); font-size: 1.5rem;">Pre-Configured Button Components</h3>
      <p style="margin: 0 0 2rem 0; color: var(--color-on-background); opacity: 0.8; line-height: 1.6;">
        Ready-to-use button configurations for common patterns. Import these functions and use them directly in your applications.
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
      <div style="padding: 1.5rem; background: var(--color-surface); border-radius: 12px; border: 1px solid var(--color-primary-25);">
        <h4 style="margin: 0 0 1rem 0; color: var(--color-on-surface); font-size: 1.2rem;">Common Actions</h4>
        <p style="margin: 0 0 1.5rem 0; color: var(--color-on-surface); opacity: 0.8; font-size: 0.875rem;">Standard app actions with consistent styling</p>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          ${e("add")}
          ${e("save")}
          ${e("edit")}
          ${e("themeToggle")}
        </div>
      </div>
      
      <div style="padding: 1.5rem; background: var(--color-surface); border-radius: 12px; border: 1px solid var(--color-primary-25);">
        <h4 style="margin: 0 0 1rem 0; color: var(--color-on-surface); font-size: 1.2rem;">Destructive Actions</h4>
        <p style="margin: 0 0 1.5rem 0; color: var(--color-on-surface); opacity: 0.8; font-size: 0.875rem;">High-impact actions requiring confirmation</p>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          ${e("delete")}
          ${e("resetAllData")}
        </div>
      </div>
      
      <div style="padding: 1.5rem; background: var(--color-surface); border-radius: 12px; border: 1px solid var(--color-primary-25);">
        <h4 style="margin: 0 0 1rem 0; color: var(--color-on-surface); font-size: 1.2rem;">UI Navigation</h4>
        <p style="margin: 0 0 1.5rem 0; color: var(--color-on-surface); opacity: 0.8; font-size: 0.875rem;">Interface controls and navigation elements</p>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          ${e("close")}
          ${e("settings")}
          ${e("allApps")}
          ${e("undo")}
        </div>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem;">      
      <div style="padding: 1.5rem; background: var(--color-surface); border-radius: 12px; border: 1px solid var(--color-primary-25);">
        <h4 style="margin: 0 0 1rem 0; color: var(--color-on-surface); font-size: 1.2rem;">Icon-Only Buttons</h4>
        <p style="margin: 0 0 1.5rem 0; color: var(--color-on-surface); opacity: 0.8; font-size: 0.875rem;">Compact buttons for toolbars and tight spaces</p>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          ${o("settingsIcon")}
          ${o("allAppsIcon")}
          ${o("deleteIcon")}
          ${o("editIcon")}
          ${o("closeIcon")}
          ${o("addCommentIcon")}
        </div>
      </div>
    </div>

    <div style="padding: 1.5rem; background: var(--color-surface); border-radius: 12px; border: 1px solid var(--color-primary-25);">
      <h4 style="margin: 0 0 1rem 0; color: var(--color-on-surface); font-size: 1.2rem;">Usage Examples</h4>
      <p style="margin: 0 0 1rem 0; color: var(--color-on-surface); opacity: 0.8;">Import and use pre-configured buttons:</p>
      <div style="background: var(--color-primary-25); padding: 1rem; border-radius: 8px; font-family: 'Monaco', 'Menlo', monospace; font-size: 0.875rem; color: var(--color-on-background); overflow-x: auto;">
import { createButton, createButtonElement, createIconButton } from '../tokens/button-configs.js';

// As HTML string
const html = createButton('delete');

// As DOM element  
const button = createButtonElement('add', { label: 'Add Item' });

// Icon-only buttons
const iconHtml = createIconButton('settingsIcon');

// With overrides
const customSave = createButton('save', { 
  label: 'Save Changes',
  variant: 'success' 
});
      </div>
    </div>
  `,n.appendChild(t);const a=n.querySelector('labs-button[icon="bedtime"]');return a&&s(a),n};r.storyName="Usage Guide";r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const wrapper = document.createElement("div");
  wrapper.style.cssText = \`
    padding: 2rem;
    background: var(--color-background);
    max-width: 1200px;
    font-family: system-ui, -apple-system, sans-serif;
  \`;

  // Add the content sections
  const contentDiv = document.createElement("div");
  contentDiv.innerHTML = \`
    <div style="margin-bottom: 3rem;">
      <h3 style="margin: 0 0 1.5rem 0; color: var(--color-on-background); font-size: 1.5rem;">Pre-Configured Button Components</h3>
      <p style="margin: 0 0 2rem 0; color: var(--color-on-background); opacity: 0.8; line-height: 1.6;">
        Ready-to-use button configurations for common patterns. Import these functions and use them directly in your applications.
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
      <div style="padding: 1.5rem; background: var(--color-surface); border-radius: 12px; border: 1px solid var(--color-primary-25);">
        <h4 style="margin: 0 0 1rem 0; color: var(--color-on-surface); font-size: 1.2rem;">Common Actions</h4>
        <p style="margin: 0 0 1.5rem 0; color: var(--color-on-surface); opacity: 0.8; font-size: 0.875rem;">Standard app actions with consistent styling</p>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          \${createButton("add")}
          \${createButton("save")}
          \${createButton("edit")}
          \${createButton("themeToggle")}
        </div>
      </div>
      
      <div style="padding: 1.5rem; background: var(--color-surface); border-radius: 12px; border: 1px solid var(--color-primary-25);">
        <h4 style="margin: 0 0 1rem 0; color: var(--color-on-surface); font-size: 1.2rem;">Destructive Actions</h4>
        <p style="margin: 0 0 1.5rem 0; color: var(--color-on-surface); opacity: 0.8; font-size: 0.875rem;">High-impact actions requiring confirmation</p>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          \${createButton("delete")}
          \${createButton("resetAllData")}
        </div>
      </div>
      
      <div style="padding: 1.5rem; background: var(--color-surface); border-radius: 12px; border: 1px solid var(--color-primary-25);">
        <h4 style="margin: 0 0 1rem 0; color: var(--color-on-surface); font-size: 1.2rem;">UI Navigation</h4>
        <p style="margin: 0 0 1.5rem 0; color: var(--color-on-surface); opacity: 0.8; font-size: 0.875rem;">Interface controls and navigation elements</p>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          \${createButton("close")}
          \${createButton("settings")}
          \${createButton("allApps")}
          \${createButton("undo")}
        </div>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem;">      
      <div style="padding: 1.5rem; background: var(--color-surface); border-radius: 12px; border: 1px solid var(--color-primary-25);">
        <h4 style="margin: 0 0 1rem 0; color: var(--color-on-surface); font-size: 1.2rem;">Icon-Only Buttons</h4>
        <p style="margin: 0 0 1.5rem 0; color: var(--color-on-surface); opacity: 0.8; font-size: 0.875rem;">Compact buttons for toolbars and tight spaces</p>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          \${createIconButton("settingsIcon")}
          \${createIconButton("allAppsIcon")}
          \${createIconButton("deleteIcon")}
          \${createIconButton("editIcon")}
          \${createIconButton("closeIcon")}
          \${createIconButton("addCommentIcon")}
        </div>
      </div>
    </div>

    <div style="padding: 1.5rem; background: var(--color-surface); border-radius: 12px; border: 1px solid var(--color-primary-25);">
      <h4 style="margin: 0 0 1rem 0; color: var(--color-on-surface); font-size: 1.2rem;">Usage Examples</h4>
      <p style="margin: 0 0 1rem 0; color: var(--color-on-surface); opacity: 0.8;">Import and use pre-configured buttons:</p>
      <div style="background: var(--color-primary-25); padding: 1rem; border-radius: 8px; font-family: 'Monaco', 'Menlo', monospace; font-size: 0.875rem; color: var(--color-on-background); overflow-x: auto;">
import { createButton, createButtonElement, createIconButton } from '../tokens/button-configs.js';

// As HTML string
const html = createButton('delete');

// As DOM element  
const button = createButtonElement('add', { label: 'Add Item' });

// Icon-only buttons
const iconHtml = createIconButton('settingsIcon');

// With overrides
const customSave = createButton('save', { 
  label: 'Save Changes',
  variant: 'success' 
});
      </div>
    </div>
  \`;
  wrapper.appendChild(contentDiv);

  // Setup theme toggle functionality
  const themeButton = wrapper.querySelector('labs-button[icon="bedtime"]');
  if (themeButton) {
    setupThemeToggle(themeButton);
  }
  return wrapper;
}`,...r.parameters?.docs?.source}}};const m=["Usage"];export{r as Usage,m as __namedExportsOrder,d as default};
