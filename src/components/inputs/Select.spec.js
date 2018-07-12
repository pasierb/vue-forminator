import Select from './Select';
import { shallowMount } from '@vue/test-utils'

describe('Select', () => {
    let model;
    let field;
    let config;

    beforeEach(() => {
        model = {
            foo: null
        };
        field = {
            name: 'foo',
            options: [
                { label: 'Bar label', value: 'bar' },
                { label: 'Baz label', value: 'baz' }
            ]
        };
        config = {};
    });

    it('should render input', () => {
        const wrapper = shallowMount(Select, {
            context: {
                props: { model, config, field }
            }
        });

        expect(wrapper.contains('select[name="foo"]')).toBe(true);
    });

    it('should render options', () => {
        const wrapper = shallowMount(Select, {
            context: {
                props: { model, config, field }
            }
        });

        field.options.forEach(option => {
            const optionTag = wrapper.find(`option[value="${option.value}"]`);

            expect(optionTag).toBeDefined();
            expect(optionTag.text()).toEqual(option.label);
        });
    });
});
