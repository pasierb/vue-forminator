import Label from './Label';
import Text from './Text';
import Textarea from './Textarea';
import Select from './Select';
import Checkbox from './Checkbox';
import Radio from './Radio';

export {
    Label,
    Text,
    Textarea,
    Select,
    Checkbox,
    Radio
};

// export const createCheckbox = (h, ctx) => { const { props, listeners } = ctx;
//     const customCreate = props.config.renderer['checkbox'];

//     if (customCreate) return customCreate(h, ctx);

//     return [
//         h(Label, Object.assign({}, ctx, {
//         }), [
//             h(Checkbox, { props, on: listeners }),
//             props.label
//         ])
//     ];
// }

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

// export const createSelect = (h, ctx) => {
//     const { props, listeners } = ctx;
//     const customCreate = props.config.renderer['select'];

//     if (customCreate) return customCreate(h, ctx);

//     return [
//         props.label && h(Label, ctx),
//         h(Select, { props, on: listeners })
//     ];
// }

// export const createText = (h, ctx) => {
//     const { props, listeners } = ctx;
//     const customCreate = props.config.renderer['text'];

//     if (customCreate) return customCreate(h, ctx);

//     return [
//         h(Label, ctx, [props.label]),
//         h(Text, { props, on: listeners })
//     ];
// }

// export const createTextarea = (h, ctx) => {
//     const { props, listeners } = ctx;
//     const customCreate = props.config.renderer['textarea'];

//     if (customCreate) return customCreate(h, ctx);

//     return [
//         h(Label, ctx, [props.label]),
//         h(Textarea, { props, on: listeners })
//     ];
// }

// export const renderer = {
//     text: createText,
//     textarea: createTextarea,
//     select: createSelect,
//     checkbox: createCheckboxGroup,
//     boolean: createCheckbox,
//     radio: createRadioGroup
// }

// export default {
//     functional: true,
//     props: {
//         name: { type: String, required: true },
//         label: { type: String },
//         as: { type: String, default: 'text' },
//         options: { type: Array, default: () => [] },
//         model: { type: Object, required: true },
//         validations: { type: Object, default: () => ({}) },
//         config: { type: Object, default: () => ({}) }
//     },
//     render: (h, ctx) => {
//         const { props } = ctx;
//         const { as, config } = props;
//         const create = renderer[as];
//         const className = config.hasOwnProperty(`${as}WrapperClass`) ? config[`${as}WrapperClass`] : config.fieldWrapperClass;

//         return h('div', {
//             attrs: {
//                 class: className
//             }
//         }, [create(h, ctx)]);
//     }
// }