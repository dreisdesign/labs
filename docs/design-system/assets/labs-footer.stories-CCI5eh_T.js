import"./labs-footer-Cz6M6BBG.js";import"./iframe-CWxIXq9l.js";import"./labs-overlay-B0mBOsy4.js";import"./preload-helper-D9Z9MdNV.js";const o={title:"Components/Footer",parameters:{docs:{description:{component:"A flexible footer component with slots for left, center, and right content."}}}},t={render:()=>`
      <div style="min-height:60vh; display:flex; flex-direction:column;">
        <div style="flex:1"></div>
        <labs-footer full-width elevated>
          <div slot="center">
            <labs-button pill variant="primary">+ Add</labs-button>
          </div>
          <div slot="right" style="display:flex;align-items:center;gap:8px;">
            <labs-button variant="icon" aria-label="Settings" style="padding-right:12px;">
              <labs-icon name="settings" slot="icon-left"></labs-icon>
            </labs-button>
          </div>
        </labs-footer>
      </div>
    `};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    return \`
      <div style="min-height:60vh; display:flex; flex-direction:column;">
        <div style="flex:1"></div>
        <labs-footer full-width elevated>
          <div slot="center">
            <labs-button pill variant="primary">+ Add</labs-button>
          </div>
          <div slot="right" style="display:flex;align-items:center;gap:8px;">
            <labs-button variant="icon" aria-label="Settings" style="padding-right:12px;">
              <labs-icon name="settings" slot="icon-left"></labs-icon>
            </labs-button>
          </div>
        </labs-footer>
      </div>
    \`;
  }
}`,...t.parameters?.docs?.source}}};const s=["Default"];export{t as Default,s as __namedExportsOrder,o as default};
