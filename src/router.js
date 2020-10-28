import VueRouter from 'vue-router';
import App from './components/App';

const About = () => import('./components/About');

const routes = [
  { path: '/', component: App },
  { path: '/about', component: About }
]

export default new VueRouter({
  routes
});
