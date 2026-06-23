import { createRouter, createWebHistory } from 'vue-router';

import CheckoutView from '@/views/CheckoutView.vue';
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import ProductView from '@/views/ProductView.vue';

// ⚠️ Beware of using the authStore directly in the router file as pinia must be initialized first.
// You can access a store within a guard function.

export const routes = [
  { path: '/', component: HomeView, name: 'Home' },
  { path: '/checkout', component: CheckoutView, name: 'Checkout' },
  { path: '/product/:productId', component: ProductView, name: 'Product' },
  { path: '/product-not-found', component: NotFoundView, name: 'NotFound' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
