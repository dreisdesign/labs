import"./labs-list-item-BU2lMCh9.js";class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._open=!1,this.render()}static get observedAttributes(){return["archived","restored"]}attributeChangedCallback(){this.render()}connectedCallback(){document.addEventListener("click",this._outsideClick=e=>{this._open&&!this.contains(e.target)&&!this.shadowRoot.contains(e.target)&&this._close()})}disconnectedCallback(){document.removeEventListener("click",this._outsideClick)}render(){this.shadowRoot.innerHTML=`
      <style>
        :host { display: inline-block; position: relative; }
        .trigger { display:inline-flex; }
        labs-button[variant="icon"] { --icon-size:20px; }
                .menu {
                    position: absolute;
                    right: -12px;
                    top: calc(100%);
                    background: var(--color-surface, #fff);
                    border-radius: var(--labs-card-radius, 12px);
                    box-shadow: var(--labs-card-shadow, 0 6px 26px rgba(0,0,0,0.12));
                    padding: 8px;
                    min-width: fit-content;
                    width: 100%;
                    z-index: 40;
                    display: none;
                    box-sizing: border-box;
                }
        .menu.open { display: block; }
                                    .menu labs-button {
                                        width: 100%;
                                        display: block;
                                        text-align: left;
                                        gap: 10px;
                                        margin: 0;
                                        box-sizing: border-box;
                                    }
                                            .menu labs-button button {
                                                display: flex !important;
                                                width: 100% !important;
                                                align-items: center;
                                                justify-content: flex-end;
                                                text-align: left;
                                            }
                    .menu labs-button + labs-button { margin-top: 6px; }
                    .menu labs-button[variant="destructive"] labs-icon { color: var(--color-on-error, #fff); }
      </style>
            <div class="trigger">
                <labs-button id="toggleBtn" variant="icon" aria-label="More">
                    <labs-icon slot="icon-left" name="more_vert" width="20" height="20" color="currentColor"></labs-icon>
                </labs-button>
            </div>
      <div id="menu" class="menu" role="menu" aria-hidden="true">
    <labs-button id="archiveBtn" variant="secondary" size="small" fullwidth>
          <labs-icon slot="icon-left" name="archive" width="20" height="20"></labs-icon>
          Archive
        </labs-button>
    <labs-button id="deleteBtn" variant="destructive" size="small" fullwidth>
          <labs-icon slot="icon-left" name="delete_forever" width="20" height="20"></labs-icon>
          Delete
        </labs-button>
      </div>
    `;const e=this.shadowRoot.getElementById("toggleBtn");e&&e.addEventListener("click",i=>{i.stopPropagation(),this._toggle()});const n=this.shadowRoot.getElementById("archiveBtn");n&&n.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),this.hasAttribute("archived")&&!this.hasAttribute("restored")?this.dispatchEvent(new CustomEvent("restore",{bubbles:!0,composed:!0})):this.hasAttribute("archived")||this.dispatchEvent(new CustomEvent("archive",{bubbles:!0,composed:!0})),this._close()});const s=this.shadowRoot.getElementById("deleteBtn");s&&s.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),this.dispatchEvent(new CustomEvent("remove",{bubbles:!0,composed:!0})),this._close()});const o=this.shadowRoot.getElementById("menu");this.hasAttribute("archived")?(n&&(n.innerHTML='<labs-icon slot="icon-left" name="history" width="20" height="20"></labs-icon> Restore'),s&&(s.style.display="")):(n&&(n.innerHTML='<labs-icon slot="icon-left" name="archive" width="20" height="20"></labs-icon> Archive'),s&&(s.style.display="none")),this._open?o&&(o.classList.add("open"),o.setAttribute("aria-hidden","false")):o&&(o.classList.remove("open"),o.setAttribute("aria-hidden","true"))}_toggle(){this._open=!this._open,this.render()}_close(){this._open=!1,this.render()}}customElements.get("labs-dropdown")||customElements.define("labs-dropdown",l);const c={title:"Components/Dropdown",tags:["autodocs"]},a=()=>{const t=document.createElement("div");t.style.padding="20px";const e=document.createElement("labs-list-item");return e.setAttribute("value","Example item"),t.appendChild(e),t},r=()=>{const t=document.createElement("div");t.style.padding="20px";const e=document.createElement("labs-list-item");return e.setAttribute("value","Archived item"),e.setAttribute("archived",""),t.appendChild(e),t};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const wrap = document.createElement('div');
  wrap.style.padding = '20px';
  const item = document.createElement('labs-list-item');
  item.setAttribute('value', 'Example item');
  wrap.appendChild(item);
  return wrap;
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const wrap = document.createElement('div');
  wrap.style.padding = '20px';
  const item = document.createElement('labs-list-item');
  item.setAttribute('value', 'Archived item');
  item.setAttribute('archived', '');
  wrap.appendChild(item);
  return wrap;
}`,...r.parameters?.docs?.source}}};const u=["Default","Archived"];export{r as Archived,a as Default,u as __namedExportsOrder,c as default};
