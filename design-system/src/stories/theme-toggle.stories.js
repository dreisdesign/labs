import '../components/labs-button.js';
import '../components/labs-icon.js';

export default {
    title: 'Components/Theme/ThemeToggleButton',
    parameters: {
        docs: {
            description: {
                component: 'A theme toggle button using <labs-button> and <labs-icon> that manages only its own UI state.',
            },
        },
    },
};

export const ThemeToggleButton = () => {
    // Create a wrapper div to isolate state
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
    <labs-button id="theme-toggle-btn" icon="bedtime" variant="primary" label="Turn on Dark Mode" iconcolor="var(--color-on-primary)"></labs-button>
  `;
    const btn = wrapper.querySelector('#theme-toggle-btn');
    let isDark = false;
    function updateButton() {
        btn.setAttribute('icon', isDark ? 'bedtime_off' : 'bedtime');
        btn.setAttribute('label', isDark ? 'Turn off Dark Mode' : 'Turn on Dark Mode');
        btn.setAttribute('iconcolor', 'var(--color-on-primary)');
    }
    btn.addEventListener('click', () => {
        isDark = !isDark;
        updateButton();
    });
    updateButton();
    return wrapper;
};
ThemeToggleButton.storyName = 'Theme Toggle Button';
