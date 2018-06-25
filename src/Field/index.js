import Label from './Label';
import Text from './Text';
import Select from './Select';
import Checkbox from './Checkbox';
import Radio from './Radio';

const FIELD = {
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
                        props: {
                            name: props.name,
                            value: option.value,
                            model: props.model,
                        },
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
        return props.options.map(({ label, value }) => {
            return h(Label, [
                h(Radio, {
                    props: {
                        name: props.name,
                        model: props.model,
                        label,
                        value
                    },
                    on: listeners
                }),
                label
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
    },
    render: (h, ctx) => {
        return h('div', {}, FIELD[ctx.props.as](h, ctx));
    }
}