import Email from './Email';
import { shallowMount } from '@vue/test-utils'

describe('Email', () => {
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
        const wrapper = shallowMount(Email, {
            context: {
                props: { model, config, field }
            }
        });

        expect(wrapper.contains('input[type="email"][name="foo"]')).toBe(true);
    });

    it('should set css class', () => {
        config.emailInputClass = 'foo-class';

        const wrapper = shallowMount(Email, {
            context: {
                props: { model, config, field }
            }
        });

        expect(wrapper.contains('input.foo-class')).toBe(true);
    });

    it('should add class from field attrs', () => {
        config.emailInputClass = 'foo-class';
        field.attrs = {
            class: 'custom-class'
        };

        const wrapper = shallowMount(Email, {
            context: {
                props: { model, config, field }
            }
        });

        expect(wrapper.contains('input.foo-class.custom-class')).toBe(true);
    });
});
