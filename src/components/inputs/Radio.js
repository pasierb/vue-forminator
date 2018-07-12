import { mergeData } from 'vue-functional-data-merge';

export default {
    functional: true,
    render: (h, { props, data }) => {
        const { model, field } = props;
        const checked = model[field.name] === field.value;
        const onChange = (e) => {
            model[field.name] = e.target.checked && props.value;
        };

        return h('input', mergeData(data, {
            attrs: Object.assign({}, field.attrs || {}, {
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