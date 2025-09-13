import '../components/labs-flavor-button.js';
import '../components/labs-icon.js';

export default {
    title: 'Components/Flavor Button',
    argTypes: {
        label: { control: 'text' }
    }
};

export const FlavorButton = ({ label = 'Blueberry' }) => {
    const wrap = document.createElement('div');
    wrap.style.maxWidth = '360px';
    wrap.innerHTML = `<labs-flavor-button label="${label}"></labs-flavor-button>`;
    const el = wrap.querySelector('labs-flavor-button');
    el.addEventListener('click', () => {
        const flavor = label;
        const root = document.documentElement;
        root.classList.remove('flavor-vanilla', 'flavor-blueberry', 'flavor-strawberry');
        root.classList.add(`flavor-${flavor.toLowerCase()}`);
    });
    return wrap;
};

FlavorButton.args = { label: 'Strawberry' };
