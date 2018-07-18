import { mergeData } from 'vue-functional-data-merge';

export default function Field(Component) {
    return {
        functional: true,
        props: {
            field: { type: Object, required: true },
            config: { type: Object, required: true }
        },
        render: (h, { data, props }) => {
            const { config, field } = props;

            return h('div', {
                class: config[`${field.as}FieldClass`] || config.fieldClass
            }, [
                h(Component, mergeData(data, {
                    props: { field, ...props }
                }))
            ])
        }
    };
}
