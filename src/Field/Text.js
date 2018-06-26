export default {
    functional: true,
    render(h, { props, listeners = {} }) {
        const onChange = (e) => {
            props.model[props.name] = e.target.value;
            listeners.change && listeners.change(e, props);
        }

        return h('input', {
            attrs: {
                type: 'text',
                name: props.name,
                class: props.config.inputClass
            },
            on: Object.assign({}, listeners, {
                input: onChange,
                blur: onChange
            })
        });
    }
}
