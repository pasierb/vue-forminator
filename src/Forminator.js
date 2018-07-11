import { mergeData } from 'vue-functional-data-merge';
import blank from './generators/blank';
import FieldWrapper from './components/Field';
import FieldsRow from './components/FieldsRow';
import Factory from './Factory';

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
    render(h) {
        const { model, config, schema, validations } = this;
        const localConfig = Object.assign({}, generator.config, config);

        return h('div', {
            class: config.wrapperClass
        }, schema.map(field => {
            const fieldData = {
                props: { model, config: localConfig, generator, validations }
            };

            if (!Array.isArray(field)) {
                return h(Field, mergeData(fieldData, { props: { field }}));
            }

            return h(FieldsRow(Field), mergeData(fieldData, {
                props: {
                    fields: field
                }
            }));
        }));
    }
});

export const Provider2 = (FieldFactory = Factory) => ({
    functional: true,
    props: {
        schema: { type: Array, required: true },
        model: { type: Object, required: true },
    },
    render(h, ctx) {
        return h('div', {}, ctx.props.schema.map(item =>
            FieldFactory(h, item, ctx)
            // h(FieldFactory(item), mergeData(data, {
            //     props: {
            //         field: item,
            //         model: props.model
            //     }
            // }))
        ));
    }
});

export default Provider();
