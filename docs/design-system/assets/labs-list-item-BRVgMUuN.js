function f(o){if(o==null||o==="")return"";const i=String(o).trim(),t=i.match(/^(\d{1,2}):(\d{2})(?:\s*(AM|PM|am|pm))?$/);if(t){let c=parseInt(t[1],10);const s=t[2].padStart(2,"0"),a=t[3];if(a){const e=a.toUpperCase();e==="PM"&&c!==12&&(c=c+12),e==="AM"&&c===12&&(c=0)}return m(c,s)}const n=new Date(i);if(!isNaN(n.getTime())){const c=n.getHours(),s=n.getMinutes().toString().padStart(2,"0");return m(c,s)}return"12:00 PM"}function m(o,i){const t=Number(o),n=String(i).padStart(2,"0"),c=t>=12?"PM":"AM";let s=t%12;return s===0&&(s=12),`${s.toString().padStart(2,"0")}:${n} ${c}`}function y(o){if(o==null||o==="")return"";const i=typeof o=="number"?o:Number(o);let t;if(isNaN(i)?t=new Date(String(o)):t=new Date(i),isNaN(t.getTime()))return String(o);const n=new Date,c=n.toISOString().slice(0,10),s=t.toISOString().slice(0,10),a=m(t.getHours(),String(t.getMinutes()).padStart(2,"0"));if(s===c)return`Today ${a}`;const e=new Date(n);e.setDate(n.getDate()-1);const d=e.toISOString().slice(0,10);if(s===d)return`Yesterday ${a}`;const h={year:"numeric",month:"short",day:"numeric"};return`${t.toLocaleDateString(void 0,h)} ${a}`}class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._id=this.getAttribute("data-id")||`item-${Math.random().toString(36).slice(2,9)}`,this._value=this.getAttribute("value")||this.textContent||"",this._timestamp=this.getAttribute("timestamp")||null,this._date=this.getAttribute("date")||null,this._checked=this.hasAttribute("checked"),this._slotChangeHandler=this._onSlotChange.bind(this),this.render()}connectedCallback(){this.render(),this.addEventListener("change",i=>{if(i.target&&i.target.matches&&i.target.matches("labs-checkbox")){const t=i.detail&&!!i.detail.checked;this._checked=t,this._checked?this.setAttribute("checked",""):this.removeAttribute("checked"),this.dispatchEvent(new CustomEvent("toggle",{detail:{checked:this._checked,id:this._id},bubbles:!0,composed:!0})),this.render()}})}static get observedAttributes(){return["value","checked","archived","restored","timestamp","date","variant"]}attributeChangedCallback(i,t,n){i==="value"&&(this._value=n),i==="timestamp"&&(this._timestamp=n),i==="date"&&(this._date=n),i==="checked"&&(this._checked=this.hasAttribute("checked")),i==="variant"&&(this.shadowRoot.innerHTML=""),this.render()}_onSlotChange(){this.render()}render(){this.shadowRoot.innerHTML||(this.shadowRoot.innerHTML=`
        <style>
          :host { display: block; width: 100%; font-family: var(--font-family-base, system-ui, sans-serif); }
          .row { display:flex; align-items:center; gap:12px; padding:10px 12px; border-radius:12px; background:var(--color-surface, #fff); width:100%; box-sizing:border-box; min-width:0; }
          .text { flex:1; font-size:1rem; color:var(--color-on-surface, #111); word-break:break-word; min-width:0; }
          .timestamp { font-size:0.75rem; color:var(--color-on-surface-variant, #666); margin-left:6px; }
          .badge { font-size:0.625rem; padding:4px 8px; border-radius:999px; background:var(--color-surface-secondary, #f1f3f4); color:var(--color-on-surface); margin-left:8px; }
          .actions { display:flex; gap:8px; align-items:center; flex: 0 0 auto; }
          labs-button[variant="icon"] { --icon-size:20px; }
          .secondary-variant { background: var(--color-surface-secondary, #f6f7f8); }
          :host([variant="text-only"]) .row { padding: 8px 12px; }
          :host([variant="text-only"]) .text { font-weight: var(--font-weight-semibold, 600); }
          :host([variant="text-only"]) .timestamp { margin-left: 0; margin-top: 2px; font-size: 0.75rem; }
          /* Style for a slotted primary label (timestamp) when present */
          .labelHost { font-size: 0.95rem; color: var(--color-on-surface, #111); margin-right: 12px; white-space: nowrap; flex: 0 0 auto; }
          ::slotted(.item-label) {
            font-size: 0.95rem;
            color: var(--color-on-surface-variant, #666);
            margin-right: 12px;
            white-space: nowrap;
            flex: 0 0 auto;
          }
        </style>
  <div class="row" role="listitem" data-id="${this._id}">
          <!-- Left control slot: checkbox or other control. Fallback: labs-checkbox -->
          <slot name="control">
            <labs-checkbox id="chk" aria-label="Toggle complete"></labs-checkbox>
          </slot>

          <!-- Label slot: optional primary label (e.g. timestamp) -->
          <slot name="label"></slot>

          <!-- Shadow label host: copy slotted label text here for consistent styling -->
          <div class="labelHost" aria-hidden="true"></div>

          <!-- Content slot: main text + optional inline timestamp fallback -->
          <div style="display:flex;flex-direction:column;flex:1;min-width:0;">
            <slot name="content">
              <div class="text"></div>
              <div class="timestamp" aria-hidden="true"></div>
            </slot>
          </div>

          <!-- Reserved badge area (fallback empty) -->
          <div id="archivedBadgeContainer" aria-hidden="true"></div>

          <!-- Actions slot: overflow, buttons. Fallback: labs-dropdown -->
          <div class="actions">
            <slot name="actions">
              <labs-dropdown id="overflowMenu" aria-label="More actions"></labs-dropdown>
            </slot>
          </div>
        </div>
      `,this.shadowRoot.querySelectorAll("slot").forEach(r=>r.addEventListener("slotchange",this._slotChangeHandler)));const t=this.querySelector('[slot="control"]')||this.shadowRoot.getElementById("chk");if(t){t.tagName&&t.tagName.toLowerCase()==="labs-checkbox"&&t.addEventListener&&!t._labsListItemWired&&(t.addEventListener("change",r=>{const b=r.detail&&!!r.detail.checked;this._checked=b,this._checked?this.setAttribute("checked",""):this.removeAttribute("checked"),this.dispatchEvent(new CustomEvent("toggle",{detail:{checked:this._checked,id:this._id},bubbles:!0,composed:!0})),this.render()}),t._labsListItemWired=!0);try{const r=this.querySelector('[slot="label"]'),b=this.shadowRoot.querySelector(".labelHost"),u=this.shadowRoot.querySelector(".timestamp");if(b)if(r){b.textContent=r.textContent||"";try{r.setAttribute("aria-hidden","true"),r.style.display="none"}catch{}try{u&&(u.style.display="none",u.textContent="")}catch{}}else{b.textContent=this._timestamp?y(this._timestamp):"";try{u&&(u.style.display="")}catch{}}}catch{}if(this._checked)try{t.setAttribute("checked","")}catch{}else try{t.removeAttribute("checked")}catch{}const l=(()=>{if(!this._date)return!1;try{const r=new Date(this._date+"T00:00:00"),u=new Date().toISOString().slice(0,10);return r.toISOString().slice(0,10)!==u}catch{return!1}})();if(this.hasAttribute("archived")||l)try{t.setAttribute("inactive","")}catch{}else try{t.removeAttribute("inactive")}catch{}}if(!this.querySelector('[slot="content"]')){const l=this.shadowRoot.querySelector(".text");l&&(l.textContent=this._value);const r=this.shadowRoot.querySelector(".timestamp");r&&(r.textContent=this._timestamp?f(this._timestamp):"")}const s=this.querySelector('[slot="actions"]')||this.shadowRoot.getElementById("overflowMenu");if(s){try{this.hasAttribute("archived")?s.setAttribute("archived",""):s.removeAttribute("archived")}catch{}try{this.hasAttribute("restored")?s.setAttribute("restored",""):s.removeAttribute("restored")}catch{}s.addEventListener&&s.id==="overflowMenu"&&!s._labsListItemWired&&(s.addEventListener("archive",l=>{this.hasAttribute("archived")&&!this.hasAttribute("restored")?(this.setAttribute("restored",""),this.dispatchEvent(new CustomEvent("request-restore-copy",{detail:{value:this._value,id:this._id},bubbles:!0,composed:!0}))):this.hasAttribute("archived")||this._archive()}),s.addEventListener("restore",l=>this._restore()),s.addEventListener("remove",l=>{this.hasAttribute("archived")&&this._remove()}),s._labsListItemWired=!0)}const a=this.shadowRoot.getElementById("archiveIcon"),e=this.shadowRoot.getElementById("archiveBtn"),d=this.shadowRoot.querySelector(".row");if(this.hasAttribute("restored"))a&&(a.setAttribute("name","history"),a.setAttribute("color","var(--color-on-surface)"),a.style.opacity="0.45"),e&&(e.setAttribute("aria-label","Already restored"),e.setAttribute("disabled",""),e.style.pointerEvents="none"),d&&(d.style.opacity="var(--labs-archived-opacity, 0.7)");else if(this.hasAttribute("archived")){if(a&&(a.setAttribute("name","history"),a.setAttribute("color","var(--color-on-surface)"),a.style.opacity=""),e){e.setAttribute("aria-label","Restore"),e.style.pointerEvents="",e.removeAttribute("disabled");try{e.innerHTML='<labs-icon slot="icon-left" name="history" width="20" height="20"></labs-icon> Restore',e.setAttribute("variant","secondary"),e.setAttribute("size","small")}catch{}}d&&(d.style.opacity="")}else{if(a&&(a.setAttribute("name","archive"),a.setAttribute("color","var(--color-on-surface)"),a.style.opacity=""),e){e.setAttribute("aria-label","Archive"),e.removeAttribute("disabled"),e.style.pointerEvents="";try{e.innerHTML='<labs-icon id="archiveIcon" slot="icon-left" name="archive" width="20" height="20"></labs-icon> Archive',e.setAttribute("variant","secondary"),e.setAttribute("size","small")}catch{}}d&&(d.style.opacity="",d.classList.remove("secondary-variant"))}const h=this.querySelector('[slot="actions"] #deleteBtn')||this.shadowRoot.getElementById("deleteBtn");h&&(this.hasAttribute("archived")?(h.style.display="",h.removeAttribute("aria-hidden"),h.removeAttribute("disabled")):(h.style.display="none",h.setAttribute("aria-hidden","true"),h.setAttribute("disabled","")))}_archive(){this.setAttribute("archived",""),this.dispatchEvent(new CustomEvent("archive",{detail:{value:this._value,id:this._id},bubbles:!0,composed:!0}))}_restore(){this.hasAttribute("restored")||(this.removeAttribute("archived"),this.setAttribute("restored",""),this.dispatchEvent(new CustomEvent("restore",{detail:{value:this._value,id:this._id},bubbles:!0,composed:!0})))}_remove(){this.dispatchEvent(new CustomEvent("remove",{detail:{value:this._value,id:this._id},bubbles:!0,composed:!0}))}get value(){return this._value}set value(i){this._value=i,this.setAttribute("value",i)}}customElements.get("labs-list-item")||customElements.define("labs-list-item",p);
