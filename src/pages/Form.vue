<template>
    <component :is="factory" :schema="formSchema" :model="form" />
</template>

<script>
export default {
    name: 'formPage',
    props: {
        factory: { type: Object, required: true }
    },
    data() {
        return {
            form: {
                factory: 'bootstrap',
                firstName: null,
                lastName: null,
                email: null,
                phone: null,
                comments: null,
                acceptedTerms: null,
                sports: [],
                radio: 'on',
                birthDate: null,
            }
        };
    },
    computed: {
        formSchema() {
            return [
                { name: 'email', label: 'Email address', as: 'email' },
                this.form.email && { name: 'phone', label: 'Phone number' },
                { name: 'birthDate', label: 'Birthday', as: 'date' },
                {
                    as: 'fieldset',
                    label: 'Student name',
                    fields: [
                        [
                            { name: 'firstName', attrs: { placeholder: 'First name' }},
                            { name: 'lastName', attrs: { placeholder: 'Last name' }},
                        ],
                    ]
                },
                { name: 'comments', label: 'Questions and comments', as: 'textarea' },
                { name: 'acceptedTerms', as: 'boolean', label: 'I read terms and conditions' },
                {
                    name: 'radio',
                    as: 'radioGroup',
                    label: 'Sample radio',
                    options: [
                        { value: 'on', label: 'ON!' },
                        { value: 'off', label: 'OFF!' },
                    ]
                },
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
            ]
        },
    }
};
</script>
