import { shallowMount } from '@vue/test-utils'
import Fieldset from './Fieldset';

const createField = () => null;

const Component = Fieldset(createField);

describe('Fieldset', () => {
    it('should render fieldset', () => {
        const wrapper = shallowMount(Component, {
            context: {
                props: {
                    config: {},
                    field: { label: 'Legend label', fields: [] }
                }
            }
        });

        expect(wrapper.contains('fieldset')).toBe(true);
    });

    it('should render legend', () => {
        const wrapper = shallowMount(Component, {
            context: {
                props: {
                    config: {},
                    field: { label: 'Legend label', fields: [] }
                }
            }
        });

        expect(wrapper.contains('fieldset > legend')).toBe(true);
    });

    it('should set legend class from attrs', () => {
        const wrapper = shallowMount(Fieldset(createField, {
        }), {
            context: {
                props: {
                    field: {
                        legendAttrs: {
                            class: 'required'
                        },
                        fields: []
                    },
                    config: {
                        fieldsetLegendClass: 'goaway'
                    }
                }
            }
        });

        expect(wrapper.contains('fieldset > legend.required:not(.goaway)')).toBe(true);
    });

    it('should apply css class to fieldset', () => {
        const wrapper = shallowMount(Component, {
            context: {
                props: {
                    config: {
                        fieldsetClass: 'fieldset-class'
                    },
                    field: { label: 'Legend label', fields: [] }
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
                    },
                    field: { label: 'Legend label', fields: [] }
                }
            }
        })

        expect(wrapper.contains('fieldset > legend.legend-class')).toBe(true);
    });
});
