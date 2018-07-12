import { mergeData } from 'vue-functional-data-merge';
import defaultInputs from './components/inputs';
import Label from './components/Label';
import Row from './components/Row';
import Column from './components/Column';
import CheckboxGroup from './components/CheckboxGroup';

const Labeled = (component) => ({
    functional: true,
    render: (h, { data, props }) => {
        return [
            h(Label, data, props.field.label),
            h(component, data)
        ];
    }
});

const WrapperProvider = (Component, field) => ({
    functional: true,
    render: (h, { data, props }) => {
        return h('div', {}, [
            h(Component, mergeData(data, {
                props: { field, ...props }
            }))
        ])
    }
})

const defaultFields = ({ Text, Checkbox, Select, Textarea, Email }) => ({
    'text': Labeled(Text),
    'boolean': Checkbox,
    'select': Labeled(Select),
    'textarea': Labeled(Textarea),
    'email': Labeled(Email),
    'checkbox': Labeled(Checkbox),
    'checkboxGroup': Labeled(CheckboxGroup(Labeled(Checkbox)))
});

const defaultConfig = {};

export default function Factory({
    FieldWrapper = WrapperProvider,
    fields: customFields,
    inputs: customInputs,
    config: customConfig = {}
} = {}) {
    const config = Object.assign({}, defaultConfig, customConfig);
    const inputs = Object.assign({}, defaultInputs, customInputs);
    const fields = Object.assign(
        {},
        defaultFields(inputs),
        typeof customFields === 'function' ? customFields(inputs) : customFields
    );

    function createField(createElement, context, item) {
        const { data, props } = context;

        if (Array.isArray(item)) {
            return createElement(Row, { props: { config }}, item.map(subItem =>
                createElement(Column, { props: { config }}, [
                    createField(createElement, context, subItem)
                ])
            ));
        }

        const Input = fields[item.as || 'text'];
        if (Input) {
            return createElement(FieldWrapper(Input, item), mergeData(data, {
                props: { config, ...props }
            }));
        }
    }

    return {
        functional: true,
        render(createElement, context) {
            const { props } = context;
            const { schema } = props;

            return createElement('div', {}, schema.map(item => {
                return createField(createElement, context, item);
            }));
        }
    }
}
