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
            label: 'Accept terms',
            value: 'yes'
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

    it('should update model', () => {
        const wrapper = shallowMount(Radio, {
            context: {
                props: { model, config, field }
            }
        });

        expect(model.accept).toBeFalsy();
        wrapper.find('input').trigger('click');
        expect(model.accept).toEqual('yes');
    });

    it('should set css class from attrs', () => {
        field.attrs = {
            class: 'bar-class'
        };

        const wrapper = shallowMount(Radio, {
            context: {
                props: { model, config, field }
            }
        });

        expect(wrapper.contains('input[type="radio"].bar-class')).toBe(true);
    });
});
