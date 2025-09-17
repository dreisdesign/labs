/* tracker bootstrap: mount initial components and provide tiny in-memory store */
const store = {
    items: [],
};

function renderMetric(root) {
    root.innerHTML = '';
    const card = document.createElement('labs-card');
    card.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center"><div><div style="font-size:14px;color:var(--color-on-surface-variant)">Entries</div><div style="font-size:28px;font-weight:700">${store.items.length}</div></div></div>`;
    root.appendChild(card);
}

function renderTrackButton(root) {
    root.innerHTML = '';
    const btn = document.createElement('labs-button');
    btn.setAttribute('fullwidth', '');
    btn.textContent = 'Track';
    btn.addEventListener('click', () => {
        store.items.unshift({ ts: Date.now(), note: '' });
        renderAll();
    });
    root.appendChild(btn);
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
        const d = new Date(item.ts).toLocaleString();
        li.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center"><div><div style="font-weight:600">${d}</div><div style="font-size:12px;color:var(--color-on-surface-variant)">${item.note || ''}</div></div><div><labs-button aria-label="Delete" data-ts="${item.ts}">Delete</labs-button></div></div>`;
        li.querySelectorAll('labs-button').forEach(b => b.addEventListener('click', (e) => {
            const ts = Number(b.getAttribute('data-ts'));
            store.items = store.items.filter(x => x.ts !== ts);
            renderAll();
        }));
        list.appendChild(li);
    });
    root.appendChild(list);
}

function renderAll() {
    renderMetric(document.getElementById('metric-root'));
    renderTrackButton(document.getElementById('track-root'));
    renderList(document.getElementById('list-root'));
}

document.addEventListener('DOMContentLoaded', () => {
    renderAll();
});
