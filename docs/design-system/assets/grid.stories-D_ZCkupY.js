import"./iframe-CWxIXq9l.js";import"./preload-helper-D9Z9MdNV.js";const e={title:"Tokens/Grid",parameters:{viewMode:"docs"}},r={name:"Grid",render:()=>`
    <div style="padding:20px; color:var(--color-on-background); background:var(--color-surface);">
      <h1>Grid tokens</h1>
      <p style="margin-top:8px;">Columns, gutters and container tokens visualized below.</p>

      <div style="max-width:var(--grid-container-max); margin-top:18px; padding:0 var(--grid-container-padding-md);">
        <div style="display:grid; grid-template-columns: repeat(var(--grid-columns), 1fr); gap:var(--grid-gutter); align-items:start;">
          ${new Array(12).fill(0).map((i,d)=>'<div style="height:40px; background:linear-gradient(90deg, rgba(0,0,0,0.03), rgba(0,0,0,0.01)); border-radius:4px;"></div>').join("")}
        </div>
      </div>

      <div style="margin-top:18px; display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
        <div style="display:flex; flex-direction:column; gap:6px;">
          <div><strong>--grid-columns</strong>: <code>var(--grid-columns)</code></div>
          <div><strong>--grid-gutter</strong>: <button style="padding:4px 8px; margin-left:8px;" onclick="navigator.clipboard.writeText('var(--grid-gutter)')">Copy</button> <code>var(--grid-gutter)</code></div>
          <div><strong>--grid-column</strong>: <button style="padding:4px 8px; margin-left:8px;" onclick="navigator.clipboard.writeText('var(--grid-column)')">Copy</button> <code>var(--grid-column)</code></div>
        </div>
        <div style="display:flex; flex-direction:column; gap:6px;">
          <div><strong>--grid-container-max</strong>: <code>var(--grid-container-max)</code></div>
          <div><strong>--grid-breakpoint-sm</strong>: <code>var(--grid-breakpoint-sm)</code></div>
          <div><strong>--grid-breakpoint-md</strong>: <code>var(--grid-breakpoint-md)</code></div>
        </div>
      </div>
    </div>
  `};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Grid',
  render: () => \`
    <div style="padding:20px; color:var(--color-on-background); background:var(--color-surface);">
      <h1>Grid tokens</h1>
      <p style="margin-top:8px;">Columns, gutters and container tokens visualized below.</p>

      <div style="max-width:var(--grid-container-max); margin-top:18px; padding:0 var(--grid-container-padding-md);">
        <div style="display:grid; grid-template-columns: repeat(var(--grid-columns), 1fr); gap:var(--grid-gutter); align-items:start;">
          \${new Array(12).fill(0).map((_, i) => \`<div style="height:40px; background:linear-gradient(90deg, rgba(0,0,0,0.03), rgba(0,0,0,0.01)); border-radius:4px;"></div>\`).join('')}
        </div>
      </div>

      <div style="margin-top:18px; display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
        <div style="display:flex; flex-direction:column; gap:6px;">
          <div><strong>--grid-columns</strong>: <code>var(--grid-columns)</code></div>
          <div><strong>--grid-gutter</strong>: <button style="padding:4px 8px; margin-left:8px;" onclick="navigator.clipboard.writeText('var(--grid-gutter)')">Copy</button> <code>var(--grid-gutter)</code></div>
          <div><strong>--grid-column</strong>: <button style="padding:4px 8px; margin-left:8px;" onclick="navigator.clipboard.writeText('var(--grid-column)')">Copy</button> <code>var(--grid-column)</code></div>
        </div>
        <div style="display:flex; flex-direction:column; gap:6px;">
          <div><strong>--grid-container-max</strong>: <code>var(--grid-container-max)</code></div>
          <div><strong>--grid-breakpoint-sm</strong>: <code>var(--grid-breakpoint-sm)</code></div>
          <div><strong>--grid-breakpoint-md</strong>: <code>var(--grid-breakpoint-md)</code></div>
        </div>
      </div>
    </div>
  \`
}`,...r.parameters?.docs?.source}}};const t=["Grid"];export{r as Grid,t as __namedExportsOrder,e as default};
