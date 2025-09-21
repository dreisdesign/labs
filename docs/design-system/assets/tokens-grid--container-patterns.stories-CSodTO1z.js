import"./labs-card-BAnoYprD.js";const e=document.createElement("template");e.innerHTML=`
  <style>
    :host { display: block; box-sizing: border-box; max-width: var(--app-container-max); margin-left: auto; margin-right: auto; padding-left: var(--grid-container-padding-sm); padding-right: var(--grid-container-padding-sm); }
    :host([padding-md]) { padding-left: var(--grid-container-padding-md); padding-right: var(--grid-container-padding-md); }
    :host([padding-lg]) { padding-left: var(--grid-container-padding-lg); padding-right: var(--grid-container-padding-lg); }
    :host([fullbleed]) { max-width: 100%; padding-left: 0; padding-right: 0; }
    @media (max-width: var(--container-mobile-breakpoint, 640px)) {
      :host { padding-left: var(--container-mobile-padding); padding-right: var(--container-mobile-padding); }
    }
  </style>
  <slot></slot>
`;class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(e.content.cloneNode(!0))}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","region")}}customElements.get("labs-container")||customElements.define("labs-container",t);const r={title:"Tokens/Grid/Patterns"},a=()=>`
  <style>
    .demo-stack { display:flex; flex-direction:column; gap:16px; }
    .example { background: var(--color-surface, #fff); padding:12px; border-radius:12px; }
  </style>
  <labs-container>
    <div class="demo-stack" style="max-width:var(--app-container-max);">
      <div class="example">
        <label style="font-weight:600;display:block;margin-bottom:8px;">Tracker metric (example)</label>
        <labs-card variant="metric">42</labs-card>
      </div>

      <div class="example">
        <label style="font-weight:600;display:block;margin-bottom:8px;">Today input card (should match metric width)</label>
        <labs-card variant="welcome">Input overlay would match this width in the app</labs-card>
      </div>
    </div>
  </labs-container>
`;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
  <style>
    .demo-stack { display:flex; flex-direction:column; gap:16px; }
    .example { background: var(--color-surface, #fff); padding:12px; border-radius:12px; }
  </style>
  <labs-container>
    <div class="demo-stack" style="max-width:var(--app-container-max);">
      <div class="example">
        <label style="font-weight:600;display:block;margin-bottom:8px;">Tracker metric (example)</label>
        <labs-card variant="metric">42</labs-card>
      </div>

      <div class="example">
        <label style="font-weight:600;display:block;margin-bottom:8px;">Today input card (should match metric width)</label>
        <labs-card variant="welcome">Input overlay would match this width in the app</labs-card>
      </div>
    </div>
  </labs-container>
\``,...a.parameters?.docs?.source}}};const d=["ContainerPatternsLegacy"];export{a as ContainerPatternsLegacy,d as __namedExportsOrder,r as default};
