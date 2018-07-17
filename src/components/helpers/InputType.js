import { mergeData } from 'vue-functional-data-merge';

export default function InputType(type) {
    return {
        functional: true,
        render(h, { props, data }) {
            const { model, field, config } = props;
            const cssClass = config[`${type}InputClass`] || config.inputClass;
            const onChange = props.setter || ((e) => model[field.name] = e.target.value);
            const attrs = field.attrs || {};

            return h('input', mergeData(data, {
                class: [
                    cssClass,
                    attrs.class || '',
                ],
                attrs: Object.assign({}, attrs || {}, { type, name: field.name }),
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
