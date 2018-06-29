export default {
    functional: true,
    render: (h, ctx) => {
        const { props, listeners = {} } = ctx;
        const { config, model, field } = props;
        const checked = model[field.name] === field.value;
        const onChange = (e) => {
            model[field.name] = e.target.checked && props.value;
            listeners.change && listeners.change(e, props);
            config.onChange && config.onChange(e, props);
        };

        return h('input', {
            attrs: Object.assign({}, props, {
                name: props.name,
                type: 'radio',
                value: props.value,
                checked 
            }),
            on: Object.assign({}, listeners, { change: onChange })
        });
    }
}