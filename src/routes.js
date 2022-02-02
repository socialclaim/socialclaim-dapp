import { createWebHistory, createRouter } from 'vue-router';

const Home = () => import('./pages/Home.vue');
const Location = () => import('./pages/Location.vue');
const PrivacyPolicy = () => import('./pages/PrivacyPolicy.vue');
const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'PrivacyPolicy',
    path: '/privacy-policy',
    component: PrivacyPolicy,
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
