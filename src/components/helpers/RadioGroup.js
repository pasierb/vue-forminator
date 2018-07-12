import { mergeData } from 'vue-functional-data-merge';

export default function RadioGroup(Radio) {
    return {
        functional: true,
        render(h, { data, props }) {
            const { field } = props;

            return h('div', {}, field.options.map(option =>
                h(Radio, mergeData(data, {
                    props: {
                        field: { name: field.name, ...option }
                    }
                }))
            ));
        }
    }
}
