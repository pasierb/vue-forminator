import { mergeData } from 'vue-functional-data-merge';

function CheckboxGroup(Checkbox) {
    return {
        functional: true,
        props: {
            field: { type: Object, required: true }
        },
        render: (h, { props, data }) => {
            const { field } = props;

            return h('div', {}, field.options.map(option => {
                return h(Checkbox, mergeData(data, {
                    props: {
                        field: Object.assign({}, option, { name: field.name })
                    }
                }));
            }));
        }
    }
}

export default CheckboxGroup;
