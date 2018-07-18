import { shallowMount } from '@vue/test-utils'
import Field from './Field';

const MockInput = {
    functional: true,
    render: h => h('input', { attrs: { id: 'dummy-input' }}, [])
};

const Component = Field(MockInput);

describe('Field', () => {
    it('should add generic fieldClass', () => {
        const wrapper = shallowMount(Component, {
            context: {
                props: {
                    config: {
                        fieldClass: 'field-class'
                    },
                    field: {}
                }
            }
        });

        expect(wrapper.contains('div.field-class')).toBe(true);
    });

    it('should add specific field type class', () => {
        const wrapper = shallowMount(Component, {
            context: {
                props: {
                    config: {
                        fieldClass: 'field-class',
                        checkboxFieldClass: 'checkbox-field-class'
                    },
                    field: {
                        as: 'checkbox'
                    }
                }
            }
        });

        expect(wrapper.contains('div.checkbox-field-class:not(.field-class)')).toBe(true);
    });
});
