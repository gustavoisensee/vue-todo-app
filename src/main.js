import 'es6-promise/auto';
import Vue from 'vue';
import store from './store';
import App from './components/App';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount('#app');
