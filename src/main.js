import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';

import {routes} from './routes.js';
import store from './store/store.js';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(Axios);

export const http = Axios.create({
    baseURL: 'https://vue-stock-trader-d0b11.firebaseio.com/'
})

Vue.filter('currency', (value) => {
    return '£' + value.toLocaleString();
})

const router = new VueRouter({
    mode: 'history',
    routes: routes,
})

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
