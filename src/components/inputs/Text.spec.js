import Text from './Text';
import { shallowMount } from '@vue/test-utils'

describe('Text', () => {
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
        const wrapper = shallowMount(Text, {
            context: {
                props: { model, config, field }
            }
        });

        expect(wrapper.contains('input[type="text"][name="foo"]')).toBe(true);
    });
});
