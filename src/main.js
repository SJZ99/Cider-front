import Vue from 'vue'
import App from './App.vue'
import vuetify from './vuetify'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

axios.interceptors.request.use(function (config) {
  // bring token
  const token = store.state.token;
  config.headers.Authorization = token;
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


new Vue({
  vuetify,
  router,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')
