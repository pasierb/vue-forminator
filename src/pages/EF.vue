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
            }
        }, [
            h(generator.inputs[field.as || 'text'], mergeData(data, {
                props: { field, model, config, generator },
                on: {
                    change: touch,
                    input: touch
                }
            }))
        ]);
    }
};

const Forminator = Provider({ generator: efGenrator, Field: ValidationField });

const contactUsSchema = [
    [
        { name: 'firstName', label: 'First name' },
        { name: 'lastName', label: 'Last name' },
    ],
    { name: 'email', label: 'Email address', as: 'email' },
    { name: 'phone', label: 'Phone number' },
    { name: 'birthdate', label: 'Birthday', as: 'dateInputs' },
    { name: 'comments', label: 'Questions and comments', as: 'textarea' },
    { name: 'acceptedTerms', as: 'boolean', label: `Yes, I (or my legal guardian) have <strong>read and understood</strong> how EF processes my personal data as set out in the Privacy Policy, and agree to EF's use of my personal data for direct marketing purposes.` },
    {
        name: 'sports',
        label: 'Interests',
        as: 'checkboxGroup',
        options: [
            { value: 'bbal', label: 'Basketball' },
            { value: 'fbal', label: 'Football' },
            { value: 'vball', label: 'Voleyball' },
        ]
    },
    {
        name: 'sex',
        label: 'Gender',
        as: 'select',
        options: [
            { value: 'male', label: 'Gentleman' },
            { value: 'female', label: 'Lady' },
            { label: 'Undicided', disabled: 'disabled' },
        ]
    },
    {
        name: 'course',
        label: 'Course',
        as: 'select',
        options: [
            {
                label: 'LT',
                values: [
                    { label: '10-14', value: '10-14' },
                    { label: '14-16', value: '14-16' }
                ]
            },
            {
                label: 'ILS',
                values: [
                    { label: '18-25', value: '18-25' },
                    { label: '25 plus', value: '25+' }
                ]
            }
        ]
    }
];

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
            }
        }
    },
    validations: {
        form: {
            firstName: { required },
            lastName: { required },
            email: { email, required },
            acceptedTerms: { required }
        }
    },
    methods: {
        onSubmit() {
            alert('submitted');
        }
    },
    computed: {
        contactUsSchema: () => contactUsSchema
    },
    components: {
        Forminator
    }
}
</script>

