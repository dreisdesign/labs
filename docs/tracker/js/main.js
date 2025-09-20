/* tracker bootstrap: mount initial components and provide persistent store */
const STORAGE_KEY = 'tracker-items';

const store = {
    items: [],

    // Load items from localStorage
    load() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                this.items = JSON.parse(raw) || [];
            } else {
                this.items = [];
            }
        } catch (e) {
            console.warn('Failed to load tracker items from storage:', e);
            this.items = [];
        }
    },

    // Save items to localStorage
    save() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
        } catch (e) {
            console.warn('Failed to save tracker items to storage:', e);
        }
    }
};

function handleTrack() {
    store.items.unshift({ ts: Date.now(), note: '' });
    store.save(); // Persist after adding new item
    renderAll();
}

function renderMetric(root) {
    root.innerHTML = '';
    const card = document.createElement('labs-card');
    card.setAttribute('variant', 'metric');

    const label = document.createElement('div');
    label.className = 'metric-label';
    label.textContent = 'Entries';

    const value = document.createElement('div');
    value.className = 'metric-value';
    value.textContent = store.items.length;

    card.appendChild(label);
    card.appendChild(value);
    root.appendChild(card);
}



function renderList(root) {
    root.innerHTML = '';
    // Always create a consistent list container so empty vs populated layouts match
    const list = document.createElement('div');
    // Make list a vertical stack with consistent spacing so layout doesn't shift
    list.style.display = 'flex';
    list.style.flexDirection = 'column';
    list.style.gap = '8px';
    list.style.width = '100%';
    list.style.boxSizing = 'border-box';
    list.style.alignItems = 'stretch';

    if (store.items.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'empty';
        empty.style.color = 'var(--color-on-surface-variant)';
        empty.textContent = 'No entries — press Track to add one.';
        list.appendChild(empty);
        root.appendChild(list);
        return;
    }
    store.items.forEach(item => {
        const li = document.createElement('labs-list-item');
        // Use the new slot-driven labs-list-item API: text-only variant with
        // concise content and ISO timestamp so the design-system's formatter
        // (formatTime12) can parse and display local 12-hour time.
        li.setAttribute('variant', 'text-only');
        li.setAttribute('value', 'Entry logged');
        li.setAttribute('timestamp', new Date(item.ts).toISOString());

        // Add a menu (labs-dropdown) in the actions slot with only the Delete option
        const overflow = document.createElement('labs-dropdown');
        overflow.slot = 'actions';

        overflow.setAttribute('aria-label', 'More actions');
        // show only Delete in the dropdown for Tracker list items
        overflow.setAttribute('only', 'delete');

        // When the dropdown emits a `remove` event, delete this item with undo toast
        overflow.addEventListener('remove', (e) => {
            // Remove the item but keep a copy for undo
            const removed = store.items.find(x => x.ts === item.ts);
            store.items = store.items.filter(x => x.ts !== item.ts);
            store.save(); // Persist after deletion
            renderAll();
            // Ensure toast exists and show undo action
            try {
                if (!document.body.querySelector('labs-toast')) {
                    const t = document.createElement('labs-toast');
                    document.body.appendChild(t);
                }
                const toast = document.body.querySelector('labs-toast');
                if (toast) toast.setAttribute('data-variant', 'destructive');
                if (toast && typeof toast.show === 'function') {
                    toast.show('Entry deleted', { actionText: 'Undo', duration: 5000 });
                    const onAction = () => {
                        if (removed) store.items.unshift(removed);
                        store.save(); // Persist after undo
                        toast.removeEventListener('action', onAction);
                        renderAll();
                    };
                    toast.addEventListener('action', onAction, { once: true });
                }
            } catch (e) { console.warn('Toast unavailable', e); }
        });

        // No shadow DOM manipulation needed — `only="delete"` controls menu rendering
        console.info('tracker-main: appending labs-dropdown for item', item.ts);
        li.appendChild(overflow);
        console.info('tracker-main: appended labs-dropdown', li.querySelector('labs-dropdown') ? 'ok' : 'missing');
        list.appendChild(li);
    });
    root.appendChild(list);
}

function renderAll() {
    const metricRoot = document.getElementById('metric-root');
    const listRoot = document.getElementById('list-root');
    if (metricRoot) renderMetric(metricRoot);
    if (listRoot) renderList(listRoot);
}

// Expose tracker functionality globally for footer button and reset
window.tracker = {
    handleTrack,
    resetAll() {
        store.items = [];
        store.save();
        renderAll();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Load persisted items before rendering
    store.load();

    // Wait for labs-card to be defined before rendering metric card
    customElements.whenDefined('labs-card').then(() => {
        renderAll();
    });
});
