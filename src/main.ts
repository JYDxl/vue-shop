import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import './plugins/element.js'
import './assets/fonts/iconfont.css'
import './assets/css/global.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://ubuntu/shop'
// noinspection JSUnusedGlobalSymbols
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
