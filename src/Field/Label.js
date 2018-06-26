export default {
    functional: true,
    render: (h, { slots, props  }) => {
        return h('label', { props }, slots().default)
    }
}
