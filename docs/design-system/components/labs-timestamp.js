/**
 * labs-timestamp: Timestamp component matching tracker app styling
 * 
 * Features:
 * - Time display (H:MM AM/PM format)
 * - Date header formatting (Weekday, Month Day, Year)
 * - Design token integration
 * - Responsive typography
 * - Accessible date/time semantics
 */
class LabsTimestamp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ["datetime", "format", "size"];
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    // Parse datetime from various formats
    parseDateTime(datetimeStr) {
        if (!datetimeStr) return new Date();

        // Handle ISO string, timestamp, or Date object
        const date = new Date(datetimeStr);
        return isNaN(date.getTime()) ? new Date() : date;
    }

    // Format time like tracker: H:MM AM/PM (e.g., 4:42 PM)
    formatTime(date) {
        return date.toLocaleTimeString(undefined, {
            hour: "numeric", // Non-padded hour (4 instead of 04)
            minute: "2-digit",
            hour12: true,
        });
    }

    // Format date header like tracker: Weekday, Month Day, Year
    formatDateHeader(date) {
        const options = {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        };
        return date.toLocaleDateString(undefined, options);
    }

    // Format short date: Month Day (e.g., Jan 15)
    formatShortDate(date) {
        return date.toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
        });
    }

    // Format datetime for machine-readable attribute
    formatISO(date) {
        return date.toISOString();
    }

    render() {
        const datetimeStr = this.getAttribute("datetime") || new Date().toISOString();
        const format = this.getAttribute("format") || "time"; // time, date-header, short-date
        const size = this.getAttribute("size") || "normal"; // normal, large, small

        const date = this.parseDateTime(datetimeStr);
        const isoDatetime = this.formatISO(date);

        let displayText = "";
        let semanticTag = "time";

        switch (format) {
            case "date-header":
                displayText = this.formatDateHeader(date);
                break;
            case "short-date":
                displayText = this.formatShortDate(date);
                break;
            case "time":
            default:
                displayText = this.formatTime(date);
                break;
        }

        this.shadowRoot.innerHTML = `
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

      <${semanticTag} 
        class="timestamp format-${format} size-${size}"
        datetime="${isoDatetime}"
      >
        ${displayText}
      </${semanticTag}>
    `;
    }

    // Public API methods
    updateTime(newDateTime = null) {
        const dateTime = newDateTime || new Date().toISOString();
        this.setAttribute('datetime', dateTime);
    }

    getDateTime() {
        return this.parseDateTime(this.getAttribute("datetime"));
    }

    getFormattedText() {
        return this.shadowRoot.querySelector('.timestamp')?.textContent || '';
    }
}

customElements.define("labs-timestamp", LabsTimestamp);
