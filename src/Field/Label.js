export default {
    functional: true,
    render: (h, { slots }) => {
        return h('label', {}, slots().default)
    }
}
