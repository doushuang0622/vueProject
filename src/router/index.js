import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import productList from '@/views/productList'
import homepage from '@/views/homepage'
import componentTest from '@/views/parent'
import login from '@/views/login'
import test from '@/views/test'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/productList',
      name: 'productList',
      component: productList
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: homepage
    },
    {
      path: '/componentTest',
      name: 'componentTest',
      component: componentTest
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
