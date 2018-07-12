import Label from '../Label';

export default function LabelBefore(component) {
    return {
        functional: true,
        render: (h, { data, props }) => {
            return [
                h(Label, data, props.field.label),
                h(component, data)
            ];
        }
    }
}
