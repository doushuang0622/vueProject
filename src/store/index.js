import Vue from 'vue'
import Vuex from 'Vuex' //引入
import collection from './modules/collection'
import footer from './modules/footerStatus'

Vue.use(Vuex) //使用

// const store = new Vuex.Store({
//   // ...
//   state: {
//     count: 1
//   }
// })

// export default store //导出store

export default new Vuex.Store({
  modules: {
    collection,
    footer
  }
})
