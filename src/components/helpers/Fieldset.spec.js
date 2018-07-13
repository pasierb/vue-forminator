import { shallowMount } from '@vue/test-utils'
import Fieldset from './Fieldset';

const createField = () => null;

const Component = Fieldset(createField, { label: 'Legend label', fields: [] });

describe('Fieldset', () => {
    it('should render fieldset', () => {
        const wrapper = shallowMount(Component);

        expect(wrapper.contains('fieldset')).toBe(true);
    });

    it('should render legend', () => {
        const wrapper = shallowMount(Component);

        expect(wrapper.contains('fieldset > legend')).toBe(true);
    });

    it('should apply css class to fieldset', () => {
        const wrapper = shallowMount(Component, {
            context: {
                props: {
                    config: {
                        fieldsetClass: 'fieldset-class'
                    }
                }
            }
        })

        expect(wrapper.contains('fieldset.fieldset-class')).toBe(true);
    });

    it('should apply css class to legend', () => {
        const wrapper = shallowMount(Component, {
            context: {
                props: {
                    config: {
                        fieldsetLegendClass: 'legend-class'
                    }
                }
            }
        })

        expect(wrapper.contains('fieldset > legend.legend-class')).toBe(true);
    });
});
