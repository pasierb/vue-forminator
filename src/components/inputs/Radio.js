import { mergeData } from 'vue-functional-data-merge';

export default {
    functional: true,
    render: (h, { props, data }) => {
        const { model, field, config } = props;
        const checked = model[field.name] === field.value;
        const { attrs = {}} = field;
        const onChange = (e) => {
            model[field.name] = e.target.checked && field.value;
        };

        return h('input', mergeData(data, {
            class: attrs.class || config.radioClass,
            attrs: Object.assign({}, attrs || {}, {
                type: 'radio',
                name: field.name,
                value: field.value,
            }),
            domProps: {
                checked 
            },
            on: {
                change: onChange,
                input: onChange
            }
        }));
    }
}