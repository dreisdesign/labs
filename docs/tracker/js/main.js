// Tracker App - Simplified with Design System
import { applyTheme } from '../../design-system/utils/theme.js';
import { formatHuman } from '../../design-system/utils/date-format.js';

const STORAGE_KEY = 'tracker-items';

// Data store
const store = {
    items: [],
    load() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            this.items = raw ? JSON.parse(raw) : [];
        } catch (e) {
            console.warn('Failed to load tracker items:', e);
            this.items = [];
        }
    },
    save() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
        } catch (e) {
            console.warn('Failed to save tracker items:', e);
        }
    }
};

// Update metric count
function updateMetric() {
    const metricCard = document.getElementById('tracker-metric');
    const valueSlot = metricCard?.querySelector('[slot="value"]');
    if (valueSlot) {
        valueSlot.textContent = store.items.length;
    }
}

// Render all entries
function renderList() {
    const listContainer = document.getElementById('entry-list');
    if (!listContainer) return;

    listContainer.innerHTML = '';

    if (store.items.length === 0) {
        const empty = document.createElement('div');
        empty.style.color = 'var(--color-on-surface-variant)';
        empty.style.textAlign = 'center';
        empty.style.padding = 'var(--space-lg)';
        empty.textContent = 'No entries — press Track to add one.';
        listContainer.appendChild(empty);
        return;
    }

    store.items.forEach(item => {
        const li = document.createElement('labs-list-item');
        li.setAttribute('variant', 'text-only');

        // Timestamp in content slot
        const content = document.createElement('span');
        content.setAttribute('slot', 'content');
        content.textContent = formatHuman(item.ts);
        li.appendChild(content);

        // Dropdown for delete action
        const dropdown = document.createElement('labs-dropdown');
        dropdown.setAttribute('slot', 'actions');
        dropdown.setAttribute('only', 'delete');
        dropdown.addEventListener('remove', () => {
            store.items = store.items.filter(x => x.ts !== item.ts);
            store.save();
            renderAll();
        });
        li.appendChild(dropdown);

        listContainer.appendChild(li);
    });
}

// Render everything
function renderAll() {
    updateMetric();
    renderList();
}

// Handle track button
function handleTrack() {
    store.items.unshift({ ts: Date.now(), note: '' });
    store.save();
    renderAll();
}

// Handle reset all
function handleResetAll() {
    store.items = [];
    store.save();
    renderAll();
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    // Restore theme
    const savedTheme = localStorage.getItem('tracker-theme') || 'light';
    const savedFlavor = localStorage.getItem('tracker-flavor') || 'blueberry';
    applyTheme({ flavor: savedFlavor, theme: savedTheme });

    // Load data and render
    store.load();
    customElements.whenDefined('labs-metric-card').then(() => {
        renderAll();
    });

    // Wire up footer events
    const footer = document.querySelector('labs-footer-with-settings');
    if (footer) {
        footer.addEventListener('add', handleTrack);
        footer.addEventListener('reset-all', handleResetAll);
    }
});
