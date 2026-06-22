import { createRouter, createWebHistory } from 'vue-router';

import CheckoutView from '@/views/CheckoutView.vue';
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import ProductView from '@/views/ProductView.vue';

export const routes = [
  { path: '/', component: HomeView },
  { path: '/checkout', component: CheckoutView },
  { path: '/product/:productId', component: ProductView },
  { path: '/product-not-found', component: NotFoundView },
  {
    path: '/:catch(.*)*',
    redirect: { name: 'NotFound' },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
