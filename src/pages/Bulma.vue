<template>
<section class="section">
    <div class="container">
        <Form :factory="Forminator" />
    </div>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.css">
</section>
</template>

<script>
import Forminator from '../presets/bulma';
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

