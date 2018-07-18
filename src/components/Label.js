export default {
    functional: true,
    props: {
        field: Object,
        config: { type: Object, required: true }
    },
    render(h, { props, slots, data }) {
        const { field, config } = props;
        const className = (field && config[`${field.as}LabelClass`]) || config.labelClass

        return h('label', {
            class: className,
        }, [
            slots().default,
        ]);
    }
}
