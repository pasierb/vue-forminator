export default {
    functional: true,
    props: {
        config: { type: Object, required: true },
        field: { type: Object, required: true },
    },
    render(h, ctx) {
        const { props, data } = ctx;
        const { field, config } = props;
        const { attrs = {} } = data;
        const prependRequired = props.as === 'boolean';

        const className = ({
            checkbox: config.checkboxLabelClass,
            boolean: config.checkboxLabelClass
        })[props.as];

        return h('label', Object.assign({}, ctx, {
            attrs: {
                class: [className || config.labelClass, attrs.class].join(' '),
            },
        }), [
            field.required && prependRequired && '* ',
            ctx.slots().default,
            field.required && !prependRequired && ' *',
        ]);
    }
}
