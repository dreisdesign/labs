import{x as l}from"./iframe-Du79Jzof.js";import"./labs-overlay-AWkXp-xX.js";import"./labs-settings-card-C9KbVFg5.js";import{i as d}from"./icons-list-BKmguoAm.js";import"./preload-helper-PPVm8Dsz.js";class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._render()}_render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 16px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 0.75px solid rgba(255, 255, 255, 0.5);
          border-radius: 100px 100px 0 0;
          color: var(--color-on-surface, #1b1c1f);
          font-family: var(--font-family-base, system-ui, sans-serif);
          font-size: var(--font-size-footer, 0.9rem);
          line-height: var(--line-height-footer, 1.4);
          min-height: 56px;
          box-sizing: border-box;
          position: relative;
          width: 95%;
          margin: 0 auto;
          transition: background-color 0.3s ease, box-shadow 0.3s ease, opacity 0.3s;
        }

        .footer-section {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-left {
          flex: 1;
          justify-content: flex-start;
        }

        .footer-center {
          flex: 0 0 auto;
          justify-content: center;
        }

        .footer-right {
          flex: 1;
          justify-content: flex-end;
        }

        /* Support for sticky positioning */
        :host([sticky]) .footer {
          position: sticky;
          bottom: 0;
          z-index: 10;
        }

        /* Dark mode styles using new blueberry-300 color */
        :host-context(.dark-mode) .footer,
        :host-context([data-theme="dark"]) .footer {
          background-color: var(--color-surface);
          border-top: 0.25px solid rgba(179, 168, 247, 0.25);
        }

        /* Elevated variant with shadow */
        :host([elevated]) .footer {
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
        }

        :host-context(.dark-mode) :host([elevated]) .footer,
        :host-context([data-theme="dark"]) :host([elevated]) .footer {
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
          border-top: 0.75px solid rgba(0, 0, 0, 0.15);
        }

        /* Support for fixed positioning */
        :host([fixed]) .footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10;
        }

        /* Full-width variant like Tracker app */
        :host([full-width]) {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 100;
        }

        :host([full-width]) .footer {
          width: 95%;
          margin: 0 auto;
          border-radius: 100px 100px 0 0;
        }

        /* Elevated variant */
        :host([elevated]) .footer {
          box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
          border-top: none;
        }

        /* Compact variant */
        :host([compact]) .footer {
          min-height: 48px;
          padding: 12px 16px;
        }

        /* Safe area support for mobile devices */
        :host([safe-area]) .footer {
          padding-bottom: calc(16px + env(safe-area-inset-bottom));
          padding-left: calc(20px + env(safe-area-inset-left));
          padding-right: calc(20px + env(safe-area-inset-right));
        }

        /* Hide empty slots */
        .footer-section:not(:has(*)) {
          display: none;
        }

        /* Responsive behavior */
        @media (max-width: 480px) {
          .footer {
            padding: 12px 16px;
          }

          :host([safe-area]) .footer {
            padding-left: calc(16px + env(safe-area-inset-left));
            padding-right: calc(16px + env(safe-area-inset-right));
          }
        }
      </style>

      <footer class="footer" part="footer">
        <div class="footer-section footer-left" part="left">
          <slot name="left"></slot>
        </div>
        <div class="footer-section footer-center" part="center">
          <slot name="center"></slot>
        </div>
        <div class="footer-section footer-right" part="right">
          <slot name="right"></slot>
        </div>
      </footer>
    `}static get observedAttributes(){return["sticky","fixed","elevated","compact","safe-area"]}attributeChangedCallback(t,o,i){}}customElements.get("labs-footer")||customElements.define("labs-footer",h);const r=document.createElement("template");r.innerHTML=`
  <style>
    :host { display: block; }
    /* Icon animation scoped to the wrapper */
    #settings-btn labs-icon {
      width: var(--lfs-icon-size, 28px);
      height: var(--lfs-icon-size, 28px);
      transition: transform 0.4s cubic-bezier(.4,2,.6,1);
      display:inline-block;
    }
    #settings-btn:hover labs-icon {
      transform: rotate(90deg);
    }
    /* Ensure footer sits in normal flow; consumers control page layout */
    :host { box-sizing: border-box; }
  </style>

  <labs-footer id="footer">
    <div slot="center">
      <labs-button id="add-btn" pill size="large" variant="primary"><labs-icon slot="icon-left" name="add"></labs-icon>Add</labs-button>
    </div>
    <div slot="right" style="display:flex;align-items:center;gap:8px;">
      <labs-button id="settings-btn" variant="icon" aria-label="Settings" size="large" style="padding-right:12px;">
        <labs-icon id="settings-icon" slot="icon-left" name="settings" width="28" height="28"></labs-icon>
      </labs-button>
    </div>
  </labs-footer>

  <labs-overlay id="settings-overlay" size="medium" transparent>
    <labs-settings-card></labs-settings-card>
  </labs-overlay>
`;class c extends HTMLElement{static get observedAttributes(){return["settings-icon","settings-size","add-size","add-variant","full-width","elevated"]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(r.content.cloneNode(!0)),this._onSettingsClick=this._onSettingsClick.bind(this),this._onCardClose=this._onCardClose.bind(this)}connectedCallback(){this._upgradeProperty("settingsIcon"),this._upgradeProperty("settingsSize"),this._upgradeProperty("addSize"),this._upgradeProperty("addVariant"),this._settingsBtn=this.shadowRoot.getElementById("settings-btn"),this._settingsIcon=this.shadowRoot.getElementById("settings-icon"),this._overlay=this.shadowRoot.getElementById("settings-overlay"),this._settingsCard=this._overlay&&this._overlay.querySelector("labs-settings-card"),this._settingsBtn&&this._settingsBtn.addEventListener("click",this._onSettingsClick),this._settingsCard&&this._settingsCard.addEventListener("close",this._onCardClose),this._applyFooterAttrs()}disconnectedCallback(){this._settingsBtn&&this._settingsBtn.removeEventListener("click",this._onSettingsClick),this._settingsCard&&this._settingsCard.removeEventListener("close",this._onCardClose)}attributeChangedCallback(t,o,i){switch(t){case"settings-icon":this._settingsIcon&&this._settingsIcon.setAttribute("name",i||"settings");break;case"settings-size":this._settingsBtn&&this._settingsBtn.setAttribute("size",i||"large");break;case"add-size":const a=this.shadowRoot.getElementById("add-btn");a&&a.setAttribute("size",i||"large");break;case"add-variant":const n=this.shadowRoot.getElementById("add-btn");n&&n.setAttribute("variant",i||"primary");break;case"full-width":case"elevated":this._applyFooterAttrs();break}}get settingsIcon(){return this.getAttribute("settings-icon")}set settingsIcon(t){this.setAttribute("settings-icon",t)}get settingsSize(){return this.getAttribute("settings-size")}set settingsSize(t){this.setAttribute("settings-size",t)}get addSize(){return this.getAttribute("add-size")}set addSize(t){this.setAttribute("add-size",t)}get addVariant(){return this.getAttribute("add-variant")}set addVariant(t){this.setAttribute("add-variant",t)}get fullWidth(){return this.hasAttribute("full-width")}set fullWidth(t){t?this.setAttribute("full-width",""):this.removeAttribute("full-width")}get elevated(){return this.hasAttribute("elevated")}set elevated(t){t?this.setAttribute("elevated",""):this.removeAttribute("elevated")}_upgradeProperty(t){if(this.hasOwnProperty(t)){let o=this[t];delete this[t],this[t]=o}}_applyFooterAttrs(){const t=this.shadowRoot.getElementById("footer");t&&(this.hasAttribute("full-width")?t.setAttribute("full-width",""):t.removeAttribute("full-width"),this.hasAttribute("elevated")?t.setAttribute("elevated",""):t.removeAttribute("elevated"))}_onSettingsClick(){this._overlay&&typeof this._overlay.open=="function"&&(this._overlay.open(),this.dispatchEvent(new CustomEvent("settings-open",{bubbles:!0})))}_onCardClose(){this._overlay&&typeof this._overlay.close=="function"&&this._overlay.close(),this.dispatchEvent(new CustomEvent("settings-close",{bubbles:!0}))}}customElements.get("labs-footer-with-settings")||customElements.define("labs-footer-with-settings",c);const m={title:"Components (Wrapped)/Footer",parameters:{docs:{description:{component:"Encapsulated `labs-footer-with-settings` wrapper that includes animation and overlay wiring. Use controls to adjust icon and sizes."}}}},s={name:"With Settings",render:e=>l`
    <div style="min-height:100vh; display:flex; flex-direction:column;">
      <main style="flex:1 1 auto;"></main>
      <labs-footer-with-settings
        settings-icon=${e.settingsIcon}
        settings-size=${e.settingsSize}
        add-size=${e.addSize}
        add-variant=${e.addVariant}
        ?full-width=${e.fullWidth}
        ?elevated=${e.elevated}
      ></labs-footer-with-settings>
    </div>
  `};s.argTypes={settingsIcon:{control:{type:"select"},options:Object.keys(d)},settingsSize:{control:{type:"inline-radio"},options:["small","medium","large"]},addSize:{control:{type:"inline-radio"},options:["small","medium","large"]},addVariant:{control:{type:"select"},options:["primary","secondary","transparent"]},fullWidth:{control:"boolean"},elevated:{control:"boolean"}};s.args={settingsIcon:"settings",settingsSize:"large",addSize:"large",addVariant:"primary",fullWidth:!0,elevated:!0};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'With Settings',
  render: args => html\`
    <div style="min-height:100vh; display:flex; flex-direction:column;">
      <main style="flex:1 1 auto;"></main>
      <labs-footer-with-settings
        settings-icon=\${args.settingsIcon}
        settings-size=\${args.settingsSize}
        add-size=\${args.addSize}
        add-variant=\${args.addVariant}
        ?full-width=\${args.fullWidth}
        ?elevated=\${args.elevated}
      ></labs-footer-with-settings>
    </div>
  \`
}`,...s.parameters?.docs?.source}}};const v=["WithSettings"];export{s as WithSettings,v as __namedExportsOrder,m as default};
