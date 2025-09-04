import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import VueScan, { type VueScanOptions } from 'z-vue-scan';

const app = createApp(App);

// Global error handler
app.config.errorHandler = (err, instance, info) => {
  console.log('>>>>>>>>>>>>>>>>');
  console.error('🌐 Global error:', err);
  console.log('📦 Vue instance:', instance);
  console.log('ℹ️ Error info:', info);
  console.log('>>>>>>>>>>>>>>>>');

  // Add code for UI notifications, reporting or other error handling logic
};

const isScan =
  document.location.search.includes('scan=true') ||
  document.location.search.includes('scan=1');

app.use<VueScanOptions>(VueScan, {
  enable: isScan,
  displayDuration: 700,
  fadeOutDuration: 400,
});

app.mount('#app');
