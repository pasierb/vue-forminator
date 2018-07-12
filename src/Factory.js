import { mergeData } from 'vue-functional-data-merge';

import defaultInputs from './components/inputs';
import { CheckboxGroup, RadioGroup, LabelBefore, Field } from './components/helpers';
import Row from './components/Row';
import Column from './components/Column';

function defaultFields({ Text, Checkbox, Select, Textarea, Email, Radio }) {
    return {
        'text': LabelBefore(Text),
        'boolean': LabelBefore(Checkbox),
        'select': LabelBefore(Select),
        'textarea': LabelBefore(Textarea),
        'email': LabelBefore(Email),
        'checkbox': LabelBefore(Checkbox),
        'radio': LabelBefore(Radio),
        'radioGroup': LabelBefore(RadioGroup(LabelBefore(Radio))),
        'checkboxGroup': LabelBefore(CheckboxGroup(LabelBefore(Checkbox))),
        'noop': { render: () => null }
    };
}

const defaultConfig = {};

const defaultProps = {
    model: { type: Object, required: true },
    schema: { type: Array, required: true }
}

/**
 * 
 * @param {Object} [options] - factory configuration options
 * @param {Object} [options.params]
 * @param {Function} [options.Field]
 * @param {Object} [options.inputs]
 * @param {Object|Function} [options.fields]
 * @param {string} [options.fallbackField=text] - Field type that will be used in case of undefined type
 */
export default function Factory(options = {}) {
    const {
        Field: FieldWrapper = Field,
        fields: customFields,
        inputs: customInputs,
        config: customConfig = {},
        props: customProps = {},
        fallbackField = 'text'
    } = options;
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

        const Input = fields[item.as] || fields[fallbackField];
        if (Input) {
            return createElement(FieldWrapper(Input, item), mergeData(data, {
                props: { config, ...props }
            }));
        }
    }

    return {
        props: Object.assign({}, defaultProps, customProps),
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
