import { mount } from '@vue/test-utils';
import CheckboxGroup from './CheckboxGroup';
import Checkbox from '../inputs/Checkbox';

const Component = CheckboxGroup(Checkbox);

describe('CheckboxGroup', () => {
    let model;

    beforeEach(() => {
        model = {};
    });

    it('should render checkboxes', () => {
        const wrapper = mount(Component, {
            context: {
                props: {
                    model,
                    config: {},
                    field: {
                        name: 'sport',
                        as: 'checkboxGroup',
                        options: [
                            { value: 'bball', label: 'Basketball' },
                            { value: 'vball', label: 'Volleyball' }
                        ]
                    }
                }
            }
        });

        expect(wrapper.contains('input[type="checkbox"][name="sport"][value="bball"]'));
        expect(wrapper.contains('input[type="checkbox"][name="sport"][value="vball"]'));
    });
});
