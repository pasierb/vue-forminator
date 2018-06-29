import {} from 'vue-functional-data-merge';
import {
    Text,
    Email,
    Checkbox,
    Select,
    Textarea,
    NumberInput
} from '../components/inputs';
import Label from '../components/Label';
import CheckboxGroup from '../components/CheckboxGroup';

const LabelPrepend = (component) => ({
    functional: true,
    render: (h, ctx) => {
        return [
            h(Label, ctx, ctx.props.field.label),
            h(component, ctx)
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
        const { inputs, config, createField, plugins } = this;

        return {
            inputs: Object.assign({}, inputs, params.inputs || {}),
            config: Object.assign({}, config, params.config || {}),
            createField: params.createField || createField,
            plugins: params.plugins || plugins,
        };
    },
    plugins: [],
    inputs: {
        boolean: LabelWrap(Checkbox),
        text: LabelPrepend(Text),
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

