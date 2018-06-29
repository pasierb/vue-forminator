import Column from './Column';
import Row from './Row';

const FieldsRow = (Field) => ({
    functional: true,
    props: {
        fields: { type: Array, required: true },
        config: { type: Object, required: true },
        model: { type: Object, required: true },
        generator: { type: Object, required: true }
    },
    render: (h, ctx) => {
        const { fields, generator, config, model } = ctx.props;

        return h(Row, {
            props: { config }
        }, fields.map(field =>
            h(Column, {
                props: { config }
            }, [
                h(Field, {
                    props: { field, model, generator, config }
                })
            ])
        ));
    }
});

export default FieldsRow;
