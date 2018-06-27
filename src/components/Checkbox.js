export default {
    functional: true,
    render: (h, { props, listeners = {} }) => {
        const { model, field , config } = props;
        const isArray = Array.isArray(model[field.name]);
        const checked = isArray ? model[field.name].indexOf(field.value) !== -1 : model[field.name];
        const onChange = (e) => {
            if (isArray) {
                const index = model[field.name].indexOf(field.value);

                if (e.target.checked && index === -1) model[field.name].push(field.value);
                if (!e.target.checked && index !== -1) model[field.name].splice(index, 1);
            } else {
                model[field.name] = !!e.target.checked || null;
            }

            listeners.change && listeners.change(e, props);
            config.onChange && config.onChange(e, props);
        }

        return h('input', {
            attrs: {
                type: 'checkbox',
                name: props.name,
                checked
            },
            on: Object.assign({}, listeners, {
                change: onChange
            })
        });
    }
}
