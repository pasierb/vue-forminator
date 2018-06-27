export default {
    functional: true,
    render: (h, ctx) => {
        return h('div', {}, ctx.slots().default);
    }
}