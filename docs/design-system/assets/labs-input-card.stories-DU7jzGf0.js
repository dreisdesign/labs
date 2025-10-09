import"./labs-overlay-AWkXp-xX.js";class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          max-width: 420px;
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
        }
        .close-btn {
          width:40px; height:40px; min-width:40px; min-height:40px;
          border-radius:50%; background:inherit; box-shadow:none; padding:0; display:flex; align-items:center; justify-content:center;
        }
        .header {
          margin:0;
          font-size:var(--font-size-card-header, 1.125rem);
          font-weight:var(--font-weight-card-header, 600);
          line-height:var(--line-height-card-header, 1.2);
          color:var(--color-on-background,inherit);
        }
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
        <div class="header">New item</div>
        <labs-button id="icon-close-btn" class="close-btn" variant="icon" aria-label="Close">
          <labs-icon name="close" slot="icon-left" width="24" height="24"></labs-icon>
        </labs-button>
      </div>
  <!-- description removed for Today-List -->
      <div class="input-row">
        <textarea id="cardInput" rows="2" placeholder="What do you want to do?" autocomplete="off"></textarea>
      </div>
      <div class="actions">
        <div class="btn-transparent">
          <labs-button id="cancelBtn" variant="secondary">Cancel</labs-button>
        </div>
        <labs-button id="saveBtn" variant="primary">Save</labs-button>
      </div>
    `;const o=this.shadowRoot.getElementById("icon-close-btn");o&&o.addEventListener("click",()=>this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})));const t=this.shadowRoot.getElementById("cancelBtn");t&&t.addEventListener("click",()=>this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})));const e=this.shadowRoot.getElementById("saveBtn"),a=this.shadowRoot.getElementById("cardInput");if(e&&a){const i=()=>{const n=a.value.trim();this.dispatchEvent(new CustomEvent("save",{detail:{value:n},bubbles:!0,composed:!0}))};e.addEventListener("click",()=>i()),a.addEventListener("keydown",n=>{n.key==="Enter"&&(n.ctrlKey||n.metaKey)&&(n.preventDefault(),i())})}}}customElements.define("labs-input-card",d);const l={title:"3. Components (Wrapped)/Input Card",tags:["autodocs"],argTypes:{rows:{control:{type:"number",min:1,max:8},defaultValue:2},maxWidth:{control:"text",defaultValue:"520px"},overlaySize:{control:{type:"select",options:["small","medium","large","full"]},defaultValue:"medium"},transparent:{control:"boolean",defaultValue:!0}}},r=({rows:s,maxWidth:o})=>{const t=document.createElement("div");t.style.padding="20px";const e=document.createElement("labs-input-card");return e.style.maxWidth=o,setTimeout(()=>{const a=e.shadowRoot?.querySelector("#cardInput")||e.querySelector("#cardInput");a&&(a.rows=s)},0),t.appendChild(e),t};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  rows,
  maxWidth
}) => {
  const host = document.createElement('div');
  host.style.padding = '20px';
  const card = document.createElement('labs-input-card');
  card.style.maxWidth = maxWidth;
  // Wait for custom element to render its internals
  setTimeout(() => {
    const ta = card.shadowRoot?.querySelector('#cardInput') || card.querySelector('#cardInput');
    if (ta) ta.rows = rows;
  }, 0);
  host.appendChild(card);
  return host;
}`,...r.parameters?.docs?.source}}};const p=["Standalone"];export{r as Standalone,p as __namedExportsOrder,l as default};
