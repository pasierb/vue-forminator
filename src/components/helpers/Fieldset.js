export default function Fieldset(createField) {
    return {
        functional: true,
        props: {
            field: { type: Object, required: true },
            config: { type: Object, required: true }
        },
        render(h, ctx) {
            const { props } = ctx;
            const { config, field } = props;
            const { label, fields, legendAttrs = {}} = field;

            return h('fieldset', {
                class: config.fieldsetClass
            }, [
                h('legend', {
                    class: legendAttrs.class || config.fieldsetLegendClass,
                    attrs: legendAttrs
                }, label),
                ...fields.map(field =>
                    createField(h, ctx, field)
                )
            ]);
        }
    }
}