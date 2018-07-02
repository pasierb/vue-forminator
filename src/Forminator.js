import { mergeData } from 'vue-functional-data-merge';
import blank from './generators/blank';
import FieldWrapper from './components/Field';
import FieldsRow from './components/FieldsRow';

export const Provider = ({
    Field = FieldWrapper,
    generator = blank
} = {}) => ({
    props: {
        schema: { type: Array, required: true },
        model: { type: Object, required: true },
        config: { type: Object, default: () => ({}) },
        validations: { type: Object, default: () => ({}) }
    },
    render(h) { // eslint-disable-line no-unused-vars
        const { model, config, schema, validations } = this;
        const localConfig = Object.assign({}, generator.config, config);

        return (<div class={config.wrapperClass}>
            {schema.map(field => {
                const fieldData = {
                    props: { model, config: localConfig, generator, validations }
                };

                if (!Array.isArray(field)) {
                    return (<Field {...mergeData(fieldData, { props: { field }})} />);
                }

                const Row = FieldsRow(Field);

                return (<Row {...mergeData(fieldData, { props: { fields: field }})} />);
            })}
        </div>);
    }
});

export default Provider();
