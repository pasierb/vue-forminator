import Textarea from './Textarea';
import Select from './Select';
import Checkbox from './Checkbox';
import Radio from './Radio';
import Text from './Text';
import Email from './Email';

export {
    Text,
    Email,
    Textarea,
    Select,
    Checkbox,
    Radio
};

// export const createCheckboxGroup = (h, { props, listeners }) => {
//     return props.options.map(option => {
//         return createCheckbox(h, {
//             listeners,
//             props: Object.assign({}, props, {
//                 value: option.value,
//                 label: option.label
//             })
//         });
//     });
// }

// export const createRadioGroup = (h, ctx) => {
//     const { props, listeners } = ctx;
//     const customCreate = props.config.renderer['radio'];

//     if (customCreate) return customCreate(h, ctx);

//     return props.options.map(opt => {
//         return h(Label, [
//             h(Radio, {
//                 props: Object.assign({}, props, opt, {
//                     name: props.name,
//                     model: props.model,
//                 }),
//                 on: listeners
//             }),
//             opt.label
//         ])
//     });
// }
