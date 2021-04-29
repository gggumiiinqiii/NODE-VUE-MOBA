import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import '@/assets/iconfont/iconfont.css'
import '@/assets/less/style.less'

import Card from './components/Card.vue'
Vue.component('m-card',Card)

import ListCard from './components/ListCard.vue'
Vue.component('m-list-card',ListCard)

//http请求加载
// import http from './http'
// Vue.prototype.$http = http
import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL:process.env.VUE_APP_API_URL || '/web/api'
})

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
import router from './router'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
