import Column from './Column';
import Row from './Row';

const FieldsRow = (Field) => ({
    functional: true,
    render: (h, ctx) => {
        const { fields, config } = ctx.props;

        return h(Row, {
            props: { config }
        }, fields.map(field =>
            h(Column, {
                props: { config }
            }, [
                h(Field, {
                    props: { field, ...ctx.props }
                })
            ])
        ));
    }
});

export default FieldsRow;
