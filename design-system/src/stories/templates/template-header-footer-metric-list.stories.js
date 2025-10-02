import '../../components/labs-header.js';
import '../../components/labs-footer.js';
import '../../components/labs-card.js';
import '../../components/labs-list-item.js';
import '../../components/labs-button.js';
import '../../components/labs-icon.js';

export default {
    title: 'Templates/Header Footer Metric List',
};

export const Default = () => `
  <labs-header title="Smoothie Template" date="October 2, 2025" center show-subtitle subtitle="Demo subtitle"></labs-header>
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
    <div slot="right" style="display: flex; align-items: center; gap: 8px;">
      <labs-button variant="icon" aria-label="Settings" title="Settings" style="margin-right:20px;">
        <labs-icon name="settings" slot="icon-left" width="22" height="22"></labs-icon>
      </labs-button>
    </div>
  </labs-footer>
`;