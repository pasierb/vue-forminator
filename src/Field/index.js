import Label from './Label';
import Text from './Text';
import Select from './Select';
import Checkbox from './Checkbox';
import Radio from './Radio';

export const renderer = {
    text: (h, { props, listeners }) => {
        return [
            h(Label, [props.label]),
            h(Text, { props, on: listeners })
        ];
    },
    select: (h, { props, listeners }) => {
        return [
            h(Label, [props.label]),
            h(Select, { props, on: listeners })
        ];
    },
    checkbox: (h, { props, listeners }) => {
        if (props.options.length > 0) {
            return props.options.map(option => {
                return h(Label, [
                    h(Checkbox, {
                        props: Object.assign({}, props, {
                            value: option.value,
                        }),
                        on: listeners
                    }),
                    option.label
                ])
            });
        } else {
            return [
                h(Label, [
                    h(Checkbox, { props, on: listeners }),
                    props.label
                ])
            ];
        }
    },
    radio: (h, { props, listeners }) => {
        return props.options.map(opt => {
            return h(Label, [
                h(Radio, {
                    props: Object.assign({}, props, opt, {
                        name: props.name,
                        model: props.model,
                    }),
                    on: listeners
                }),
                opt.label
            ])
        })
    }
}

export default {
    functional: true,
    props: {
        name: { type: String, required: true },
        label: { type: String },
        as: { type: String, default: 'text' },
        options: { type: Array, default: () => [] },
        model: { type: Object, required: true },
        config: { type: Object, default: () => ({}) }
    },
    render: (h, ctx) => {
        return h('div', {
            attrs: {
                class: ctx.props.config.fieldWrapperClass
            }
        }, renderer[ctx.props.as](h, ctx));
    }
}