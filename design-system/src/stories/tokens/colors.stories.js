import '../styles/main.css';

export default {
  title: 'Tokens/Colors',
  parameters: {
    viewMode: 'docs',
  },
};

const swatch = (label, varName, wrapperClass = '') => `
  <div style="display:flex; align-items:center; gap:12px; margin:8px 0;">
    <div style="width:160px; height:40px; border-radius:8px; background:var(${varName}); box-shadow: 0 1px 0 rgba(0,0,0,0.04);" class="${wrapperClass}"></div>
    <div style="font-family:system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; font-size:13px; color:var(--color-on-background);">` +
  `<code style="background:rgba(0,0,0,0.03); padding:2px 6px; border-radius:4px;">${varName}</code>
    </div>
  </div>
`;

export const Palette = {
  name: 'Palette',
  render: () => {
    return `
      <div style="padding:12px; font-family:system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:var(--color-on-background);">
        <h2>Palette</h2>
        ${swatch('Blueberry 500', '--palette-blueberry-500')}
        ${swatch('Blueberry 100', '--palette-blueberry-100')}
        ${swatch('Strawberry 500', '--palette-strawberry-500')}
        ${swatch('Strawberry 100', '--palette-strawberry-100')}
      </div>
    `;
  }
};

export const Flavors = {
  name: 'Flavors',
  render: () => {
    return `
      <div style="display:flex; flex-direction:column; gap:18px; font-family:system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;">
        <section>
          <h3>Blueberry — Light</h3>
          <div class="flavor-blueberry theme-light" style="padding:12px; border-radius:8px;">
            ${swatch('Primary', '--color-primary')}
            ${swatch('Background', '--color-background')}
            ${swatch('Surface', '--color-surface')}
          </div>
        </section>

        <section>
          <h3>Blueberry — Dark</h3>
          <div class="flavor-blueberry theme-dark" style="padding:12px; border-radius:8px;">
            ${swatch('Primary', '--color-primary')}
            ${swatch('Background', '--color-background')}
            ${swatch('Surface', '--color-surface')}
          </div>
        </section>

        <section>
          <h3>Strawberry — Light</h3>
          <div class="flavor-strawberry theme-light" style="padding:12px; border-radius:8px;">
            ${swatch('Primary', '--color-primary')}
            ${swatch('Background', '--color-background')}
            ${swatch('Surface', '--color-surface')}
          </div>
        </section>

        <section>
          <h3>Strawberry — Dark</h3>
          <div class="flavor-strawberry theme-dark" style="padding:12px; border-radius:8px;">
            ${swatch('Primary', '--color-primary')}
            ${swatch('Background', '--color-background')}
            ${swatch('Surface', '--color-surface')}
          </div>
        </section>
      </div>
    `;
  }
};
