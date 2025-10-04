class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._open=!1,this._menuId=`labs-dropdown-menu-${Math.random().toString(36).slice(2,8)}`,this.render()}static get observedAttributes(){return["archived","restored","open","only"]}attributeChangedCallback(t){t==="open"&&(this._open=this.hasAttribute("open")),this.render()}get open(){return this._open}set open(t){!!t?this.setAttribute("open",""):this.removeAttribute("open")}connectedCallback(){document.addEventListener("click",this._outsideClick=t=>{if(!this._open)return;const e=t.composedPath?t.composedPath():t.path||[];!e.includes(this)&&!e.includes(this.shadowRoot)&&(!this._portaledMenu||!e.includes(this._portaledMenu))&&this._close()})}disconnectedCallback(){document.removeEventListener("click",this._outsideClick),this._cleanupPortaledMenu()}render(){this.shadowRoot.innerHTML=`
      <style>
        :host { display: inline-block; position: relative; }
        .trigger { display:inline-flex; }
        labs-button[variant="icon"] { --icon-size:20px; }
      </style>
      <div class="trigger">
        <labs-button id="toggleBtn" variant="icon" aria-label="More" aria-haspopup="true" aria-expanded="${this._open?"true":"false"}" aria-controls="${this._menuId}">
          <labs-icon slot="icon-left" name="more_vert" width="20" height="20" color="currentColor"></labs-icon>
        </labs-button>
      </div>
    `,this._createPortaledMenu();const t=this.shadowRoot.getElementById("toggleBtn");t&&(t.addEventListener("click",i=>{i.stopPropagation(),this._toggle()}),t.addEventListener("keydown",i=>this._onToggleKeyDown(i))),this._open?(this._portaledMenu&&(this._portaledMenu.style.display="block",this._portaledMenu.setAttribute("aria-hidden","false"),this._positionPortaledMenu()),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0}))):(this._portaledMenu&&(this._portaledMenu.style.display="none",this._portaledMenu.setAttribute("aria-hidden","true")),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})));const e=this.shadowRoot.getElementById("toggleBtn");e&&e.setAttribute("aria-expanded",String(this._open))}_getMenuItems(){const t=this._portaledMenu||document.getElementById(this._menuId);return t?Array.from(t.querySelectorAll("labs-button")):[]}_focusItemAt(t){const e=this._getMenuItems();if(!e.length)return;const i=(t+e.length)%e.length,s=e[i];if(s){s.hasAttribute("tabindex")||s.setAttribute("tabindex","0");try{s.focus()}catch{}this._currentIndex=i}}_focusFirstItem(){this._focusItemAt(0)}_focusLastItem(){const t=this._getMenuItems();this._focusItemAt(t.length-1)}_onToggleKeyDown(t){const e=t.key;e==="Enter"||e===" "||e==="Spacebar"?(t.preventDefault(),t.stopPropagation(),this.open=!0,this._focusFirstItem()):e==="ArrowDown"?(t.preventDefault(),t.stopPropagation(),this.open=!0,this._focusFirstItem()):e==="ArrowUp"&&(t.preventDefault(),t.stopPropagation(),this.open=!0,this._focusLastItem())}_onMenuKeyDown(t){const e=t.key;if(this._getMenuItems().length)if(e==="ArrowDown")t.preventDefault(),t.stopPropagation(),this._focusItemAt((this._currentIndex||0)+1);else if(e==="ArrowUp")t.preventDefault(),t.stopPropagation(),this._focusItemAt((this._currentIndex||0)-1);else if(e==="Home")t.preventDefault(),t.stopPropagation(),this._focusFirstItem();else if(e==="End")t.preventDefault(),t.stopPropagation(),this._focusLastItem();else if(e==="Escape"){t.preventDefault(),t.stopPropagation(),this._close();const s=this.shadowRoot.getElementById("toggleBtn");s&&s.focus()}else e==="Tab"&&this._close()}_toggle(){this.open=!this._open}_close(){this.open=!1}_createPortaledMenu(){let t=document.getElementById("labs-dropdown-portal");t||(t=document.createElement("div"),t.id="labs-dropdown-portal",t.style.cssText=`
                position: fixed;
                top: 0;
                left: 0;
                pointer-events: none;
                z-index: 10000;
            `,document.body.appendChild(t));const e=document.getElementById(this._menuId);e&&e.remove();const i=document.createElement("div");i.id=this._menuId,i.className="labs-dropdown-menu",i.setAttribute("role","menu"),i.setAttribute("aria-hidden","true"),i.style.cssText=`
            position: absolute;
            background: var(--color-surface, #fff);
            border-radius: var(--labs-card-radius, 12px);
            box-shadow: var(--labs-card-shadow, 0 6px 26px rgba(0,0,0,0.12));
            padding: 8px;
            min-width: fit-content;
            display: none;
            box-sizing: border-box;
            pointer-events: auto;
        `,i.innerHTML=`
            <style>
                .labs-dropdown-menu labs-button {
                    width: 100%;
                    display: block;
                    text-align: left;
                    gap: 10px;
                    margin: 0;
                    box-sizing: border-box;
                }
                .labs-dropdown-menu labs-button button {
                    display: flex !important;
                    width: 100% !important;
                    align-items: center;
                    justify-content: flex-start;
                    text-align: left;
                }
                .labs-dropdown-menu labs-button + labs-button { margin-top: 6px; }
                .labs-dropdown-menu labs-button[variant="destructive"] labs-icon { color: var(--color-on-error, #fff); }
            </style>
            ${this.getAttribute("only")==="delete"?"":`<labs-button id="archiveBtn" variant="secondary" size="small" fullwidth role="menuitem" tabindex="-1">
                <labs-icon slot="icon-left" name="archive" width="20" height="20"></labs-icon>
                Archive
            </labs-button>`}
            <labs-button id="deleteBtn" variant="destructive" size="small" fullwidth role="menuitem" tabindex="-1">
                <labs-icon slot="icon-left" name="delete_forever" width="20" height="20"></labs-icon>
                Delete
            </labs-button>
        `,t.appendChild(i),this._portaledMenu=i,this._wireMenuEvents(i)}_wireMenuEvents(t){const e=t.querySelector("#archiveBtn");e&&e.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),this.hasAttribute("archived")&&!this.hasAttribute("restored")?this.dispatchEvent(new CustomEvent("restore",{bubbles:!0,composed:!0})):this.hasAttribute("archived")||this.dispatchEvent(new CustomEvent("archive",{bubbles:!0,composed:!0})),this._close()});const i=t.querySelector("#deleteBtn");i&&i.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),this.dispatchEvent(new CustomEvent("remove",{bubbles:!0,composed:!0})),this._close()});const o=(this.getAttribute("only")||"").split(",").map(n=>n.trim().toLowerCase()).filter(Boolean),a=o.length?o.includes("archive"):!0,r=o.length?o.includes("delete"):!1;a||e&&(e.style.display="none"),r&&i&&(i.style.display="",i.removeAttribute("aria-hidden"),i.removeAttribute("disabled")),a&&this.hasAttribute("archived")?(e&&(e.innerHTML='<labs-icon slot="icon-left" name="history" width="20" height="20"></labs-icon> Restore'),i&&(i.style.display="")):(e&&(e.innerHTML='<labs-icon slot="icon-left" name="archive" width="20" height="20"></labs-icon> Archive'),i&&(i.style.display="none")),t.addEventListener("keydown",n=>this._onMenuKeyDown(n))}_positionPortaledMenu(){if(!this._portaledMenu)return;const t=this.shadowRoot.getElementById("toggleBtn");if(!t)return;const e=t.getBoundingClientRect(),i=this._portaledMenu,s=i.style.display;i.style.display="block";const o=i.getBoundingClientRect();i.style.display=s;const a=window.innerWidth,n=window.innerHeight-e.bottom,d=e.top,h=Math.min(Math.max(0,e.right-o.width),a-o.width),c=n>=o.height||n>=d?e.bottom:e.top-o.height;i.style.left=`${h}px`,i.style.top=`${c}px`,this._repositionHandler||(this._repositionHandler=()=>{try{this._positionPortaledMenu()}catch{}},window.addEventListener("resize",this._repositionHandler,{passive:!0}),window.addEventListener("scroll",this._repositionHandler,{passive:!0}))}_cleanupPortaledMenu(){this._portaledMenu&&(this._portaledMenu.remove(),this._portaledMenu=null),this._repositionHandler&&(window.removeEventListener("resize",this._repositionHandler),window.removeEventListener("scroll",this._repositionHandler),this._repositionHandler=null)}}customElements.get("labs-dropdown")||customElements.define("labs-dropdown",u);class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._id=this.getAttribute("data-id")||`item-${Math.random().toString(36).slice(2,9)}`,this._value=this.getAttribute("value")||this.textContent||"",this._timestamp=this.getAttribute("timestamp")||null,this._date=this.getAttribute("date")||null,this._checked=this.hasAttribute("checked"),this._slotChangeHandler=this._onSlotChange.bind(this),this.render()}connectedCallback(){this.render(),this.addEventListener("change",t=>{if(t.target&&t.target.matches&&t.target.matches("labs-checkbox")){const e=t.detail&&!!t.detail.checked;this._checked=e,this._checked?this.setAttribute("checked",""):this.removeAttribute("checked"),this.dispatchEvent(new CustomEvent("toggle",{detail:{checked:this._checked,id:this._id},bubbles:!0,composed:!0})),this.render()}})}static get observedAttributes(){return["value","checked","archived","restored","timestamp","date","variant"]}attributeChangedCallback(t,e,i){t==="value"&&(this._value=i),t==="timestamp"&&(this._timestamp=i),t==="date"&&(this._date=i),t==="checked"&&(this._checked=this.hasAttribute("checked")),t==="variant"&&(this.shadowRoot.innerHTML=""),this.render()}_onSlotChange(){this.render()}render(){const t=this.shadowRoot.getElementById("archivedBadgeContainer");t&&!t.textContent.trim()?t.style.display="none":t&&(t.style.display=""),this.shadowRoot.innerHTML||(this.shadowRoot.innerHTML=`
        <style>
          :host { display: block; width: 100%; font-family: var(--font-family-base, system-ui, sans-serif); }
          .row { display:flex; align-items:center; gap:12px; padding:10px 12px; border-radius:12px; background:var(--color-surface, #fff); width:100%; box-sizing:border-box; min-width:0; min-height:60px; overflow: hidden; }
          .text { flex-grow:1; font-size:1rem; color:var(--color-on-surface, #111); word-break:break-word; min-width:0; text-align: center; }
          .actions { display:flex; gap:0; align-items:center; flex: 0 0 auto; min-width:0; width:auto; min-height:32px; margin-right:0 !important; }
          .text { flex:1; font-size:1rem; color:var(--color-on-surface, #111); word-break:break-word; min-width:0; }
          .timestamp { font-size:0.75rem; color:var(--color-on-surface-variant, #666); margin-left:6px; }
          .badge { font-size:0.625rem; padding:4px 8px; border-radius:999px; background:var(--color-surface-secondary, #f1f3f4); color:var(--color-on-surface); margin-left:8px; }
          .actions { display:flex; gap:8px; align-items:center; flex: 0 0 auto; min-width:40px; min-height:32px; }
          ::slotted([slot="control"]) {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 40px;
            min-height: 32px;
            padding: 0 2px;
          }
          ::slotted([slot="actions"]) {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 40px;
            min-height: 32px;
            padding: 0 2px;
          }
          /* Control slot SVG: container may be up to 40px wide; icon should not exceed 20px height */
          ::slotted([slot="control"] svg) {
            display: block;
            margin: auto;
            max-width: 40px !important;
            max-height: 20px !important;
            width: auto !important;
            height: auto !important;
          }
          /* Ensure timestamp variant also constrains control/label icons to match the checkbox sizing */
          :host([variant="timestamp"]) ::slotted([slot="control"]),
          :host([variant="timestamp"]) ::slotted([slot="label"]) {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 40px;
            min-height: 32px;
            padding: 0 2px;
          }
          :host([variant="timestamp"]) ::slotted([slot="control"] svg),
          :host([variant="timestamp"]) ::slotted([slot="label"] svg) {
            display: block;
            margin: auto;
            max-width: 40px !important;
            max-height: 20px !important;
            width: auto !important;
            height: auto !important;
          }
          labs-button[variant="icon"] { --icon-size:20px; }
          .secondary-variant { background: var(--color-surface-secondary, #f6f7f8); }
          :host([variant="text-only"]) .row { padding: 8px 12px; min-height: 60px; }
          :host([variant="timestamp"]) .row { padding: 8px 12px; min-height: 60px; }
          :host([variant="text-only"]) .row:has(:not([slot="actions"])) .text {
            margin-right: auto;
            margin-left: auto;
            text-align: center;
          }
          :host([variant="text-only"]) .text { font-weight: var(--font-weight-semibold, 600); }
          :host([variant="text-only"]) .timestamp { margin-left: 0; margin-top: 2px; font-size: 0.75rem; }
          :host([variant="text-only"]) ::slotted([slot="control"]),
          :host([variant="text-only"]) ::slotted([slot="actions"]) {
            padding: 0 1px;
          }
          /* Enforced constraints already applied above for control SVG */
          /* Style for a slotted primary label (timestamp) when present */
          .labelHost { font-size: 0.95rem; color: var(--color-on-surface, #111); margin-right: 12px; white-space: nowrap; flex: 0 0 auto; }
          ::slotted(.item-label) {
            font-size: 0.95rem;
            color: var(--color-on-surface-variant, #666);
            margin-right: 12px;
            white-space: nowrap;
            flex: 0 0 auto;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 140px;
          }
          /* Constrain timestamp label text so it doesn't overflow the row */
          :host([variant="timestamp"]) ::slotted([slot="label"]) {
            max-width: 120px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            flex: 0 0 auto;
          }
        </style>
        <div class="row" role="listitem" data-id="${this._id}">
          <slot name="control"></slot>
          <div class="text"><slot name="content"></slot></div>
          <div id="archivedBadgeContainer" aria-hidden="true"></div>
          <div class="actions" style="display:none;width:0;min-width:0;">
            <slot name="actions" onslotchange="
              const parent = this.parentElement;
              if (this.assignedNodes().length) {
                parent.style.display = 'flex';
                parent.style.minWidth = '40px';
                parent.style.width = '';
              } else {
                parent.style.display = 'none';
                parent.style.minWidth = '0';
                parent.style.width = '0';
              }
            "></slot>
          </div>
        </div>
      `,this.shadowRoot.querySelectorAll("slot").forEach(r=>r.addEventListener("slotchange",this._slotChangeHandler)));const e=this.shadowRoot.getElementById("archiveIcon"),i=this.shadowRoot.getElementById("archiveBtn"),s=this.shadowRoot.querySelector(".row");if(this.hasAttribute("restored"))e&&(e.setAttribute("name","history"),e.setAttribute("color","var(--color-on-surface)"),e.style.opacity="0.45"),i&&(i.setAttribute("aria-label","Already restored"),i.setAttribute("disabled",""),i.style.pointerEvents="none"),s&&(s.style.opacity="var(--labs-archived-opacity, 0.7)");else if(this.hasAttribute("archived")){if(e&&(e.setAttribute("name","history"),e.setAttribute("color","var(--color-on-surface)"),e.style.opacity=""),i){i.setAttribute("aria-label","Restore"),i.style.pointerEvents="",i.removeAttribute("disabled");try{i.innerHTML='<labs-icon slot="icon-left" name="history" width="20" height="20"></labs-icon> Restore',i.setAttribute("variant","secondary"),i.setAttribute("size","small")}catch{}}s&&(s.style.opacity="")}else{if(e&&(e.setAttribute("name","archive"),e.setAttribute("color","var(--color-on-surface)"),e.style.opacity=""),i){i.setAttribute("aria-label","Archive"),i.removeAttribute("disabled"),i.style.pointerEvents="";try{i.innerHTML='<labs-icon id="archiveIcon" slot="icon-left" name="archive" width="20" height="20"></labs-icon> Archive',i.setAttribute("variant","secondary"),i.setAttribute("size","small")}catch{}}s&&(s.style.opacity="",s.classList.remove("secondary-variant"))}const o=this.querySelector('[slot="actions"] #deleteBtn')||this.shadowRoot.getElementById("deleteBtn");o&&(this.hasAttribute("archived")?(o.style.display="",o.removeAttribute("aria-hidden"),o.removeAttribute("disabled")):(o.style.display="none",o.setAttribute("aria-hidden","true"),o.setAttribute("disabled","")))}_archive(){this.setAttribute("archived",""),this.dispatchEvent(new CustomEvent("archive",{detail:{value:this._value,id:this._id},bubbles:!0,composed:!0}))}_restore(){this.hasAttribute("restored")||(this.removeAttribute("archived"),this.setAttribute("restored",""),this.dispatchEvent(new CustomEvent("restore",{detail:{value:this._value,id:this._id},bubbles:!0,composed:!0})))}_remove(){this.dispatchEvent(new CustomEvent("remove",{detail:{value:this._value,id:this._id},bubbles:!0,composed:!0}))}get value(){return this._value}set value(t){this._value=t,this.setAttribute("value",t)}}customElements.get("labs-list-item")||customElements.define("labs-list-item",p);
