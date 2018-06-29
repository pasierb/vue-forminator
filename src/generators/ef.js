import defaultGenerator from './default';
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
import BaseInput from '../components/inputs/BaseInput';

const EfCheckbox = BaseInput({
    functional: true,
    render: (h, ctx) => {
        const { props } = ctx;

        return h(Label, mergeData(ctx, {
            attrs: { class: 'e-check e-check--box' },
        }), [
            h('span', {
                domProps: { innerHTML: props.field.label }
            }),
            h(Checkbox, ctx),
            h('div', {
                attrs: { class: 'e-check__indicator' }
            })
        ])
    }
});

const LabelPrepend = (component) => ({
    functional: true,
    render: (h, ctx) => {
        return [
            h(Label, ctx, ctx.props.field.label),
            h(component, ctx)
        ]
    }
});

const DateInputs = {
    functional: true,
    render: (h, ctx) => {
        const inputWrap = (child) => h('div', { attrs: { class: 'e-form-group' }}, [child])

        return h('div', {
            attrs: { class: 'e-date__inputs' }
        }, [
            inputWrap(h(Text, ctx)),
            inputWrap(h(Text, ctx)),
            inputWrap(h(Text, ctx)),
        ]);
    }
}

const generator = defaultGenerator.extend({
    inputs: {
        boolean: EfCheckbox,
        text: LabelPrepend(Text),
        select: LabelPrepend(Select),
        textarea: LabelPrepend(Textarea),
        dateInputs: LabelPrepend(DateInputs),
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
