import FieldsRow from './FieldsRow';

const Field = {
    functional: true,
    props: {
        field: { type: [Array, Object], required: true },
        config: { type: Object, required: true },
        model: { type: Object, required: true },
        generator: { type: Object, required: true }
    },
    render: (h, ctx) => {
        const { field, generator, config, model } = ctx.props;

        if (!Array.isArray(field)) {
            return h('div', {
                class: config.fieldClass
            }, [
                h(generator.inputs[field.as || 'text'], {
                    props: { field, model, config, generator }
                })
            ]);
        }

        return h(FieldsRow(Field), {
            props: { fields: field, model, config, generator }
        })
    }
}


export default Field;