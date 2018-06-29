import BaseInput from './BaseInput';

const createCheckbox = (h, { name, value }, checked, listeners) => {
    return h('input', {
        attrs: {
            type: 'checkbox',
            name,
            value
        },
        domProps: { checked },
        on: listeners
    });
};

const Checkbox = {
    functional: true,
    render: (h, { props, data }) => {
        const { model, field } = props;
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

            data.on && data.on.change && data.on.change(e, props);
        }
        const listeners = Object.assign({}, data.on || {}, { change: onChange });

        return createCheckbox(h, field, checked, listeners);
    }
};

export default BaseInput(Checkbox);
