/* lightweight metric-card module (optional helper) */
export function createMetricCard(count) {
    const card = document.createElement('labs-card');
    card.innerHTML = `<div style="display:flex;flex-direction:column;gap:4px"><div style="font-size:12px;color:var(--color-on-surface-variant)">Entries</div><div style="font-size:28px;font-weight:700">${count}</div></div>`;
    return card;
}
