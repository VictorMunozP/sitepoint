import Vue from 'vue'
import App from './App'
import router from './router'
import 'chart.js'
import 'hchs-vue-charts'

Vue.use(window.VueCharts)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
