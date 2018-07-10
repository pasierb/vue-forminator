import { mergeData } from 'vue-functional-data-merge';
import Column from './Column';
import Row from './Row';

const FieldsRow = (Field) => ({
    functional: true,
    render: (h, { props, data }) => {
        const { fields, config } = props;

        return h(Row, {
            props: { config }
        }, fields.map(field => {
            return h(Column, {
                props: { config }
            }, [
                h(Field, mergeData(data, {
                    props: { field }
                }))
            ]);
        }));
    }
});

export default FieldsRow;
