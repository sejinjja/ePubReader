import Vue from 'vue'
import axios from 'axios'

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'

import '@/assets/common/css-reset.css'

import App from './App'
import router from './router'
import store from './store'

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas)

// Register the component globally
Vue.component('fas-i', FontAwesomeIcon)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: {App},
  router,
  store,
  template: '<App/>'
}).$mount('#app')
