import 'es6-promise/auto';
import { createApp } from 'vue';
import store from './store';
import router from './router';
import Main from './components/Main';

//  Vue.config.productionTip = false;

createApp(Main)
  .use(store)
  .use(router)
  .mount('#app');
