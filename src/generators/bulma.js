import defaultGenerator from './default';

import Label from '../components/Label';
import {
    Select, Checkbox
} from '../components/inputs';
import { mergeData } from 'vue-functional-data-merge';

const LabelPrepend = (component) => ({
    functional: true,
    render: (h, ctx) => {
        return [
            h(Label, ctx.data, ctx.props.field.label),
            h('div', { class: 'control' }, [
                h(component, ctx)
            ])
        ]
    }
});

const BulmaCheckbox = {
    functional: true,
    render: (h, ctx) => {
        return h(Label, mergeData(ctx.data, { class: 'checkbox' }), [
            h(Checkbox, ctx),
            ctx.props.field.label
        ]);
    }
};

const BulmaSelect = {
    functional: true,
    render: (h, ctx) => {
        return h('div', { class: 'select' }, [
            h(Select, ctx.data)
        ]);
    }
};

const generator = defaultGenerator.extend({
    config: {
        labelClass: 'label',
        checkboxLabelClass: 'checkbox',
        inputClass: 'input',
        textareaClass: 'textarea',
        rowClass: 'columns',
        columnClass: 'column',
        fieldClass: 'field'
    },
    inputs: {
        select: LabelPrepend(BulmaSelect),
        boolean: BulmaCheckbox
    },
});

export default generator;