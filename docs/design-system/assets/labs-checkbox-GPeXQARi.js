import"./labs-button-DEUKwH7W.js";class s extends HTMLElement{static get observedAttributes(){return["checked","iconcolor"]}constructor(){super(),this.attachShadow({mode:"open"}),this.checked=!1,this.handleClick=this.handleClick.bind(this)}connectedCallback(){this.render()}disconnectedCallback(){this.shadowRoot?.removeEventListener("labs-click",this.handleClick)}attributeChangedCallback(e,c,t){e==="checked"&&(this.checked=t!==null),this.render()}handleClick(e){e.stopPropagation(),this.toggleState()}toggleState(){this.checked=!this.checked,this.checked?this.setAttribute("checked",""):this.removeAttribute("checked"),this.dispatchEvent(new CustomEvent("labs-checkbox-change",{bubbles:!0,detail:{checked:this.checked}}))}render(){const e=this.getAttribute("iconcolor")||"var(--color-on-surface)",c=e,t=this.getAttribute("iconcolor")?e:"var(--color-primary)";this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: inline-block;
        }
        
        /* Ensure smooth transitions */
        labs-button {
          transition: all 0.2s ease;
        }
      </style>
      
      <labs-button
        icon="${this.checked?"check_box":"check_box_outline_blank"}"
        variant="icon"
        iconcolor="${this.checked?t:c}"
        aria-label="${this.checked?"Mark as incomplete":"Mark as complete"}"
        data-checkbox-state="${this.checked?"checked":"unchecked"}"
      ></labs-button>
    `,this.setupEventListeners()}setupEventListeners(){this.shadowRoot.removeEventListener("labs-click",this.handleClick),this.shadowRoot.addEventListener("labs-click",this.handleClick)}}customElements.define("labs-checkbox",s);
