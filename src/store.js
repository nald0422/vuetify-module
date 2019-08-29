import Vue from 'vue'
import Vuex from 'vuex'
import Counter from './modules/Counter/counter.js'
import asynchCounter from './modules/AsynchCounter/asynchCounter'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Counter,
        asynchCounter
    }
})