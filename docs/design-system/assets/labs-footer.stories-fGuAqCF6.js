import"./labs-footer-Cz6M6BBG.js";import"./iframe-BonPKuGO.js";import{i as n}from"./icons-list-BKmguoAm.js";import"./labs-overlay-AWkXp-xX.js";import"./preload-helper-PPVm8Dsz.js";const r={title:"Components/Footer",parameters:{docs:{description:{component:"A flexible footer component with slots for left, center, and right content."}}},argTypes:{settingsIcon:{name:"settingsIcon",control:{type:"select"},options:Object.keys(n)}}},t={render:e=>`
      <div style="min-height:60vh; display:flex; flex-direction:column;">
        <div style="flex:1"></div>
        <labs-footer full-width elevated>
          <div slot="center">
            <labs-button pill variant="primary">+ Add</labs-button>
          </div>
          <div slot="right" style="display:flex;align-items:center;gap:8px;">
            <labs-button variant="icon" aria-label="Settings" style="padding-right:12px;">
              <labs-icon name="${e.settingsIcon||"settings"}" slot="icon-left"></labs-icon>
            </labs-button>
          </div>
        </labs-footer>
      </div>
    `};t.args={settingsIcon:"settings"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    return \`
      <div style="min-height:60vh; display:flex; flex-direction:column;">
        <div style="flex:1"></div>
        <labs-footer full-width elevated>
          <div slot="center">
            <labs-button pill variant="primary">+ Add</labs-button>
          </div>
          <div slot="right" style="display:flex;align-items:center;gap:8px;">
            <labs-button variant="icon" aria-label="Settings" style="padding-right:12px;">
              <labs-icon name="\${args.settingsIcon || 'settings'}" slot="icon-left"></labs-icon>
            </labs-button>
          </div>
        </labs-footer>
      </div>
    \`;
  }
}`,...t.parameters?.docs?.source}}};const d=["Default"];export{t as Default,d as __namedExportsOrder,r as default};
