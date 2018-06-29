import defaultGenrator from './generators/default';
import Field from './components/Field';

const Forminator = {
    props: {
        schema: { type: Array, required: true },
        model: { type: Object, required: true },
        config: { type: Object, default: () => ({}) },
        validations: { type: Object, default: () => ({}) }
    },
    render(h) {
        const { generator } = Forminator;
        const { model, config, schema } = this; //ctx.props;
        const localConfig = Object.assign({}, generator.config, config);

        return h('div', {
            attrs: { class: config.wrapperClass }
        }, schema.map(field =>
            h(Field, {
                props: { field, model, generator, config: localConfig }
            })
        ));
    }
};

Forminator.generator = defaultGenrator;

export default Forminator;
