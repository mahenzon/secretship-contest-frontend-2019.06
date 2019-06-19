import Vue from 'vue'
import Axios from 'axios'
import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'
import config from './config'


const axios = Axios.create({ baseURL: config.baseURL })
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
