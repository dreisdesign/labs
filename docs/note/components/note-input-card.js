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
        <span slot="header">Daily Note</span>
        <labs-button id="closeBtn" slot="close" variant="icon" aria-label="Delete note">
          <labs-icon name="delete" slot="icon-left" width="24" height="24"></labs-icon>
        </labs-button>
        <div slot="input">
          <textarea id="cardInput" placeholder="Write your note here..." autocomplete="off"></textarea>
        </div>
        <div slot="actions" class="card-footer">
          <span class="last-edited-label">Last edited</span>
          <span class="timestamp" id="timestamp">—</span>
        </div>
      </labs-card>
      <style>
        :host { display: block; max-width: 600px; margin: 0 auto; }
        .card-footer {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          justify-content: flex-start;
        }
        .last-edited-label {
          font-size: 0.75rem;
          color: var(--color-on-surface-variant, #666);
          font-weight: 500;
        }
        .timestamp {
          font-size: 0.75rem;
          color: var(--color-on-surface-variant, #666);
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

        // Close/Delete button handler
        const closeBtn = this.shadowRoot.getElementById('closeBtn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.dispatchEvent(new CustomEvent('reset', { bubbles: true, composed: true }));
            });
        }

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
