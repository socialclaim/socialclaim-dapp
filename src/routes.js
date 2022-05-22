import { createWebHistory, createRouter } from 'vue-router';

const Home = () => import('./pages/Home.vue');
const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
