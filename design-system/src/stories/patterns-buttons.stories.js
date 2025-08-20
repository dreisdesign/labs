// Modular Button Patterns (CSF3)
import '../components/labs-button.js';
import '../components/labs-icon.js';

export default {
  title: 'Patterns/Buttons',
  component: 'labs-button',
};

export const Primary = {
  render: () => `
		<labs-button variant="primary">
			<span>Primary</span>
		</labs-button>
	`,
  name: 'Primary',
};

export const Secondary = {
  render: () => `
		<labs-button variant="secondary">
			<span>Secondary</span>
		</labs-button>
	`,
  name: 'Secondary',
};

export const WithLeftIcon = {
  render: () => `
		<labs-button variant="primary">
			<span slot="icon-left"><labs-icon name="add"></labs-icon></span>
			<span>Add Item</span>
		</labs-button>
	`,
  name: 'With Left Icon',
};

export const WithRightIcon = {
  render: () => `
		<labs-button variant="primary">
			<span>Next</span>
			<span slot="icon-right"><labs-icon name="edit"></labs-icon></span>
		</labs-button>
	`,
  name: 'With Right Icon',
};
