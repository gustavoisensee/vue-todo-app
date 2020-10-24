import 'es6-promise/auto';
import Vue from 'vue';
import store from './store';
import router from './router';
import Main from './components/Main';

Vue.config.productionTip = false;

new Vue({
  render: h => h(Main),
  router,
  store
}).$mount('#app');
