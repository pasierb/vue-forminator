export default {
    functional: true,
    render(h, ctx) {
        const { props, listeners = {} } = ctx;
        const { model, field, config } = props;
        const onChange = (e) => {
            model[field.name] = e.target.value;
            listeners.change && listeners.change(e, props);
            config.onChange && config.onChange(e, props);
        }

        return h('input', {
            attrs: Object.assign({}, props, {
                type: 'text',
                name: field.name,
                class: [config.inputClass].join(' ')
            }),
            on: Object.assign({}, listeners, {
                input: onChange,
                blur: onChange
            })
        });
    }
}
