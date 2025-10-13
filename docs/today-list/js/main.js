// Today-List App - Simplified with Design System
import { applyTheme } from '../../design-system/utils/theme.js';

const STORAGE_KEY = 'today-list-items-v2';

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

// Toast singleton
let _toastInstance = null;
let _currentUndoHandler = null;

function getToast() {
    if (!_toastInstance) {
        _toastInstance = document.createElement('labs-toast');
        document.body.appendChild(_toastInstance);
    }
    return _toastInstance;
}

function showUndoToast(message, onUndo) {
    const toast = getToast();

    if (_currentUndoHandler) {
        toast.removeEventListener('action', _currentUndoHandler);
        _currentUndoHandler = null;
    }

    _currentUndoHandler = () => {
        onUndo();
        _currentUndoHandler = null;
    };

    toast.setAttribute('variant', 'destructive');
    toast.show(message, { actionText: 'Undo', duration: 5000 });
    toast.addEventListener('action', _currentUndoHandler, { once: true });
}

// Debounce flag for reset-all
let _isResetting = false;

// Update reset-all button disabled state
function updateResetButtonState() {
    const footer = document.querySelector('labs-footer-with-settings');
    const settingsCard = footer?.shadowRoot?.querySelector('labs-settings-card');
    const resetButton = settingsCard?.shadowRoot?.getElementById('reset-all-btn');

    if (resetButton) {
        if (store.items.length === 0) {
            resetButton.setAttribute('disabled', '');
        } else {
            resetButton.removeAttribute('disabled');
        }
    }
}

// Input overlay management
function toggleInputOverlay(open = true) {
    const overlay = document.getElementById('input-overlay');
    const inputCard = overlay?.querySelector('labs-input-card');

    if (!overlay || !inputCard) return;

    if (open) {
        overlay.setAttribute('open', '');
        inputCard.setAttribute('value', '');
        setTimeout(() => {
            const inputEl = inputCard.shadowRoot?.querySelector('input, textarea');
            if (inputEl) inputEl.value = '';
            inputEl?.focus();
        }, 100);
    } else {
        overlay.removeAttribute('open');
    }
}

// Render everything
function renderAll() {
    // Update metric (count active items only)
    const activeItems = store.items.filter(item => !item.archived);
    const metricCard = document.getElementById('todo-metric');
    const valueSlot = metricCard?.querySelector('[slot="value"]');
    if (valueSlot) {
        valueSlot.textContent = activeItems.length;
    }

    // Update reset-all button disabled state
    updateResetButtonState();

    // Render active list
    const list = document.getElementById('todo-list');
    if (!list) return;

    list.innerHTML = '';

    if (activeItems.length === 0) {
        const card = document.createElement('labs-card');
        card.setAttribute('variant', 'welcome');

        const header = document.createElement('div');
        header.setAttribute('slot', 'header');
        header.textContent = 'Welcome to Today-List';
        card.appendChild(header);

        const desc = document.createElement('div');
        desc.setAttribute('slot', 'description');
        desc.textContent = 'Add your first task to get started.';
        card.appendChild(desc);

        // Add button in actions slot
        const addButton = document.createElement('labs-button');
        addButton.setAttribute('slot', 'actions');
        addButton.setAttribute('variant', 'primary');
        addButton.setAttribute('pill', '');
        addButton.innerHTML = '<labs-icon slot="icon-left" name="add"></labs-icon>Add First Task';
        addButton.addEventListener('click', () => toggleInputOverlay(true));
        card.appendChild(addButton);

        list.appendChild(card);
    } else {
        activeItems.forEach(item => {
            const li = createTodoItem(item);
            list.appendChild(li);
        });
    }

    // Render archived section
    renderArchivedSection();
}

function createTodoItem(item) {
    const li = document.createElement('labs-list-item');
    li.setAttribute('variant', 'task');
    if (item.checked) li.setAttribute('checked', '');
    if (item.archived) li.setAttribute('state', 'archived');

    // Checkbox in control slot
    const checkbox = document.createElement('labs-checkbox');
    checkbox.setAttribute('slot', 'control');
    if (item.checked) checkbox.setAttribute('checked', '');
    li.appendChild(checkbox);

    // Todo text in content slot
    const content = document.createElement('div');
    content.setAttribute('slot', 'content');
    content.textContent = item.text || '';
    li.appendChild(content);

    // Actions dropdown
    const dropdown = document.createElement('labs-dropdown');
    dropdown.setAttribute('slot', 'actions');
    dropdown.setAttribute('only', item.archived ? 'restore,delete' : 'archive,delete');

    // Checkbox toggle handler
    li.addEventListener('click', (e) => {
        if (e.target.closest('labs-dropdown')) return;
        item.checked = !item.checked;
        store.save();
        renderAll();
    });

    // Archive/Restore handler
    dropdown.addEventListener(item.archived ? 'restore' : 'archive', () => {
        const idx = store.items.findIndex(x => x.id === item.id);
        const wasArchived = item.archived;
        item.archived = !item.archived;
        store.save();
        renderAll();
        showUndoToast(`Task ${wasArchived ? 'restored' : 'archived'}`, () => {
            store.items[idx].archived = wasArchived;
            store.save();
            renderAll();
        });
    });

    // Delete handler
    dropdown.addEventListener('remove', () => {
        const removedItem = { ...item };
        const removedIndex = store.items.findIndex(x => x.id === item.id);
        store.items = store.items.filter(x => x.id !== item.id);
        store.save();
        renderAll();
        showUndoToast('Task deleted', () => {
            store.items.splice(removedIndex, 0, removedItem);
            store.save();
            renderAll();
        });
    });

    li.appendChild(dropdown);
    return li;
}

function renderArchivedSection() {
    const archivedSection = document.getElementById('archived-section');
    if (!archivedSection) return;

    const archivedItems = store.items.filter(item => item.archived);

    if (archivedItems.length === 0) {
        archivedSection.innerHTML = '';
        return;
    }

    // Group archived items by date (YYYY-MM-DD)
    const groups = {};
    const today = new Date();
    const todayStr = today.toDateString();
    archivedItems.forEach(item => {
        // Use item.date if available, else fallback to item.timestamp or today
        let dateObj;
        if (item.date) {
            dateObj = new Date(item.date);
        } else if (item.timestamp) {
            dateObj = new Date(item.timestamp);
        } else {
            dateObj = today;
        }
        const dateStr = dateObj.toDateString();
        if (!groups[dateStr]) groups[dateStr] = [];
        groups[dateStr].push(item);
    });

    // Sort groups by date descending (most recent first)
    const sortedDates = Object.keys(groups).sort((a, b) => new Date(b) - new Date(a));

    // Create collapsible details for archived items
    archivedSection.innerHTML = '';
    const details = document.createElement('labs-details');
    const summary = document.createElement('span');
    summary.slot = 'summary';
    summary.innerHTML = `<labs-icon name="chevron_right"></labs-icon> Archived (${archivedItems.length})`;
    details.appendChild(summary);

    sortedDates.forEach(dateStr => {
        const group = groups[dateStr];
        // Heading: Today or date string
        const heading = document.createElement('div');
        heading.style.fontWeight = 'bold';
        heading.style.margin = '16px 0 4px 0';
        heading.style.fontSize = '1rem';
        heading.style.textAlign = 'center';
        heading.textContent = (dateStr === todayStr) ? 'Today' : dateStr;
        details.appendChild(heading);
        group.forEach(item => {
            const li = createTodoItem(item);
            details.appendChild(li);
        });
    });
    archivedSection.appendChild(details);
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    // Apply theme
    applyTheme({
        flavor: localStorage.getItem('today-list-flavor') || 'blueberry',
        theme: localStorage.getItem('today-list-theme') || 'light'
    });

    // Load and render
    store.load();
    customElements.whenDefined('labs-metric-card').then(renderAll);

    // Wire up footer
    const footer = document.querySelector('labs-footer-with-settings');
    if (footer) {
        footer.addEventListener('add', () => toggleInputOverlay(true));

        footer.addEventListener('reset-all', () => {
            // Don't reset if no items
            if (store.items.length === 0) return;

            if (_isResetting) return;
            _isResetting = true;

            const backup = [...store.items];
            const count = backup.length;
            store.items = [];
            store.save();
            renderAll();

            const message = `${count} ${count === 1 ? 'task' : 'tasks'} deleted`;
            showUndoToast(message, () => {
                store.items = backup;
                store.save();
                renderAll();
            });

            setTimeout(() => {
                _isResetting = false;
            }, 100);
        });
    }

    // Wire up input overlay
    const inputOverlay = document.getElementById('input-overlay');
    const inputCard = inputOverlay?.querySelector('labs-input-card');

    if (inputCard) {
        inputCard.addEventListener('save', (e) => {
            const text = e.detail?.value?.trim();
            if (text) {
                store.items.unshift({
                    id: Date.now().toString(),
                    text,
                    checked: false,
                    archived: false,
                    timestamp: Date.now()
                });
                store.save();
                renderAll();
            }
            // Always clear the input field after save
            setTimeout(() => {
                const inputEl = inputCard.shadowRoot?.querySelector('input, textarea');
                if (inputEl) inputEl.value = '';
            }, 50);
            toggleInputOverlay(false);
        });

        inputCard.addEventListener('close', () => toggleInputOverlay(false));
    }

    // Close overlay on backdrop click
    if (inputOverlay) {
        inputOverlay.addEventListener('click', (e) => {
            if (e.target === inputOverlay) toggleInputOverlay(false);
        });
    }
});
