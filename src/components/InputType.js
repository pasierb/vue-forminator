import { mergeData } from 'vue-functional-data-merge';
// import { omit } from 'ramda';

// const fieldAttrs = omit(['label', 'as']);

export default (type) => ({
    functional: true,
    render(h, { props, data }) {
        const { model, field, config } = props;
        const cssClass = config[`${type}InputClass`] || config.inputClass;
        const onChange = (e) => model[field.name] = e.target.value;
        const componentData = mergeData(data, {
            class: cssClass,
            attrs: {
                type,
            },
            on: {
                input: onChange,
                blur: onChange
            }
        });

        return (<input {...componentData} />);
    }
});
