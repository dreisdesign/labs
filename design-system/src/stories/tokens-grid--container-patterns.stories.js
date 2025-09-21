import '../components/labs-container.js';
import '../components/labs-card.js';

// Use a more specific title to avoid colliding story IDs with `grid.stories.js`.
export default { title: 'Tokens/Grid/Patterns' };

export const ContainerPatternsLegacy = () => `
  <style>
    .demo-stack { display:flex; flex-direction:column; gap:16px; }
    .example { background: var(--color-surface, #fff); padding:12px; border-radius:12px; }
  </style>
  <labs-container>
    <div class="demo-stack" style="max-width:var(--app-container-max);">
      <div class="example">
        <label style="font-weight:600;display:block;margin-bottom:8px;">Tracker metric (example)</label>
        <labs-card variant="metric">42</labs-card>
      </div>

      <div class="example">
        <label style="font-weight:600;display:block;margin-bottom:8px;">Today input card (should match metric width)</label>
        <labs-card variant="welcome">Input overlay would match this width in the app</labs-card>
      </div>
    </div>
  </labs-container>
`;
