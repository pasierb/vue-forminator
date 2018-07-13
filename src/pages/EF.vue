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
import { Checkbox, Radio } from '../components/inputs';
import { CheckboxGroup, LabelBefore, RadioGroup } from '../components/helpers';
import { required, email } from 'vuelidate/lib/validators';

const Forminator = Factory({
    props: {
        validations: { type: Object, default: () => ({}) }
    },
    Field: (Input, field) => ({
        functional: true,
        render: (h, { data, props }) => {
            const { config, model, validations } = props;
            const fieldValidation = validations[field.name];
            const required = fieldValidation && fieldValidation.$params.required;
            const touch = () => fieldValidation && fieldValidation.$touch();

            field.required = required;
            field.attrs = Object.assign({ placeholder: field.label }, field.attrs || {})

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
    fields: ({ Checkbox, Radio }) => {
        return {
            boolean: Checkbox,
            checkboxGroup: LabelBefore(CheckboxGroup(Checkbox)),
            radioGroup: LabelBefore(RadioGroup(Radio)),
        }
    },
    inputs: {
        Radio: {
            functional: true,
            render(h, { data, props }) {
                return h('label', {
                    class: 'e-radio'
                }, [
                    h(Radio, data),
                    h('span', { class: 'label-text' }, props.field.label),
                    h('span', { class: 'e-check__indicator' })
                ])
            }
        },
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
                birthDate: null,
                radio: 'off',
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
        contactUsSchema() {
            const { form } = this;

            return [
                {
                    as: 'fieldset',
                    label: 'Student name',
                    fields: [
                        [
                            { name: 'firstName', attrs: { placeholder: 'First name' }},
                            form.firstName && { name: 'lastName', attrs: { placeholder: 'Last name' }},
                        ],
                    ]
                },
                { name: 'email', label: 'Email address', as: 'email' },
                { name: 'phone', label: 'Phone number' },
                { name: 'birthDate', label: 'Birthday', as: 'date' },
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
                {
                    name: 'sex',
                    label: 'Gender',
                    as: 'select',
                    options: [
                        { value: 'male', label: 'Gentleman' },
                        { value: 'female', label: 'Lady' },
                        { label: 'Undicided', attrs: { disabled: 'disabled' }},
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
            ]
        }
    },
    components: {
        Forminator
    }
}
</script>

