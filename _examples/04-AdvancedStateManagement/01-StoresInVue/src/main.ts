import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { client } from '@/api/client.gen';
import VueScan, { type VueScanOptions } from 'z-vue-scan';

// Configure API client (MSW will intercept these requests)
client.setConfig({ baseUrl: '/api' });

const accessToken = 'unknown'; // msw to the rescue
client.interceptors.request.use(request => {
  request.headers.set('Authorization', `Bearer ${accessToken}`);
  return request;
});

const app = createApp(App);

app.use(createPinia());

const isScan =
  document.location.search.includes('scan=true') ||
  document.location.search.includes('scan=1');

app.use<VueScanOptions>(VueScan, {
  enable: isScan,
  displayDuration: 700,
  fadeOutDuration: 400,
});

prepareApp().then(() => {
  app.mount('#app');
});

async function prepareApp() {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'test'
  ) {
    const { worker } = await import('./mocks/browser');
    return worker.start({
      serviceWorker: {
        url: '/mockServiceWorker.js',
      },
    });
  }

  return Promise.resolve();
}
