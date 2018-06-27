import forminatorGenerator from './generators/forminator';

const Forminator = {
    functional: true,
    props: {
        schema: { type: Array, required: true },
        model: { type: Object, required: true },
        config: { type: Object },
        validations: { type: Object, default: () => ({}) }
    },
    render(h, ctx) {
        const config = Object.assign({}, Forminator.generator.config, ctx.props.config);
        const { createField } = Forminator.generator;

        return h(
            'div', {
                attrs: { class: config.wrapperClass }
            },
            ctx.props.schema.map(item => {
                if (!Array.isArray(item)) return createField(h, ctx, item, config);

                return h('div', {
                    attrs: { class: config.rowClass }
                }, item.map(child => {
                    return h('div', {
                        attrs: { class: config.columnClass }
                    }, [createField(h, ctx, child, config)]);
                }));
            })
        );
    }
};

Forminator.generator = forminatorGenerator;

export default Forminator;
