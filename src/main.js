import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import "static/icon-font/iconfont.css"

Vue.config.productionTip = false

import dragmove from "@/components/index"

Vue.use(dragmove)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
