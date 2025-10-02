import"./labs-footer-Cz6M6BBG.js";import"./iframe-BcicKYST.js";import{i as c}from"./icons-list-BKmguoAm.js";import"./labs-overlay-AWkXp-xX.js";import"./labs-settings-card-DGuPJfE7.js";import"./labs-input-card-CKscVP7Z.js";import"./labs-card-BE9jVfuc.js";import"./labs-list-item-K4yq-fbA.js";import"./labs-checkbox-CW6xedIE.js";import"./labs-dropdown-vlOVR_pw.js";import"./preload-helper-PPVm8Dsz.js";const d=document.createElement("template");d.innerHTML=`
  <style>
    :host {
      display: block;
      width: 100%;
      max-width: 400px;
      box-sizing: border-box;
      margin-left: auto;
      margin-right: auto;
      padding-left: var(--grid-container-padding-sm);
      padding-right: var(--grid-container-padding-sm);
    }
    @media (min-width: 640px) {
      :host {
        max-width: 500px;
      }
    }
    :host([padding-md]) {
      padding-left: var(--grid-container-padding-md, 20px);
      padding-right: var(--grid-container-padding-md, 20px);
    }
    :host([padding-lg]) {
      padding-left: var(--grid-container-padding-lg, 24px);
      padding-right: var(--grid-container-padding-lg, 24px);
    }
    :host([fullbleed]) {
      max-width: 100vw;
      padding-left: 0;
      padding-right: 0;
    }
    @media (max-width: var(--container-mobile-breakpoint, 640px)) {
      :host {
        max-width: 100vw;
        padding-left: var(--container-mobile-padding, 12px);
        padding-right: var(--container-mobile-padding, 12px);
      }
    }
  </style>
  <slot></slot>
`;class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(d.content.cloneNode(!0))}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","region")}}customElements.get("labs-container")||customElements.define("labs-container",p);const S={title:"Templates/Smoothie",parameters:{docs:{description:{component:"Smoothie template that includes the canonical content container (`labs-container`). Use the `layout` arg to pick `list` or `full` behaviors."}}},argTypes:{settingsIcon:{control:{type:"select"},options:Object.keys(c)},layout:{control:{type:"radio"},options:["narrow","wide","edge"],description:"Choose `narrow` (app-like constrained), `wide` (full width with paddings), or `edge` (edge-to-edge full bleed)."},maxWidth:{control:{type:"text"},description:"Override `--app-container-max` (e.g. 720px)"}}},a={name:"Default",render:e=>{const t=document.createElement("div");let o="",l="";e.layout==="edge"?o="fullbleed":e.layout==="wide"?l='style="--app-container-max:960px;"':l='style="--app-container-max:400px;"',t.innerHTML=`
      <style>
        html, body { height:100%; margin:0; padding:0; box-sizing:border-box; }
        .smoothie-root { display:flex; flex-direction:column; height:100vh; background:var(--color-background,#f6f6f9); }
        .smoothie-root > labs-container { flex:1 1 auto; display:flex; flex-direction:column; }
        main.app-area { flex:1 1 auto; display:flex; flex-direction:column; gap:12px; overflow:auto; }
        .app-hero { text-align:center; padding-top:18px; }
        .demo-list { display:flex; flex-direction:column; gap:8px; padding:12px 0; }
        .demo-card { padding:12px; background:var(--color-surface, #fff); border-radius:8px; box-shadow:var(--elevation-1); }
      </style>
      <div class="smoothie-root">
        <labs-container ${o} ${l}>
          <main class="app-area">
            <header class="app-hero"><h1>Smoothie App Template — Default</h1></header>
            <div class="demo-list" role="list">
              <labs-card class="demo-card" variant="metric">
                <div class="metric-label" style="font-size: var(--metric-label-size, 0.875rem); font-weight: var(--metric-label-weight, 800); line-height: var(--metric-label-line-height, 1.2); color: var(--color-on-surface); margin-bottom: var(--space-md, 1rem); text-align: center; width: 100%;">Tasks</div>
                <div class="metric-value" style="font-size: var(--metric-value-size, 2rem); font-weight: var(--metric-value-weight, 800); line-height: var(--metric-value-line-height, 1.2); color: var(--color-primary); text-align: center; width: 100%;">42</div>
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
              <!-- Timestamp-style list item: match the Components/List Item -> Timestamp story
                   (use text-only variant with a left icon and the time string as the main content) -->
              <labs-list-item variant="text-only">
                <labs-icon slot="control" name="check" aria-hidden="false" title="Completed"></labs-icon>
                <span slot="content">10:00 AM</span>
                <labs-dropdown slot="actions"></labs-dropdown>
              </labs-list-item>
            </div>
          </main>
        </labs-container>
        <labs-footer full-width elevated>
          <div slot="center"><labs-button pill variant="primary">Add</labs-button></div>
          <div slot="right"><labs-button variant="icon" aria-label="Settings"><labs-icon name="${e.settingsIcon||"settings"}" slot="icon-left"></labs-icon></labs-button></div>
        </labs-footer>
        <labs-overlay id="settingsOverlay" size="medium" transparent><labs-settings-card></labs-settings-card></labs-overlay>
      </div>
    `;const s=t.querySelector('labs-button[variant="icon"]'),i=t.querySelector("#settingsOverlay");s&&i&&s.addEventListener("click",()=>i.open());const r=t.querySelector("labs-settings-card");return r&&i&&r.addEventListener("close",()=>i.close()),t}};a.args={settingsIcon:"settings",layout:"narrow",maxWidth:""};const n={name:"With Footer",render:e=>{const t=document.createElement("div"),o=e.layout==="edge"?"fullbleed":"";return t.innerHTML=`
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
        <labs-container ${o}>
          <main class="app-area">
            <!-- Intentionally empty content area for footer-focused layout -->
          </main>
        </labs-container>
        <labs-footer full-width elevated>
          <div slot="center"><labs-button pill variant="primary">Add</labs-button></div>
          <div slot="right"><labs-button variant="icon" aria-label="Settings"><labs-icon name="${e.settingsIcon||"settings"}" slot="icon-left"></labs-icon></labs-button></div>
        </labs-footer>
      </div>
    `,t}};n.args={settingsIcon:"settings",layout:"narrow",maxWidth:""};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: args => {
    const container = document.createElement('div');
    let containerAttrs = '';
    let containerStyle = '';
    if (args.layout === 'edge') {
      containerAttrs = 'fullbleed';
    } else if (args.layout === 'wide') {
      containerStyle = 'style="--app-container-max:960px;"';
    } else {
      containerStyle = 'style="--app-container-max:400px;"';
    }
    container.innerHTML = \`
      <style>
        html, body { height:100%; margin:0; padding:0; box-sizing:border-box; }
        .smoothie-root { display:flex; flex-direction:column; height:100vh; background:var(--color-background,#f6f6f9); }
        .smoothie-root > labs-container { flex:1 1 auto; display:flex; flex-direction:column; }
        main.app-area { flex:1 1 auto; display:flex; flex-direction:column; gap:12px; overflow:auto; }
        .app-hero { text-align:center; padding-top:18px; }
        .demo-list { display:flex; flex-direction:column; gap:8px; padding:12px 0; }
        .demo-card { padding:12px; background:var(--color-surface, #fff); border-radius:8px; box-shadow:var(--elevation-1); }
      </style>
      <div class="smoothie-root">
        <labs-container \${containerAttrs} \${containerStyle}>
          <main class="app-area">
            <header class="app-hero"><h1>Smoothie App Template — Default</h1></header>
            <div class="demo-list" role="list">
              <labs-card class="demo-card" variant="metric">
                <div class="metric-label" style="font-size: var(--metric-label-size, 0.875rem); font-weight: var(--metric-label-weight, 800); line-height: var(--metric-label-line-height, 1.2); color: var(--color-on-surface); margin-bottom: var(--space-md, 1rem); text-align: center; width: 100%;">Tasks</div>
                <div class="metric-value" style="font-size: var(--metric-value-size, 2rem); font-weight: var(--metric-value-weight, 800); line-height: var(--metric-value-line-height, 1.2); color: var(--color-primary); text-align: center; width: 100%;">42</div>
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
              <!-- Timestamp-style list item: match the Components/List Item -> Timestamp story
                   (use text-only variant with a left icon and the time string as the main content) -->
              <labs-list-item variant="text-only">
                <labs-icon slot="control" name="check" aria-hidden="false" title="Completed"></labs-icon>
                <span slot="content">10:00 AM</span>
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
    const fullAttr = args.layout === 'edge' ? 'fullbleed' : '';
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
        <labs-container \${fullAttr}>
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
}`,...n.parameters?.docs?.source}}};const z=["Default","WithFooter"];export{a as Default,n as WithFooter,z as __namedExportsOrder,S as default};
