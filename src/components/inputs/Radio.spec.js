import Radio from './Radio';
import { shallowMount } from '@vue/test-utils'

describe('Radio', () => {
    let model;
    let field;
    let config;

    beforeEach(() => {
        model = {
            accept: null
        };
        field = {
            name: 'accept',
            label: 'Accept terms'
        };
        config = {};
    });

    it('should render input', () => {
        const wrapper = shallowMount(Radio, {
            context: {
                props: { model, config, field }
            }
        });

        expect(wrapper.contains('input[type="radio"][name="accept"]')).toBe(true);
    });
});
