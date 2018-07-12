import { mergeData } from 'vue-functional-data-merge';

export default function Field(Component, field) {
    return {
        functional: true,
        render: (h, { data, props }) => {
            return h('div', {}, [
                h(Component, mergeData(data, {
                    props: { field, ...props }
                }))
            ])
        }
    };
}
