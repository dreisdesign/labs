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

// Helper: Check if a timestamp is from today
function isToday(timestamp) {
    const today = new Date();
    const date = new Date(timestamp);
    return today.toDateString() === date.toDateString();
}

// Helper: Get date string for grouping
function getDateString(timestamp) {
    return new Date(timestamp).toDateString();
}

// Helper: Format date for display
function formatDateLabel(dateStr) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (dateStr === today.toDateString()) return 'Today';
    if (dateStr === yesterday.toDateString()) return 'Yesterday';

    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

// Render everything
function renderAll() {
    // Update metric (count TODAY'S active items only)
    const todayActiveItems = store.items.filter(item => !item.archived && isToday(item.timestamp));
    const metricCard = document.getElementById('todo-metric');
    const valueSlot = metricCard?.querySelector('[slot="value"]');
    if (valueSlot) {
        valueSlot.textContent = todayActiveItems.length;
    }

    // Update reset-all button disabled state
    updateResetButtonState();

    // Render today's section
    renderTodaySection();

    // Render past days section
    renderPastDaysSection();
}

// Render Today's tasks (always visible)
function renderTodaySection() {
    const list = document.getElementById('todo-list');
    if (!list) return;

    list.innerHTML = '';

    const todayItems = store.items.filter(item => isToday(item.timestamp));
    const todayActive = todayItems.filter(item => !item.archived);
    const todayArchived = todayItems.filter(item => item.archived);

    // Show welcome card if no tasks today
    if (todayItems.length === 0) {
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

        const addButton = document.createElement('labs-button');
        addButton.setAttribute('slot', 'actions');
        addButton.setAttribute('variant', 'primary');
        addButton.setAttribute('pill', '');
        addButton.innerHTML = '<labs-icon slot="icon-left" name="add"></labs-icon>Add First Task';
        addButton.addEventListener('click', () => toggleInputOverlay(true));
        card.appendChild(addButton);

        list.appendChild(card);
        return;
    }

    // Render today's active tasks
    todayActive.forEach(item => {
        const li = createTodoItem(item, false); // false = not from past
        list.appendChild(li);
    });

    // Render today's archived tasks in collapsed <details>
    if (todayArchived.length > 0) {
        const details = document.createElement('labs-details');
        const summaryText = document.createTextNode(`Today — ${todayArchived.length} archived ${todayArchived.length === 1 ? 'task' : 'tasks'}`);
        details.appendChild(summaryText);

        const contentWrapper = document.createElement('div');
        contentWrapper.setAttribute('slot', 'content');
        contentWrapper.style.display = 'flex';
        contentWrapper.style.flexDirection = 'column';
        contentWrapper.style.gap = 'var(--space-sm)';

        todayArchived.forEach(item => {
            const li = createTodoItem(item, false);
            contentWrapper.appendChild(li);
        });

        details.appendChild(contentWrapper);
        list.appendChild(details);
    }
}

// Render past days section (each day in collapsed <details>)
function renderPastDaysSection() {
    const archivedSection = document.getElementById('archived-section');
    if (!archivedSection) return;

    archivedSection.innerHTML = '';

    // Get all items NOT from today
    const pastItems = store.items.filter(item => !isToday(item.timestamp));

    if (pastItems.length === 0) {
        return;
    }

    // Group by date
    const groups = {};
    pastItems.forEach(item => {
        const dateStr = getDateString(item.timestamp);
        if (!groups[dateStr]) {
            groups[dateStr] = { active: [], archived: [] };
        }
        if (item.archived) {
            groups[dateStr].archived.push(item);
        } else {
            groups[dateStr].active.push(item);
        }
    });

    // Sort dates descending (most recent first)
    const sortedDates = Object.keys(groups).sort((a, b) => new Date(b) - new Date(a));

    // Create <details> for each past day
    sortedDates.forEach(dateStr => {
        const group = groups[dateStr];
        const totalCount = group.active.length + group.archived.length;

        const details = document.createElement('labs-details');

        // Summary: "Yesterday — 4 tasks" or "Fri Oct 10 2025 — 4 tasks"
        const summaryText = document.createTextNode(
            `${formatDateLabel(dateStr)} — ${totalCount} ${totalCount === 1 ? 'task' : 'tasks'}`
        );
        details.appendChild(summaryText);

        // Content wrapper
        const contentWrapper = document.createElement('div');
        contentWrapper.setAttribute('slot', 'content');
        contentWrapper.style.display = 'flex';
        contentWrapper.style.flexDirection = 'column';
        contentWrapper.style.gap = 'var(--space-sm)';

        // Render active tasks first
        group.active.forEach(item => {
            const li = createTodoItem(item, true); // true = from past
            contentWrapper.appendChild(li);
        });

        // Add subtle separator if both active and archived exist
        if (group.active.length > 0 && group.archived.length > 0) {
            const separator = document.createElement('div');
            separator.style.height = '0.5px';
            separator.style.background = 'var(--color-outline)';
            separator.style.margin = 'var(--space-2xs) 0';
            separator.style.opacity = '0.15';
            separator.style.borderRadius = '1px';
            contentWrapper.appendChild(separator);
        }

        // Render archived tasks (slightly muted)
        group.archived.forEach(item => {
            const li = createTodoItem(item, true);
            li.style.opacity = '0.7';
            contentWrapper.appendChild(li);
        });

        details.appendChild(contentWrapper);
        archivedSection.appendChild(details);
    });
}

function createTodoItem(item, isPast = false) {
    const li = document.createElement('labs-list-item');
    li.setAttribute('variant', 'task');
    if (item.checked) li.setAttribute('checked', '');
    if (item.archived) li.setAttribute('state', 'archived');

    // Checkbox in control slot
    const checkbox = document.createElement('labs-checkbox');
    checkbox.setAttribute('slot', 'control');
    if (item.checked) checkbox.setAttribute('checked', '');
    // Disable checkbox for archived or past items
    if (item.archived || isPast) {
        checkbox.setAttribute('disabled', '');
        checkbox.style.pointerEvents = 'none';
    }
    li.appendChild(checkbox);

    // Todo text in content slot
    const content = document.createElement('div');
    content.setAttribute('slot', 'content');
    content.textContent = item.text || '';
    li.appendChild(content);

    // Actions slot - different for past vs today items
    const isTodayActive = !isPast && !item.archived;
    if (isPast) {
        // Past items: show "restore to today" and "delete" buttons
        const restoreButton = document.createElement('labs-button');
        restoreButton.setAttribute('slot', 'actions');
        restoreButton.setAttribute('variant', 'icon');
        restoreButton.setAttribute('aria-label', 'Restore to today');
        restoreButton.innerHTML = '<labs-icon slot="icon-left" name="history"></labs-icon>';

        restoreButton.addEventListener('click', (e) => {
            e.stopPropagation();
            // Create a copy of the item with today's timestamp
            const newItem = {
                id: Date.now().toString(),
                text: item.text,
                checked: false,
                archived: false,
                timestamp: Date.now()
            };
            store.items.unshift(newItem);
            store.save();
            renderAll();
            showUndoToast('Task restored to today', () => {
                store.items = store.items.filter(x => x.id !== newItem.id);
                store.save();
                renderAll();
            });
        });
        li.appendChild(restoreButton);

        // Delete button for past items
        const deleteButton = document.createElement('labs-button');
        deleteButton.setAttribute('slot', 'actions');
        deleteButton.setAttribute('variant', 'icon');
        deleteButton.setAttribute('aria-label', 'Delete task');
        deleteButton.innerHTML = '<labs-icon slot="icon-left" name="delete_forever"></labs-icon>';

        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation();
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
        li.appendChild(deleteButton);

        // Make past items read-only (no click to toggle)
        li.style.cursor = 'default';
    } else {
        // Today's items: dropdown with archive/delete options
        const dropdown = document.createElement('labs-dropdown');
        dropdown.setAttribute('slot', 'actions');

        // Set archived attribute if item is archived (changes Archive → Restore)
        if (item.archived) {
            dropdown.setAttribute('archived', '');
        }

        dropdown.setAttribute('only', item.archived ? 'archive,delete' : 'archive,delete');

        // Attach click handler only for today’s active (not archived) items
        if (isTodayActive) {
            li.addEventListener('click', (e) => {
                if (e.target.closest('labs-dropdown')) return;
                item.checked = !item.checked;
                store.save();
                renderAll();
            });
        }

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
    }

    return li;
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
