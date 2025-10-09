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

// Get or create toast (singleton)
let _toastInstance = null;
let _currentUndoHandler = null;

function getToast() {
    if (!_toastInstance) {
        _toastInstance = document.createElement('labs-toast');
        document.body.appendChild(_toastInstance);
    }
    return _toastInstance;
}

// Debounce flag for reset-all to prevent duplicate events
let _isResetting = false;

// Show undo toast - cleans up previous handler first
function showUndoToast(message, onUndo) {
    const toast = getToast();

    // Remove old handler if it exists
    if (_currentUndoHandler) {
        toast.removeEventListener('action', _currentUndoHandler);
        _currentUndoHandler = null;
    }

    // Create new handler
    _currentUndoHandler = () => {
        onUndo();
        _currentUndoHandler = null; // Clear after use
    };

    toast.setAttribute('variant', 'destructive');
    toast.show(message, { actionText: 'Undo', duration: 5000 });
    toast.addEventListener('action', _currentUndoHandler, { once: true });
}

// Render everything
function renderAll() {
    // Update metric
    const metricCard = document.getElementById('tracker-metric');
    const valueSlot = metricCard?.querySelector('[slot="value"]');
    if (valueSlot) {
        valueSlot.textContent = store.items.length;
    }

    // Render list
    const list = document.getElementById('entry-list');
    if (!list) return;

    list.innerHTML = '';

    if (store.items.length === 0) {
        const card = document.createElement('labs-card');
        card.setAttribute('variant', 'welcome');
        card.setAttribute('align', 'center');

        const header = document.createElement('div');
        header.setAttribute('slot', 'header');
        header.textContent = 'Welcome to Tracker!';
        card.appendChild(header);

        const desc = document.createElement('div');
        desc.textContent = 'Track your first entry to get started.';
        card.appendChild(desc);

        const addBtn = document.createElement('labs-button');
        addBtn.setAttribute('slot', 'actions');
        addBtn.setAttribute('variant', 'primary');
        addBtn.setAttribute('pill', '');
        addBtn.innerHTML = '<labs-icon slot="icon-left" name="add"></labs-icon>Track first entry';
        addBtn.addEventListener('click', () => {
            store.items.unshift({ ts: Date.now(), note: '' });
            store.save();
            renderAll();
        });
        card.appendChild(addBtn);

        list.appendChild(card);
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
            showUndoToast('Entry deleted', () => {
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
    if (footer) {
        footer.addEventListener('add', () => {
            store.items.unshift({ ts: Date.now(), note: '' });
            store.save();
            renderAll();
        });
    }
    if (footer) {
        footer.addEventListener('reset-all', () => {
            // Prevent duplicate reset-all events (component fires twice)
            if (_isResetting) return;
            _isResetting = true;

            const backup = [...store.items];
            const count = backup.length;
            store.items = [];
            store.save();
            renderAll();

            const message = `${count} ${count === 1 ? 'entry' : 'entries'} deleted`;
            showUndoToast(message, () => {
                store.items = backup;
                store.save();
                renderAll();
            });

            // Reset flag after a short delay to allow for any duplicate events
            setTimeout(() => {
                _isResetting = false;
            }, 100);
        });
    }
});
