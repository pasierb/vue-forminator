import defaultGenrator from './generators/default';
import FieldWrapper from './components/Field';
import FieldsRow from './components/FieldsRow';

export const Provider = ({
    Field = FieldWrapper,
    generator = defaultGenrator
} = {}) => ({
    props: {
        schema: { type: Array, required: true },
        model: { type: Object, required: true },
        config: { type: Object, default: () => ({}) },
        validations: { type: Object, default: () => ({}) }
    },
    render(h) {
        const { model, config, schema, validations } = this;
        const localConfig = Object.assign({}, generator.config, config);

        return h('div', {
            attrs: { class: config.wrapperClass }
        }, schema.map(field => {
            if (!Array.isArray(field)) {
                return h(Field, {
                    props: { field, model, config: localConfig, generator, validations }
                });
            }

            return h(FieldsRow(Field), {
                props: { fields: field, model, config: localConfig, generator, validations }
            })
        }));
    }
});

export default Provider();
