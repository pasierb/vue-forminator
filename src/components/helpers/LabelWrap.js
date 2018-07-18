import Label from '../Label';

export default function LabelWrap(Component) {
    return {
        functional: true,
        render(h, { props, data }) {
            const { field } = props;

            return h(Label, data, [
                h(Component, data),
                field.label
            ]);
        }
    }
}