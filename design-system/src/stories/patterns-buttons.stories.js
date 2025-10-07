// Modular Button Patterns (CSF3)
import '../components/labs-button.js';
import '../components/labs-icon.js';

export default {
	title: '4. Patterns/Buttons',
	component: 'labs-button',
};



export const Add = {
	name: 'Add',
	render: () => `
		<labs-button pill variant="primary">
			<labs-icon slot="icon-left" name="add"></labs-icon>
			Add
		</labs-button>
	`,
};

export const ResetAllData = {
	name: 'Reset all data',
	render: () => `
		<labs-button pill variant="destructive">
			<labs-icon slot="icon-left" name="delete_forever"></labs-icon>
			Reset All Data
		</labs-button>
	`,
};
