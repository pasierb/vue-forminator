const Field = {
    functional: true,
    render: (h, { props, data }) => {
        const { field, generator, config } = props;
        const Input = generator.inputs[field.as || 'text'];

        return (<div class={config.fieldClass}>
            <Input {...data} />
        </div>);
    }
}

export default Field;