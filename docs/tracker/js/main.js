// Tracker App - Simplified with Design System
import { applyTheme } from '../../design-system/utils/theme.js';
import { formatHuman } from '../../design-system/utils/date-format.js';

const STORAGE_KEY = 'tracker-items';

// Data store
const store = {
    items: [],
    load() {
        try {
            this.items = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        } catch (e) {
            this.items = [];
        }
    },
    save() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
        } catch (e) {
            console.warn('Failed to save:', e);
        }
    }
};

// Render everything
function renderAll() {
    // Update metric
    const valueSlot = document.querySelector('#tracker-metric [slot="value"]');
    if (valueSlot) valueSlot.textContent = store.items.length;

    // Render list
    const list = document.getElementById('entry-list');
    if (!list) return;

    list.innerHTML = '';

    if (store.items.length === 0) {
        const empty = document.createElement('div');
        empty.style.cssText = 'color:var(--color-on-surface-variant);text-align:center;padding:var(--space-lg)';
        empty.textContent = 'No entries — press Track to add one.';
        list.appendChild(empty);
        return;
    }

    store.items.forEach(item => {
        const li = document.createElement('labs-list-item');
        li.setAttribute('variant', 'text-only');

        const icon = document.createElement('labs-icon');
        icon.setAttribute('slot', 'control');
        icon.setAttribute('name', 'check');
        li.appendChild(icon);

        const content = document.createElement('span');
        content.setAttribute('slot', 'content');
        content.textContent = formatHuman(item.ts);
        li.appendChild(content);

        const dropdown = document.createElement('labs-dropdown');
        dropdown.setAttribute('slot', 'actions');
        dropdown.setAttribute('only', 'delete');
        dropdown.addEventListener('remove', () => {
            store.items = store.items.filter(x => x.ts !== item.ts);
            store.save();
            renderAll();
        });
        li.appendChild(dropdown);

        list.appendChild(li);
    });
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    // Apply theme
    applyTheme({
        flavor: localStorage.getItem('tracker-flavor') || 'blueberry',
        theme: localStorage.getItem('tracker-theme') || 'light'
    });

    // Load and render
    store.load();
    customElements.whenDefined('labs-metric-card').then(renderAll);

    // Wire up footer
    const footer = document.querySelector('labs-footer-with-settings');
    footer?.addEventListener('add', () => {
        store.items.unshift({ ts: Date.now(), note: '' });
        store.save();
        renderAll();
    });
    footer?.addEventListener('reset-all', () => {
        store.items = [];
        store.save();
        renderAll();
    });
});
