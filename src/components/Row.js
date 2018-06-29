export default {
    functional: true,
    props: {
        config: { type: Object, required: true }
    },
    render: (h, { props, slots }) => {
        const { config } = props;

        return h('div', { class: config.rowClass }, slots().default);
    }
}