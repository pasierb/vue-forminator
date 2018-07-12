import Checkbox from './Checkbox';
import { shallowMount } from '@vue/test-utils'

describe('Checkbox', () => {
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
        const wrapper = shallowMount(Checkbox, {
            context: {
                props: { model, config, field }
            }
        });

        expect(wrapper.contains('input[type="checkbox"][name="accept"]')).toBe(true);
    });

    it('should update model', () => {
        const wrapper = shallowMount(Checkbox, {
            context: {
                props: { model, config, field }
            }
        });

        expect(model.accept).toBeFalsy();
        wrapper.find('input').trigger('click');
        expect(model.accept).toBe(true);
    });
});
