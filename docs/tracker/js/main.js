import { formatHuman } from '/labs/design-system/utils/date-format.js';

/* tracker module: provide a factory to create isolated tracker instances */
const STORAGE_KEY = 'tracker-items';

export function createTracker({ metricRootId = 'metric-root', listRootId = 'list-root' } = {}) {
    const store = {
        items: [],
        load() {
            try {
                const raw = localStorage.getItem(STORAGE_KEY);
                if (raw) this.items = JSON.parse(raw) || [];
                else this.items = [];
            } catch (e) {
                console.warn('Failed to load tracker items from storage:', e);
                this.items = [];
            }
        },
        save() {
            try { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items)); }
            catch (e) { console.warn('Failed to save tracker items to storage:', e); }
        }
    };

    function handleTrack() {
        store.items.unshift({ ts: Date.now(), note: '' });
        store.save();
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
        const list = document.createElement('div');
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
            li.setAttribute('variant', 'text-only');
            try {
                li.setAttribute('timestamp', String(item.ts));
                li.setAttribute('date', new Date(item.ts).toISOString().slice(0, 10));
                li.setAttribute('value', item.note || '');
            } catch (e) { }

            const controlIcon = document.createElement('labs-icon');
            controlIcon.slot = 'control';
            controlIcon.setAttribute('name', 'check');
            controlIcon.setAttribute('aria-hidden', 'true');
            li.appendChild(controlIcon);

            const labelEl = document.createElement('div');
            labelEl.slot = 'label';
            labelEl.className = 'item-label';
            try {
                labelEl.textContent = formatHuman(item.ts);
            } catch (e) {
                try { labelEl.textContent = new Date(item.ts).toLocaleString(); }
                catch (e2) { labelEl.textContent = (new Date(item.ts)).toISOString(); }
            }
            li.appendChild(labelEl);

            const contentEl = document.createElement('div');
            contentEl.slot = 'content';
            contentEl.className = 'item-content';
            const title = document.createElement('div');
            title.className = 'title';
            title.textContent = item.note || '';
            contentEl.appendChild(title);
            li.appendChild(contentEl);

            const overflow = document.createElement('labs-dropdown');
            overflow.slot = 'actions';
            overflow.setAttribute('aria-label', 'More actions');
            overflow.setAttribute('only', 'delete');

            overflow.addEventListener('remove', (e) => {
                const removed = store.items.find(x => x.ts === item.ts);
                store.items = store.items.filter(x => x.ts !== item.ts);
                store.save();
                renderAll();
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
                            store.save();
                            toast.removeEventListener('action', onAction);
                            renderAll();
                        };
                        toast.addEventListener('action', onAction, { once: true });
                    }
                } catch (e) { console.warn('Toast unavailable', e); }
            });

            li.appendChild(overflow);
            list.appendChild(li);
        });
        root.appendChild(list);
    }

    function renderAll() {
        const metricRoot = document.getElementById(metricRootId);
        const listRoot = document.getElementById(listRootId);
        if (metricRoot) renderMetric(metricRoot);
        if (listRoot) renderList(listRoot);
    }

    function resetAll() {
        store.items = [];
        store.save();
        renderAll();
    }

    function init() {
        store.load();
        customElements.whenDefined('labs-card').then(() => {
            renderAll();
        });
    }

    const api = { handleTrack, resetAll, init };
    return api;
}

export default createTracker;
