/* tracker bootstrap: mount initial components and provide tiny in-memory store */
const store = {
    items: [],
};

function handleTrack() {
    store.items.unshift({ ts: Date.now(), note: '' });
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
    if (store.items.length === 0) {
        root.innerHTML = '<div class="empty" style="color:var(--color-on-surface-variant)">No entries — press Track to add one.</div>';
        return;
    }
    const list = document.createElement('div');
    store.items.forEach(item => {
        const li = document.createElement('labs-list-item');
        li.setAttribute('variant', 'text-only');
        li.setAttribute('value', new Date(item.ts).toLocaleString());
        li.setAttribute('timestamp', new Date(item.ts).toLocaleString());

        // Add delete button in the actions slot
        const deleteBtn = document.createElement('labs-button');
        deleteBtn.setAttribute('aria-label', 'Delete');
        deleteBtn.setAttribute('data-ts', item.ts);
        deleteBtn.textContent = 'Delete';
        deleteBtn.slot = 'actions';
        deleteBtn.addEventListener('click', (e) => {
            const ts = Number(deleteBtn.getAttribute('data-ts'));
            store.items = store.items.filter(x => x.ts !== ts);
            renderAll();
        });

        li.appendChild(deleteBtn);
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

// Expose tracker functionality globally for footer button
window.tracker = {
    handleTrack
};

document.addEventListener('DOMContentLoaded', () => {
    // Wait for labs-card to be defined before rendering metric card
    customElements.whenDefined('labs-card').then(() => {
        renderAll();
    });
});
