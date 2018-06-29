export default (component) => {
    return Object.assign({
        functional: true,
        props: {
            field: { type: Object, required: true },
            model: { type: Object, required: true },
            config: { type: Object, required: true },
        }
    }, component);
}
