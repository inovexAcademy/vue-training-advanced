import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import CheckoutView from '@/views/CheckoutView.vue';
import ProductView from '@/views/ProductView.vue';
import LoginView from '@/views/LoginView.vue';
import { useAuthStore } from '@/stores/auth';

export const routes = [
  { path: '/', component: HomeView, name: 'Home' },
  { path: '/checkout', component: CheckoutView, name: 'Checkout' },
  { path: '/product/:productId', component: ProductView, name: 'Product' },
  {
    path: '/product-not-found',
    component: () => import('@/views/NotFoundView.vue'),
    name: 'NotFound',
  },
  {
    path: '/admin',
    component: () => import('@/views/AdminView.vue'),
    name: 'Admin',
    meta: { requiresAdmin: true },
  },
  {
    path: '/login',
    component: LoginView,
    name: 'Login',
    beforeEnter: () => {
      const { isAuthenticated } = useAuthStore();

      if (isAuthenticated) {
        return { name: 'Home' };
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(to => {
  const requiresAdmin = to.meta.requiresAdmin;
  if (!requiresAdmin) return;

  const { isAdmin, isAuthenticated } = useAuthStore();
  if (isAdmin) return;

  if (!isAuthenticated) {
    // redirect to login with query param of redirectUrl
    return { name: 'Login', query: { redirectUrl: to.fullPath } }; //?redirectUrl=http://...
  }

  // redirect away from admin to home, as you are not an admin
  return { name: 'Home' };
});

export default router;
