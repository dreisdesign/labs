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
        <div slot="input">
          <textarea id="cardInput" placeholder="Write your note here..." autocomplete="off"></textarea>
        </div>
        <div slot="actions" style="display:flex;gap:10px;justify-content:flex-end;">
          <labs-button id="saveBtn" variant="primary">Save</labs-button>
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
        labs-button { min-width: 92px; }
      </style>
    `;

        // Save handler
        const save = this.shadowRoot.getElementById('saveBtn');
        const input = this.shadowRoot.getElementById('cardInput');
        if (save && input) {
            const doSave = () => {
                const value = input.value.trim();
                console.log('NoteInputCard: Emitting save event with value:', value);
                this.dispatchEvent(new CustomEvent('save', { detail: { value }, bubbles: true, composed: true }));
            };
            save.addEventListener('click', () => doSave());
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                    e.preventDefault();
                    doSave();
                }
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
