import '../components/labs-input-card.js';
import '../components/labs-overlay.js';

export default {
    title: '3. Components (Wrapped)/Input Card',
    tags: ['autodocs'],
    argTypes: {
        rows: { control: { type: 'number', min: 1, max: 8 }, defaultValue: 2 },
        maxWidth: { control: 'text', defaultValue: '520px' },
        overlaySize: { control: { type: 'select', options: ['small', 'medium', 'large', 'full'] }, defaultValue: 'medium' },
        transparent: { control: 'boolean', defaultValue: true },
    },
};

export const Standalone = ({ rows, maxWidth }) => {
    const host = document.createElement('div');
    host.style.padding = '20px';
    const card = document.createElement('labs-input-card');
    card.style.maxWidth = maxWidth;
    // Wait for custom element to render its internals
    setTimeout(() => {
        const ta = card.shadowRoot?.querySelector('#cardInput') || card.querySelector('#cardInput');
        if (ta) ta.rows = rows;
    }, 0);
    host.appendChild(card);
    return host;
};

// InOverlay variant removed — not needed
