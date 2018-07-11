<template>
<div id="app">
    <Forminator :schema="formSchema" :model="form" />

    <pre>{{form}}</pre>
</div>
</template>

<script>
import { Provider2 } from '../Forminator';
import formSchema from './formSchema';

const Forminator = Provider2();

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
