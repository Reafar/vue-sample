import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import store from './vuex/store';
import router from './router';

let props = null;

if (typeof (parent.getInlineDialogArguments) === 'function') {
    props = parent.getInlineDialogArguments();
}

if (typeof (props) === 'undefined' || props === null) {
    props = {
        userId: 'username',
        url: ''
    }
}

Vue.use(VueRouter);

// Отключение предупреждения о работе в режиме разработки при запуске Vue
Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: h => h(App, { props })
}).$mount('#app');