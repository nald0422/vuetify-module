import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import jQuery from 'jquery';
import 'popper.js';

import './assets/app.scss'
import VueDemo from '@/components/Tutorial.vue'
import HelloWorld from "@/components/HelloWorld";

export const eventBus = new Vue({
    methods: {
        changeAge(age) {
            this.$emit('ageEdit', age)
        },
        resetAge(age) {
            this.$emit('ageReset', age)
        }
    }
});

Vue.component('app-servers', VueDemo)
Vue.config.productionTip = false

new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
}).$mount('#app')