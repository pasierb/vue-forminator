import Textarea from './Textarea';
import { shallowMount } from '@vue/test-utils'

describe('Textarea', () => {
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
        const wrapper = shallowMount(Textarea, {
            context: {
                props: { model, config, field }
            }
        });

        expect(wrapper.contains('textarea[name="foo"]')).toBe(true);
    });
});
