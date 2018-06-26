import Field from './Field';

function createField(h, ctx, data, config) {
    return h(Field, {
        props: {
            ...data,
            model: ctx.props.model,
            config
        },
        on: ctx.listeners
    })
}

const Forminator = {
    functional: true,
    props: {
        schema: { type: Array, required: true },
        model: { type: Object, required: true },
    },
    render(h, ctx) {
        return h(
            'div', {
                attrs: {
                    class: Forminator.config.wrapperClass
                }
            },
            ctx.props.schema.map(item => {
                if (!Array.isArray(item)) return createField(h, ctx, item, Forminator.config);

                return h('div', {
                    attrs: {
                        class: Forminator.config.rowClass
                    }
                }, item.map(child => {
                    return h('div', {
                        attrs: {
                            class: Forminator.config.columnClass
                        }
                    }, [createField(h, ctx, child, Forminator.config)]);
                }));
            })
        );
    }
};

Forminator.config = {
    wrapperClass: 'forminator',
    fieldWrapperClass: 'field',
    inputClass: 'form-control',
    rowClass: 'columns',
    columnClass: 'column'
}


export default Forminator;
