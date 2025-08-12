import"./labs-button-DEUKwH7W.js";import"./labs-icon-BgHZyyah.js";import"./labs-card-BytySobv.js";import{u as l,a as c,s as d}from"./button-configs-CUB_r__D.js";class v extends HTMLElement{static get observedAttributes(){return["variant"]}constructor(){super(),this.attachShadow({mode:"open"}),this.button=null,this.variant=this.getAttribute("variant")||"transparent"}connectedCallback(){this.render(),this.setupThemeObserver()}disconnectedCallback(){this.themeObserver&&this.themeObserver.disconnect()}attributeChangedCallback(e,o,t){e==="variant"&&o!==t&&(this.variant=t||"transparent",this.render())}setupThemeObserver(){this.themeObserver=new MutationObserver(()=>{const e=document.body.classList.contains("theme-dark")||document.body.classList.contains("dark-mode");this.button&&(l(this.button,e),this.variant!=="container"&&this.button.setAttribute("iconcolor","var(--color-on-surface)"))}),this.themeObserver.observe(document.body,{attributes:!0,attributeFilter:["class"]})}render(){const e=this.getAttribute("variant")||"transparent";this.shadowRoot.innerHTML=`
      <style>
        :host { display: ${e==="container"?"block":"inline-block"}; width: ${e==="container"?"100%":"auto"}; }
        .wrap { width: ${e==="container"?"100%":"auto"}; }
      </style>
      <div class="wrap"></div>
    `;const o=this.shadowRoot.querySelector(".wrap");let t;e==="container"?t=c("themeToggleContainer"):e==="icon"?(t=document.createElement("labs-button"),t.setAttribute("variant","icon"),t.setAttribute("icon","bedtime"),t.setAttribute("aria-label","Toggle theme"),t.setAttribute("iconcolor","var(--color-on-surface)")):t=c("themeToggle"),o.appendChild(t),this.button=t,d(t,(r,s)=>{e!=="container"&&t.setAttribute("iconcolor","var(--color-on-surface)")})}}customElements.define("labs-theme-toggle-button",v);class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["active"]}attributeChangedCallback(){this.render()}connectedCallback(){this.render(),this.setupEventListeners(),this.setupThemeObserver()}setupThemeObserver(){this.themeObserver=new MutationObserver(e=>{e.forEach(o=>{o.type==="attributes"&&o.attributeName==="class"&&this.updateIconColors()})}),this.themeObserver.observe(document.body,{attributes:!0,attributeFilter:["class"]})}updateIconColors(){const e=this.shadowRoot.querySelector(".close-button labs-icon");e&&e.setAttribute("color","var(--color-on-surface)")}setupEventListeners(){this.shadowRoot.addEventListener("click",e=>{(e.target===this.shadowRoot.host||e.target.classList.contains("overlay-background"))&&this.close()}),setTimeout(()=>{const e=this.shadowRoot.querySelector(".close-button");e&&e.addEventListener("click",()=>this.close())},0),this.handleEscape=e=>{e.key==="Escape"&&this.hasAttribute("active")&&this.close()},document.addEventListener("keydown",this.handleEscape)}disconnectedCallback(){document.removeEventListener("keydown",this.handleEscape),this.themeObserver&&this.themeObserver.disconnect()}open(){this.setAttribute("active","")}close(){this.removeAttribute("active"),this.dispatchEvent(new CustomEvent("overlay-close",{bubbles:!0}))}render(){const e=this.hasAttribute("active");this.shadowRoot.innerHTML=`
      <style>
        :host {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          display: ${e?"flex":"none"};
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .overlay-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .settings-card {
          position: relative;
          z-index: 1001;
        }

        .overlay-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-md);
        }

        .overlay-header h2 {
          font-size: var(--font-size-h2);
          font-weight: var(--font-weight-semibold);
          color: var(--color-on-surface);
          margin: 0;
        }

        .close-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: var(--space-xs);
          border-radius: 8px;
        }

        .button-container {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }
      </style>
      
      <div class="overlay-background"></div>
      <labs-card class="settings-card" variant="overlay">
        <div class="overlay-header">
          <h2>Settings</h2>
          <button class="close-button">
            <labs-icon name="close" width="24" height="24" color="var(--color-on-surface)"></labs-icon>
          </button>
        </div>

        <div class="button-container">
        </div>
      </labs-card>
    `;const o=this.shadowRoot.querySelector(".button-container"),t=c("appsContainer"),r=c("resetAllDataContainer"),s=document.createElement("labs-theme-toggle-button");s.setAttribute("variant","container"),o.appendChild(t),o.appendChild(s),o.appendChild(r),t.addEventListener("labs-click",()=>{this.dispatchEvent(new CustomEvent("action-click",{bubbles:!0,detail:{action:"apps"}}))}),r.addEventListener("labs-click",()=>{this.dispatchEvent(new CustomEvent("action-click",{bubbles:!0,detail:{action:"reset"}}))}),s.addEventListener("labs-click",()=>{this.dispatchEvent(new CustomEvent("action-click",{bubbles:!0,detail:{action:"theme-toggle"}}))}),this.setupEventListeners()}}customElements.define("labs-settings-overlay",u);const g={title:"Components/Settings Overlay",component:"labs-settings-overlay",parameters:{docs:{description:{component:`
A modal overlay component for settings and configuration options with a glassmorphic backdrop.

## Features
- **Modal Overlay**: Full-screen overlay with backdrop blur
- **Event-Driven**: Emits custom events for actions and close
- **Keyboard Support**: Escape key to close
- **Click Outside**: Click backdrop to close
- **Theme Responsive**: Automatically adapts to light/dark themes
- **Modular**: Self-contained with shadow DOM encapsulation

## Usage
\`\`\`html
<labs-settings-overlay id="settings"></labs-settings-overlay>

<script>
const overlay = document.getElementById('settings');
overlay.open(); // Show the overlay
overlay.close(); // Hide the overlay
<\/script>
\`\`\`

## Events
- \`action-click\`: Fired when any action button is clicked (detail.action contains the action name)
- \`overlay-close\`: Fired when the overlay is closed

## Methods
- \`open()\`: Show the overlay
- \`close()\`: Hide the overlay

## Actions Available
- \`apps\`: All Apps button
- \`theme-toggle\`: Dark Mode toggle
- \`settings\`: Additional Settings
- \`reset\`: Reset Data (danger action)
        `}}}},a=()=>{const n=document.createElement("div");n.style.cssText=`
    min-height: 100vh;
    background: var(--color-background);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  `,n.innerHTML=`
    <div style="text-align: center;">
      <h2 style="color: var(--color-on-background); margin-bottom: 1rem;">Settings Overlay Demo</h2>
      <p style="color: var(--color-on-background); opacity: 0.8; margin-bottom: 2rem;">
        Click the button below to open the settings overlay
      </p>
      <button id="openSettings" style="
        background: var(--color-primary);
        color: var(--color-on-primary);
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        cursor: pointer;
        font-size: 1rem;
      ">Open Settings</button>
    </div>
    
    <labs-settings-overlay id="settingsOverlay"></labs-settings-overlay>
  `;const e=n.querySelector("#openSettings"),o=n.querySelector("#settingsOverlay");return e&&o&&(e.addEventListener("click",()=>{o.open()}),o.addEventListener("action-click",t=>{const r=t.detail.action;r==="theme-toggle"||(alert(`Action clicked: ${r}`),o.close())}),o.addEventListener("overlay-close",()=>{console.log("Settings overlay closed")})),n},i=()=>{const n=document.createElement("div");n.style.cssText=`
    min-height: 100vh;
    background: var(--color-background);
    position: relative;
  `,n.innerHTML=`
    <div style="position: absolute; top: 2rem; left: 2rem; z-index: 1001;">
      <h2 style="color: var(--color-on-primary); margin-bottom: 0.5rem; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">Always Open Demo</h2>
      <p style="color: var(--color-on-primary); opacity: 0.9; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">
        This shows the overlay in its open state
      </p>
    </div>
    
    <labs-settings-overlay active></labs-settings-overlay>
  `;const e=n.querySelector("labs-settings-overlay");return e&&(e.addEventListener("action-click",o=>{const t=o.detail.action;alert(`Action clicked: ${t}`)}),e.addEventListener("overlay-close",()=>{setTimeout(()=>e.open(),100)})),n};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const container = document.createElement("div");
  container.style.cssText = \`
    min-height: 100vh;
    background: var(--color-background);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  \`;
  container.innerHTML = \`
    <div style="text-align: center;">
      <h2 style="color: var(--color-on-background); margin-bottom: 1rem;">Settings Overlay Demo</h2>
      <p style="color: var(--color-on-background); opacity: 0.8; margin-bottom: 2rem;">
        Click the button below to open the settings overlay
      </p>
      <button id="openSettings" style="
        background: var(--color-primary);
        color: var(--color-on-primary);
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        cursor: pointer;
        font-size: 1rem;
      ">Open Settings</button>
    </div>
    
    <labs-settings-overlay id="settingsOverlay"></labs-settings-overlay>
  \`;
  const openButton = container.querySelector('#openSettings');
  const overlay = container.querySelector('#settingsOverlay');
  if (openButton && overlay) {
    openButton.addEventListener('click', () => {
      overlay.open();
    });
    overlay.addEventListener('action-click', e => {
      const action = e.detail.action;
      if (action === 'theme-toggle') {
        // Don't show alert for theme toggle - it's handled automatically by the component
        // Don't close overlay for theme toggle - it's a toggle action
      } else {
        alert(\`Action clicked: \${action}\`);
        // Close overlay after other actions
        overlay.close();
      }
    });
    overlay.addEventListener('overlay-close', () => {
      console.log('Settings overlay closed');
    });
  }
  return container;
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const container = document.createElement("div");
  container.style.cssText = \`
    min-height: 100vh;
    background: var(--color-background);
    position: relative;
  \`;
  container.innerHTML = \`
    <div style="position: absolute; top: 2rem; left: 2rem; z-index: 1001;">
      <h2 style="color: var(--color-on-primary); margin-bottom: 0.5rem; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">Always Open Demo</h2>
      <p style="color: var(--color-on-primary); opacity: 0.9; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">
        This shows the overlay in its open state
      </p>
    </div>
    
    <labs-settings-overlay active></labs-settings-overlay>
  \`;
  const overlay = container.querySelector('labs-settings-overlay');
  if (overlay) {
    overlay.addEventListener('action-click', e => {
      const action = e.detail.action;
      alert(\`Action clicked: \${action}\`);
    });
    overlay.addEventListener('overlay-close', () => {
      // Re-open immediately for demo purposes
      setTimeout(() => overlay.open(), 100);
    });
  }
  return container;
}`,...i.parameters?.docs?.source}}};const y=["Default","AlwaysOpen"];export{i as AlwaysOpen,a as Default,y as __namedExportsOrder,g as default};
