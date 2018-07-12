import NumberInput from './NumberInput';
import { shallowMount } from '@vue/test-utils'

describe('NumberInput', () => {
    let model;
    let field;
    let config;

    beforeEach(() => {
        model = {
            foo: null
        };
        field = {
            name: 'foo',
        };
        config = {};
    });

    it('should render input', () => {
        const wrapper = shallowMount(NumberInput, {
            context: {
                props: { model, config, field }
            }
        });

        expect(wrapper.contains('input[type="number"][name="foo"]')).toBe(true);
    });
});
