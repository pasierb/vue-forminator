import { mergeData } from 'vue-functional-data-merge';
import { omit } from 'ramda';
import Base from './BaseInput';

const optionAttrs = omit(['label']);

const createOptionGroup = (h, option, selected) => {
    return h('optgroup', {
        attrs: {
            label: option.label
        }
    }, option.values.map(opt => {
        return createOption(h, opt, selected);
    }))
};

const createOption = (h, option, selected) => {
    return h('option', {
        attrs: optionAttrs(option),
        domProps: {
            selected: option.value === selected
        }
    }, option.label)
};

const Select = {
    functional: true,
    render: (h, { props, data }) => {
        const { field, model, config } = props;
        const selected = model[field.name];
        const onChange = (e) => model[field.name] = e.target.value;

        return h('select', mergeData(data, {
            class: config.selectClass,
            attrs: {
                name: field.name,
            },
            on: {
                change: onChange
            }
        }), field.options.map(option => {
            return (Array.isArray(option.values) ? createOptionGroup : createOption)(h, option, selected);
        }));
    }
};

export default Base(Select);
