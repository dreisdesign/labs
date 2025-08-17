import '../styles/main.css';

export default {
  title: 'Tokens/All',
  parameters: { viewMode: 'docs' }
};

const swatch = (label, varName, fgVar = 'var(--color-on-background)') => `
  <div style="display:flex; align-items:center; gap:12px; margin:8px 0;">
    <button style="width:160px; height:40px; border-radius:8px; background:var(${varName}); border:0; cursor:pointer;" onclick="navigator.clipboard.writeText('var(${varName})')" title="Copy ${varName}"></button>
    <div style="font-family:system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; font-size:13px; color:${fgVar};">
      <div style="font-weight:600;">${label}</div>
      <code style="background:rgba(0,0,0,0.03); padding:2px 6px; border-radius:4px;">${varName}</code>
    </div>
  </div>
`;

export const TokensPage = {
  name: 'Tokens',
  render: () => {
    return `
      <div style="padding:16px; font-family:system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:var(--color-on-background);">
        <h1>Design Tokens — Palette & Semantic</h1>

        <section style="margin-top:12px;">
          <h2>Palette</h2>
          ${swatch('Blueberry 50', '--palette-blueberry-50')}
          ${swatch('Blueberry 200', '--palette-blueberry-200')}
          ${swatch('Blueberry 500', '--palette-blueberry-500')}
          ${swatch('Blueberry 700', '--palette-blueberry-700')}
          ${swatch('Blueberry 900', '--palette-blueberry-900')}

          ${swatch('Strawberry 50', '--palette-strawberry-50')}
          ${swatch('Strawberry 200', '--palette-strawberry-200')}
          ${swatch('Strawberry 500', '--palette-strawberry-500')}
          ${swatch('Strawberry 700', '--palette-strawberry-700')}
          ${swatch('Strawberry 900', '--palette-strawberry-900')}

          ${swatch('Neutral 200', '--palette-neutral-200')}
          ${swatch('Neutral 500', '--palette-neutral-500')}
        </section>

        <section style="margin-top:18px;">
          <h2>Semantic Tokens</h2>
          ${swatch('Primary', '--color-primary')}
          ${swatch('Background', '--color-background', 'var(--color-on-background)')}
          ${swatch('Surface', '--color-surface')}
          ${swatch('On Primary', '--color-on-primary', 'var(--color-on-primary)')}
          ${swatch('On Background', '--color-on-background', 'var(--color-on-background)')}
          ${swatch('Error', '--color-error')}
        </section>

        <section style="margin-top:18px;">
          <h2>Flavors</h2>
          <div style="display:flex; gap:18px; flex-wrap:wrap;">
            <div style="min-width:240px;">
              <h4>Blueberry — Light</h4>
              <div class="flavor-blueberry theme-light" style="padding:12px; border-radius:8px;">
                ${swatch('Primary', '--color-primary')}
                ${swatch('Background', '--color-background')}
                ${swatch('Surface', '--color-surface')}
              </div>
            </div>

            <div style="min-width:240px;">
              <h4>Blueberry — Dark</h4>
              <div class="flavor-blueberry theme-dark" style="padding:12px; border-radius:8px;">
                ${swatch('Primary', '--color-primary')}
                ${swatch('Background', '--color-background')}
                ${swatch('Surface', '--color-surface')}
              </div>
            </div>

            <div style="min-width:240px;">
              <h4>Strawberry — Light</h4>
              <div class="flavor-strawberry theme-light" style="padding:12px; border-radius:8px;">
                ${swatch('Primary', '--color-primary')}
                ${swatch('Background', '--color-background')}
                ${swatch('Surface', '--color-surface')}
              </div>
            </div>

            <div style="min-width:240px;">
              <h4>Strawberry — Dark</h4>
              <div class="flavor-strawberry theme-dark" style="padding:12px; border-radius:8px;">
                ${swatch('Primary', '--color-primary')}
                ${swatch('Background', '--color-background')}
                ${swatch('Surface', '--color-surface')}
              </div>
            </div>
          </div>
        </section>

        <section style="margin-top:18px;">
          <h2>All Token Names (copyable)</h2>
          <div style="display:flex; flex-wrap:wrap; gap:8px;">
            ${['color-primary', 'color-background', 'color-surface', 'color-on-primary', 'color-on-background', 'color-error', 'palette-blueberry-50', 'palette-blueberry-200', 'palette-blueberry-500', 'palette-strawberry-200', 'palette-strawberry-500', 'space-xs', 'space-sm', 'font-size-base'].map(t => `
              <button style="padding:6px 10px; border-radius:6px; border:1px solid rgba(0,0,0,0.06); background:var(--color-surface); cursor:pointer;" onclick="navigator.clipboard.writeText('var(--${t})')">--${t}</button>
            `).join('')}
          </div>
        </section>
      </div>
    `;
  }
};
