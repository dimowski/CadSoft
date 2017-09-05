import Vue from 'vue';
import App from './vue/App.vue';
import Navbar from './vue/Navbar.vue';
import Footer from './vue/Footer.vue';
import Content from './vue/Content.vue';

import VueRouter from 'vue-router';

Vue.component('app-navbar', Navbar);
Vue.component('app-footer', Footer);
Vue.component('app-content', Content);

new Vue({
  el: '#app',
  render: h => h(App)
});

const router = new VueRouter();

// Pointing routes to the components they should use
router.map({
    '/': {
        component: Content
    }
});

// Any invalid route will redirect to home
router.redirect({
    '*': '/'
});

router.start(App, '#app');
