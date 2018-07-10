import defaultGenerator from './blank';
import { mergeData } from 'vue-functional-data-merge'
import {
    Text,
    Email,
    Checkbox,
    Select,
    Textarea,
} from '../components/inputs';
import Label from '../components/Label';
import CheckboxGroup from '../components/CheckboxGroup';

const EfCheckbox = {
    functional: true,
    render: (h, { props, data }) => {

        return h(Label, mergeData(data, {
            class: 'e-check e-check--box',
        }), [
            h('span', {
                domProps: { innerHTML: props.field.label }
            }),
            h(Checkbox, data),
            h('div', {
                attrs: { class: 'e-check__indicator' }
            })
        ])
    }
};

const LabelPrepend = (component) => ({
    functional: true,
    render: (h, { data, props }) => {
        return [
            h(Label, data, props.field.label),
            h(component, data)
        ]
    }
});

const generator = defaultGenerator.extend({
    inputs: {
        boolean: EfCheckbox,
        text: LabelPrepend(Text),
        select: LabelPrepend(Select),
        textarea: LabelPrepend(Textarea),
        email: LabelPrepend(Email),
        checkbox: LabelPrepend(EfCheckbox),
        checkboxGroup: LabelPrepend(CheckboxGroup(EfCheckbox))
    },
    config: {
        labelClass: 'e-form-control-label',
        inputClass: 'e-form-control',
        selectClass: 'e-form-control',
        fieldClass: 'e-form-group',
        rowClass: 'e-row',
        columnClass: 'e-col',
        errorClass: '-has-error',
    },
});

export default generator;
