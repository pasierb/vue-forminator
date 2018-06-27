import Vue from 'vue'
import Vuelidate from 'vuelidate';
import EF from './EF.vue';

Vue.config.productionTip = false
Vue.use(Vuelidate);

new Vue({
  render: h => h(EF)
}).$mount('#app')