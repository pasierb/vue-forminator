import { mergeData } from 'vue-functional-data-merge';

export default function RadioGroup(Radio) {
    return {
        functional: true,
        render(h, { data, props }) {
            const { field, model, config } = props;

            return h('div', {
                class: config.radioGroupClass
            }, field.options.map(option =>
                h(Radio, mergeData(data, {
                    props: {
                        field: {
                            ...option,
                            name: field.name, 
                            as: 'radio'
                        },
                        model,
                        config
                    }
                }))
            ));
        }
    }
}
