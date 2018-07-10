import {
    Text,
    Email,
    DateInput,
    Checkbox,
    Select,
    Textarea,
    NumberInput
} from '../components/inputs';
import Label from '../components/Label';
import CheckboxGroup from '../components/CheckboxGroup';

const LabelPrepend = (component) => ({
    functional: true,
    render: (h, { data, props }) => {
        return [
            h(Label, data, props.field.label),
            h(component, data)
        ]
    }
});

const LabelWrap = (Component) => ({
    functional: true,
    render(h, { data, props }) {
        return <Label {...data}>
            <Component {...data}/>
            {props.field.label}
        </Label>
    }
})

const generator = {
    extend(params = {}) {
        const { inputs, config } = this;

        return {
            inputs: Object.assign({}, inputs, params.inputs || {}),
            config: Object.assign({}, config, params.config || {}),
        };
    },
    inputs: {
        boolean: LabelWrap(Checkbox),
        text: LabelPrepend(Text),
        date: LabelPrepend(DateInput),
        number: LabelPrepend(NumberInput),
        select: LabelPrepend(Select),
        textarea: LabelPrepend(Textarea),
        email: LabelPrepend(Email),
        checkbox: LabelPrepend(Checkbox),
        checkboxGroup: LabelPrepend(CheckboxGroup(LabelWrap(Checkbox)))
    },
    config: {},
};

export default generator;

