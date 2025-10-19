/**
 * Note Input Card - Customized for Note app
 * Based on labs-card with close button to clear note
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
        <labs-button slot="close" id="closeBtn" variant="icon" aria-label="Clear note">
          <labs-icon slot="icon-left" name="close"></labs-icon>
        </labs-button>
        <div slot="input">
          <textarea id="cardInput" placeholder="Write your note here..." autocomplete="off"></textarea>
        </div>
      </labs-card>
      <style>
        :host { display: block; max-width: 600px; margin: 0 auto; }
        textarea { 
          width:100%; 
          box-sizing:border-box; 
          padding:12px 14px; 
          border-radius:10px; 
          border:1px solid var(--color-outline, #e6e6ea); 
          font-size:1rem; 
          font-family: inherit; 
          resize: vertical; 
          min-height: 200px;
        }
      </style>
    `;

        // Close button handler
        const closeBtn = this.shadowRoot.getElementById('closeBtn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                console.log('NoteInputCard: Close button clicked');
                this.dispatchEvent(new CustomEvent('clear', { bubbles: true, composed: true }));
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
}

customElements.define('note-input-card', NoteInputCard);
export default NoteInputCard;
