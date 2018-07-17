import { mergeData } from 'vue-functional-data-merge';
import { Factory } from '../Forminator';
import { Checkbox, Radio } from '../components/inputs';
import { LabelBefore, CheckboxGroup, RadioGroup } from '../components/helpers';

const BSCheck = (Component) => ({
    functional: true,
    render(h, { data, props }) {
        const { field } = props;
        const id = [field.name, Math.random()].join('-')

        return h('div', {
            class: 'form-check'
        }, [
            h(Component, mergeData(data, {
                attrs: { id }
            })),
            h('label', {
                class: 'form-check-label',
                attrs: {
                    for: id
                }
            }, field.label)
        ])
    }
});

const BSCheckbox = BSCheck(Checkbox);
const BSRadio = BSCheck(Radio);

export default Factory({
    config: {
        fieldClass: 'form-group',
        inputClass: 'form-control',
        selectClass: 'form-control',
        checkboxClass: 'form-check-input',
        radioClass: 'form-check-input',
        rowClass: 'form-row',
        columnClass: 'col',
        fieldsetClass: 'form-group',
        fieldsetLegendClass: 'col-form-label'
    },
    fields: {
        'boolean': BSCheckbox,
        'checkbox': BSCheckbox,
        'checkboxGroup': LabelBefore(CheckboxGroup(BSCheckbox)),
        'radioGroup': LabelBefore(RadioGroup(BSRadio)),
    }
});
