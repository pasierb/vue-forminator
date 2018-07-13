export default function Fieldset(createField, { label, fields }) {
    return {
        functional: true,
        render(h, ctx) {
            const { props } = ctx;
            const { config = {} } = props;

            return h('fieldset', {
                class: config.fieldsetClass
            }, [
                h('legend', {
                    class: config.fieldsetLegendClass
                }, label),
                ...fields.map(field =>
                    createField(h, ctx, field)
                )
            ]);
        }
    }
}