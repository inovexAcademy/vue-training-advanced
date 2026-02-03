import App from '@/App.vue';
import { createPinia } from 'pinia';
import { createOnyx } from 'sit-onyx';
import { createApp } from 'vue';
import { router } from './router/router';

import 'sit-onyx/global.css';
import 'sit-onyx/style.css';
import './styles/index.scss';

/**
 * Setup up vue app. This function should not be called twice. Its exported only for testing.
 */
export async function setupApp() {
  const onyx = createOnyx({ router });
  const app = createApp(App).use(createPinia()).use(onyx).use(router);

  await prepareApp();

  app.mount('#app');
  return app;
}
setupApp();

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
      onUnhandledRequest(request, print) {
        // Ignore any requests containing "dummyjson.com" in their URL.
        if (request.url.includes('dummyjson.com')) {
          return;
        }

        // Otherwise, print an unhandled request warning.
        print.warning();
      },
    });
  }

  return Promise.resolve();
}
