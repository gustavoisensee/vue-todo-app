import { createRouter, createWebHistory } from 'vue-router';
import App from './components/App';

const routes = [
  { path: '/', name: 'Home', component: App },
  {
    path: '/about',
    name: 'About',
    component: () => import('./components/About')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
