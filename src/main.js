import Vue from 'vue';

import './assets/css/tailwind.css';

import App from './App.vue';
import router from './router';

import store from './stores';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
