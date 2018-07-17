import { mergeData } from 'vue-functional-data-merge';

const Checkbox = {
    functional: true,
    render: (h, { props, data }) => {
        const { model, field, config } = props;
        const attrs = field.attrs || {};
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
        }

        return h('input', mergeData(data, {
            class: attrs.class || config.checkboxClass,
            attrs: Object.assign({}, field.attrs || {}, {
                type: 'checkbox',
                name: field.name,
                value: field.value
            }),
            domProps: { checked },
            on: {
                change: onChange
            }
        }));
    }
};

export default Checkbox;
