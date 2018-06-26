export default {
    functional: true,
    render: (h, { props, listeners = {} }) => {
        const { model, name, value } = props;
        const isArray = Array.isArray(model[name]);
        const checked = isArray ? model[name].indexOf(value) !== -1 : model[name];
        const onChange = (e) => {
            if (isArray) {
                const index = model[name].indexOf(value);

                if (e.target.checked && index === -1) model[name].push(value);
                if (!e.target.checked && index !== -1) model[name].splice(index, 1);
            } else {
                model[name] = !!e.target.checked;
            }

            listeners.change && listeners.change(e, props);
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
