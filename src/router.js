import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App';

const About = () => import('./components/About');

Vue.use(VueRouter);

const routes = [
  { path: '/', component: App },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes
});



export default router;
