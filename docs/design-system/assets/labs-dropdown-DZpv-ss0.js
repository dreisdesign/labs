class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._open=!1,this._menuId=`labs-dropdown-menu-${Math.random().toString(36).slice(2,8)}`,this.render()}static get observedAttributes(){return["archived","restored","open","only"]}attributeChangedCallback(t){t==="open"&&(this._open=this.hasAttribute("open")),this.render()}get open(){return this._open}set open(t){!!t?this.setAttribute("open",""):this.removeAttribute("open")}connectedCallback(){document.addEventListener("click",this._outsideClick=t=>{if(!this._open)return;const e=t.composedPath?t.composedPath():t.path||[];!e.includes(this)&&!e.includes(this.shadowRoot)&&this._close()})}disconnectedCallback(){document.removeEventListener("click",this._outsideClick)}render(){this.shadowRoot.innerHTML=`
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
                                <labs-button id="toggleBtn" variant="icon" aria-label="More" aria-haspopup="true" aria-expanded="${this._open?"true":"false"}" aria-controls="${this._menuId}">
                                        <labs-icon slot="icon-left" name="more_vert" width="20" height="20" color="currentColor"></labs-icon>
                                </labs-button>
                        </div>
                        <div id="${this._menuId}" class="menu" role="menu" aria-hidden="true">
                ${this.getAttribute("only")==="delete"?"":`<labs-button id="archiveBtn" variant="secondary" size="small" fullwidth role="menuitem" tabindex="-1">
                    <labs-icon slot="icon-left" name="archive" width="20" height="20"></labs-icon>
                    Archive
                </labs-button>`}
                <labs-button id="deleteBtn" variant="destructive" size="small" fullwidth role="menuitem" tabindex="-1">
                    <labs-icon slot="icon-left" name="delete_forever" width="20" height="20"></labs-icon>
                    Delete
                </labs-button>
            </div>
    `;const t=this.shadowRoot.getElementById("toggleBtn");t&&(t.addEventListener("click",o=>{o.stopPropagation(),this._toggle()}),t.addEventListener("keydown",o=>this._onToggleKeyDown(o)));const e=this.shadowRoot.getElementById("archiveBtn");e&&e.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation(),this.hasAttribute("archived")&&!this.hasAttribute("restored")?this.dispatchEvent(new CustomEvent("restore",{bubbles:!0,composed:!0})):this.hasAttribute("archived")||this.dispatchEvent(new CustomEvent("archive",{bubbles:!0,composed:!0})),this._close()});const i=this.shadowRoot.getElementById("deleteBtn");i&&i.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation(),this.dispatchEvent(new CustomEvent("remove",{bubbles:!0,composed:!0})),this._close()});const s=this.shadowRoot.getElementById(this._menuId),n=(this.getAttribute("only")||"").split(",").map(o=>o.trim().toLowerCase()).filter(Boolean),a=n.length?n.includes("archive"):!0,d=n.length?n.includes("delete"):!1;a||e&&(e.style.display="none"),d&&i&&(i.style.display="",i.removeAttribute("aria-hidden"),i.removeAttribute("disabled")),a&&this.hasAttribute("archived")?(e&&(e.innerHTML='<labs-icon slot="icon-left" name="history" width="20" height="20"></labs-icon> Restore'),i&&(i.style.display="")):(e&&(e.innerHTML='<labs-icon slot="icon-left" name="archive" width="20" height="20"></labs-icon> Archive'),i&&(i.style.display="none")),this._open?(s&&(s.classList.add("open"),s.setAttribute("aria-hidden","false")),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0}))):(s&&(s.classList.remove("open"),s.setAttribute("aria-hidden","true")),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})));const r=this.shadowRoot.getElementById("toggleBtn");r&&r.setAttribute("aria-expanded",String(this._open)),s&&s.addEventListener("keydown",o=>this._onMenuKeyDown(o))}_getMenuItems(){const t=this.shadowRoot.getElementById(this._menuId);return t?Array.from(t.querySelectorAll("labs-button")):[]}_focusItemAt(t){const e=this._getMenuItems();if(!e.length)return;const i=(t+e.length)%e.length,s=e[i];if(s){s.hasAttribute("tabindex")||s.setAttribute("tabindex","0");try{s.focus()}catch{}this._currentIndex=i}}_focusFirstItem(){this._focusItemAt(0)}_focusLastItem(){const t=this._getMenuItems();this._focusItemAt(t.length-1)}_onToggleKeyDown(t){const e=t.key;e==="Enter"||e===" "||e==="Spacebar"?(t.preventDefault(),t.stopPropagation(),this.open=!0,this._focusFirstItem()):e==="ArrowDown"?(t.preventDefault(),t.stopPropagation(),this.open=!0,this._focusFirstItem()):e==="ArrowUp"&&(t.preventDefault(),t.stopPropagation(),this.open=!0,this._focusLastItem())}_onMenuKeyDown(t){const e=t.key;if(this._getMenuItems().length)if(e==="ArrowDown")t.preventDefault(),t.stopPropagation(),this._focusItemAt((this._currentIndex||0)+1);else if(e==="ArrowUp")t.preventDefault(),t.stopPropagation(),this._focusItemAt((this._currentIndex||0)-1);else if(e==="Home")t.preventDefault(),t.stopPropagation(),this._focusFirstItem();else if(e==="End")t.preventDefault(),t.stopPropagation(),this._focusLastItem();else if(e==="Escape"){t.preventDefault(),t.stopPropagation(),this._close();const s=this.shadowRoot.getElementById("toggleBtn");s&&s.focus()}else e==="Tab"&&this._close()}_toggle(){this.open=!this._open}_close(){this.open=!1}}customElements.get("labs-dropdown")||customElements.define("labs-dropdown",h);
