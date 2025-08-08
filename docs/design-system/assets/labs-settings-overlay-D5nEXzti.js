import"./labs-button-JZi7o1_n.js";import"./labs-icon-mNfcruWU.js";import"./labs-theme-toggle-button-EBbyR9Xb.js";import{c as o}from"./button-configs-UvNeOF8F.js";class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["active"]}attributeChangedCallback(){this.render()}connectedCallback(){this.render(),this.setupEventListeners(),this.setupThemeObserver()}setupThemeObserver(){this.themeObserver=new MutationObserver(t=>{t.forEach(e=>{e.type==="attributes"&&e.attributeName==="class"&&this.updateIconColors()})}),this.themeObserver.observe(document.body,{attributes:!0,attributeFilter:["class"]})}updateIconColors(){const t=this.shadowRoot.querySelector(".close-button labs-icon");t&&t.setAttribute("color","var(--color-on-surface)")}setupEventListeners(){this.shadowRoot.addEventListener("click",t=>{(t.target===this.shadowRoot.host||t.target.classList.contains("overlay-background"))&&this.close()}),setTimeout(()=>{const t=this.shadowRoot.querySelector(".close-button");t&&t.addEventListener("click",()=>this.close())},0),this.handleEscape=t=>{t.key==="Escape"&&this.hasAttribute("active")&&this.close()},document.addEventListener("keydown",this.handleEscape)}disconnectedCallback(){document.removeEventListener("keydown",this.handleEscape),this.themeObserver&&this.themeObserver.disconnect()}open(){this.setAttribute("active","")}close(){this.removeAttribute("active"),this.dispatchEvent(new CustomEvent("overlay-close",{bubbles:!0}))}render(){const t=this.hasAttribute("active");this.shadowRoot.innerHTML=`
      <style>
        :host {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          display: ${t?"flex":"none"};
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

        .overlay-content {
          background: var(--color-surface);
          border-radius: 12px;
          padding: var(--space-lg);
          max-width: 400px;
          width: 90%;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
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
      <div class="overlay-content">
        <div class="overlay-header">
          <h2>Settings</h2>
          <button class="close-button">
            <labs-icon name="close" width="24" height="24" color="var(--color-on-surface)"></labs-icon>
          </button>
        </div>

          <div class="button-container">
          </div>
        </div>
      </div>
    `;const e=this.shadowRoot.querySelector(".button-container"),n=o("appsContainer"),i=o("settingsContainer"),a=o("resetAllDataContainer"),s=document.createElement("labs-theme-toggle-button");s.setAttribute("variant","container"),e.appendChild(n),e.appendChild(s),e.appendChild(i),e.appendChild(a),n.addEventListener("labs-click",()=>{this.dispatchEvent(new CustomEvent("action-click",{bubbles:!0,detail:{action:"apps"}}))}),i.addEventListener("labs-click",()=>{this.dispatchEvent(new CustomEvent("action-click",{bubbles:!0,detail:{action:"settings"}}))}),a.addEventListener("labs-click",()=>{this.dispatchEvent(new CustomEvent("action-click",{bubbles:!0,detail:{action:"reset"}}))}),s.addEventListener("labs-click",()=>{this.dispatchEvent(new CustomEvent("action-click",{bubbles:!0,detail:{action:"theme-toggle"}}))}),this.setupEventListeners()}}customElements.define("labs-settings-overlay",r);
