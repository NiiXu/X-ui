import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Index from './views/index.vue'
import Radio from "./components/Radio";
import Button from "./components/Button";
import ButtonGroup from "./components/ButtonGroup";
import Icon from "./components/Icon"
import Input from "./components/input"
import Col from "./components/Col";
import Row from "./components/Row";
import Popover from "./components/Popover";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Sider from "./components/Sider";
import Slides from "./components/Slides";
import SlidesItem from "./components/Slides-item";
import Tabs from "./components/Tabs";
import TabsHead from "./components/Tabs-head";
import TabsBody from "./components/Tabs-body";
import TabsItem from "./components/Tabs-item";
import TabsPane from "./components/Tabs-pane";

Vue.config.productionTip = false


Vue.component('x-radio',Radio)
Vue.component("x-button",Button)
Vue.component('x-buttongroup',ButtonGroup)
Vue.component('x-icon',Icon)
Vue.component('x-input',Input)
Vue.component('x-col',Col)
Vue.component('x-row', Row)
Vue.component("x-popover",Popover)
Vue.component('x-layout',Layout)
Vue.component('x-header',Header)
Vue.component('x-content',Content)
Vue.component('x-footer',Footer)
Vue.component('x-sider',Sider)
Vue.component('x-slides',Slides)
Vue.component('x-slides-item',SlidesItem)
Vue.component('x-slides',Slides)
Vue.component('x-tabs',Tabs)
Vue.component("x-tabs-head", TabsHead)
Vue.component("x-tabs-body", TabsBody)
Vue.component("x-tabs-item", TabsItem)
Vue.component("x-tabs-pane", TabsPane)


new Vue({
  router,
  store,
  Index,
  render: h => h(App)
}).$mount('#app')
