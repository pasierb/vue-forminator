export default {
    functional: true,
    props: {
        config: { type: Object, required: true },
        field: { type: Object, default: () => ({}) }
    },
    render: (h, { props, slots }) => {
        const { config, field = {} } = props;
        const attrs = field.attrs || {};

        return h('div', {
            class: [
                config.columnClass,
                attrs.class || ''
            ]
        }, slots().default);
    }
}
