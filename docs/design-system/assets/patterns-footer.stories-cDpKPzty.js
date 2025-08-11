import"./labs-button-0XNiK1kJ.js";import"./labs-footer-BltVLrQz.js";/* empty css                *//* empty css                   */import"./labs-icon-Dst3ctAl.js";const l={title:"Patterns",parameters:{docs:{description:{component:"Common UI patterns and page layouts using the Labs Design System components."}}}},t=()=>{const e=document.createElement("div");e.style.cssText=`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: var(--font-family-base, system-ui, -apple-system, sans-serif);
    background: var(--color-background, #f9fafb);
    color: var(--color-on-background);
  `,e.innerHTML=`
    <!-- Main content area -->
    <div style="flex: 1; padding: var(--space-lg, 2rem); display: flex; align-items: center; justify-content: center;">
      <div style="text-align: center; max-width: 600px;">
        <h1 style="margin: 0 0 var(--space-md, 1rem) 0; font-size: var(--font-size-h1, 1.75rem); font-weight: var(--font-weight-bold, 700); color: var(--color-on-background);">
          Footer Pattern
        </h1>
        <p style="margin: 0 0 var(--space-lg, 2rem) 0; font-size: var(--font-size-large, 1.125rem); color: var(--color-on-background); opacity: 0.8;">
          Complete footer with settings overlay and add button. This is the standard footer pattern used across all applications.
        </p>
      </div>
    </div>

    <!-- Complete Footer Component with Settings -->
    <labs-footer add-label="+ Add" with-settings-overlay></labs-footer>
  `;const o=e.querySelector("labs-footer");return o&&(o.addEventListener("add-click",()=>{alert("Add button clicked from footer!")}),o.addEventListener("settings-click",()=>{console.log("Settings overlay opened")})),e};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const container = document.createElement("div");
  container.style.cssText = \`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: var(--font-family-base, system-ui, -apple-system, sans-serif);
    background: var(--color-background, #f9fafb);
    color: var(--color-on-background);
  \`;
  container.innerHTML = \`
    <!-- Main content area -->
    <div style="flex: 1; padding: var(--space-lg, 2rem); display: flex; align-items: center; justify-content: center;">
      <div style="text-align: center; max-width: 600px;">
        <h1 style="margin: 0 0 var(--space-md, 1rem) 0; font-size: var(--font-size-h1, 1.75rem); font-weight: var(--font-weight-bold, 700); color: var(--color-on-background);">
          Footer Pattern
        </h1>
        <p style="margin: 0 0 var(--space-lg, 2rem) 0; font-size: var(--font-size-large, 1.125rem); color: var(--color-on-background); opacity: 0.8;">
          Complete footer with settings overlay and add button. This is the standard footer pattern used across all applications.
        </p>
      </div>
    </div>

    <!-- Complete Footer Component with Settings -->
    <labs-footer add-label="+ Add" with-settings-overlay></labs-footer>
  \`;

  // Add event listeners to demonstrate functionality
  const footer = container.querySelector('labs-footer');
  if (footer) {
    footer.addEventListener('add-click', () => {
      alert('Add button clicked from footer!');
    });
    footer.addEventListener('settings-click', () => {
      console.log('Settings overlay opened');
    });
  }
  return container;
}`,...t.parameters?.docs?.source}}};const c=["Footer"];export{t as Footer,c as __namedExportsOrder,l as default};
