import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './vue/App.vue';
import Navbar from './vue/Navbar.vue';
import Footer from './vue/Footer.vue';
import HomeContent from './vue/HomeContent.vue';
import AppList from './vue/ApplicationList.vue';
import Contacts from './vue/Contacts.vue';

Vue.component('app-navbar', Navbar);
Vue.component('app-footer', Footer);
Vue.component('app-content', HomeContent);
Vue.use(VueRouter);

const routes = [
    {path: '/', component: HomeContent},
    {path: '/apps', component: AppList},
    {path: '/contacts', component: Contacts}
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});