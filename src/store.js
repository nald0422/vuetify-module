import Vue from 'vue'
import Vuex from 'vuex'

import AsynchCounter from './modules/asynchCounter'
import Counter from './modules/counter.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Counter,
        AsynchCounter
    }
})