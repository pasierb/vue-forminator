import { omit } from 'ramda';

const fieldAttrs = omit(['label', 'as']);

export default (type) => ({
    functional: true,
    props: {
        model: { type: Object, required: true },
        field: { type: Object, required: true },
        config: { type: Object, required: true },
    },
    render(h, ctx) {
        const { props, data } = ctx;
        const { model, field, config } = props;
        const cssClass = config[`${type}InputClass`] || config.inputClass;
        const onChange = (e) => {
            model[field.name] = e.target.value;

            data.on && data.on.change && data.on.change(e, props);
        }

        return h('input', {
            class: cssClass,
            attrs: Object.assign(fieldAttrs(field), {
                type,
            }),
            on: Object.assign({}, data.on || {}, {
                input: onChange,
                blur: onChange
            })
        });
    }
});
