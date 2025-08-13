import"./labs-checkbox-2dh_py-G.js";import"./labs-button-BCzBXzvm.js";import"./labs-icon-BWc3JKvc.js";class a extends HTMLElement{static get observedAttributes(){return["task-id","completed","task-text"]}constructor(){super(),this.attachShadow({mode:"open"}),this.completed=!1}connectedCallback(){this.render()}attributeChangedCallback(t,e,s){t==="completed"&&(this.completed=s!==null),this.render()}setupEventListeners(){this.shadowRoot.removeEventListener("labs-click",this.handleEditClick),this.shadowRoot.removeEventListener("click",this.handleTaskClick),this.addEventListener("labs-checkbox-change",t=>{t.stopPropagation(),this.completed=t.detail.checked,this.completed?this.setAttribute("completed",""):this.removeAttribute("completed"),this.render(),this.dispatchEvent(new CustomEvent("labs-task-change",{bubbles:!0,detail:{taskId:this.getAttribute("task-id"),completed:this.completed,text:this.getAttribute("task-text")}}))}),this.handleEditClick=t=>{t.target.closest('labs-button[icon="edit"]')&&(t.stopPropagation(),this.dispatchEvent(new CustomEvent("labs-task-edit",{bubbles:!0,detail:{taskId:this.getAttribute("task-id"),text:this.getAttribute("task-text")}})))},this.handleTaskClick=t=>{if(t.target.closest("labs-button")||t.target.closest("labs-checkbox"))return;const e=this.shadowRoot.querySelector("labs-checkbox");e&&e.toggleState()},this.shadowRoot.addEventListener("labs-click",this.handleEditClick),this.handleDeleteClick=t=>{t.target.closest('[data-action="delete"]')&&(t.stopPropagation(),this.dispatchEvent(new CustomEvent("labs-task-delete",{bubbles:!0,detail:{taskId:this.getAttribute("task-id"),text:this.getAttribute("task-text")}})))},this.shadowRoot.addEventListener("labs-click",this.handleDeleteClick),this.shadowRoot.addEventListener("click",this.handleTaskClick)}render(){const t=this.getAttribute("task-id")||"",e=this.getAttribute("task-text")||"Sample task";this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
        }
        
        .task-item {
          display: flex;
          align-items: center;
          gap: var(--space-md, 0.75rem);
          padding: var(--space-md, 0.75rem);
          border-radius: var(--border-radius-md, 8px);
          background: var(--color-surface);
          border: 1px solid var(--color-outline);
          position: relative;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        
        .task-item:hover {
          background: var(--color-surface-container);
          border-color: var(--color-primary);
        }
        
        .task-text {
          flex: 1;
          cursor: pointer;
          font-size: var(--font-size-body, 1rem);
          line-height: var(--line-height-normal, 1.4);
          color: var(--color-on-surface);
          transition: all 0.2s ease;
        }
        
        .task-completed .task-text {
          text-decoration: line-through;
          opacity: 0.6;
          color: var(--color-on-surface-variant);
        }
        
        .action-buttons {
          position: absolute;
          right: var(--space-sm, 0.5rem);
          display: flex;
          gap: var(--space-xs, 0.25rem);
          opacity: 0;
          transform: translateX(var(--space-sm, 8px));
          transition: all var(--motion-duration-short, 0.2s) ease;
        }
        
        .task-item:hover .action-buttons {
          opacity: 1;
          transform: translateX(0);
        }
      </style>
      
      <div class="task-item ${this.completed?"task-completed":""}" data-task-id="${t}">
        <labs-checkbox ${this.completed?"checked":""}></labs-checkbox>
        <span class="task-text">${e}</span>
        <div class="action-buttons">
          <labs-button 
            icon="edit" 
            variant="icon-transparent" 
            iconcolor="var(--color-on-surface-variant)"
            data-action="edit"
            aria-label="Edit task"
          ></labs-button>
          <labs-button 
            icon="delete_forever" 
            variant="icon-transparent" 
            iconcolor="var(--color-error)"
            data-action="delete"
            aria-label="Delete task"
          ></labs-button>
        </div>
      </div>
    `,this.setupEventListeners()}}customElements.define("labs-task-item",a);
