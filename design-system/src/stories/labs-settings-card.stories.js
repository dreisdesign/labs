import '../components/labs-settings-card.js';
import '../components/labs-icon.js';

export default {
    title: '2. Components/Card/Settings',
    component: 'labs-settings-card',
    parameters: {
        docs: {
            description: {
                component: 'Canonical labs-settings-card story. Use this as a reference for the base settings card component.'
            }
        }
    }
};

export const Default = () => {
    const el = document.createElement('labs-settings-card');
    // Optionally add header, content, and footer slots for demo
    const header = document.createElement('div');
    header.slot = 'header';
    header.textContent = 'Settings';
    const content = document.createElement('div');
    content.textContent = 'Settings content goes here.';
    const footer = document.createElement('div');
    footer.slot = 'footer';
    footer.textContent = 'Footer actions';
    el.appendChild(header);
    el.appendChild(content);
    el.appendChild(footer);
    return el;
};