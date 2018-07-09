import omit from '../../utils/omit';
import { mergeData } from 'vue-functional-data-merge';
import Base from '../inputs/BaseInput';

const fieldAttrs = omit(['as', 'label']);

const Textarea =  {
    functional: true,
    render(h, { props, data }) {
        const { model, field, config } = props;
        const onChange = e => model[field.name] = e.target.value;
        const inputData = mergeData(data, {
            class: config.textareaClass || config.inputClass,
            attrs: fieldAttrs(field),
            on: {
                input: onChange,
                blur: onChange
            }
        })

        return (<textarea {...inputData}></textarea>);
    }
}

export default Base(Textarea);
