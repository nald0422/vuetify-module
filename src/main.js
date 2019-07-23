import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VueDemo from '@/components/Tutorial.vue'
import {
    Verify
} from 'crypto';

import HelloWorld from "@/components/HelloWorld";

Vue.component('app-servers', VueDemo)

Vue.config.productionTip = false

new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
}).$mount('#app')