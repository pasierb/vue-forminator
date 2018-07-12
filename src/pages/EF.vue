<template>
<div>
    <form class="e-form" @submit.prevent="onSubmit">
        <Forminator :schema="contactUsSchema" :model="form" :validations="$v.form" />

        <div>
            <button type="submit" class="e-btn--highlight" :disabled="$v.$invalid">Submit</button>
        </div>
    </form>
</div>
</template>

<script>
import { mergeData } from 'vue-functional-data-merge';
import { Factory } from '../Forminator';
import { Checkbox } from '../components/inputs';
import { required, email } from 'vuelidate/lib/validators';
import formSchema from './formSchema';

const Forminator = Factory({
    FieldWrapper: (Input, field) => ({
        functional: true,
        render: (h, { data, props }) => {
            const { config, model, validations } = props;
            const fieldValidation = validations[field.name];
            const required = fieldValidation && fieldValidation.$params.required;
            const touch = () => fieldValidation && fieldValidation.$touch();

            field.required = required;

            return h('div', {
                class: {
                    [config.fieldClass]: true,
                    '-has-error': fieldValidation && fieldValidation.$dirty && fieldValidation.$invalid
                },
            }, [
                h(Input, mergeData(data, {
                    props: { field, model, config },
                    on: {
                        blur: touch,
                        input: touch,
                    }
                }))
            ]);
        }
    }),
    inputs: {
        Checkbox: {
            functional: true,
            render: (h, { props, data }) => {

                return h('label', mergeData(data, {
                    class: 'e-check e-check--box',
                }), [
                    h('span', {
                        domProps: { innerHTML: props.field.label }
                    }),
                    h(Checkbox, data),
                    h('div', {
                        attrs: { class: 'e-check__indicator' }
                    })
                ])
            }
        }
    },
    config: {
        labelClass: 'e-form-control-label',
        inputClass: 'e-form-control',
        selectClass: 'e-form-control',
        fieldClass: 'e-form-group',
        rowClass: 'e-row',
        columnClass: 'e-col',
        errorClass: '-has-error',
    }
});

export default {
    data() {
        return {
            form: {
                firstName: null,
                lastName: null,
                email: null,
                phone: null,
                comments: null,
                acceptedTerms: null,
                sports: [],
                birthDate: null
            }
        }
    },
    validations: {
        form: {
            firstName: { required },
            lastName: { required },
            email: { email, required },
            acceptedTerms: { required },
            birthDate: { required }
        }
    },
    methods: {
        onSubmit() {
            alert('submitted');
        }
    },
    computed: {
        contactUsSchema: () => formSchema
    },
    components: {
        Forminator
    }
}
</script>

