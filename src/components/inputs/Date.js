import IMask from 'imask';
import moment from 'moment';
import Text from './Text';
// import { mergeData } from 'vue-functional-data-merge';

const DateInput = {
    props: {
        config: Object,
        model: Object,
        field: { type: Object, required: true },
    },
    data() {
        return {
            mask: null,
        };
    },
    computed: {
        pattern() {
            return this.field.format || 'DD/MM/YYYY';
        }
    },
    methods: {
        setValue(e) {
            const { field, pattern, model } = this;
            const date = moment(e.target.value, pattern, true);

            this.$set(model, field.name, date.isValid() ? date : null);
            this.$emit('input', e);
            this.$emit('change', e);
        }
    },
    mounted() {
        const { pattern } = this;

        this.mask = new IMask(this.$refs.input, {
            mask: Date,
            pattern: this.pattern,
            lazy: false,
            format: (date) => moment(date).format(pattern),
            parse: (str) => moment(str, pattern, false),
            groups: {
                YYYY: new IMask.MaskedPattern.Group.Range([1900, 2130]),
                MM: new IMask.MaskedPattern.Group.Range([1, 12]),
                DD: new IMask.MaskedPattern.Group.Range([1, 31]),
                HH: new IMask.MaskedPattern.Group.Range([0, 23]),
                mm: new IMask.MaskedPattern.Group.Range([0, 59])
            }
        });
    },
    beforeDestroy() {
        this.mask.destroy();
    },
    render(h) { // eslint-disable-line no-unused-vars
        const { field, config, model, setValue, pattern } = this;

        field.title = pattern;

        return h(Text, {
            ref: 'input',
            props: {
                field,
                model,
                config,
                setter: setValue
            },
            on: this.$listeners
        });
    }
}

export default DateInput;