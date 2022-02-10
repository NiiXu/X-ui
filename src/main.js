import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Index from './views/index.vue'
import Radio from "./components/Radio";
import Button from "./components/Button";
import ButtonGroup from "./components/ButtonGroup";
import Icon from "./components/Icon"


Vue.config.productionTip = false


Vue.component('x-radio',Radio)
Vue.component("x-button",Button)
Vue.component('x-buttongroup',ButtonGroup)
Vue.component('x-icon',Icon)

new Vue({
  router,
  store,
  Index,
  render: h => h(App)
}).$mount('#app')
