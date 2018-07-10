import { mergeData } from 'vue-functional-data-merge';

export default {
    functional: true,
    render(h, { props, slots, data }) {
        const { field, config } = props;
        const prependRequired = field.as === 'boolean';
        const className = ({
            checkbox: config.checkboxLabelClass,
            boolean: config.checkboxLabelClass
        })[props.as];

        return h('label', mergeData(data, {
            // class: [con`${field.as}LabelClass`, config.labelClass],
            class: [className, config.labelClass],
        }), [
            field.required && prependRequired && '* ',
            slots().default,
            field.required && !prependRequired && ' *',
        ]);
    }
}
