const i={title:"Patterns/App Cards"},a=()=>`
    <style>
      .app-grid { display:grid; grid-template-columns: repeat(2, 1fr); gap:16px; max-width: var(--app-container-max); margin: 0 auto; padding: 16px; }
      @media (max-width: 700px) { .app-grid { grid-template-columns: 1fr; padding: 12px; } }
      .app-card { display:flex; gap:12px; align-items:flex-start; padding:12px; border-radius:12px; background:var(--color-surface, #fff); box-shadow: var(--box-shadow-small, none); }
      .app-card .icon { width:48px; height:48px; flex:0 0 48px; display:inline-flex; align-items:center; justify-content:center; border-radius:8px; background:var(--color-surface-secondary, #f6f7f8); }
      .app-card .content { flex:1; }
      .app-card .title { font-weight: var(--font-weight-semibold, 600); margin-bottom:4px; }
      .app-card .desc { color:var(--color-on-surface-variant, #666); font-size:0.95rem; }
    </style>
    <div class="app-grid">
      <div class="app-card">
        <div class="icon"><labs-icon name="today" width="28" height="28"></labs-icon></div>
        <div class="content"><div class="title">Today List</div><div class="desc">Manage tasks for today with the lightweight list UI.</div></div>
      </div>

      <div class="app-card">
        <div class="icon"><labs-icon name="track_changes" width="28" height="28"></labs-icon></div>
        <div class="content"><div class="title">Tracker</div><div class="desc">Track habits and metrics over time with compact cards.</div></div>
      </div>
    </div>
  `;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return \`
    <style>
      .app-grid { display:grid; grid-template-columns: repeat(2, 1fr); gap:16px; max-width: var(--app-container-max); margin: 0 auto; padding: 16px; }
      @media (max-width: 700px) { .app-grid { grid-template-columns: 1fr; padding: 12px; } }
      .app-card { display:flex; gap:12px; align-items:flex-start; padding:12px; border-radius:12px; background:var(--color-surface, #fff); box-shadow: var(--box-shadow-small, none); }
      .app-card .icon { width:48px; height:48px; flex:0 0 48px; display:inline-flex; align-items:center; justify-content:center; border-radius:8px; background:var(--color-surface-secondary, #f6f7f8); }
      .app-card .content { flex:1; }
      .app-card .title { font-weight: var(--font-weight-semibold, 600); margin-bottom:4px; }
      .app-card .desc { color:var(--color-on-surface-variant, #666); font-size:0.95rem; }
    </style>
    <div class="app-grid">
      <div class="app-card">
        <div class="icon"><labs-icon name="today" width="28" height="28"></labs-icon></div>
        <div class="content"><div class="title">Today List</div><div class="desc">Manage tasks for today with the lightweight list UI.</div></div>
      </div>

      <div class="app-card">
        <div class="icon"><labs-icon name="track_changes" width="28" height="28"></labs-icon></div>
        <div class="content"><div class="title">Tracker</div><div class="desc">Track habits and metrics over time with compact cards.</div></div>
      </div>
    </div>
  \`;
}`,...a.parameters?.docs?.source}}};const d=["TwoColumnGrid"];export{a as TwoColumnGrid,d as __namedExportsOrder,i as default};
