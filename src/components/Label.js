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
        const componentData = mergeData(data, {
            // class: [con`${field.as}LabelClass`, config.labelClass],
            class: [className, config.labelClass],
        });

        return (<label {...componentData}>
            {field.required && prependRequired && '* '}
            {slots().default}
            {field.required && !prependRequired && ' *'}
        </label>);
    }
}
