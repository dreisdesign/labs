import"./labs-task-item-C-i40KBp.js";import"./labs-checkbox-2dh_py-G.js";import"./labs-button-BCzBXzvm.js";import"./labs-icon-BWc3JKvc.js";import"./labs-input-overlay-bbrbA_Lz.js";import"./labs-input-D7o3KkaA.js";import"./button-configs-BVqnbxg1.js";class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.undoTimeout=null,this.defaultTimeout=5e3}static get observedAttributes(){return["active","message","timeout","action-type"]}attributeChangedCallback(){this.render()}connectedCallback(){this.render(),this.setupEventListeners()}disconnectedCallback(){this.clearUndoTimeout()}setupEventListeners(){this.shadowRoot.addEventListener("labs-click",e=>{const t=e.target.closest('[data-action="undo"]'),n=e.target.closest('[data-action="dismiss"]');t?this.dispatchUndo():n&&this.dismiss()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.hasAttribute("active")&&this.dismiss()}),this.shadowRoot.addEventListener("click",e=>{e.target===this.shadowRoot.querySelector(".undo-overlay")&&this.dismiss()})}show(e,t="delete",n=this.defaultTimeout){this.setAttribute("message",e),this.setAttribute("action-type",t),this.setAttribute("timeout",n.toString()),this.setAttribute("active",""),this.startUndoTimer(n)}hide(){this.removeAttribute("active"),this.clearUndoTimeout()}dismiss(){this.hide(),this.dispatchEvent(new CustomEvent("labs-undo-dismiss",{bubbles:!0,detail:{actionType:this.getAttribute("action-type"),message:this.getAttribute("message")}}))}dispatchUndo(){this.hide(),this.dispatchEvent(new CustomEvent("labs-undo-action",{bubbles:!0,detail:{actionType:this.getAttribute("action-type"),message:this.getAttribute("message")}}))}startUndoTimer(e){this.clearUndoTimeout(),this.undoTimeout=setTimeout(()=>{this.dismiss()},e)}clearUndoTimeout(){this.undoTimeout&&(clearTimeout(this.undoTimeout),this.undoTimeout=null)}render(){const e=this.hasAttribute("active"),t=this.getAttribute("message")||"Action completed",n=this.getAttribute("action-type")||"delete";this.shadowRoot.innerHTML=`
      <style>
        :host {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2000;
          display: ${e?"flex":"none"};
          align-items: flex-end;
          justify-content: center;
          pointer-events: ${e?"auto":"none"};
          padding-bottom: var(--space-xl, 24px);
          box-sizing: border-box;
        }

        .undo-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          pointer-events: ${e?"auto":"none"};
        }

        .undo-notification {
          position: relative;
          background: var(--color-surface-container-high, #f5f5f5);
          border: 1px solid var(--color-outline, #d0d0d0);
          border-radius: var(--border-radius-lg, 12px);
          padding: var(--space-md, 16px) var(--space-lg, 20px);
          box-shadow: var(--shadow-overlay, 0 5px 20px rgba(0, 0, 0, 0.2));
          display: flex;
          align-items: center;
          gap: var(--space-md, 16px);
          max-width: 400px;
          width: 90%;
          animation: ${e?"slideUp":"slideDown"} 0.3s ease;
          pointer-events: auto;
        }

        .undo-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        .undo-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--space-xs, 4px);
        }

        .undo-message {
          font-size: var(--font-size-body, 1rem);
          color: var(--color-on-surface, #1f1f1f);
          margin: 0;
        }

        .undo-actions {
          display: flex;
          gap: var(--space-sm, 8px);
          align-items: center;
        }

        /* Action type styling */
        .notification-delete {
          border-left: 4px solid var(--color-error, #dc3545);
        }

        .notification-edit {
          border-left: 4px solid var(--color-warning, #ffc107);
        }

        .notification-add {
          border-left: 4px solid var(--color-success, #28a745);
        }

        /* Dark theme adjustments */
        :host-context(.theme-dark) .undo-notification {
          background: var(--color-surface-container-high, #2a2a2a);
          border-color: var(--color-outline, #525252);
        }

        :host-context(.theme-dark) .undo-message {
          color: var(--color-on-surface, #e0e0e0);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(20px);
          }
        }
      </style>

      <div class="undo-overlay"></div>
      <div class="undo-notification notification-${n}">
        <labs-icon 
          name="undo" 
          size="20" 
          color="var(--color-on-surface-variant)" 
          class="undo-icon"
        ></labs-icon>
        
        <div class="undo-content">
          <p class="undo-message">${t}</p>
          <div class="undo-actions">
            <labs-button 
              label="Undo" 
              variant="rounded-secondary"
              data-action="undo"
            ></labs-button>
            <labs-button 
              label="Dismiss" 
              variant="transparent"
              data-action="dismiss"
            ></labs-button>
          </div>
        </div>
      </div>
    `}}customElements.define("labs-undo-button",i);const k={title:"Patterns/Task Interaction",parameters:{docs:{description:{component:"Complete task interaction patterns showing checkbox functionality, edit on hover, and task state management as used in Today List app."}}}},d=()=>(setTimeout(()=>{const a=document.querySelector("labs-input-overlay"),e=document.querySelector("labs-undo-button");document.addEventListener("labs-checkbox-change",t=>{console.log("Task changed:",t.detail)}),document.addEventListener("labs-task-edit",t=>{console.log("Edit task requested:",t.detail),a.open("Edit Task","Update task text...",t.detail.text,t.detail.taskId)}),document.addEventListener("labs-task-delete",t=>{console.log("Delete task requested:",t.detail),e.show(`"${t.detail.text}" deleted`,"delete",5e3),document.querySelectorAll("labs-task-item").forEach(o=>{o.getAttribute("task-id")===t.detail.taskId&&(o.style.opacity="0.5",o.style.pointerEvents="none")})}),document.addEventListener("labs-undo-action",t=>{console.log("Undo action triggered:",t.detail),t.detail.actionType==="delete"&&(document.querySelectorAll("labs-task-item").forEach(o=>{o.style.opacity="1",o.style.pointerEvents="auto"}),console.log("Task restored"))}),document.addEventListener("labs-undo-dismiss",t=>{console.log("Delete action confirmed (not undone):",t.detail)}),document.addEventListener("task-save",t=>{console.log("Task saved:",t.detail);const n=t.detail.index?`Updated task ${t.detail.index}: "${t.detail.text}"`:`Created new task: "${t.detail.text}"`;alert(n)})},100),`
    <style>
      .task-demo {
        max-width: 400px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
      }
      
      .demo-section {
        margin-bottom: 2rem;
      }
      
      .demo-section h3 {
        margin-bottom: 1rem;
        color: var(--color-on-background);
      }
      
      .task-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    </style>
    
    <div class="task-demo">
      <div class="demo-section">
        <h3>Task Items with Checkbox + Edit Hover</h3>
        
        <div class="task-list">
          <labs-task-item 
            task-id="1" 
            task-text="Write documentation for new components"
          ></labs-task-item>
          
          <labs-task-item 
            task-id="2" 
            task-text="Review design system architecture" 
            completed
          ></labs-task-item>
          
          <labs-task-item 
            task-id="3" 
            task-text="Update Storybook stories with new patterns"
          ></labs-task-item>
        </div>
      </div>
      
      <div class="demo-section">
        <h3>Interaction Demo</h3>
        <p style="color: var(--color-on-surface-variant); margin-bottom: 1rem; font-size: var(--font-size-body-sm);">
          • Click anywhere on task to toggle completion<br>
          • Hover to reveal edit and delete buttons<br>
          • Check animation plays on state change<br>
          • Edit button opens input overlay for text editing<br>
          • Delete button shows undo notification (no confirmation needed!)
        </p>
        
        <div class="task-list">
          <labs-task-item 
            task-id="demo" 
            task-text="Interactive demo task - click anywhere!"
          ></labs-task-item>
        </div>
      </div>
      
      <!-- Input overlay for editing -->
      <labs-input-overlay></labs-input-overlay>
      
      <!-- Undo notification for delete actions -->
      <labs-undo-button></labs-undo-button>
    </div>
  `),s=d.bind({});s.parameters={docs:{description:{story:"Complete task interaction pattern showing checkbox state management, hover-revealed edit buttons, and visual feedback for completed tasks. This demonstrates the default behavior where clicking tasks opens edit functionality instead of creating new tasks."}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  // Use setTimeout to ensure the component is fully rendered before adding event listeners
  setTimeout(() => {
    const overlay = document.querySelector('labs-input-overlay');
    const undoButton = document.querySelector('labs-undo-button');
    document.addEventListener('labs-checkbox-change', e => {
      console.log('Task changed:', e.detail);
    });
    document.addEventListener('labs-task-edit', e => {
      console.log('Edit task requested:', e.detail);

      // Open input overlay for editing
      overlay.open("Edit Task", "Update task text...", e.detail.text, e.detail.taskId);
    });
    document.addEventListener('labs-task-delete', e => {
      console.log('Delete task requested:', e.detail);

      // Show undo notification instead of confirmation
      undoButton.show(\`"\${e.detail.text}" deleted\`, "delete", 5000);

      // Visually dim the task (in real app, would be removed from data)
      const taskElements = document.querySelectorAll('labs-task-item');
      taskElements.forEach(task => {
        if (task.getAttribute('task-id') === e.detail.taskId) {
          task.style.opacity = '0.5';
          task.style.pointerEvents = 'none';
        }
      });
    });

    // Handle undo events
    document.addEventListener('labs-undo-action', e => {
      console.log('Undo action triggered:', e.detail);
      if (e.detail.actionType === 'delete') {
        // Restore task appearance
        const taskElements = document.querySelectorAll('labs-task-item');
        taskElements.forEach(task => {
          task.style.opacity = '1';
          task.style.pointerEvents = 'auto';
        });
        console.log('Task restored');
      }
    });
    document.addEventListener('labs-undo-dismiss', e => {
      console.log('Delete action confirmed (not undone):', e.detail);
    }); // Handle task save from overlay
    document.addEventListener('task-save', e => {
      console.log('Task saved:', e.detail);

      // In real app, this would update the task data
      // For demo, just show what was saved
      const message = e.detail.index ? \`Updated task \${e.detail.index}: "\${e.detail.text}"\` : \`Created new task: "\${e.detail.text}"\`;
      alert(message);
    });
  }, 100);
  return \`
    <style>
      .task-demo {
        max-width: 400px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
      }
      
      .demo-section {
        margin-bottom: 2rem;
      }
      
      .demo-section h3 {
        margin-bottom: 1rem;
        color: var(--color-on-background);
      }
      
      .task-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    </style>
    
    <div class="task-demo">
      <div class="demo-section">
        <h3>Task Items with Checkbox + Edit Hover</h3>
        
        <div class="task-list">
          <labs-task-item 
            task-id="1" 
            task-text="Write documentation for new components"
          ></labs-task-item>
          
          <labs-task-item 
            task-id="2" 
            task-text="Review design system architecture" 
            completed
          ></labs-task-item>
          
          <labs-task-item 
            task-id="3" 
            task-text="Update Storybook stories with new patterns"
          ></labs-task-item>
        </div>
      </div>
      
      <div class="demo-section">
        <h3>Interaction Demo</h3>
        <p style="color: var(--color-on-surface-variant); margin-bottom: 1rem; font-size: var(--font-size-body-sm);">
          • Click anywhere on task to toggle completion<br>
          • Hover to reveal edit and delete buttons<br>
          • Check animation plays on state change<br>
          • Edit button opens input overlay for text editing<br>
          • Delete button shows undo notification (no confirmation needed!)
        </p>
        
        <div class="task-list">
          <labs-task-item 
            task-id="demo" 
            task-text="Interactive demo task - click anywhere!"
          ></labs-task-item>
        </div>
      </div>
      
      <!-- Input overlay for editing -->
      <labs-input-overlay></labs-input-overlay>
      
      <!-- Undo notification for delete actions -->
      <labs-undo-button></labs-undo-button>
    </div>
  \`;
}`,...s.parameters?.docs?.source}}};const h=["TaskItems"];export{s as TaskItems,h as __namedExportsOrder,k as default};
