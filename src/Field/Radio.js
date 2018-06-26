export default {
    functional: true,
    render: (h, { props, listeners = {} }) => {
        const checked = props.model[props.name] === props.value;
        const onChange = (e) => {
            props.model[props.name] = e.target.checked && props.value;
            listeners.change && listeners.change(e, props);
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