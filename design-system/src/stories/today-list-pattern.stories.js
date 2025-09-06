import '../components/labs-button.js';
import '../components/labs-icon.js';
import '../components/labs-card.js';
import './_patterns.css';

export default {
  title: 'Patterns/Today List Entry',
  component: 'div',
};

export const EntryPattern = {
  name: 'Single entry pattern',
  render: () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <div class="tl-entry">
        <div class="tl-entry-left">
          <labs-button variant="icon" aria-label="Mark done" data-action="toggle">
            <span slot="icon-left"><labs-icon name="check_box_outline_blank"></labs-icon></span>
          </labs-button>
          <div class="tl-entry-content">
            <div class="tl-entry-text">Buy groceries for the week</div>
            <div class="tl-entry-meta">September 5, 2025</div>
          </div>
        </div>
        <div class="tl-entry-actions">
          <labs-button variant="icon" aria-label="Edit" data-action="edit">
            <span slot="icon-left"><labs-icon name="edit"></labs-icon></span>
          </labs-button>
          <labs-button variant="icon" aria-label="Delete" data-action="delete">
            <span slot="icon-left"><labs-icon name="delete_forever"></labs-icon></span>
          </labs-button>
        </div>
      </div>
    `;

    // Make interactive
    const toggleBtn = container.querySelector('[data-action="toggle"]');
    const toggleIcon = toggleBtn.querySelector('labs-icon');
    const text = container.querySelector('.tl-entry-text');
    let completed = false;

    toggleBtn.addEventListener('click', () => {
      completed = !completed;
      toggleIcon.setAttribute('name', completed ? 'check_box' : 'check_box_outline_blank');
      toggleBtn.setAttribute('aria-label', completed ? 'Mark undone' : 'Mark done');
      text.classList.toggle('completed', completed);
    });

    const editBtn = container.querySelector('[data-action="edit"]');
    editBtn.addEventListener('click', () => {
      const newText = prompt('Edit item', text.textContent);
      if (newText && newText.trim()) {
        text.textContent = newText.trim();
      }
    });

    const deleteBtn = container.querySelector('[data-action="delete"]');
    deleteBtn.addEventListener('click', () => {
      if (confirm('Delete this item?')) {
        container.style.opacity = '0.5';
        container.style.pointerEvents = 'none';
        setTimeout(() => {
          container.innerHTML = '<div style="text-align: center; color: var(--color-on-surface); opacity: 0.5; padding: 2rem;">Item deleted (this is a demo - refresh to reset)</div>';
        }, 300);
      }
    });

    return container;
  },
};

export const CompletedEntry = {
  name: 'Completed entry',
  render: () => `
    <div class="tl-entry">
      <div class="tl-entry-left">
        <labs-button variant="icon" aria-label="Mark undone">
          <span slot="icon-left"><labs-icon name="check_box"></labs-icon></span>
        </labs-button>
        <div class="tl-entry-content">
          <div class="tl-entry-text completed">Completed task example</div>
          <div class="tl-entry-meta">September 5, 2025</div>
        </div>
      </div>
      <div class="tl-entry-actions">
        <labs-button variant="icon" aria-label="Edit">
          <span slot="icon-left"><labs-icon name="edit"></labs-icon></span>
        </labs-button>
        <labs-button variant="icon" aria-label="Delete" data-action="delete">
          <span slot="icon-left"><labs-icon name="delete_forever"></labs-icon></span>
        </labs-button>
      </div>
    </div>
  `,
};

export const ArchivedEntry = {
  name: 'Archived entry',
  render: () => `
    <div class="tl-entry archived">
      <div class="tl-entry-left">
        <labs-button variant="icon" aria-label="Mark done">
          <span slot="icon-left"><labs-icon name="check_box_outline_blank"></labs-icon></span>
        </labs-button>
        <div class="tl-entry-content">
          <div class="tl-entry-text">Old task from yesterday</div>
          <div class="tl-entry-meta">September 4, 2025</div>
        </div>
      </div>
      <div class="tl-entry-actions">
        <labs-button variant="icon" aria-label="Edit">
          <span slot="icon-left"><labs-icon name="edit"></labs-icon></span>
        </labs-button>
        <labs-button variant="icon" aria-label="Restore item">
          <span slot="icon-left"><labs-icon name="history"></labs-icon></span>
        </labs-button>
      </div>
    </div>
  `,
};
