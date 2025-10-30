import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const isUserAdmin = false; // change this to true to test admin access

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/settings',
    name: 'Settings',
    // Try commenting out this next line! What do you observe?
    component: () => import('../views/SettingsView.vue'),
    redirect: '/settings/language',
    children: [
      // If no redirect is set on Settings, the <RouterView> inside SettingsView.vue would be empty
      // We could add a route with an empty path to fix that as well:
      /* {
        path: '',
        component: () => import('../views/SettingsHomeView.vue'),
      }, */
      {
        path: 'language',
        name: 'LanguageSettings',
        component: () => import('../views/LanguageSettingsView.vue'),
      },
      {
        path: 'theme',
        name: 'ThemeSettings',
        alias: 'appearance',
        component: () => import('../views/ThemeSettingsView.vue'),
      },
      {
        path: 'admin',
        name: 'AdminSettings',
        component: () => import('../views/AdminSettingsView.vue'),
        beforeEnter: () => {
          if (!isUserAdmin) {
            alert('Access denied. Admins only. Redirecting to Home Page');
            return '/';
          }
        },
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
