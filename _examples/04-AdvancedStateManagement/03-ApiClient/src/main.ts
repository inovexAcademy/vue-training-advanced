import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { client } from '@/api/client.gen';

const accessToken = 'abc'; // TODO

// client.setConfig({ baseUrl: '' }) // TODO

client.interceptors.request.use(request => {
  request.headers.set('Authorization', `Bearer ${accessToken}`);
  return request;
});
createApp(App).mount('#app');
