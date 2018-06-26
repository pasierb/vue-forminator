<template>
  <div id="app">
    <Forminator :schema="formSchema" :model="model" @change="onChange" />

    <pre>{{model}}</pre>

    <button @click="model.accepted = !model.accepted">Toggle</button>
  </div>
</template>

<script>
import Forminator from './Forminator';

Forminator.config.wrapperClass = 'blah';

export default {
  name: 'app',
  data() {
    return {
      model: {
        firstName: '',
        lastName: '',
        sex: 'female',
        accepted: true,
        rsvp: 'no',
        interests: ['vball']
      }
    }
  },
  components: {
    Forminator
  },
  mounted() {
    console.log(Forminator);
  },
  methods: {
    onChange(e, data) {
      console.log(e, data);
    }
  },
  computed: {
    formSchema: () => [
      [
        { label: 'First name', name: 'firstName' },
        { name: 'lastName' },
      ],
      {
        name: 'rsvp',
        as: 'radio',
        options: [
          { label: 'Going', value: 'yes' },
          { label: 'Not going', value: 'no', disabled: 'disabled' },
        ]
      },
      {
        name: 'interests',
        as: 'checkbox',
        options: [
          { label: 'Basketball', value: 'bball' },
          { label: 'Volleyball', value: 'vball' },
          { label: 'Soccer', value: 'football' },
        ]
      },
      {
        name: 'rsvp',
        as: 'radio',
        options: [
          { label: 'Maybe', value: 'maybe' },
        ]
      },
      {
        name: 'sex',
        as: 'select',
        options: [
          { value: 'male', label: 'Gentleman' },
          { value: 'female', label: 'Lady' },
          { label: 'Undicided', disabled: 'disabled' },
        ]
      },
      {
        name: 'interests',
        as: 'checkbox',
        options: [
          { label: 'Bowling', value: 'bowling' },
          { label: 'Darts', value: 'darts' }
        ]
      },
      { name: 'accepted', as: 'checkbox', label: 'Accepted terms' }
    ]
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
