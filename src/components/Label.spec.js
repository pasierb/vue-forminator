import { shallowMount } from '@vue/test-utils';
import Label from './Label';

describe('Label', () => {
    it('should add global label class', () => {
        const wrapper = shallowMount(Label, {
            context: {
                props: {
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
});
