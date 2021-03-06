import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'
import store from './store'
import request from './config/request'

Vue.prototype.$bus = new Vue()
Vue.prototype.$store = store;
Vue.prototype.$http = request

Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
