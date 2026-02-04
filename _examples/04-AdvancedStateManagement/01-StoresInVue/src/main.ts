import './assets/main.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import VueScan, { type VueScanOptions } from 'z-vue-scan';
import App from './App.vue';

const app = createApp(App);

const isScan =
  document.location.search.includes('scan=true') ||
  document.location.search.includes('scan=1');

app.use<VueScanOptions>(VueScan, {
  enable: isScan,
  displayDuration: 700,
  fadeOutDuration: 400,
});
app.use(createPinia())

app.mount('#app');
