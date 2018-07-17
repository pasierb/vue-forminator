import { mergeData } from 'vue-functional-data-merge';

const Textarea =  {
    functional: true,
    render(h, { props, data }) {
        const { model, field, config } = props;
        const onChange = e => model[field.name] = e.target.value; 
        const attrs = field.attrs || {};

        return h('textarea', mergeData(data, {
            class: [
                config.textareaClass || config.inputClass,
                attrs.class || ''
            ],
            attrs: Object.assign({}, attrs || {}, { name: field.name }),
            on: {
                input: onChange,    
                blur: onChange
            }
        }));
    }
}

export default Textarea;
