
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import Products from './components/Products';
import Pdetails from './components/Details';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../css/app.scss';

Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(VueRouter);

// defined routes
const routes = [
    {path: '/', component: Products },
    {path: '/products', component: Products },
    {path: '/product/:productId', name: 'pdetails', component: Pdetails, props: true }
];

const router = new VueRouter({
    routes
});

/**
 * Create a fresh Vue Application instance
 */


const app = new Vue({
    router
}).$mount('#app');

