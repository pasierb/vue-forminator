import { mergeData } from 'vue-functional-data-merge';

const Textarea =  {
    functional: true,
    render(h, { props, data }) {
        const { model, field, config } = props;
        const onChange = e => model[field.name] = e.target.value; 

        return h('textarea', mergeData(data, {
            class: config.textareaClass || config.inputClass,
            attrs: Object.assign({}, field.attrs || {}, { name: field.name }),
            on: {
                input: onChange,    
                blur: onChange
            }
        }));
    }
}

export default Textarea;
