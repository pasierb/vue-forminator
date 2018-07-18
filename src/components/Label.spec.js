import { shallowMount } from '@vue/test-utils';
import Label from './Label';

describe('Label', () => {
    it('should add global label class', () => {
        const wrapper = shallowMount(Label, {
            context: {
                props: {
                    field: {},
                    config: {
                        labelClass: 'label'
                    }
                }
            }
        });

        expect(wrapper.contains('label.label')).toBe(true);
    });

    it('should add field based label class', () => {
        const wrapper = shallowMount(Label, {
            context: {
                props: {
                    field: { as: 'text' },
                    config: {
                        labelClass: 'label',
                        textLabelClass: 'text-label'
                    }
                }
            }
        });

        expect(wrapper.contains('label.text-label:not(.label)')).toBe(true);
    });

    it('should add requiredLabelClass if field.attrs.required is truthy', () => {
        const wrapper = shallowMount(Label, {
            context: {
                props: {
                    field: {
                        as: 'text',
                        attrs: {
                            required: 'required'
                        }
                    },
                    config: {
                        labelClass: 'label',
                        requiredLabelClass: 'required-label'
                    }
                }
            }
        });

        expect(wrapper.contains('label.label.required-label')).toBe(true);
    });

    it('should not add requiredLabelClass if field.attrs.required is falsy', () => {
        const wrapper = shallowMount(Label, {
            context: {
                props: {
                    field: {
                        as: 'text',
                        attrs: {
                            required: ''
                        }
                    },
                    config: {
                        labelClass: 'label',
                        requiredLabelClass: 'required-label'
                    }
                }
            }
        });

        expect(wrapper.contains('label.label:not(.required-label)')).toBe(true);
    });
});
