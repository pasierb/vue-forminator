export default {
    functional: true,
    render(h, { props, listeners = {} }) {
        const { model, name, validations, config } = props;
        const onChange = (e) => {
            model[name] = e.target.value;
            listeners.change && listeners.change(e, props);
        }
        const invalid = validations.hasOwnProperty(name) && !validations[name];

        return h('textarea', {
            attrs: Object.assign({}, props, {
                name,
                class: [config.inputClass, props.class, invalid && config.inputErrorClass].join(' ')
            }),
            on: Object.assign({}, listeners, {
                input: onChange,
                blur: onChange
            })
        });
    }
}
