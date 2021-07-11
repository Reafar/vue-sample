import Home from './components/Home/index.vue';
import VueRouter from "vue-router";

const routes = [
    { path: '/', name: 'Home', component: Home }
]

export default new VueRouter({
    mode: 'hash',
    base: '/',
    saveScrollPosition: true,
    routes: routes
})