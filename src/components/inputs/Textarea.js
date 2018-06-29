import { omit } from 'ramda';
import { mergeData } from 'vue-functional-data-merge';
import Base from '../inputs/BaseInput';

const fieldAttrs = omit(['as', 'label']);

const Textarea =  {
    functional: true,
    render(h, { props, data }) {
        const { model, field, config } = props;
        const onChange = (e) => {
            model[field.name] = e.target.value;
            data.on && data.on.change && data.on.change(e, props);
        }

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

export default Base(Textarea);
