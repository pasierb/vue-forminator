import omit from '../../utils/omit';
import { mergeData } from 'vue-functional-data-merge';

const fieldAttrs = omit(['as', 'label']);

const Textarea =  {
    functional: true,
    render(h, { props, data }) {
        const { model, field, config } = props;
        const onChange = e => model[field.name] = e.target.value; 

        return h('textarea', mergeData(data, {
            class: config.textareaClass || config.inputClass,
            attrs: fieldAttrs(field),
            on: {
                input: onChange,    
                blur: onChange
            }
        }));
    }
}

export default Textarea;
