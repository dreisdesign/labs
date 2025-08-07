import { html } from 'lit';

export default {
  title: 'Components/Button Animations',
  argTypes: {
    size: { control: { type: 'range', min: 24, max: 128, step: 1 }, defaultValue: 64 },
    color: { control: 'color', defaultValue: '#10b981' },
  },
};

const Template = ({ size, color }) => html`
  <style>
    .checkmark-container {
      width: ${size}px;
      height: ${size}px;
      display: inline-block;
      position: relative;
    }
    .checkmark__circle {
      stroke-dasharray: 166;
      stroke-dashoffset: 166;
      stroke-width: 2;
      stroke-miterlimit: 10;
      stroke: ${color};
      fill: none;
      animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
    }
    .checkmark {
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      display: block;
      stroke-width: 2;
      stroke: #fff;
      stroke-miterlimit: 10;
      box-shadow: inset 0px 0px 0px ${color};
      animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
    }
    .checkmark__check {
      transform-origin: 50% 50%;
      stroke-dasharray: 48;
      stroke-dashoffset: 48;
      stroke: ${color};
      animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
    }
    @keyframes stroke {
      100% { stroke-dashoffset: 0; }
    }
    @keyframes scale {
      0%, 100% { transform: none; }
      50% { transform: scale3d(1.1, 1.1, 1); }
    }
    @keyframes fill {
      100% { box-shadow: inset 0px 0px 0px ${size / 2}px ${color}; }
    }
  </style>
  <div class="checkmark-container">
    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
      <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
      <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
    </svg>
  </div>
`;

export const ButtonWithCheckmark = Template.bind({});
ButtonWithCheckmark.args = {
  size: 64,
  color: '#10b981',
};