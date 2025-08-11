import"./labs-icon-CZw9JeVg.js";import"./labs-button-DHQuKs1y.js";class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.undoTimeout=null,this.defaultTimeout=5e3}static get observedAttributes(){return["active","message","timeout","action-type"]}attributeChangedCallback(){this.render()}connectedCallback(){this.render(),this.setupEventListeners()}disconnectedCallback(){this.clearUndoTimeout()}setupEventListeners(){this.shadowRoot.addEventListener("labs-click",t=>{const i=t.target.closest('[data-action="undo"]'),e=t.target.closest('[data-action="dismiss"]');i?this.dispatchUndo():e&&this.dismiss()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&this.hasAttribute("active")&&this.dismiss()}),this.shadowRoot.addEventListener("click",t=>{t.target===this.shadowRoot.querySelector(".undo-overlay")&&this.dismiss()})}show(t,i="delete",e=this.defaultTimeout){this.setAttribute("message",t),this.setAttribute("action-type",i),this.setAttribute("timeout",e.toString()),this.setAttribute("active",""),this.startUndoTimer(e)}hide(){this.removeAttribute("active"),this.clearUndoTimeout()}dismiss(){this.hide(),this.dispatchEvent(new CustomEvent("labs-undo-dismiss",{bubbles:!0,detail:{actionType:this.getAttribute("action-type"),message:this.getAttribute("message")}}))}dispatchUndo(){this.hide(),this.dispatchEvent(new CustomEvent("labs-undo-action",{bubbles:!0,detail:{actionType:this.getAttribute("action-type"),message:this.getAttribute("message")}}))}startUndoTimer(t){this.clearUndoTimeout(),this.undoTimeout=setTimeout(()=>{this.dismiss()},t)}clearUndoTimeout(){this.undoTimeout&&(clearTimeout(this.undoTimeout),this.undoTimeout=null)}render(){const t=this.hasAttribute("active"),i=this.getAttribute("message")||"Action completed",e=this.getAttribute("action-type")||"delete";this.shadowRoot.innerHTML=`
      <style>
        :host {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2000;
          display: ${t?"flex":"none"};
          align-items: flex-end;
          justify-content: center;
          pointer-events: ${t?"auto":"none"};
          padding-bottom: var(--space-xl, 24px);
          box-sizing: border-box;
        }

        .undo-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          pointer-events: ${t?"auto":"none"};
        }

        .undo-notification {
          position: relative;
          background: var(--color-surface-container-high, #f5f5f5);
          border: 1px solid var(--color-outline, #d0d0d0);
          border-radius: var(--border-radius-lg, 12px);
          padding: var(--space-md, 16px) var(--space-lg, 20px);
          box-shadow: var(--shadow-overlay, 0 5px 20px rgba(0, 0, 0, 0.2));
          display: flex;
          align-items: center;
          gap: var(--space-md, 16px);
          max-width: 400px;
          width: 90%;
          animation: ${t?"slideUp":"slideDown"} 0.3s ease;
          pointer-events: auto;
        }

        .undo-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        .undo-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--space-xs, 4px);
        }

        .undo-message {
          font-size: var(--font-size-body, 1rem);
          color: var(--color-on-surface, #1f1f1f);
          margin: 0;
        }

        .undo-actions {
          display: flex;
          gap: var(--space-sm, 8px);
          align-items: center;
        }

        /* Action type styling */
        .notification-delete {
          border-left: 4px solid var(--color-error, #dc3545);
        }

        .notification-edit {
          border-left: 4px solid var(--color-warning, #ffc107);
        }

        .notification-add {
          border-left: 4px solid var(--color-success, #28a745);
        }

        /* Dark theme adjustments */
        :host-context(.theme-dark) .undo-notification {
          background: var(--color-surface-container-high, #2a2a2a);
          border-color: var(--color-outline, #525252);
        }

        :host-context(.theme-dark) .undo-message {
          color: var(--color-on-surface, #e0e0e0);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(20px);
          }
        }
      </style>

      <div class="undo-overlay"></div>
      <div class="undo-notification notification-${e}">
        <labs-icon 
          name="undo" 
          size="20" 
          color="var(--color-on-surface-variant)" 
          class="undo-icon"
        ></labs-icon>
        
        <div class="undo-content">
          <p class="undo-message">${i}</p>
          <div class="undo-actions">
            <labs-button 
              label="Undo" 
              variant="rounded-secondary"
              data-action="undo"
            ></labs-button>
            <labs-button 
              label="Dismiss" 
              variant="transparent"
              data-action="dismiss"
            ></labs-button>
          </div>
        </div>
      </div>
    `}}customElements.define("labs-undo-button",o);
