import"./labs-button-DEUKwH7W.js";import"./labs-icon-BgHZyyah.js";import"./labs-input-D7o3KkaA.js";import{a as r}from"./button-configs-CUB_r__D.js";class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.currentIndex=null}static get observedAttributes(){return["active"]}attributeChangedCallback(){this.render()}connectedCallback(){this.render(),this.setupEventListeners()}setupEventListeners(){this.shadowRoot.addEventListener("click",t=>{t.target===this.shadowRoot.querySelector(".overlay")&&this.close()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&this.hasAttribute("active")&&this.close()})}open(t="Add Task",e="Enter task...",n="",i=null){this.currentIndex=i;const s=this.shadowRoot.querySelector(".overlay-title"),a=this.shadowRoot.querySelector("#taskInput");s.textContent=t,a.setAttribute("placeholder",e),a.setValue(n),this.setAttribute("active",""),setTimeout(()=>{const o=this.shadowRoot.querySelector("#taskInput");o&&o.focus&&o.focus()},200)}close(){this.removeAttribute("active"),this.currentIndex=null}save(){const e=this.shadowRoot.querySelector("#taskInput").getValue().trim();e&&this.dispatchEvent(new CustomEvent("task-save",{bubbles:!0,detail:{text:e,index:this.currentIndex}})),this.close()}render(){const t=this.hasAttribute("active");this.shadowRoot.innerHTML=`
      <style>
        :host {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1000;
          display: ${t?"flex":"none"};
          align-items: center;
          justify-content: center;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--color-overlay-background, rgba(0, 0, 0, 0.5));
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          animation: ${t?"fadeIn":"fadeOut"} 0.2s ease;
        }

        .overlay-content {
          position: relative;
          background: var(--color-surface-container, #f8f9fa);
          border-radius: var(--border-radius-lg, 12px);
          padding: var(--space-xl, 24px);
          margin: var(--space-md, 16px);
          max-width: 400px;
          width: 90%;
          border: 1px solid var(--color-outline-variant, #e0e0e0);
          box-shadow: var(--shadow-overlay, 0 5px 20px rgba(0, 0, 0, 0.2));
          animation: ${t?"slideIn":"slideOut"} 0.2s ease;
        }

        .overlay-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--space-lg, 20px);
        }

        .overlay-title {
          font-size: var(--font-size-h3, 1.25rem);
          font-weight: var(--font-weight-medium, 500);
          color: var(--color-on-surface, #1f1f1f);
          margin: 0;
        }

        /* Remove close-button styles - now using labs-button component */

        .overlay-actions {
          display: flex;
          gap: var(--space-md, 12px);
          justify-content: flex-end;
          margin-top: var(--space-lg, 20px);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        @keyframes slideOut {
          from { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to { 
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
        }
      </style>

      <div class="overlay"></div>
      <div class="overlay-content">
        <div class="overlay-header">
          <h2 class="overlay-title">Add Task</h2>
          <div id="closeButtonContainer"></div>
        </div>

        <labs-input 
          id="taskInput"
          placeholder="Enter task..."
          maxlength="100"
        ></labs-input>

        <div class="overlay-actions">
          <div id="cancelButtonContainer"></div>
          <div id="saveButtonContainer"></div>
        </div>
      </div>
    `;const e=this.shadowRoot.querySelector("#closeButtonContainer"),n=this.shadowRoot.querySelector("#cancelButtonContainer"),i=this.shadowRoot.querySelector("#saveButtonContainer"),s=r("closeRounded"),a=r("cancelRounded"),o=r("saveRounded");e.appendChild(s),n.appendChild(a),i.appendChild(o);const l=this.shadowRoot.querySelector("#taskInput");s?.addEventListener("labs-click",()=>this.close()),a?.addEventListener("labs-click",()=>this.close()),o?.addEventListener("labs-click",()=>this.save()),l?.addEventListener("labs-keydown",c=>{c.detail.key==="Enter"&&this.save()})}}customElements.define("labs-input-overlay",d);
