const Field = {
    functional: true,
    render: (h, { props, data }) => {
        const { field, generator, config } = props;
        const Input = generator.inputs[field.as || 'text'];

        return h('div', { class: config.fieldClass }, [
            h(Input, data)
        ]);
    }
}

export default Field;