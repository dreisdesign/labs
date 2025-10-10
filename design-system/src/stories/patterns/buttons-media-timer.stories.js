import '../_patterns.css';
import '../../components/labs-button.js';

export default {
  title: '4. Patterns/Buttons - Media/Timer',
  parameters: {
    layout: 'centered',
    controls: { hideNoControlsWarning: true },
  },
};

const states = [
  { label: 'Start', variant: 'primary', icon: 'play_arrow' },
  { label: 'Pause', variant: 'secondary', icon: 'pause' },
  { label: 'Resume', variant: 'primary', icon: 'play_arrow' },
];

export const Timer = () => {
  const wrapper = document.createElement('div');
  let state = 0;

  const button = document.createElement('labs-button');
  button.setAttribute('variant', states[state].variant);
  button.innerHTML = `<labs-icon slot="icon-left" name="${states[state].icon}"></labs-icon>${states[state].label}`;

  button.addEventListener('click', () => {
    state = (state + 1) % states.length;
    button.setAttribute('variant', states[state].variant);
    button.innerHTML = `<labs-icon slot="icon-left" name="${states[state].icon}"></labs-icon>${states[state].label}`;
  });

  wrapper.appendChild(button);
  return wrapper;
};
Timer.storyName = 'Timer';