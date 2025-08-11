import"./labs-icon-Dst3ctAl.js";class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.dismissTimeout=null,this.defaultTimeout=2e3}static get observedAttributes(){return["active","message","variant","timeout"]}attributeChangedCallback(){this.render()}connectedCallback(){this.render()}disconnectedCallback(){this.clearDismissTimeout()}show(e,r="success",s=this.defaultTimeout){this.setAttribute("message",e),this.setAttribute("variant",r),this.setAttribute("timeout",s.toString()),this.setAttribute("active",""),this.clearDismissTimeout(),this.dismissTimeout=setTimeout(()=>{this.dismiss()},s),this.dispatchEvent(new CustomEvent("labs-alert-show",{bubbles:!0,detail:{message:e,variant:r,timeout:s}}))}dismiss(){this.removeAttribute("active"),this.clearDismissTimeout(),this.dispatchEvent(new CustomEvent("labs-alert-dismiss",{bubbles:!0,detail:{message:this.getAttribute("message")}}))}clearDismissTimeout(){this.dismissTimeout&&(clearTimeout(this.dismissTimeout),this.dismissTimeout=null)}render(){const e=this.hasAttribute("active"),r=this.getAttribute("message")||"Action completed",s=this.getAttribute("variant")||"success";let i,t,a;switch(s){case"success":i="var(--color-success, #10b981)",t="var(--color-on-success, #ffffff)",a="check";break;case"error":i="var(--color-error, #ef4444)",t="var(--color-on-error, #ffffff)",a="cancel";break;case"info":i="var(--color-primary, #3b82f6)",t="var(--color-on-primary, #ffffff)",a="info";break;default:i="var(--color-success, #10b981)",t="var(--color-on-success, #ffffff)",a="check"}this.shadowRoot.innerHTML=`
            <style>
                :host {
                    position: fixed;
                    bottom: 120px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 1000;
                    transition: all 0.3s ease;
                    opacity: ${e?"1":"0"};
                    pointer-events: ${e?"auto":"none"};
                    visibility: ${e?"visible":"hidden"};
                }

                .alert {
                    background-color: ${i};
                    color: ${t};
                    border: none;
                    border-radius: 8px;
                    padding: var(--space-md, 1rem) var(--space-lg, 1.5rem);
                    font-weight: var(--font-weight-semibold, 600);
                    font-size: var(--font-size-base, 1rem);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    display: flex;
                    align-items: center;
                    gap: var(--space-sm, 0.5rem);
                    min-width: 200px;
                    max-width: 400px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .alert-icon {
                    flex-shrink: 0;
                }

                .alert-message {
                    flex: 1;
                    min-width: 0;
                }

                /* Animation states */
                :host(:not([active])) {
                    transform: translateX(-50%) translateY(20px);
                }
            </style>
            
            <div class="alert">
                <labs-icon 
                    class="alert-icon"
                    name="${a}" 
                    color="${t}"
                ></labs-icon>
                <span class="alert-message">${r}</span>
            </div>
        `}}customElements.define("labs-alert",o);
