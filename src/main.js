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

Vue.config.productionTip = false

Vue.component('app-servers', VueDemo)

Vue.directive('highlight', {
    bind(el, binding, vnode) {
        // el.style.backgroundColor = 'green';
        // el.style.backgroundColor = binding.value;
        if (binding.arg == 'background') {
            el.style.backgroundColor = binding.value.backgroundColor;
            el.style.color = binding.value.secondColor;
            if (binding.value == "black") {
                el.style.color = "white";
            }
        } else {
            el.style.color = binding.value;
        }
    }
})

new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
}).$mount('#app')