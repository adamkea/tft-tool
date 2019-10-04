import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Routes from './routes'
import '@/assets/css/main.css'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
