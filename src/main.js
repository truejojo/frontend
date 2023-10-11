import { createApp } from 'vue/dist/vue.esm-bundler.js';
import { createPinia } from 'pinia';

import mitt from 'mitt';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';

const emitter = mitt();
const app = createApp({
  template: '<RouterView />',
});

app.provide('emitter', emitter);
app.use(createPinia());
app.use(router);

app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
