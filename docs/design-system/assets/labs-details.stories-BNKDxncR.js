import"./labs-list-item-DatCmgQS.js";import"./iframe-CVK4Cw3I.js";import"./preload-helper-PPVm8Dsz.js";class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML||(this.shadowRoot.innerHTML=`
        <style>
          :host { display:block; width:100%; }
          details { width:100%; border:1px solid var(--color-surface-variant, #e6e7e8); border-radius:12px; padding:0; box-sizing:border-box; background:var(--color-surface-variant, #fff); }
          summary { list-style:none; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px; padding:8px 12px; font-weight:600; }
          summary labs-icon { transition: transform 0.2s ease; }
          details[open] summary labs-icon { transform: rotate(90deg); }
          .content { padding:8px 12px 12px 12px; }
        </style>
        <details>
          <summary><slot name="summary"></slot></summary>
          <div class="content"><slot></slot></div>
        </details>
      `)}}customElements.get("labs-details")||customElements.define("labs-details",i);const a=()=>{const e=document.createElement("labs-details"),t=document.createElement("span");t.slot="summary",t.innerHTML='<labs-icon name="chevron_right"></labs-icon> Archived Example',e.appendChild(t);const n=document.createElement("labs-list-item");n.setAttribute("variant","task"),n.setAttribute("state","archived");const o=document.createElement("div");return o.setAttribute("slot","content"),o.textContent="This is an archived item (50% opacity)",n.appendChild(o),e.appendChild(n),e},m={title:"2. Components/Details",component:"labs-details",parameters:{docs:{description:{component:"Canonical details/accordion component. Uses native <details> for accessibility. Slots: summary (header), default (content)."}}}},s=()=>{const e=document.createElement("labs-details"),t=document.createElement("span");t.slot="summary",t.innerHTML='<labs-icon name="chevron_right"></labs-icon> Expand Me',e.appendChild(t);const n=document.createElement("div");return n.textContent="This is the expandable content. You can put anything here.",e.appendChild(n),e};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const details = document.createElement('labs-details');
  const summary = document.createElement('span');
  summary.slot = 'summary';
  summary.innerHTML = '<labs-icon name="chevron_right"></labs-icon> Archived Example';
  details.appendChild(summary);
  const item = document.createElement('labs-list-item');
  item.setAttribute('variant', 'task');
  item.setAttribute('state', 'archived');
  const content = document.createElement('div');
  content.setAttribute('slot', 'content');
  content.textContent = 'This is an archived item (50% opacity)';
  item.appendChild(content);
  details.appendChild(item);
  return details;
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const details = document.createElement('labs-details');
  const summary = document.createElement('span');
  summary.slot = 'summary';
  summary.innerHTML = '<labs-icon name="chevron_right"></labs-icon> Expand Me';
  details.appendChild(summary);
  const content = document.createElement('div');
  content.textContent = 'This is the expandable content. You can put anything here.';
  details.appendChild(content);
  return details;
}`,...s.parameters?.docs?.source}}};const d=["WithArchivedListItem","Default"];export{s as Default,a as WithArchivedListItem,d as __namedExportsOrder,m as default};
