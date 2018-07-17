import { mergeData } from 'vue-functional-data-merge';

import defaultInputs from './components/inputs';
import {
    CheckboxGroup,
    Field,
    Fieldset,
    LabelBefore,
    LabelWrap,
    RadioGroup
} from './components/helpers';
import Row from './components/Row';
import Column from './components/Column';

function defaultFields({ Text, Checkbox, Select, Textarea, Email, Radio, NumberInput }) {
    return {
        'boolean': LabelWrap(Checkbox),
        'checkbox': LabelWrap(Checkbox),
        'checkboxGroup': LabelBefore(CheckboxGroup(LabelWrap(Checkbox))),
        'email': LabelBefore(Email),
        'number': LabelBefore(NumberInput),
        'radio': LabelBefore(Radio),
        'radioGroup': LabelBefore(RadioGroup(LabelBefore(Radio))),
        'select': LabelBefore(Select),
        'text': LabelBefore(Text),
        'textarea': LabelBefore(Textarea),
    };
}

const defaultConfig = {};

const defaultProps = {
    model: { type: Object, required: true },
    schema: { type: Array, required: true },
    config: { type: Object, default: () => ({}) }
};

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
    const globalConfig = Object.assign({}, defaultConfig, customConfig);
    const inputs = Object.assign({}, defaultInputs, customInputs);
    const fields = Object.assign(
        {},
        defaultFields(inputs),
        typeof customFields === 'function' ? customFields(inputs) : customFields
    );

    function createField(createElement, context, item) {
        if (!item) return null;

        const { data, props } = context;
        const { config: componentConfig = {}} = props;

        const config = Object.assign({}, globalConfig, componentConfig);

        if (Array.isArray(item)) {
            return createElement(Row, { props: { config }}, item.map(subItem =>
                createElement(Column, { props: { config }}, [
                    createField(createElement, context, subItem)
                ])
            ));
        }

        if (item.as === 'fieldset') {
            return createElement(Fieldset(createField, item), mergeData(data, {
                props: { ...props, config }
            }));
        }

        if (item.as === 'row') {
            return createElement(Row, {
                props: { config, field: item }
            }, item.columns.map(column => {
                return createElement(Column, {
                    props: { config, field: column }
                }, [
                    createField(createElement, context, column.field)
                ]);
            }));
        }

        const Input = fields[item.as] || fields[fallbackField];
        if (Input) {
            return createElement(FieldWrapper(Input, item), mergeData(data, {
                props: { ...props, config }
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
