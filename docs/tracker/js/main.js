// Tracker App - Simplified with Design System
import { applyTheme } from '../../design-system/utils/theme.js';
import { formatHuman } from '../../design-system/utils/date-format.js';

const STORAGE_KEY = 'tracker-items';
const store = {
    items: [],
    load() { try { this.items = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { this.items = []; } },
    save() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items)); } catch (e) { console.warn('Save failed:', e); } }
};

// Show undo toast
function showUndo(message, onUndo) {
    const toast = document.querySelector('labs-toast');
    if (!toast) return;
    toast.setAttribute('variant', 'destructive');
    toast.show(message, { actionText: 'Undo', duration: 5000 });
    toast.addEventListener('action', () => { onUndo(); toast.removeEventListener('action', onUndo); }, { once: true });
}

// Render everything
function renderAll() {
    const valueSlot = document.querySelector('#tracker-metric [slot="value"]');
    if (valueSlot) valueSlot.textContent = String(store.items.length);

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
            const removedItem = item;
            const removedIndex = store.items.findIndex(x => x.ts === item.ts);
            store.items = store.items.filter(x => x.ts !== item.ts);
            store.save();
            renderAll();
            showUndo('Entry deleted', () => {
                store.items.splice(removedIndex, 0, removedItem);
                store.save();
                renderAll();
            });
        });
        li.appendChild(dropdown);
        list.appendChild(li);
    });
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    applyTheme({
        flavor: localStorage.getItem('tracker-flavor') || 'blueberry',
        theme: localStorage.getItem('tracker-theme') || 'light'
    });

    store.load();
    customElements.whenDefined('labs-metric-card').then(renderAll);

    const footer = document.querySelector('labs-footer-with-settings');
    footer?.addEventListener('add', () => {
        store.items.unshift({ ts: Date.now(), note: '' });
        store.save();
        renderAll();
    });
    footer?.addEventListener('reset-all', () => {
        const previousItems = [...store.items];
        if (previousItems.length === 0) return;
        store.items = [];
        store.save();
        renderAll();
        showUndo(`${previousItems.length} entries deleted`, () => {
            store.items = previousItems;
            store.save();
            renderAll();
        });
    });
});
