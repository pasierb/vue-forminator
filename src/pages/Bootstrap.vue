<template>
<div class="container-fluid">
    <Form :factory="Forminator" />

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous">
</div>
</template>

<script>
import Forminator from '../presets/bootstrap';
import Form from './Form';

export default {
    components: {
        Form,
    },
    computed: {
        Forminator: () => Forminator
    }
}
</script>
