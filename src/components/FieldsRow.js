import { mergeData } from 'vue-functional-data-merge';
import Column from './Column';
import Row from './Row';

const FieldsRow = (Field) => ({
    functional: true,
    render: (h, { props, data }) => {
        const { fields, config } = props;

        return (<Row config={config}>
            {fields.map(field => {
                const fieldData = mergeData(data, {
                    props: { field }
                });

                return (<Column config={config}>
                    <Field {...fieldData} />
                </Column>);
            })}
        </Row>);
    }
});

export default FieldsRow;
