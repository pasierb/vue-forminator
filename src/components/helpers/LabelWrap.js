import Label from '../Label';

export default function LabelWrap(Component) {
    return {
        functional: true,
        props: {
            config: { type: Object, required: true },
            field: { type: Object, required: true }
        },
        render(h, { props, data }) {
            return h(Label, data, [
                h(Component, data),
                props.field.label
            ]);
        }
    }
}
