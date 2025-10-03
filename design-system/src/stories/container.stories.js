import '../components/labs-container.js';
import '../components/labs-button.js';
import '../components/labs-icon.js';
import iconsList from '../components/icons-list.js';

export default {
    title: 'Layout/Container',
    parameters: {
        docs: {
            description: {
                component: 'Demonstrates the `labs-container` element and its attributes: `padding-md`, `padding-lg`, and `fullbleed`. Use `maxWidth` arg to override token-driven max width.'
            }
        }
    },
    argTypes: {
        layout: { control: { type: 'radio' }, options: ['default', 'padding-md', 'padding-lg', 'fullbleed'], description: 'Choose a container variant' },
        maxWidth: { control: { type: 'text' }, description: 'Override the container max width (e.g. 960px)' },
        settingsIcon: { control: { type: 'select' }, options: Object.keys(iconsList) }
    },
    args: {
        layout: 'default',
        maxWidth: '',
        settingsIcon: 'settings'
    }
};

export const Demo = {
    name: 'Container Variants',
    render: (args) => {
        const { layout, maxWidth, settingsIcon } = args;
        const attr = layout === 'padding-md' ? 'padding-md' : layout === 'padding-lg' ? 'padding-lg' : layout === 'fullbleed' ? 'fullbleed' : '';
        const style = maxWidth ? `style="--app-container-max:${maxWidth};"` : '';
        return `
      <style>
        html,body { height:100%; margin:0; padding:0; }
        .page { min-height:100vh; background: var(--color-background, #f6f7f9); padding: 24px 0; }
        .demo-card { background: var(--color-surface, #fff); padding: 16px; border-radius: 10px; box-shadow: var(--elevation-1, none); }
        labs-container[fullbleed] { box-sizing: border-box; }
      </style>
      <div class="page">
        <labs-container ${attr} ${style}>
          <div class="demo-card">
            <h3 style="margin-top:0;">labs-container ${attr ? `[${attr}]` : ''} ${maxWidth ? `(max: ${maxWidth})` : ''}</h3>
            <p style="margin:0 0 12px 0; color:var(--color-on-surface-variant,#666);">This container respects the design system tokens for padding and max width. Toggle variants to preview responsive behavior.</p>
            <div style="display:flex;gap:8px;align-items:center;">
              <labs-button pill variant="primary">Primary</labs-button>
              <labs-button variant="icon" aria-label="Settings"><labs-icon name="${settingsIcon}" slot="icon-left"></labs-icon></labs-button>
            </div>
          </div>
        </labs-container>
      </div>
    `;
    }
};
