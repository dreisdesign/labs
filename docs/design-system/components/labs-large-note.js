/**
 * Labs Large Note Component
 * A large, editable note display component for daily note taking
 * With inline editing support
 */

class LabsLargeNote extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.isEditing = false;
    }

    render() {
        this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          border-radius: var(--radius-card, 8px);
          background: var(--color-surface, #fff);
          border: 1px solid color-mix(in srgb, var(--color-on-surface) 6%, transparent);
          box-shadow: var(--card-elevation, none);
          padding: var(--space-lg, 1.5rem);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        :host(.editing) {
          background: var(--color-surface-variant, #f5f5f5);
          border-color: var(--color-primary, #2196f3);
          box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-primary) 20%, transparent);
        }
        
        .note-container {
          display: flex;
          flex-direction: column;
          gap: var(--space-md, 1rem);
        }
        
        .note-label {
          font-size: var(--font-size-note-label, 0.875rem);
          font-weight: var(--font-weight-note, 600);
          line-height: var(--line-height-note-label, 1.2);
          color: var(--color-on-surface-variant, var(--color-on-surface, #666));
          text-transform: uppercase;
          margin: 0;
        }
        
        .note-display {
          font-size: clamp(1.25rem, 5vw, 2.5rem);
          font-weight: var(--font-weight-note-content, 400);
          line-height: var(--line-height-note-content, 1.5);
          color: var(--color-on-surface, #000);
          margin: 0;
          word-wrap: break-word;
          white-space: pre-wrap;
          min-height: 3em;
        }
        
        .note-display.empty {
          color: var(--color-on-surface-variant, #999);
          font-style: italic;
        }

        .note-textarea {
          font-size: clamp(1.25rem, 5vw, 2.5rem);
          font-weight: var(--font-weight-note-content, 400);
          line-height: var(--line-height-note-content, 1.5);
          color: var(--color-on-surface, #000);
          background: transparent;
          border: none;
          padding: 0;
          margin: 0;
          width: 100%;
          min-height: 3em;
          font-family: var(--font-family-base);
          resize: vertical;
          outline: none;
        }

        .note-textarea:focus {
          outline: 2px solid var(--color-primary);
          outline-offset: -2px;
        }

        .note-actions {
          display: flex;
          gap: var(--space-md, 1rem);
          margin-top: var(--space-md, 1rem);
          justify-content: flex-end;
        }
      </style>

      <div class="note-container">
        <div class="note-label"><slot name="label">Today</slot></div>
        <div class="note-display" id="display"><slot name="content">Add your note...</slot></div>
        <textarea class="note-textarea" id="textarea" style="display: none;"></textarea>
        <div class="note-actions" id="actions" style="display: none;">
          <slot name="save-button"></slot>
          <slot name="clear-button"></slot>
        </div>
      </div>
    `;

        this.setupEventListeners();
    }

    setupEventListeners() {
        const display = this.shadowRoot.getElementById('display');
        const textarea = this.shadowRoot.getElementById('textarea');
        const actions = this.shadowRoot.getElementById('actions');

        display.addEventListener('click', () => this.enterEditMode());
        textarea.addEventListener('blur', () => this.exitEditMode());
        textarea.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.exitEditMode();
        });
    }

    enterEditMode() {
        if (this.isEditing) return;

        this.isEditing = true;
        this.classList.add('editing');

        const display = this.shadowRoot.getElementById('display');
        const textarea = this.shadowRoot.getElementById('textarea');
        const actions = this.shadowRoot.getElementById('actions');

        // Get current text from the display element's content
        const currentText = display.textContent.trim();

        textarea.value = currentText;
        display.style.display = 'none';
        textarea.style.display = 'block';
        actions.style.display = 'flex';
        textarea.focus();
        textarea.select();

        this.dispatchEvent(new CustomEvent('edit-start', { detail: { text: currentText } }));
    }

    exitEditMode() {
        if (!this.isEditing) return;

        this.isEditing = false;
        this.classList.remove('editing');

        const display = this.shadowRoot.getElementById('display');
        const textarea = this.shadowRoot.getElementById('textarea');
        const actions = this.shadowRoot.getElementById('actions');

        textarea.style.display = 'none';
        display.style.display = 'block';
        actions.style.display = 'none';

        this.dispatchEvent(new CustomEvent('edit-end', { detail: { text: textarea.value } }));
    }

    getEditText() {
        return this.shadowRoot.getElementById('textarea').value;
    }

    setDisplayText(text) {
        const display = this.shadowRoot.getElementById('display');
        if (text) {
            display.textContent = text;
            display.classList.remove('empty');
        } else {
            display.textContent = 'Add your note...';
            display.classList.add('empty');
        }
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('labs-large-note', LabsLargeNote);
export default LabsLargeNote;