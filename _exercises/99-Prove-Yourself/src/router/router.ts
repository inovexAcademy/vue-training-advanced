import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import CheckoutView from '@/views/CheckoutView.vue';

export const routes = [
  { path: '/', component: HomeView },
  { path: '/checkout', component: CheckoutView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
