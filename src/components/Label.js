export default {
    functional: true,
    props: {
        field: { type: Object, required: true },
        config: { type: Object, required: true }
    },
    render(h, { props, slots }) {
        const { field, config } = props;
        const { attrs = {}} = field;
        const className = (field && config[`${field.as}LabelClass`]) || config.labelClass;

        return h('label', {
            class: [
                className,
                attrs.required && config.requiredLabelClass
            ]
        }, [slots().default]);
    }
}
