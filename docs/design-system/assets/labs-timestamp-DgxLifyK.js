class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["datetime","format","size"]}attributeChangedCallback(){this.render()}connectedCallback(){this.render()}parseDateTime(t){if(!t)return new Date;const e=new Date(t);return isNaN(e.getTime())?new Date:e}formatTime(t){return t.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit",hour12:!0})}formatDateHeader(t){const e={weekday:"long",month:"long",day:"numeric",year:"numeric"};return t.toLocaleDateString(void 0,e)}formatShortDate(t){return t.toLocaleDateString(void 0,{month:"short",day:"numeric"})}formatISO(t){return t.toISOString()}render(){const t=this.getAttribute("datetime")||new Date().toISOString(),e=this.getAttribute("format")||"time",o=this.getAttribute("size")||"normal",a=this.parseDateTime(t),s=this.formatISO(a);let r="",i="time";switch(e){case"date-header":r=this.formatDateHeader(a);break;case"short-date":r=this.formatShortDate(a);break;case"time":default:r=this.formatTime(a);break}this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: inline-block;
          font-family: var(--font-family-base, system-ui);
        }

        .timestamp {
          color: var(--color-on-surface, #1f1f1f);
          font-weight: 600;
          line-height: 1.2;
          white-space: nowrap;
        }

        /* Time format styling (matches tracker .time-entry .time) */
        .timestamp.format-time {
          font-size: var(--font-size-xl, 1.25rem);
          text-align: center;
        }

        .timestamp.format-time.size-large {
          font-size: var(--font-size-xxl, 1.5rem);
        }

        .timestamp.format-time.size-small {
          font-size: var(--font-size-lg, 1.125rem);
        }

        /* Date header styling (matches tracker .date-header) */
        .timestamp.format-date-header {
          font-size: var(--font-size-md, 1rem);
          font-weight: 600;
          text-align: center;
          color: var(--color-on-background, #1f1f1f);
        }

        .timestamp.format-date-header.size-large {
          font-size: var(--font-size-lg, 1.125rem);
        }

        .timestamp.format-date-header.size-small {
          font-size: var(--font-size-body, 0.875rem);
        }

        /* Short date styling */
        .timestamp.format-short-date {
          font-size: var(--font-size-body, 1rem);
          font-weight: 500;
        }

        .timestamp.format-short-date.size-large {
          font-size: var(--font-size-md, 1rem);
        }

        .timestamp.format-short-date.size-small {
          font-size: var(--font-size-body-sm, 0.875rem);
        }

        /* Dark theme adjustments */
        :host-context(.theme-dark) .timestamp {
          color: var(--color-on-surface, #e0e0e0);
        }

        :host-context(.theme-dark) .timestamp.format-date-header {
          color: var(--color-on-background, #e0e0e0);
        }

        /* Hover effect for interactive timestamps */
        :host([interactive]) .timestamp {
          cursor: pointer;
          transition: color 0.2s ease;
        }

        :host([interactive]) .timestamp:hover {
          color: var(--color-primary, #007bff);
        }
      </style>

      <${i} 
        class="timestamp format-${e} size-${o}"
        datetime="${s}"
      >
        ${r}
      </${i}>
    `}updateTime(t=null){const e=t||new Date().toISOString();this.setAttribute("datetime",e)}getDateTime(){return this.parseDateTime(this.getAttribute("datetime"))}getFormattedText(){return this.shadowRoot.querySelector(".timestamp")?.textContent||""}}customElements.define("labs-timestamp",m);
