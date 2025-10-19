/**
 * Note Input Card - Customized for Note app
 * Based on labs-input-card but without close button
 */

import '../../design-system/components/labs-card.js';
import '../../design-system/components/labs-button.js';
import '../../design-system/components/labs-icon.js';

class NoteInputCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
      <labs-card>
        <div slot="header" class="card-header">
          <span class="timestamp" id="timestamp">—</span>
          <span class="label">Note</span>
        </div>
        <div slot="input">
          <textarea id="cardInput" placeholder="Write your note here..." autocomplete="off"></textarea>
        </div>
      </labs-card>
      <style>
        :host { display: block; max-width: 600px; margin: 0 auto; }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .timestamp {
          font-size: var(--font-size-display, 0.875rem);
          color: var(--color-on-surface-variant, #666);
        }
        .label {
          font-size: var(--font-size-display, 1rem);
          font-weight: var(--font-weight-bold, 700);
        }
        textarea { 
          width:100%; 
          box-sizing:border-box; 
          padding:12px 14px; 
          border-radius:10px; 
          border:1px solid var(--color-outline, #e6e6ea); 
          font-size: var(--font-size-display, 1rem);
          font-family: inherit; 
          resize: vertical; 
          min-height: 200px;
        }
      </style>
    `;

        // Auto-save handler on input
        const input = this.shadowRoot.getElementById('cardInput');
        if (input) {
            let saveTimeout;
            input.addEventListener('input', () => {
                // Clear any pending save
                clearTimeout(saveTimeout);
                // Debounce save - wait 500ms after user stops typing
                saveTimeout = setTimeout(() => {
                    const value = input.value.trim();
                    console.log('NoteInputCard: Auto-saving:', value);
                    this.dispatchEvent(new CustomEvent('autosave', { detail: { value }, bubbles: true, composed: true }));
                }, 500);
            });
        }
    }

    // Method to set the textarea value
    setValue(text) {
        const textarea = this.shadowRoot.getElementById('cardInput');
        if (textarea) {
            textarea.value = text;
        }
    }

    // Method to get the textarea value
    getValue() {
        const textarea = this.shadowRoot.getElementById('cardInput');
        return textarea ? textarea.value : '';
    }

    // Method to focus the textarea
    focus() {
        const textarea = this.shadowRoot.getElementById('cardInput');
        if (textarea) {
            textarea.focus();
        }
    }

    // Method to update the timestamp
    setTimestamp(date) {
        const timestamp = this.shadowRoot.getElementById('timestamp');
        if (timestamp && date) {
            timestamp.textContent = date.toLocaleTimeString(undefined, {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            });
        }
    }
}

customElements.define('note-input-card', NoteInputCard);
export default NoteInputCard;
