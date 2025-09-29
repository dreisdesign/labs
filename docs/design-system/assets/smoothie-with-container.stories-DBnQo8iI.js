import"./labs-footer-Cz6M6BBG.js";import"./iframe-Cmj7yhTc.js";import{i as b}from"./icons-list-BKmguoAm.js";import"./labs-overlay-AWkXp-xX.js";import"./labs-settings-card-DORwPr3z.js";import"./labs-input-card-CKscVP7Z.js";import"./labs-card-BAnoYprD.js";import"./labs-list-item-BRVgMUuN.js";import"./labs-checkbox-CW6xedIE.js";import"./labs-dropdown-DZpv-ss0.js";import"./preload-helper-PPVm8Dsz.js";const p=document.createElement("template");p.innerHTML=`
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
`;class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(p.content.cloneNode(!0))}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","region")}}customElements.get("labs-container")||customElements.define("labs-container",m);const M={title:"Templates/Smoothie",parameters:{docs:{description:{component:"Smoothie template that includes the canonical content container (`labs-container`). Use the `layout` arg to pick `list` or `full` behaviors."}}},argTypes:{settingsIcon:{control:{type:"select"},options:Object.keys(b)},layout:{control:{type:"radio"},options:["narrow","wide","edge"],description:"Choose `narrow` (app-like constrained), `wide` (full width with paddings), or `edge` (edge-to-edge full bleed)."},maxWidth:{control:{type:"text"},description:"Override `--app-container-max` (e.g. 720px)"}}},a={name:"Default",render:t=>{const e=document.createElement("div"),i=t.maxWidth?`--app-container-max: ${t.maxWidth};`:"",l=t.layout==="edge"?"fullbleed":"",r=t.layout==="wide"&&!t.maxWidth?"--app-container-max: 960px;":"",s=[i,r].filter(Boolean).join(" ");e.innerHTML=`
      <style>
        /* Make the story area exactly the viewport height so the footer doesn't cause overflow */
        html, body { height:100%; margin:0; padding:0; box-sizing:border-box; }
        .smoothie-root { display:flex; flex-direction:column; height:100vh; background:var(--color-background,#f6f6f9); }
        /* Let the canonical container fill available space so footer sits at the bottom */
        .smoothie-root > labs-container { flex:1 1 auto; display:flex; flex-direction:column; }
        /* Edge/full-bleed layout: make the labs-container escape centered max-width
           and span the full viewport width. The calc(off) trick recenters the
           element while letting it be 100vw wide so backgrounds and cards can
           be full-bleed relative to the viewport. */
        labs-container[fullbleed] {
          width: 100vw;
          max-width: none !important;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          padding-left: 0 !important;
          padding-right: 0 !important;
          box-sizing: border-box;
        }
        labs-container[fullbleed] .app-area {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        main.app-area { flex:1 1 auto; display:flex; flex-direction:column; gap:12px; overflow:auto; }
        .app-hero { text-align:center; padding-top:18px; }
        .demo-list { display:flex; flex-direction:column; gap:8px; padding:12px 0; }
        .demo-card { padding:12px; background:var(--color-surface, #fff); border-radius:8px; box-shadow:var(--elevation-1); }
      </style>
      <div class="smoothie-root">
  <labs-container ${l} style="${s}">
          <main class="app-area">
            <header class="app-hero"><h1>Smoothie App Template — Default</h1></header>
            <div class="demo-list" role="list">
              <labs-card class="demo-card" variant="metric">
                <div class="metric-label">Tasks</div>
                <div class="metric-value">42</div>
              </labs-card>
              <labs-list-item>
                <labs-checkbox slot="control" aria-label="Mark Walk the dog complete"></labs-checkbox>
                <span slot="content">Walk the dog</span>
                <labs-dropdown slot="actions"></labs-dropdown>
              </labs-list-item>
              <labs-list-item>
                <labs-checkbox slot="control" aria-label="Mark Write notes complete"></labs-checkbox>
                <span slot="content">Write notes</span>
                <labs-dropdown slot="actions"></labs-dropdown>
              </labs-list-item>
              <labs-list-item>
                <labs-checkbox slot="control" aria-label="Mark Release build complete"></labs-checkbox>
                <span slot="content">Release build</span>
                <labs-dropdown slot="actions"></labs-dropdown>
              </labs-list-item>
            </div>
          </main>
        </labs-container>
        <labs-footer full-width elevated>
          <div slot="center"><labs-button pill variant="primary">Add</labs-button></div>
          <div slot="right"><labs-button variant="icon" aria-label="Settings"><labs-icon name="${t.settingsIcon||"settings"}" slot="icon-left"></labs-icon></labs-button></div>
        </labs-footer>
        <labs-overlay id="settingsOverlay" size="medium" transparent><labs-settings-card></labs-settings-card></labs-overlay>
      </div>
    `;const d=e.querySelector('labs-button[variant="icon"]'),o=e.querySelector("#settingsOverlay");d&&o&&d.addEventListener("click",()=>o.open());const c=e.querySelector("labs-settings-card");return c&&o&&c.addEventListener("close",()=>o.close()),e}};a.args={settingsIcon:"settings",layout:"narrow",maxWidth:""};const n={name:"With Footer",render:t=>{const e=document.createElement("div"),i=t.maxWidth?`--app-container-max: ${t.maxWidth};`:"",l=t.layout==="edge"?"fullbleed":"",r=t.layout==="wide"&&!t.maxWidth?"--app-container-max: 960px;":"",s=[i,r].filter(Boolean).join(" ");return e.innerHTML=`
      <style>
        html, body { height:100%; margin:0; padding:0; box-sizing:border-box; }
        .smoothie-root { display:flex; flex-direction:column; height:100vh; background:var(--color-background,#f6f6f9); }
        .smoothie-root > labs-container { flex:1 1 auto; display:flex; flex-direction:column; }
        labs-container[fullbleed] {
          width: 100vw;
          max-width: none !important;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          padding-left: 0 !important;
          padding-right: 0 !important;
          box-sizing: border-box;
        }
        labs-container[fullbleed] .app-area {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        main.app-area { flex:1 1 auto; display:flex; flex-direction:column; gap:12px; overflow:auto; }
      </style>
      <div class="smoothie-root">
        <labs-container ${l} style="${s}">
          <main class="app-area">
            <!-- Intentionally empty content area for footer-focused layout -->
          </main>
        </labs-container>
        <labs-footer full-width elevated>
          <div slot="center"><labs-button pill variant="primary">Add</labs-button></div>
          <div slot="right"><labs-button variant="icon" aria-label="Settings"><labs-icon name="${t.settingsIcon||"settings"}" slot="icon-left"></labs-icon></labs-button></div>
        </labs-footer>
      </div>
    `,e}};n.args={settingsIcon:"settings",layout:"narrow",maxWidth:""};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: args => {
    const container = document.createElement('div');
    const maxStyle = args.maxWidth ? \`--app-container-max: \${args.maxWidth};\` : '';
    const fullAttr = args.layout === 'edge' ? 'fullbleed' : '';
    const layoutMax = args.layout === 'wide' && !args.maxWidth ? '--app-container-max: 960px;' : '';
    const combinedStyle = [maxStyle, layoutMax].filter(Boolean).join(' ');
    container.innerHTML = \`
      <style>
        /* Make the story area exactly the viewport height so the footer doesn't cause overflow */
        html, body { height:100%; margin:0; padding:0; box-sizing:border-box; }
        .smoothie-root { display:flex; flex-direction:column; height:100vh; background:var(--color-background,#f6f6f9); }
        /* Let the canonical container fill available space so footer sits at the bottom */
        .smoothie-root > labs-container { flex:1 1 auto; display:flex; flex-direction:column; }
        /* Edge/full-bleed layout: make the labs-container escape centered max-width
           and span the full viewport width. The calc(off) trick recenters the
           element while letting it be 100vw wide so backgrounds and cards can
           be full-bleed relative to the viewport. */
        labs-container[fullbleed] {
          width: 100vw;
          max-width: none !important;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          padding-left: 0 !important;
          padding-right: 0 !important;
          box-sizing: border-box;
        }
        labs-container[fullbleed] .app-area {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        main.app-area { flex:1 1 auto; display:flex; flex-direction:column; gap:12px; overflow:auto; }
        .app-hero { text-align:center; padding-top:18px; }
        .demo-list { display:flex; flex-direction:column; gap:8px; padding:12px 0; }
        .demo-card { padding:12px; background:var(--color-surface, #fff); border-radius:8px; box-shadow:var(--elevation-1); }
      </style>
      <div class="smoothie-root">
  <labs-container \${fullAttr} style="\${combinedStyle}">
          <main class="app-area">
            <header class="app-hero"><h1>Smoothie App Template — Default</h1></header>
            <div class="demo-list" role="list">
              <labs-card class="demo-card" variant="metric">
                <div class="metric-label">Tasks</div>
                <div class="metric-value">42</div>
              </labs-card>
              <labs-list-item>
                <labs-checkbox slot="control" aria-label="Mark Walk the dog complete"></labs-checkbox>
                <span slot="content">Walk the dog</span>
                <labs-dropdown slot="actions"></labs-dropdown>
              </labs-list-item>
              <labs-list-item>
                <labs-checkbox slot="control" aria-label="Mark Write notes complete"></labs-checkbox>
                <span slot="content">Write notes</span>
                <labs-dropdown slot="actions"></labs-dropdown>
              </labs-list-item>
              <labs-list-item>
                <labs-checkbox slot="control" aria-label="Mark Release build complete"></labs-checkbox>
                <span slot="content">Release build</span>
                <labs-dropdown slot="actions"></labs-dropdown>
              </labs-list-item>
            </div>
          </main>
        </labs-container>
        <labs-footer full-width elevated>
          <div slot="center"><labs-button pill variant="primary">Add</labs-button></div>
          <div slot="right"><labs-button variant="icon" aria-label="Settings"><labs-icon name="\${args.settingsIcon || 'settings'}" slot="icon-left"></labs-icon></labs-button></div>
        </labs-footer>
        <labs-overlay id="settingsOverlay" size="medium" transparent><labs-settings-card></labs-settings-card></labs-overlay>
      </div>
    \`;
    const settingsBtn = container.querySelector('labs-button[variant="icon"]');
    const settingsOverlay = container.querySelector('#settingsOverlay');
    if (settingsBtn && settingsOverlay) settingsBtn.addEventListener('click', () => settingsOverlay.open());
    const settingsCard = container.querySelector('labs-settings-card');
    if (settingsCard && settingsOverlay) {
      settingsCard.addEventListener('close', () => settingsOverlay.close());
    }
    return container;
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'With Footer',
  render: args => {
    const container = document.createElement('div');
    const maxStyle = args.maxWidth ? \`--app-container-max: \${args.maxWidth};\` : '';
    const fullAttr = args.layout === 'edge' ? 'fullbleed' : '';
    const layoutMax = args.layout === 'wide' && !args.maxWidth ? '--app-container-max: 960px;' : '';
    const combinedStyle = [maxStyle, layoutMax].filter(Boolean).join(' ');
    container.innerHTML = \`
      <style>
        html, body { height:100%; margin:0; padding:0; box-sizing:border-box; }
        .smoothie-root { display:flex; flex-direction:column; height:100vh; background:var(--color-background,#f6f6f9); }
        .smoothie-root > labs-container { flex:1 1 auto; display:flex; flex-direction:column; }
        labs-container[fullbleed] {
          width: 100vw;
          max-width: none !important;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          padding-left: 0 !important;
          padding-right: 0 !important;
          box-sizing: border-box;
        }
        labs-container[fullbleed] .app-area {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        main.app-area { flex:1 1 auto; display:flex; flex-direction:column; gap:12px; overflow:auto; }
      </style>
      <div class="smoothie-root">
        <labs-container \${fullAttr} style="\${combinedStyle}">
          <main class="app-area">
            <!-- Intentionally empty content area for footer-focused layout -->
          </main>
        </labs-container>
        <labs-footer full-width elevated>
          <div slot="center"><labs-button pill variant="primary">Add</labs-button></div>
          <div slot="right"><labs-button variant="icon" aria-label="Settings"><labs-icon name="\${args.settingsIcon || 'settings'}" slot="icon-left"></labs-icon></labs-button></div>
        </labs-footer>
      </div>
    \`;
    return container;
  }
}`,...n.parameters?.docs?.source}}};const $=["Default","WithFooter"];export{a as Default,n as WithFooter,$ as __namedExportsOrder,M as default};
