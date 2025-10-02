import"./labs-header-CHHtlePv.js";import"./labs-footer-Cz6M6BBG.js";import"./labs-card-BE9jVfuc.js";import"./labs-list-item-K4yq-fbA.js";import"./iframe-BSSRKtkQ.js";import"./preload-helper-PPVm8Dsz.js";const o={title:"Templates/Header-Footer-Metric-List"},t=()=>`
  <labs-header title="Demo Template" date="October 2, 2025" center show-subtitle subtitle="Demo subtitle"></labs-header>
  <main style="padding:var(--space-lg,32px); display:flex; flex-direction:column; gap:24px; align-items:center;">
    <labs-card style="width:320px;">
      <div slot="content" style="text-align:center;">
        <div style="font-size:2.5rem; font-weight:700;">42</div>
        <div style="font-size:1rem; color:var(--color-on-surface-variant);">Metric Card</div>
      </div>
    </labs-card>
    <labs-list-item variant="checkbox" checked>
      <span slot="content">Checkbox List Item</span>
    </labs-list-item>
    <labs-list-item variant="timestamp" timestamp="2025-10-02T09:00:00">
      <span slot="content">Timestamp List Item</span>
    </labs-list-item>
  </main>
  <labs-footer full-width elevated>
    <div slot="center" class="footer-center">
      <labs-button size="large" pill variant="primary" fullwidth>
        <labs-icon name="add" slot="icon-left" width="20" height="20"></labs-icon>
        Add Item
      </labs-button>
    </div>
  </labs-footer>
`;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
  <labs-header title="Demo Template" date="October 2, 2025" center show-subtitle subtitle="Demo subtitle"></labs-header>
  <main style="padding:var(--space-lg,32px); display:flex; flex-direction:column; gap:24px; align-items:center;">
    <labs-card style="width:320px;">
      <div slot="content" style="text-align:center;">
        <div style="font-size:2.5rem; font-weight:700;">42</div>
        <div style="font-size:1rem; color:var(--color-on-surface-variant);">Metric Card</div>
      </div>
    </labs-card>
    <labs-list-item variant="checkbox" checked>
      <span slot="content">Checkbox List Item</span>
    </labs-list-item>
    <labs-list-item variant="timestamp" timestamp="2025-10-02T09:00:00">
      <span slot="content">Timestamp List Item</span>
    </labs-list-item>
  </main>
  <labs-footer full-width elevated>
    <div slot="center" class="footer-center">
      <labs-button size="large" pill variant="primary" fullwidth>
        <labs-icon name="add" slot="icon-left" width="20" height="20"></labs-icon>
        Add Item
      </labs-button>
    </div>
  </labs-footer>
\``,...t.parameters?.docs?.source}}};const r=["Default"];export{t as Default,r as __namedExportsOrder,o as default};
