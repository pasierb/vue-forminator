import { mergeData } from 'vue-functional-data-merge';

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
        attrs: Object.assign({}, option, {
            value: option.value,
            selected: option.value === selected
        })
    }, option.label)
};

export default {
    functional: true,
    render: (h, ctx) => {
        const { props, listeners = {} } = ctx;
        const { field, model, config } = props;
        const selected = model[field.name];
        const onChange = (e) => {
            model[field.name] = e.target.value;
            listeners.change && listeners.change(e, props);
            config.onChange && config.onChange(e, props);
        };

        return h('select', mergeData(ctx, {
            attrs: {
                name: field.name,
                class: config.selectClass
            },
            on: {
                change: onChange
            }
        }), field.options.map(option => {
            return (Array.isArray(option.values) ? createOptionGroup : createOption)(h, option, selected);
        }));
    }
}