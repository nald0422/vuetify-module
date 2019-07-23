import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import {
    Verify
} from 'crypto';

import HelloWorld from "@/components/HelloWorld";

var myTask = Vue.component('my-cmp', {
    data: function () {
        return {
            message: "Hello",
            input: "",
            link: "http://google.com",
            counter: 0,
            x: 0,
            y: 0
        }
    },

    methods: {
        result() {
            return this.counter > 5 ? "Greater than 5" : "Less than 5";
        },
        sayHello() {
            return "Hello World!";
        },
        increase(step) {
            this.counter += step;
        },
        updateCoordinates: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
    },


    template: `<div id="app"><div class="container-fluid m-3"><div class="row"> 
     <div class="col-sm">
      <input v-model="message" />
     </div>
     <div class="col-sm">
      <p>{{ message }}</p>
     </div>
     <div class="col-sm">
      <p>Value returned by method: {{ sayHello() }}</p>
     </div>
    </div>
    <hr />
    <div class="row">
     <div class="col-sm">
      <p>
       <a v-bind:href="link">Google</a>
      </p>
     </div>
     <div class="col-sm">
      <v-input type="text" v-model="input" hint="Input"/>
      <p>{{input}}</p>
     </div>
     <div class="col-sm">
     <v-btn color="info" v-on:click="counter++">Increase</v-btn>
     <v-btn color="info" v-on:click="counter--">Decrease</v-btn>
        <p>Counter: {{ counter }}</p>
        <p>Result: {{ result() }}</p>
     </div>
    </div>
    </div>
    </div>
 `
});

Vue.config.productionTip = false

new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
}).$mount('#app')