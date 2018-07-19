import { Factory } from '../Forminator';
import { LabelBefore, LabelWrap, RadioGroup } from '../components/helpers';

const Wrap = (Component, cssClass) => ({
    functional: true,
    render(h, { data }) {
        return h('div', { class: cssClass }, [h(Component, data)]);
    }
});

const BulmaControlWrap = (Component) => Wrap(Component, 'control');

export default Factory({
    config: {
        fieldClass: 'field',
        labelClass: 'label',
        inputClass: 'input',
        textareaClass: 'textarea',
        selectClass: 'form-control',
        checkboxClass: ' ',
        checkboxLabelClass: 'checkbox',
        booleanLabelClass: 'checkbox',
        radioLabelClass: 'radio',
        radioClass: ' ',
        radioGroupClass: 'control',
        fieldsetClass: 'box',
        fieldsetLegendClass: 'label has-text-center',
        rowClass: 'columns',
        columnClass: 'column',
    },
    fields: ({ Text, Email, NumberInput, Select, Textarea, Radio }) => ({
        'text': LabelBefore(BulmaControlWrap(Text)),
        'textarea': LabelBefore(BulmaControlWrap(Textarea)),
        'number': LabelBefore(BulmaControlWrap(NumberInput)),
        'email': LabelBefore(BulmaControlWrap(Email)),
        'select': LabelBefore(BulmaControlWrap(Wrap(Select, 'select'))),
        'radioGroup': RadioGroup(LabelWrap(Radio))
    })
});
