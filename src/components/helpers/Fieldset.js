export default function Fieldset(createField, { label, fields }) {
    return {
        functional: true,
        render(h, ctx) {
            return h('fieldset', {}, [
                h('legend', {}, label),
                ...fields.map(field =>
                    createField(h, ctx, field)
                )
            ]);
        }
    }
}