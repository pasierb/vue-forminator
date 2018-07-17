import { mergeData } from 'vue-functional-data-merge';

export default function InputType(type) {
    return {
        functional: true,
        render(h, { props, data }) {
            const { model, field, config } = props;
            const onChange = props.setter || ((e) => model[field.name] = e.target.value);
            const attrs = field.attrs || {};

            return h('input', mergeData(data, {
                class: attrs.class || config[`${type}InputClass`] || config.inputClass,
                attrs: Object.assign({}, attrs, {
                    type,
                    name: field.name,
                    value: model[field.name]
                }),
                on: {
                    keyUp: onChange,
                    input: onChange,
                    change: onChange,
                    blur: onChange
                }
            }));
        }
    }
}
