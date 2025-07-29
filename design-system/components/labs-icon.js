

// Dynamic icon loading - Vite-friendly approach
const icons = {
    add_comment: '/icons/add_comment--labs-icons.svg',
    bedtime: '/icons/bedtime--labs-icons.svg',
    bedtime_off: '/icons/bedtime_off--labs-icons.svg',
    cancel: '/icons/cancel--labs-icons.svg',
    change_circle: '/icons/change_circle--labs-icons.svg',
    check_fill: '/icons/check--fill.svg',
    check: '/icons/check--labs-icons.svg',
    close: '/icons/close--labs-icons.svg',
    comment: '/icons/comment--labs-icons.svg',
    delete_forever: '/icons/delete_forever--labs-icons.svg',
    edit: '/icons/edit--labs-icons.svg',
    rate_review: '/icons/rate_review--labs-icons.svg',
    settings_fill: '/icons/settings--fill.svg',
    settings: '/icons/settings--labs-icons.svg',
    undo: '/icons/undo--labs-icons.svg',
    undo_svg: '/icons/undo.svg',
};

class LabsIcon extends HTMLElement {
    static get observedAttributes() { return ['name']; }
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
            this.innerHTML = `<img src="${url}" width="${parseInt(width)}" height="${parseInt(height)}" style="display:inline-block;vertical-align:middle;" alt="${iconName}" />`;
        } else {
            this.innerHTML = '';
        }
    }
}
customElements.define('labs-icon', LabsIcon);
