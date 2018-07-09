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
import { Provider } from '../Forminator';
import efGenrator from '../generators/ef';
import { required, email } from 'vuelidate/lib/validators';
import formSchema from './formSchema';

const ValidationField = {
    functional: true,
    render: (h, { data, props }) => {
        const { field, generator, config, model, validations } = props;
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
            h(generator.inputs[field.as || 'text'], mergeData(data, {
                props: { field, model, config, generator },
                on: {
                    blur: touch,
                    input: touch,
                }
            }))
        ]);
    }
};

const Forminator = Provider({ generator: efGenrator, Field: ValidationField });


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

