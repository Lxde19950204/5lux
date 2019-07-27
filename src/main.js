import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/js/flexble';

import axios from 'axios';

Vue.prototype.$axios=axios;

axios.interceptors.request.use(config=>{
    
    return config
})
axios.interceptors.response.use((res)=>{

    return res.data.data
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
