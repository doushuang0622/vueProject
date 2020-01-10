// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import fastclick from 'fastclick' //
fastclick.attach(document.body) //这样就能解决body下按钮点击300ms的延迟

import store from './store'

Vue.config.productionTip = false
/* eslint-disable no-new */



new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
