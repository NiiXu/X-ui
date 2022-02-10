import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Index from './views/index.vue'
import Radio from "./components/Radio";

Vue.config.productionTip = false

Vue.component('x-radio',Radio)

new Vue({
  router,
  store,
  Index,
  render: h => h(App)
}).$mount('#app')
