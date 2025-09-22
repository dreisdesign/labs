class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          width: 100%;
          max-width: 520px;
          margin: 0 auto;
          background: var(--color-surface, #fff);
          border-radius: 18px;
          box-shadow: 0 6px 40px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.04);
          padding: 20px 18px;
          font-family: var(--font-family-base, system-ui, sans-serif);
          position: relative;
        }
        .header-row {
          display:flex;
          align-items:center;
          justify-content:space-between;
          margin-bottom:12px;
        }
        .close-btn {
          width:40px; height:40px; min-width:40px; min-height:40px;
          border-radius:50%; background:inherit; box-shadow:none; padding:0; display:flex; align-items:center; justify-content:center;
        }
        h3 { margin:0; font-size:1.05rem; font-weight:700; }
        .description { margin-top:8px; color:var(--color-on-surface-muted, #666); font-size:0.95rem; }
        .input-row { margin-top:14px; }
        textarea { width:100%; box-sizing:border-box; padding:12px 14px; border-radius:10px; border:1px solid var(--color-outline, #e6e6ea); font-size:1rem; font-family: inherit; resize: vertical; min-height: 60px; }
        .actions { display:flex; gap:10px; margin-top:16px; justify-content:flex-end; }
        .btn-transparent labs-button {
          background: transparent;
          box-shadow: none;
        }
        labs-button { min-width: 92px; }
      </style>
      <div class="header-row">
        <h3>New item</h3>
        <labs-button id="icon-close-btn" class="close-btn" variant="icon" aria-label="Close">
          <labs-icon name="close" slot="icon-left" width="24" height="24"></labs-icon>
        </labs-button>
      </div>
      <div class="description">Add a new item to your Today List.</div>
      <div class="input-row">
        <textarea id="cardInput" rows="2" placeholder="What do you want to do?" autocomplete="off"></textarea>
      </div>
      <div class="actions">
        <div class="btn-transparent">
          <labs-button id="cancelBtn" variant="secondary">Cancel</labs-button>
        </div>
        <labs-button id="saveBtn" variant="primary">Save</labs-button>
      </div>
    `;const n=this.shadowRoot.getElementById("icon-close-btn");n&&n.addEventListener("click",()=>this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})));const o=this.shadowRoot.getElementById("cancelBtn");o&&o.addEventListener("click",()=>this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})));const a=this.shadowRoot.getElementById("saveBtn"),e=this.shadowRoot.getElementById("cardInput");if(a&&e){const i=()=>{const t=e.value.trim();this.dispatchEvent(new CustomEvent("save",{detail:{value:t},bubbles:!0,composed:!0}))};a.addEventListener("click",()=>i()),e.addEventListener("keydown",t=>{t.key==="Enter"&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),i())})}}}customElements.define("labs-input-card",s);
