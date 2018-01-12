import Vue from 'vue'
import App from './App'

import MButton from './m/button'
import MNavbar from './m/navbar'
import router from './router'
import "./assets/main.css"
import "./assets/scrollbar.css"

Vue.use(MButton)
Vue.use(MNavbar)

Vue.config.productionTip = false

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

window.app = app
