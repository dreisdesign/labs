import"./labs-button-D66A47xF.js";/* empty css                *//* empty css                   */import"./labs-icon-Cc9TYFB1.js";const i={title:"Patterns",parameters:{docs:{description:{component:"Common UI patterns and page layouts using the Labs Design System components."}}}},n=()=>{const t=document.createElement("div");return t.style.cssText=`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: var(--font-family-base, system-ui, -apple-system, sans-serif);
    background: var(--color-background, #f9fafb);
    color: var(--color-on-background);
  `,t.innerHTML=`
    <!-- Main content area -->
    <div style="flex: 1; padding: var(--space-lg, 2rem); display: flex; align-items: center; justify-content: center;">
      <div style="text-align: center; max-width: 600px;">
        <h1 style="margin: 0 0 var(--space-md, 1rem) 0; font-size: var(--font-size-h1, 1.75rem); font-weight: var(--font-weight-bold, 700); color: var(--color-on-background);">
          Your Application
        </h1>
        <p style="margin: 0 0 var(--space-lg, 2rem) 0; font-size: var(--font-size-large, 1.125rem); color: var(--color-on-background); opacity: 0.8;">
          This is your main content area. The footer will always stay at the bottom with a glassmorphic design.
        </p>
      </div>
    </div>

    <!-- Footer Pattern (Tracker-style) -->
    <div style="
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 95%;
      background-color: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(25px);
      -webkit-backdrop-filter: blur(16px);
      transition: background-color 0.3s ease, box-shadow 0.3s ease, opacity 0.3s;
      padding: var(--space-lg, 1.25rem) 0;
      z-index: 100;
      border-radius: 100px 100px 0 0;
      box-shadow: none;
      pointer-events: auto;
      border-top: 0.75px solid rgba(255, 255, 255, 0.5);
      margin-left: auto;
      margin-right: auto;
    ">
      <!-- Container for footer buttons -->
      <div style="
        display: flex;
        position: relative;
        width: 100%;
        margin: 0 auto;
        padding: 0 var(--space-md, 1rem);
        box-sizing: border-box;
        min-height: 60px;
        background-color: transparent;
        pointer-events: auto;
        z-index: 101;
        align-items: center;
        justify-content: center;
      ">
        <!-- Primary Action Button (centered) -->
        <labs-button 
          label="+ Add" 
          variant="primary" 
          checkmark
          style="
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            min-width: 120px;
            padding: var(--space-sm, 0.75rem) var(--space-lg, 1.5rem);
            margin: 0;
            font-size: var(--font-size-large, 1.1rem);
            font-weight: var(--font-weight-semibold, 600);
          "
        ></labs-button>
        
        <!-- Settings Button (positioned right) -->
        <labs-button 
          icon="settings" 
          variant="icon" 
          aria-label="Open Settings"
          style="
            position: absolute;
            right: 60px;
            top: 50%;
            transform: translateY(-50%);
            padding: var(--space-sm, 0.5rem);
            --labs-button-icon-color: var(--color-primary);
          "
        ></labs-button>
      </div>
    </div>
  `,t};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
          Your Application
        </h1>
        <p style="margin: 0 0 var(--space-lg, 2rem) 0; font-size: var(--font-size-large, 1.125rem); color: var(--color-on-background); opacity: 0.8;">
          This is your main content area. The footer will always stay at the bottom with a glassmorphic design.
        </p>
      </div>
    </div>

    <!-- Footer Pattern (Tracker-style) -->
    <div style="
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 95%;
      background-color: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(25px);
      -webkit-backdrop-filter: blur(16px);
      transition: background-color 0.3s ease, box-shadow 0.3s ease, opacity 0.3s;
      padding: var(--space-lg, 1.25rem) 0;
      z-index: 100;
      border-radius: 100px 100px 0 0;
      box-shadow: none;
      pointer-events: auto;
      border-top: 0.75px solid rgba(255, 255, 255, 0.5);
      margin-left: auto;
      margin-right: auto;
    ">
      <!-- Container for footer buttons -->
      <div style="
        display: flex;
        position: relative;
        width: 100%;
        margin: 0 auto;
        padding: 0 var(--space-md, 1rem);
        box-sizing: border-box;
        min-height: 60px;
        background-color: transparent;
        pointer-events: auto;
        z-index: 101;
        align-items: center;
        justify-content: center;
      ">
        <!-- Primary Action Button (centered) -->
        <labs-button 
          label="+ Add" 
          variant="primary" 
          checkmark
          style="
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            min-width: 120px;
            padding: var(--space-sm, 0.75rem) var(--space-lg, 1.5rem);
            margin: 0;
            font-size: var(--font-size-large, 1.1rem);
            font-weight: var(--font-weight-semibold, 600);
          "
        ></labs-button>
        
        <!-- Settings Button (positioned right) -->
        <labs-button 
          icon="settings" 
          variant="icon" 
          aria-label="Open Settings"
          style="
            position: absolute;
            right: 60px;
            top: 50%;
            transform: translateY(-50%);
            padding: var(--space-sm, 0.5rem);
            --labs-button-icon-color: var(--color-primary);
          "
        ></labs-button>
      </div>
    </div>
  \`;
  return container;
}`,...n.parameters?.docs?.source}}};const s=["Footer"];export{n as Footer,s as __namedExportsOrder,i as default};
