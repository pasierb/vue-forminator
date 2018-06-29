export default [
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
