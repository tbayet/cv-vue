// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import VueCharts from 'vue-charts'
import Vuelidate from 'vuelidate'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Quasar) // Install Quasar Framework
Vue.use(VueCharts)
Vue.use(Vuelidate)
Vue.prototype.$http = axios

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
import './assets/icomoon/Icomoon-Regular.css'
// import 'quasar-extras/ionicons'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

import 'quasar-extras/animate/fadeInRight.css'
import 'quasar-extras/animate/fadeOutRight.css'

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    render: h => h(require('./App').default)
  })
})
