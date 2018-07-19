import Vue from 'vue'
import Bulma from './Bulma.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Bulma)
}).$mount('#app')

