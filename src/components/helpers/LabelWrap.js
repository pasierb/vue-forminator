export default function LabelWrap(Component) {
    return {
        functional: true,
        render(h, { props, data }) {
            const { field, config } = props;
            const { attrs = {}} = field;

            return h('label', {
                class: attrs.class || config.labelClass
            }, [
                h(Component, data),
                field.label
            ])
        }
    }
}