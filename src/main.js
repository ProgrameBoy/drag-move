import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import dragmove from "@/components/index"

Vue.use(dragmove)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
