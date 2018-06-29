import { mergeData } from 'vue-functional-data-merge';

const CheckboxGroup = (Checkbox) => ({
    functional: true,
    props: {
        field: { type: Object, required: true }
    },
    render: (h, ctx) => {
        const { props, data } = ctx;
        const { field } = props;

        return h('div', {}, field.options.map(option => {
            return h(Checkbox, mergeData(data, {
                props: {
                    field: Object.assign({}, option, { name: field.name })
                }
            }));
        }));
    }
});

export default CheckboxGroup;
