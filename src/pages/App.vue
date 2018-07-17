<template>
<div id="app">
    <Forminator :schema="formSchema" :model="form" />

    <pre>{{form}}</pre>
</div>
</template>

<script>
// import Forminator from '../Forminator';
import Forminator from '../presets/bootstrap';
import formSchema from './formSchema';

export default {
    name: 'app',
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
            }
        };
    },
    components: {
        Forminator
    },
    computed: {
        formSchema: () => formSchema
    }
};
</script>
