import { createApp } from 'vue/dist/vue.esm-bundler.js';
import { createPinia } from 'pinia';

import router from './router';

import 'bootstrap/dist/css/bootstrap.css';

const app = createApp({
  template: '<RouterView />',
});

app.use(createPinia());
app.use(router);
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
