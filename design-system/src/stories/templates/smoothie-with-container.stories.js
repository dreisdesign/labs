import '../../components/labs-container.js';
import '../../components/labs-footer.js';
import '../../components/labs-button.js';
import '../../components/labs-icon.js';
import iconsList from '../../components/icons-list.js';
import '../../components/labs-overlay.js';
import '../../components/labs-settings-card.js';
import '../../components/labs-input-card.js';
import '../../components/labs-card.js';
import '../../components/labs-list-item.js';
import '../../components/labs-checkbox.js';
import '../../components/labs-dropdown.js';

export default {
    title: 'Templates/Smoothie',
    parameters: {
        docs: {
            description: {
                component: 'Smoothie template that includes the canonical content container (`labs-container`). Use the `layout` arg to pick `list` or `full` behaviors.'
            }
        }
    },
    argTypes: {
        settingsIcon: {
            control: { type: 'select' },
            options: Object.keys(iconsList),
        },
        layout: {
            control: { type: 'radio' },
            options: ['narrow', 'wide', 'edge'],
            description: 'Choose `narrow` (app-like constrained), `wide` (full width with paddings), or `edge` (edge-to-edge full bleed).'
        },
        maxWidth: { control: { type: 'text' }, description: 'Override `--app-container-max` (e.g. 720px)' },
    }
};

// The previous Default story has been removed; With Components will be the single Default template below.

export const Default = {
    name: 'Default',
    render: (args) => {
        const container = document.createElement('div');
        const maxStyle = args.maxWidth ? `--app-container-max: ${args.maxWidth};` : '';
        const fullAttr = args.layout === 'edge' ? 'fullbleed' : '';
        const layoutMax = args.layout === 'wide' && !args.maxWidth ? '--app-container-max: 960px;' : '';
        const combinedStyle = [maxStyle, layoutMax].filter(Boolean).join(' ');
        container.innerHTML = `
      <style>
        /* Make the story area exactly the viewport height so the footer doesn't cause overflow */
        html, body { height:100%; margin:0; padding:0; box-sizing:border-box; }
        .smoothie-root { display:flex; flex-direction:column; height:100vh; background:var(--color-background,#f6f6f9); }
        /* Let the canonical container fill available space so footer sits at the bottom */
        .smoothie-root > labs-container { flex:1 1 auto; display:flex; flex-direction:column; }
        main.app-area { flex:1 1 auto; display:flex; flex-direction:column; gap:12px; overflow:auto; }
        .app-hero { text-align:center; padding-top:18px; }
        .demo-list { display:flex; flex-direction:column; gap:8px; padding:12px 0; }
        .demo-card { padding:12px; background:var(--color-surface, #fff); border-radius:8px; box-shadow:var(--elevation-1); }
      </style>
      <div class="smoothie-root">
  <labs-container ${fullAttr} style="${combinedStyle}">
          <main class="app-area">
            <header class="app-hero"><h1>Smoothie App Template — Default</h1></header>
            <div class="demo-list" role="list">
              <labs-card class="demo-card" variant="metric">
                <div class="metric-label">Tasks</div>
                <div class="metric-value">42</div>
              </labs-card>
              <labs-list-item>
                <labs-checkbox slot="control" aria-label="Mark Walk the dog complete"></labs-checkbox>
                <span slot="content">Walk the dog</span>
                <labs-dropdown slot="actions"></labs-dropdown>
              </labs-list-item>
              <labs-list-item>
                <labs-checkbox slot="control" aria-label="Mark Write notes complete"></labs-checkbox>
                <span slot="content">Write notes</span>
                <labs-dropdown slot="actions"></labs-dropdown>
              </labs-list-item>
              <labs-list-item>
                <labs-checkbox slot="control" aria-label="Mark Release build complete"></labs-checkbox>
                <span slot="content">Release build</span>
                <labs-dropdown slot="actions"></labs-dropdown>
              </labs-list-item>
            </div>
          </main>
        </labs-container>
        <labs-footer full-width elevated>
          <div slot="center"><labs-button pill variant="primary">Add</labs-button></div>
          <div slot="right"><labs-button variant="icon" aria-label="Settings"><labs-icon name="${args.settingsIcon || 'settings'}" slot="icon-left"></labs-icon></labs-button></div>
        </labs-footer>
        <labs-overlay id="settingsOverlay" size="medium" transparent><labs-settings-card></labs-settings-card></labs-overlay>
      </div>
    `;
        const settingsBtn = container.querySelector('labs-button[variant="icon"]');
        const settingsOverlay = container.querySelector('#settingsOverlay');
        if (settingsBtn && settingsOverlay) settingsBtn.addEventListener('click', () => settingsOverlay.open());
        const settingsCard = container.querySelector('labs-settings-card');
        if (settingsCard && settingsOverlay) {
            settingsCard.addEventListener('close', () => settingsOverlay.close());
        }
        return container;
    }
};

Default.args = {
    settingsIcon: 'settings',
    layout: 'narrow',
    maxWidth: ''
};

export const WithFooter = {
  name: 'With Footer',
  render: (args) => {
    const container = document.createElement('div');
    const maxStyle = args.maxWidth ? `--app-container-max: ${args.maxWidth};` : '';
    const fullAttr = args.layout === 'edge' ? 'fullbleed' : '';
    const layoutMax = args.layout === 'wide' && !args.maxWidth ? '--app-container-max: 960px;' : '';
    const combinedStyle = [maxStyle, layoutMax].filter(Boolean).join(' ');
    container.innerHTML = `
      <style>
        html, body { height:100%; margin:0; padding:0; box-sizing:border-box; }
        .smoothie-root { display:flex; flex-direction:column; height:100vh; background:var(--color-background,#f6f6f9); }
        .smoothie-root > labs-container { flex:1 1 auto; display:flex; flex-direction:column; }
        main.app-area { flex:1 1 auto; display:flex; flex-direction:column; gap:12px; overflow:auto; }
      </style>
      <div class="smoothie-root">
        <labs-container ${fullAttr} style="${combinedStyle}">
          <main class="app-area">
            <!-- Intentionally empty content area for footer-focused layout -->
          </main>
        </labs-container>
        <labs-footer full-width elevated>
          <div slot="center"><labs-button pill variant="primary">Add</labs-button></div>
          <div slot="right"><labs-button variant="icon" aria-label="Settings"><labs-icon name="${args.settingsIcon || 'settings'}" slot="icon-left"></labs-icon></labs-button></div>
        </labs-footer>
      </div>
    `;
    return container;
  }
};

WithFooter.args = {
  settingsIcon: 'settings',
  layout: 'narrow',
  maxWidth: ''
};
