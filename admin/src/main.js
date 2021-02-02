import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

Vue.config.productionTip = false
import http from './http'
// 加载到原型链上面，使用this.$http来访问
Vue.prototype.$http = http
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
