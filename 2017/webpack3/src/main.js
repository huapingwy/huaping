import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import routerConfig from './router';
Vue.use(VueRouter);
var router = new VueRouter(routerConfig)
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
