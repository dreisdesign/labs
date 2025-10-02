import"./iframe-BFrO3tnk.js";import"./labs-card-BE9jVfuc.js";import"./labs-list-item-K4yq-fbA.js";import"./preload-helper-PPVm8Dsz.js";const s={title:"Tokens/Grid",parameters:{viewMode:"docs"}},r={name:"Grid",render:()=>`
    <div style="padding:20px; color:var(--color-on-background); background:var(--color-surface);">
      <h1>Grid tokens</h1>
      <p style="margin-top:8px;">Columns, gutters and container tokens visualized below.</p>

      <div style="max-width:var(--grid-container-max); margin-top:18px; padding:0 var(--grid-container-padding-md);">
        <div style="display:grid; grid-template-columns: repeat(var(--grid-columns), 1fr); gap:var(--grid-gutter); align-items:start;">
          ${new Array(12).fill(0).map((e,t)=>'<div style="height:40px; background:linear-gradient(90deg, rgba(0,0,0,0.03), rgba(0,0,0,0.01)); border-radius:4px;"></div>').join("")}
        </div>
      </div>

      <div style="margin-top:18px; display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
        <div style="display:flex; flex-direction:column; gap:6px;">
          <div><strong>--grid-columns</strong>: <code>var(--grid-columns)</code></div>
          <div><strong>--grid-gutter</strong>: <labs-button style="--labs-button-padding:4px 8px; margin-left:8px;" variant="secondary" onclick="navigator.clipboard.writeText('var(--grid-gutter)')">Copy</labs-button> <code>var(--grid-gutter)</code></div>
          <div><strong>--grid-column</strong>: <labs-button style="--labs-button-padding:4px 8px; margin-left:8px;" variant="secondary" onclick="navigator.clipboard.writeText('var(--grid-column)')">Copy</labs-button> <code>var(--grid-column)</code></div>
        </div>
        <div style="display:flex; flex-direction:column; gap:6px;">
          <div><strong>--grid-container-max</strong>: <code>var(--grid-container-max)</code></div>
          <div><strong>--grid-breakpoint-sm</strong>: <code>var(--grid-breakpoint-sm)</code></div>
          <div><strong>--grid-breakpoint-md</strong>: <code>var(--grid-breakpoint-md)</code></div>
        </div>
      </div>
    </div>
  `},i={name:"Container Patterns",render:()=>`
    <div style="padding:20px; color:var(--color-on-background); background:var(--color-background);">
      <h1>Container Layout Patterns</h1>
      <p style="margin-top:8px;">Responsive container patterns for app layouts.</p>

      <h2 style="margin-top:32px; margin-bottom:16px;">Pattern: Metric Card + List (Tracker-style)</h2>
      <div class="container-responsive" style="border: 1px dashed var(--color-outline); background: var(--color-surface);">
        <div style="display: grid; gap: 16px;">
          <!-- Metric Card -->
          <labs-card metric>
            <div style="text-align: center; padding: 24px;">
              <div style="font-size: 2.5rem; font-weight: 600; color: var(--color-primary);">7</div>
              <div style="font-size: 0.875rem; color: var(--color-on-surface-variant); margin-top: 8px;">Entries Today</div>
            </div>
          </labs-card>
          
          <!-- List Items with Mobile Full-Bleed -->
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <labs-list-item variant="text-only" value="Morning coffee" timestamp="2025-09-20T08:30:00.000Z"></labs-list-item>
            <labs-list-item variant="text-only" value="Team standup" timestamp="2025-09-20T09:15:00.000Z"></labs-list-item>
            <labs-list-item variant="text-only" value="Project review" timestamp="2025-09-20T14:00:00.000Z"></labs-list-item>
          </div>
        </div>
      </div>

      <h2 style="margin-top:32px; margin-bottom:16px;">Pattern: Today-List Style</h2>
      <div class="container-responsive" style="border: 1px dashed var(--color-outline); background: var(--color-surface);">
        <div style="display: grid; gap: 8px;">
          <labs-list-item value="Review quarterly goals" checked></labs-list-item>
          <labs-list-item value="Update project documentation"></labs-list-item>
          <labs-list-item value="Schedule team retrospective"></labs-list-item>
        </div>
      </div>

      <div style="margin-top:32px;">
        <h3>Container Tokens</h3>
        <div style="background:var(--color-surface-variant); padding:16px; border-radius:8px; font-family:monospace; font-size:0.875rem;">
          <div><strong>--app-container-max</strong>: <code>var(--app-container-max)</code> (720px)</div>
          <div><strong>--container-mobile-padding</strong>: <code>var(--container-mobile-padding)</code> (12px)</div>
          <div><strong>--container-mobile-breakpoint</strong>: <code>var(--container-mobile-breakpoint)</code> (640px)</div>
          <div><strong>--container-fullbleed-margin</strong>: <code>var(--container-fullbleed-margin)</code> (-12px)</div>
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
          <div><strong>--grid-gutter</strong>: <labs-button style="--labs-button-padding:4px 8px; margin-left:8px;" variant="secondary" onclick="navigator.clipboard.writeText('var(--grid-gutter)')">Copy</labs-button> <code>var(--grid-gutter)</code></div>
          <div><strong>--grid-column</strong>: <labs-button style="--labs-button-padding:4px 8px; margin-left:8px;" variant="secondary" onclick="navigator.clipboard.writeText('var(--grid-column)')">Copy</labs-button> <code>var(--grid-column)</code></div>
        </div>
        <div style="display:flex; flex-direction:column; gap:6px;">
          <div><strong>--grid-container-max</strong>: <code>var(--grid-container-max)</code></div>
          <div><strong>--grid-breakpoint-sm</strong>: <code>var(--grid-breakpoint-sm)</code></div>
          <div><strong>--grid-breakpoint-md</strong>: <code>var(--grid-breakpoint-md)</code></div>
        </div>
      </div>
    </div>
  \`
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Container Patterns',
  render: () => \`
    <div style="padding:20px; color:var(--color-on-background); background:var(--color-background);">
      <h1>Container Layout Patterns</h1>
      <p style="margin-top:8px;">Responsive container patterns for app layouts.</p>

      <h2 style="margin-top:32px; margin-bottom:16px;">Pattern: Metric Card + List (Tracker-style)</h2>
      <div class="container-responsive" style="border: 1px dashed var(--color-outline); background: var(--color-surface);">
        <div style="display: grid; gap: 16px;">
          <!-- Metric Card -->
          <labs-card metric>
            <div style="text-align: center; padding: 24px;">
              <div style="font-size: 2.5rem; font-weight: 600; color: var(--color-primary);">7</div>
              <div style="font-size: 0.875rem; color: var(--color-on-surface-variant); margin-top: 8px;">Entries Today</div>
            </div>
          </labs-card>
          
          <!-- List Items with Mobile Full-Bleed -->
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <labs-list-item variant="text-only" value="Morning coffee" timestamp="2025-09-20T08:30:00.000Z"></labs-list-item>
            <labs-list-item variant="text-only" value="Team standup" timestamp="2025-09-20T09:15:00.000Z"></labs-list-item>
            <labs-list-item variant="text-only" value="Project review" timestamp="2025-09-20T14:00:00.000Z"></labs-list-item>
          </div>
        </div>
      </div>

      <h2 style="margin-top:32px; margin-bottom:16px;">Pattern: Today-List Style</h2>
      <div class="container-responsive" style="border: 1px dashed var(--color-outline); background: var(--color-surface);">
        <div style="display: grid; gap: 8px;">
          <labs-list-item value="Review quarterly goals" checked></labs-list-item>
          <labs-list-item value="Update project documentation"></labs-list-item>
          <labs-list-item value="Schedule team retrospective"></labs-list-item>
        </div>
      </div>

      <div style="margin-top:32px;">
        <h3>Container Tokens</h3>
        <div style="background:var(--color-surface-variant); padding:16px; border-radius:8px; font-family:monospace; font-size:0.875rem;">
          <div><strong>--app-container-max</strong>: <code>var(--app-container-max)</code> (720px)</div>
          <div><strong>--container-mobile-padding</strong>: <code>var(--container-mobile-padding)</code> (12px)</div>
          <div><strong>--container-mobile-breakpoint</strong>: <code>var(--container-mobile-breakpoint)</code> (640px)</div>
          <div><strong>--container-fullbleed-margin</strong>: <code>var(--container-fullbleed-margin)</code> (-12px)</div>
        </div>
      </div>
    </div>
  \`
}`,...i.parameters?.docs?.source}}};const l=["Grid","ContainerPatterns"];export{i as ContainerPatterns,r as Grid,l as __namedExportsOrder,s as default};
