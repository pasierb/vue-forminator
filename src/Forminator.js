import Field from './Field';

export default {
    functional: true,
    props: {
        schema: { type: Array, required: true },
        model: { type: Object, required: true },
    },
    render: (h, { props, listeners }) => {
        return h(
            'div', {
                attrs: {
                    class: 'forminator'
                }
            },
            props.schema.map(item => h(
                Field,
                {
                    props: {
                        ...item,
                        model: props.model
                    },
                    on: listeners
                }
            ))
        );
    }
};
