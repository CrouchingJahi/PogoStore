import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import Home from './page/Home.vue'
import Add from './page/Add.vue'
import Admin from './page/Admin.vue'
import Login from './page/Login.vue'

import config from '../keys'
import * as firebase from 'firebase'

firebase.initializeApp(config)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/add', component: Add },
    { path: '/admin', component: Admin },
  ]
})

router.beforeEach((to, from, next) => {
  if (true || to.path == '/login' || firebase.auth().currentUser) {
    next()
  }
  else {
    next('/login')
  }
})

/*eslint no-new: "off"*/
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

window.firebase = firebase
