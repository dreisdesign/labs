// Dynamic icon loading - Vite-friendly approach
// Use the correct base path for both local dev and GitHub Pages
// Icons are served under icons/ in both environments
const ICON_BASE =
    window.location.pathname.includes('/labs/') ? '/labs/design-system/icons/' : 'icons/';
const icons = {
    add: ICON_BASE + 'add--labs-icons.svg',
    add_comment: ICON_BASE + 'add_comment--labs-icons.svg',
    bedtime: ICON_BASE + 'bedtime--labs-icons.svg',
    bedtime_off: ICON_BASE + 'bedtime_off--labs-icons.svg',
    cancel: ICON_BASE + 'cancel--labs-icons.svg',
    change_circle: ICON_BASE + 'change_circle--labs-icons.svg',
    check: ICON_BASE + 'check--labs-icons.svg',
    close: ICON_BASE + 'close--labs-icons.svg',
    comment: ICON_BASE + 'comment--labs-icons.svg',
    delete_forever: ICON_BASE + 'delete_forever--labs-icons.svg',
    edit: ICON_BASE + 'edit--labs-icons.svg',
    rate_review: ICON_BASE + 'rate_review--labs-icons.svg',
    settings: ICON_BASE + 'settings--labs-icons.svg',
    undo: ICON_BASE + 'undo--labs-icons.svg'
};

class LabsIcon extends HTMLElement {
    static get observedAttributes() { return ['name', 'style']; }
    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const iconName = this.getAttribute('name');
        let url = icons[iconName];

        if (url) {
            const style = window.getComputedStyle(this);
            const width = this.getAttribute('width') || style.width || '24px';
            const height = this.getAttribute('height') || style.height || '24px';
            const color = this.style.color || 'currentColor';

            this.innerHTML = `
                <div style="
                    width: ${width};
                    height: ${height};
                    background-color: ${color};
                    mask-image: url(${url});
                    mask-size: contain;
                    mask-repeat: no-repeat;
                    mask-position: center;
                "></div>
            `;
        } else {
            this.innerHTML = '';
        }
    }
}
customElements.define('labs-icon', LabsIcon);
