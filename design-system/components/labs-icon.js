
import addCommentIcon from '../icons/add_comment--labs-icons.svg?raw';
import bedtimeIcon from '../icons/bedtime--labs-icons.svg?raw';
import bedtimeOffIcon from '../icons/bedtime_off--labs-icons.svg?raw';
import cancelIcon from '../icons/cancel--labs-icons.svg?raw';
import changeCircleIcon from '../icons/change_circle--labs-icons.svg?raw';
import checkIcon from '../icons/check--labs-icons.svg?raw';
import closeIcon from '../icons/close--labs-icons.svg?raw';
import commentIcon from '../icons/comment--labs-icons.svg?raw';
import deleteForeverIcon from '../icons/delete_forever--labs-icons.svg?raw';
import editIcon from '../icons/edit--labs-icons.svg?raw';
import rateReviewIcon from '../icons/rate_review--labs-icons.svg?raw';
import settingsIcon from '../icons/settings--labs-icons.svg?raw';
import undoIcon from '../icons/undo--labs-icons.svg?raw';
// Add more imports as needed

const icons = {
    add_comment: addCommentIcon,
    bedtime: bedtimeIcon,
    bedtime_off: bedtimeOffIcon,
    cancel: cancelIcon,
    change_circle: changeCircleIcon,
    check: checkIcon,
    close: closeIcon,
    comment: commentIcon,
    delete_forever: deleteForeverIcon,
    edit: editIcon,
    rate_review: rateReviewIcon,
    settings: settingsIcon,
    undo: undoIcon,
    // Add more icons here
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
        this.innerHTML = icons[iconName] || '';
    }
}
customElements.define('labs-icon', LabsIcon);
