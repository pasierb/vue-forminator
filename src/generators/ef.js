import { mergeData } from 'vue-functional-data-merge'
import {
    Text,
    Checkbox,
    Label,
    Select,
    Textarea
} from '../components';

const EfCheckbox = {
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
};

const LabelPrepend = (component) => ({
    functional: true,
    render: (h, ctx) => {
        return [
            h(Label, ctx, ctx.props.field.label),
            h(component, ctx)
        ]
    }
});

const Field = {
    functional: true,        
    render: (h, ctx) => {
        return h('div', mergeData(ctx.data, {
            class: 'e-form-group'
        }), ctx.slots().default);
    }
};

const config = {
    labelClass: 'e-form-control-label',
    inputClass: 'e-form-control',
    selectClass: 'e-form-control',
    rowClass: 'e-row',
    columnClass: 'e-col',
    errorClass: '-has-error',
    onChange: (e, { validations, field }) => {
        const v = validations[field.name];

        v && v.$touch();
    }
};

const fields = {
    boolean: EfCheckbox,
    text: LabelPrepend(Text),
    select: LabelPrepend(Select),
    textarea: LabelPrepend(Textarea)
};

const generator = {
    config,
    createField: (h, ctx, item) => {
        const { props } = ctx;
        const validations = props.validations[item.name];
        const required = validations && validations.$params.required;
        const invalid = validations && validations.$dirty && validations.$invalid;
        const as = item.as || 'text';

        return h(Field, mergeData(ctx.data, {
            class: invalid && config.errorClass
        }), [
            h(fields[as], {
                props: Object.assign({}, props, {
                    placeholder: item.label,
                    as,
                    config,
                    field: Object.assign(item, { required })
                })
            })
        ]);
    }
};

export default generator;
