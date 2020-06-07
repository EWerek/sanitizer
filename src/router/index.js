import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './../components/MainPage.vue'
import Shipping from './../components/Shipping.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: HomePage },
    { path: '/home', component: HomePage },
    { path: '/shipping', component: Shipping },
  ]
})