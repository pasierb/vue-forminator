import Vue from 'vue'
import Bootstrap from './Bootstrap.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Bootstrap)
}).$mount('#app')
