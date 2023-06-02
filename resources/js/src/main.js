import './assets/css/main.scss'

import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'
import router from './router/router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VeeValidate from 'vee-validate'
import axiosOptions from './plugins/axios'

axiosOptions()

Vue.use(BootstrapVue)
Vue.use(VeeValidate)
// Add global to Vue
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
})
