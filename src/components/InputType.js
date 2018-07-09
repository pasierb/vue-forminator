import { mergeData } from 'vue-functional-data-merge';
import omit from '../utils/omit';

// const fieldAttrs = omit(['label', 'as']);

export default (type) => ({
    functional: true,
    render(h, { props, data }) {
        const { model, field, config } = props;
        const cssClass = config[`${type}InputClass`] || config.inputClass;
        const onChange = props.setter || ((e) => model[field.name] = e.target.value);
        const componentData = mergeData(data, {
            class: cssClass,
            attrs: {
                type,
                ...omit(['label'], field)
            },
            on: {
                input: onChange,
                blur: onChange
            }
        });

        return h('input', componentData);
    }
});
