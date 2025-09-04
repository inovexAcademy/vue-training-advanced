import { createRouter, createWebHistory, type RouteLocation } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LamaView from '../views/LamaView.vue';
import { lamaData } from '../lama-data';

const routes = [
  {
    path: '/',
    component: HomeView,
    meta: { title: (): string => 'LamaChat | Home' },
  },
  {
    path: '/lama/:id',
    component: LamaView,
    meta: {
      title: (route: RouteLocation): string =>
        `LamaChat | Chat with ${lamaData.find(lama => lama.id === Number(route.params.id))?.name}`,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach(to => {
  document.title = to.meta.title(to);
});

export default router;
