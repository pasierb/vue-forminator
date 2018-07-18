import Vue from 'vue'
import Form from './Form.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Form)
}).$mount('#app')
