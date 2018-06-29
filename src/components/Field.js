import { mergeData } from 'vue-functional-data-merge';

const Field = {
    functional: true,
    render: (h, { props, data }) => {
        const { field, generator, config, model } = props;

        return h('div', {
            class: config.fieldClass
        }, [
            h(generator.inputs[field.as || 'text'], mergeData(data, {
                props: { field, model, config, generator },
            }))
        ]);
    }
}

export default Field;