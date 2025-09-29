import"./labs-footer-Cz6M6BBG.js";import"./iframe-CeTClk5P.js";import"./labs-overlay-AWkXp-xX.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Patterns/Footer with Settings",parameters:{docs:{description:{component:"A pattern showing a footer with a settings button that opens an overlay."}}}},e={render:i=>{const t=document.createElement("div");t.innerHTML=`
      <style>
        #settings-btn labs-icon {
          width: 28px;
          height: 28px;
          transition: transform 0.4s cubic-bezier(.4,2,.6,1);
        }
        #settings-btn:hover labs-icon {
          transform: rotate(90deg);
        }
      </style>
      <labs-footer full-width elevated>
        <div slot="center">
          <labs-button pill variant="primary">+ Add</labs-button>
        </div>
        <div slot="right" style="display: flex; align-items: center; gap: 8px;">
          <labs-button id="settings-btn" variant="icon" aria-label="Settings" style="padding-right:12px;">
            <labs-icon name="${i.settingsIcon||"settings"}" slot="icon-left" width="28" height="28"></labs-icon>
          </labs-button>
        </div>
      </labs-footer>
      <labs-overlay id="settings-overlay" size="medium" transparent>
        <labs-settings-card></labs-settings-card>
      </labs-overlay>
    `;const r=t.querySelector("#settings-btn"),n=t.querySelector("#settings-overlay");r.addEventListener("click",()=>{n.open()});const s=t.querySelector("labs-settings-card");return s&&n&&s.addEventListener("close",()=>{n.close()}),t}};e.args={settingsIcon:"settings"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.innerHTML = \`
      <style>
        #settings-btn labs-icon {
          width: 28px;
          height: 28px;
          transition: transform 0.4s cubic-bezier(.4,2,.6,1);
        }
        #settings-btn:hover labs-icon {
          transform: rotate(90deg);
        }
      </style>
      <labs-footer full-width elevated>
        <div slot="center">
          <labs-button pill variant="primary">+ Add</labs-button>
        </div>
        <div slot="right" style="display: flex; align-items: center; gap: 8px;">
          <labs-button id="settings-btn" variant="icon" aria-label="Settings" style="padding-right:12px;">
            <labs-icon name="\${args.settingsIcon || 'settings'}" slot="icon-left" width="28" height="28"></labs-icon>
          </labs-button>
        </div>
      </labs-footer>
      <labs-overlay id="settings-overlay" size="medium" transparent>
        <labs-settings-card></labs-settings-card>
      </labs-overlay>
    \`;
    const settingsBtn = container.querySelector('#settings-btn');
    const overlay = container.querySelector('#settings-overlay');
    settingsBtn.addEventListener('click', () => {
      overlay.open();
    });

    // Listen for 'close' event from labs-settings-card and close the overlay
    const settingsCard = container.querySelector('labs-settings-card');
    if (settingsCard && overlay) {
      settingsCard.addEventListener('close', () => {
        overlay.close();
      });
    }
    return container;
  }
}`,...e.parameters?.docs?.source}}};const g=["FooterWithSettings"];export{e as FooterWithSettings,g as __namedExportsOrder,d as default};
