<template>
  <div id="app">
    <Forminator :schema="formSchema" :model="model" :validations="validations" />

    <pre>{{model}}</pre>

    <!-- <Forminator :schema="formSchema" :model="model" @change="onChange" :config="customConfig" /> -->

    <button @click="model.accepted = !model.accepted">Toggle</button>
  </div>
</template>

<script>
import Forminator from '../Forminator';

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
      },
      validations: {
        firstName: false,
      }
    }
  },
  components: {
    Forminator
  },
  computed: {
    formSchema: () => [
      [
        { label: 'First name', name: 'firstName' },
        { label: 'Last name', name: 'lastName' },
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
        // label: 'Gender',
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
      { name: 'accepted', as: 'boolean', label: 'Accepted terms' }
    ]
  }
}
</script>
