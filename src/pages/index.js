import Vue from 'vue';
import Form from './Form.vue';
import Forminator from '../presets/bootstrap';

Vue.config.productionTip = false

new Vue({
  render: h => h(Form, {
    props: {
      factory: Forminator
    }
  })
}).$mount('#app')
