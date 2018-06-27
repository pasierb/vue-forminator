<template>
<div class="body">
    <div class="e-container">
        <h1>EF Forms</h1>

        <form class="e-form" @submit.prevent="onSubmit">
            <Forminator :schema="contactUsSchema" :model="form" :validations="$v.form" />

            <div>
                <button type="submit" class="e-btn--highlight" :disabled="$v.$invalid">Submit</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import Forminator from '../Forminator';
import efGenrator from '../generators/ef';
import { required, email } from 'vuelidate/lib/validators';
// import { CheckboxTag, LabelTag } from '../components';

Forminator.generator = efGenrator;

const contactUsSchema = [
    [
        { name: 'firstName', label: 'First name' },
        { name: 'lastName', label: 'Last name' },
    ],
    { name: 'email', label: 'Email address' },
    { name: 'phone', label: 'Phone number' },
    { name: 'comments', label: 'Questions and comments', as: 'textarea' },
    { name: 'acceptedTerms', as: 'boolean', label: `Yes, I (or my legal guardian) have <strong>read and understood</strong> how EF processes my personal data as set out in the Privacy Policy, and agree to EF's use of my personal data for direct marketing purposes.` },
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
                acceptedTerms: null
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

