import"./labs-checkbox-cERrHkK-.js";class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._id=this.getAttribute("data-id")||`item-${Math.random().toString(36).slice(2,9)}`,this._value=this.getAttribute("value")||this.textContent||"",this._checked=this.hasAttribute("checked"),this.render()}static get observedAttributes(){return["value","checked"]}attributeChangedCallback(e,t,i){e==="value"&&(this._value=i),e==="checked"&&(this._checked=this.hasAttribute("checked")),this.render()}render(){if(!this.shadowRoot.innerHTML){this.shadowRoot.innerHTML=`
        <style>
          :host { display: block; font-family: var(--font-family-base, system-ui, sans-serif); }
          .row { display:flex; align-items:center; gap:12px; padding:10px 12px; border-radius:12px; background:var(--color-surface, #fff); }
          .text { flex:1; font-size:1rem; color:var(--color-on-surface, #111); word-break:break-word; }
          .actions { display:flex; gap:8px; align-items:center; }
          labs-button[variant="icon"] { --icon-size:20px; }
        </style>
        <div class="row" role="listitem" data-id="${this._id}">
          <labs-checkbox id="chk" aria-label="Toggle complete"></labs-checkbox>
          <div class="text"></div>
          <div class="actions">
            <labs-button id="archiveBtn" variant="icon" aria-label="Archive">
              <labs-icon slot="icon-left" name="published_with_changes" width="20" height="20"></labs-icon>
            </labs-button>
            <labs-button id="deleteBtn" variant="icon" aria-label="Delete">
              <labs-icon slot="icon-left" name="delete_forever" width="20" height="20"></labs-icon>
            </labs-button>
          </div>
        </div>
      `;const i=this.shadowRoot.getElementById("chk");i&&i.addEventListener("change",l=>{this._checked=!!l.detail&&!!l.detail.checked,this._checked?this.setAttribute("checked",""):this.removeAttribute("checked"),this.dispatchEvent(new CustomEvent("toggle",{detail:{checked:this._checked,id:this._id},bubbles:!0,composed:!0}))});const a=this.shadowRoot.getElementById("archiveBtn");a&&a.addEventListener("click",()=>this._archive());const c=this.shadowRoot.getElementById("deleteBtn");c&&c.addEventListener("click",()=>this._remove())}const e=this.shadowRoot.getElementById("chk");e&&(this._checked?e.setAttribute("checked",""):e.removeAttribute("checked"));const t=this.shadowRoot.querySelector(".text");t&&(t.textContent=this._value)}_toggle(){this._checked=!this._checked,this._checked?this.setAttribute("checked",""):this.removeAttribute("checked");const e=this.shadowRoot&&this.shadowRoot.getElementById&&this.shadowRoot.getElementById("chk");e&&e.setAttribute("aria-checked",String(this._checked)),this.dispatchEvent(new CustomEvent("toggle",{detail:{checked:this._checked,id:this._id},bubbles:!0,composed:!0})),this.render()}_archive(){this.dispatchEvent(new CustomEvent("archive",{detail:{value:this._value,id:this._id},bubbles:!0,composed:!0}))}_remove(){this.dispatchEvent(new CustomEvent("remove",{detail:{value:this._value,id:this._id},bubbles:!0,composed:!0}))}get value(){return this._value}set value(e){this._value=e,this.setAttribute("value",e)}}customElements.get("labs-list-item")||customElements.define("labs-list-item",d);const r={title:"Components/List Item",component:"labs-list-item",argTypes:{value:{control:"text",description:"Item text"},checked:{control:"boolean",description:"Checked state"}},args:{value:"New task",checked:!1}},s=({value:o,checked:e})=>{const t=document.createElement("labs-list-item");return t.setAttribute("value",o),e&&t.setAttribute("checked",""),t.addEventListener("archive",i=>console.log("archive",i.detail)),t.addEventListener("remove",i=>console.log("remove",i.detail)),t.addEventListener("toggle",i=>console.log("toggle",i.detail)),t};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  value,
  checked
}) => {
  const el = document.createElement('labs-list-item');
  el.setAttribute('value', value);
  if (checked) el.setAttribute('checked', '');

  // wire events for demo output
  el.addEventListener('archive', e => console.log('archive', e.detail));
  el.addEventListener('remove', e => console.log('remove', e.detail));
  el.addEventListener('toggle', e => console.log('toggle', e.detail));
  return el;
}`,...s.parameters?.docs?.source}}};const h=["Default"];export{s as Default,h as __namedExportsOrder,r as default};
