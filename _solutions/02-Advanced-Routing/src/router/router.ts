import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router';

import { useAuthStore } from '@/stores/auth';
import AdminView from '@/views/AdminView.vue';
import CheckoutView from '@/views/CheckoutView.vue';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import ProductView from '@/views/ProductView.vue';

export const routes = [
  { path: '/', component: HomeView, name: 'Home' },
  { path: '/checkout', component: CheckoutView, name: 'Checkout' },
  { path: '/product/:productId', component: ProductView, name: 'Product' },
  { path: '/product-not-found', component: NotFoundView, name: 'NotFound' },
  { path: '/admin', component: AdminView, name: 'Admin', meta: { requiresAdmin: true } },
  {
    path: '/login',
    component: LoginView,
    name: 'Login',
    beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
      const authStore = useAuthStore();

      if (authStore.isAuthenticated) {
        globalThis.alert('You are already logged in!');
        return { name: 'Home' };
      }
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  const authStore = useAuthStore();
  if (authStore.isAdmin) return;

  if (to.name === 'Admin') {
    if (authStore.isAuthenticated) {
      const confirm = globalThis.confirm(
        'You are logged in as User, please login as an admin to enter the Admin Dashboard'
      );
      if (confirm) {
        return { name: 'Home' };
      }
    } else {
      return { name: 'Login', query: { redirectUrl: to.fullPath } };
    }
  }
  return true;
});

export default router;
