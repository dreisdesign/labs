import { html } from 'lit';
import './labs-overlay.js';
import './labs-button.js';
import './labs-icon.js';

export default {
  title: 'Components/Overlay',
  component: 'labs-overlay',
  parameters: {
    docs: {
      description: {
        component: 'A modal overlay component with blur background. Supports focus trapping, keyboard navigation, and various sizes.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'full'],
      description: 'Size of the overlay content area',
    },
    closeOnBackdrop: {
      control: 'boolean',
      description: 'Allow closing by clicking the backdrop',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Allow closing with the Escape key',
    },
  },
};

export const Default = {
  args: {
    size: 'medium',
    closeOnBackdrop: true,
    closeOnEscape: true,
  },
  render: (args) => {
    const overlayId = 'overlay-default';

    return html`
      <labs-button id="trigger-${overlayId}" variant="primary">
        Open Overlay
      </labs-button>

      <labs-overlay
        id="${overlayId}"
        size="${args.size}"
        close-on-backdrop="${args.closeOnBackdrop}"
        close-on-escape="${args.closeOnEscape}"
      >
        <div style="padding: 24px; text-align: center;">
          <h2 style="margin: 0 0 16px 0; color: var(--color-on-surface);">Default Overlay</h2>
          <p style="margin: 0 0 24px 0; color: var(--color-on-surface); opacity: 0.8;">
            This is a basic overlay with some content. Click outside or press Escape to close.
          </p>
          <labs-button id="close-${overlayId}" variant="primary">
            Close
          </labs-button>
        </div>
      </labs-overlay>

      <script>
        (() => {
          const trigger = document.getElementById('trigger-${overlayId}');
          const overlay = document.getElementById('${overlayId}');
          const closeBtn = document.getElementById('close-${overlayId}');

          if (trigger && overlay) {
            trigger.addEventListener('click', () => overlay.open());
          }
          if (closeBtn && overlay) {
            closeBtn.addEventListener('click', () => overlay.close());
          }
        })();
      </script>
    `;
  },
};

export const WithForm = {
  args: {
    size: 'small',
    closeOnBackdrop: false,
    closeOnEscape: true,
  },
  render: (args) => {
    const overlayId = 'overlay-form';

    return html`
      <labs-button id="trigger-${overlayId}" variant="primary">
        <labs-icon slot="icon-left" name="add"></labs-icon>
        Add Item
      </labs-button>

      <labs-overlay
        id="${overlayId}"
        size="${args.size}"
        close-on-backdrop="${args.closeOnBackdrop}"
        close-on-escape="${args.closeOnEscape}"
      >
        <div style="padding: 24px;">
          <h3 style="margin: 0 0 16px 0; color: var(--color-on-surface);">Add New Item</h3>
          <form id="form-${overlayId}" style="display: flex; flex-direction: column; gap: 16px;">
            <input
              type="text"
              placeholder="Enter item name"
              style="padding: 12px; border: 1px solid var(--color-outline, #ccc); border-radius: 4px; background: var(--color-background, #fff); color: var(--color-on-background);"
              required
            />
            <textarea
              placeholder="Description (optional)"
              rows="3"
              style="padding: 12px; border: 1px solid var(--color-outline, #ccc); border-radius: 4px; background: var(--color-background, #fff); color: var(--color-on-background); resize: vertical;"
            ></textarea>
            <div style="display: flex; gap: 8px; justify-content: flex-end;">
              <labs-button id="cancel-${overlayId}" variant="text">
                Cancel
              </labs-button>
              <labs-button type="submit" variant="primary">
                Add Item
              </labs-button>
            </div>
          </form>
        </div>
      </labs-overlay>

      <script>
        (() => {
          const trigger = document.getElementById('trigger-${overlayId}');
          const overlay = document.getElementById('${overlayId}');
          const form = document.getElementById('form-${overlayId}');
          const cancelBtn = document.getElementById('cancel-${overlayId}');

          if (trigger && overlay) {
            trigger.addEventListener('click', () => overlay.open());
          }
          if (cancelBtn && overlay) {
            cancelBtn.addEventListener('click', () => overlay.close());
          }
          if (form && overlay) {
            form.addEventListener('submit', (e) => {
              e.preventDefault();
              alert('Form submitted! (This is just a demo)');
              overlay.close();
              form.reset();
            });
          }
        })();
      </script>
    `;
  },
};

export const SettingsOverlay = {
  args: {
    size: 'medium',
    closeOnBackdrop: true,
    closeOnEscape: true,
  },
  render: (args) => {
    const overlayId = 'overlay-settings';

    return html`
      <labs-button id="trigger-${overlayId}" variant="icon" aria-label="Settings">
        <labs-icon slot="icon-left" name="settings"></labs-icon>
      </labs-button>

      <labs-overlay
        id="${overlayId}"
        size="${args.size}"
        close-on-backdrop="${args.closeOnBackdrop}"
        close-on-escape="${args.closeOnEscape}"
      >
        <div style="padding: 24px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
            <h3 style="margin: 0; color: var(--color-on-surface);">Settings</h3>
            <labs-button id="close-${overlayId}" variant="icon" aria-label="Close">
              <labs-icon slot="icon-left" name="close"></labs-icon>
            </labs-button>
          </div>

          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <h4 style="margin: 0 0 8px 0; color: var(--color-on-surface);">Theme</h4>
              <div style="display: flex; gap: 8px;">
                <labs-button variant="outlined" size="small">Light</labs-button>
                <labs-button variant="primary" size="small">Dark</labs-button>
                <labs-button variant="outlined" size="small">Auto</labs-button>
              </div>
            </div>

            <div>
              <h4 style="margin: 0 0 8px 0; color: var(--color-on-surface);">Flavor</h4>
              <div style="display: flex; gap: 8px;">
                <labs-button variant="outlined" size="small">Vanilla</labs-button>
                <labs-button variant="primary" size="small">Blueberry</labs-button>
                <labs-button variant="outlined" size="small">Strawberry</labs-button>
              </div>
            </div>

            <div>
              <h4 style="margin: 0 0 8px 0; color: var(--color-on-surface);">Notifications</h4>
              <label style="display: flex; align-items: center; gap: 8px; color: var(--color-on-surface);">
                <input type="checkbox" checked />
                Enable notifications
              </label>
            </div>
          </div>

          <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--color-outline, #e0e0e0);">
            <labs-button variant="text">Reset</labs-button>
            <labs-button variant="primary">Save Changes</labs-button>
          </div>
        </div>
      </labs-overlay>

      <script>
        (() => {
          const trigger = document.getElementById('trigger-${overlayId}');
          const overlay = document.getElementById('${overlayId}');
          const closeBtn = document.getElementById('close-${overlayId}');

          if (trigger && overlay) {
            trigger.addEventListener('click', () => overlay.open());
          }
          if (closeBtn && overlay) {
            closeBtn.addEventListener('click', () => overlay.close());
          }
        })();
      </script>
    `;
  },
};

export const FullscreenOverlay = {
  args: {
    size: 'full',
    closeOnBackdrop: false,
    closeOnEscape: true,
  },
  render: (args) => {
    const overlayId = 'overlay-fullscreen';

    return html`
      <labs-button id="trigger-${overlayId}" variant="primary">
        Open Fullscreen
      </labs-button>

      <labs-overlay
        id="${overlayId}"
        size="${args.size}"
        close-on-backdrop="${args.closeOnBackdrop}"
        close-on-escape="${args.closeOnEscape}"
      >
        <div style="padding: 24px; height: 100%; display: flex; flex-direction: column;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
            <h2 style="margin: 0; color: var(--color-on-surface);">Full Screen Overlay</h2>
            <labs-button id="close-${overlayId}" variant="icon" aria-label="Close">
              <labs-icon slot="icon-left" name="close"></labs-icon>
            </labs-button>
          </div>

          <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
            <div style="text-align: center; max-width: 400px;">
              <p style="color: var(--color-on-surface); opacity: 0.8; line-height: 1.5;">
                This is a fullscreen overlay that takes up the entire viewport.
                It's perfect for immersive experiences or complex forms.
              </p>
              <labs-button variant="primary" style="margin-top: 16px;">
                Take Action
              </labs-button>
            </div>
          </div>
        </div>
      </labs-overlay>

      <script>
        (() => {
          const trigger = document.getElementById('trigger-${overlayId}');
          const overlay = document.getElementById('${overlayId}');
          const closeBtn = document.getElementById('close-${overlayId}');

          if (trigger && overlay) {
            trigger.addEventListener('click', () => overlay.open());
          }
          if (closeBtn && overlay) {
            closeBtn.addEventListener('click', () => overlay.close());
          }
        })();
      </script>
    `;
  },
};
