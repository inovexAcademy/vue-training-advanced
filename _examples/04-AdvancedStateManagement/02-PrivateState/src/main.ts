import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import VueScan, { type VueScanOptions } from 'z-vue-scan';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(pinia);

const isScan =
  document.location.search.includes('scan=true') ||
  document.location.search.includes('scan=1');

app.use<VueScanOptions>(VueScan, {
  enable: isScan,
  displayDuration: 700,
  fadeOutDuration: 400,
});

app.mount('#app');
