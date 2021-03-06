import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/reset.css'
import './assets/css/iconfont.css'
import './assets/js/font.js'

import FastClick from 'fastclick'
FastClick.attach(document.body);

import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/css/swiper.css'
Vue.use(VueAwesomeSwiper, )

import animate from 'animate.css'

import axios from 'axios'
Vue.prototype.axios=axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  animate,
  render: h => h(App)
}).$mount('#app')
