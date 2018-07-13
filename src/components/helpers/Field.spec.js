import { shallowMount } from '@vue/test-utils'
import Field from './Field';

const MockInput = {
    functional: true,
    render: h => h('input', { attrs: { id: 'dummy-input' }}, [])
};

const Component = Field(MockInput);

describe('Field', () => {
    it('should add fieldClass', () => {
        const wrapper = shallowMount(Component, {
            context: {
                props: {
                    config: {
                        fieldClass: 'field-class'
                    }
                }
            }
        });

        expect(wrapper.contains('div.field-class')).toBe(true);
    });
});
