import { createWebHistory, createRouter } from 'vue-router';

const Home = () => import('./pages/Home.vue');
const Location = () => import('./pages/Location.vue');

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Location',
    path: '/:slug',
    component: Location,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
