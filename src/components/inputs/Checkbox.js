import { mergeData } from 'vue-functional-data-merge';
import BaseInput from './BaseInput';

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
        }

        return h('input', mergeData(data, {
            attrs: {
                type: 'checkbox',
                name: field.name,
                value: field.value
            },
            domProps: { checked },
            on: {
                change: onChange
            }
        }));
    }
};

export default BaseInput(Checkbox);
