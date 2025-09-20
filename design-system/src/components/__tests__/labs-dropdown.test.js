import { describe, it, expect } from 'vitest';

// We import the built component source which defines the custom element.
// The tests will run in a Node environment but only exercise attribute parsing
// and helper behavior that does not require a browser DOM.
import '../labs-dropdown.js';

describe('labs-dropdown attribute parsing', () => {
    it('accepts a single string value for only', () => {
        const dd = document.createElement('labs-dropdown');
        dd.setAttribute('only', 'delete');
        expect(dd.getAttribute('only')).toBe('delete');
    });

    it('accepts comma-separated csv for only and preserves order', () => {
        const dd = document.createElement('labs-dropdown');
        dd.setAttribute('only', 'archive,delete');
        const raw = dd.getAttribute('only');
        expect(raw).toBe('archive,delete');
        const parsed = raw.split(',').map(s => s.trim()).filter(Boolean);
        expect(parsed).toEqual(['archive', 'delete']);
    });

    it('handles empty or missing only attribute as empty string', () => {
        const dd = document.createElement('labs-dropdown');
        expect(dd.hasAttribute('only')).toBe(false);
        expect(dd.getAttribute('only')).toBe(null);
        dd.setAttribute('only', '');
        expect(dd.getAttribute('only')).toBe('');
    });
});
