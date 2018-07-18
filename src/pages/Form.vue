<template>
<div id="app">
    <div class="row">
        <div class="col col-lg-6">
            <component :is="factory" :schema="formSchema" :model="form" />
        </div>
        <div class="col col-lg-6">
            <pre>{{formSchema}}</pre>
        </div>
    </div>

</div>
</template>

<script>
import BootstrapForminator from '../presets/bootstrap';
import Forminator from '../Forminator';

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
    components: {
        Forminator,
        BootstrapForminator
    },
    computed: {
        forminatorFactory() {
            return ({
                'bootstrap': BootstrapForminator,
                'blank': Forminator
            })[this.form.factory];
        },
        formSchema() {
            return [
                // {
                //     as: 'select',
                //     label: 'Forminator Factory',
                //     name: 'factory',
                //     options: [
                //         { label: 'Bootstrap (v4.1)', value: 'bootstrap' },
                //         { label: 'Blank', value: 'blank' },
                //     ]
                // },
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
                { name: 'acceptedTerms', as: 'boolean', label: `Yes, I (or my legal guardian) have <strong>read and understood</strong> how EF processes my personal data as set out in the Privacy Policy, and agree to EF's use of my personal data for direct marketing purposes.` },
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
