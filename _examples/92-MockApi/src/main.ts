import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { client } from '@/api/client.gen';

// Configure API client (MSW will intercept these requests)
client.setConfig({ baseUrl: '/api' });

const accessToken = 'unknown'; // msw to the rescue
client.interceptors.request.use(request => {
  request.headers.set('Authorization', `Bearer ${accessToken}`);
  return request;
});

const app = createApp(App);

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
