// TODO: optgroup

export default {
    functional: true,
    render: (h, { props, listeners = {} }) => {
        const selected = props.model[props.name];
        const onChange = (e) => {
            props.model[props.name] = e.target.value;
            listeners.change && listeners.change(e, props);
        };

        return h('select', {
            attrs: {
                name: props.name
            },
            on: {
                change: onChange
            }
        }, props.options.map(option => {
            return h('option', {
                attrs: Object.assign({}, option, {
                    value: option.value,
                    selected: option.value === selected
                })
            }, option.label)
        }));
    }
}