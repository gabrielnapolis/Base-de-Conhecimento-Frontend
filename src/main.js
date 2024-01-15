import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App.vue'
import './config/bootstrap'
import store from './config/store'
import router from './config/router'
import './config/msgs'

Vue.config.productionTip = false

// TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IkdhYnJpZWwiLCJlbWFpbCI6ImdhYnJpZWxuYXBvbGlzMTYwNEBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNzA1MzQyMjI1LCJleHAiOjE3MDU2MDE0MjV9.6RLPgkmHfWg9i_Tn7dwqwacWd5m_Fs4QfZzrWTELwfA'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
