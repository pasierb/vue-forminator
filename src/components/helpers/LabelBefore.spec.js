import { shallowMount } from '@vue/test-utils'
import LabelBefore from './LabelBefore';

const MockInput = {
    functional: true,
    render: h => h('input', { attrs: { id: 'dummy-input' }}, [])
};

// Need to wrap as LabelBefore returns multi-root element
const Wrap = (component) => ({
    functional: true,
    render: (h, { data }) => h('div', [h(component, data)])
});

const Field = Wrap(LabelBefore(MockInput));

describe('LabelBefore', () => {
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

    it('should render label + component', () => {
        const wrapper = shallowMount(Field, {
            context: {
                props: { model, field, config }
            }
        });

        expect(wrapper.contains('label + input')).toBe(true);
    });

    it('should not render label if field.label is falsy', () => {
        field.label = undefined;
        const wrapper = shallowMount(Field, {
            context: {
                props: { model, field, config }
            }
        });

        expect(wrapper.contains('label + input')).toBe(false);
        expect(wrapper.contains('label')).toBe(false);
    });
});
