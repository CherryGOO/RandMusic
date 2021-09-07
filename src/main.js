import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import 'lib-flexible' // 引入调整页面比例

import './common/rem' // 引入rem

import './common/stylesheets/main.less' // 引入重置样式表

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
