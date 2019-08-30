import * as types from './types';

const state = {
    counter: 0,
};

const getters = {
    [types.GET_COUNTER]: state => {
        return state.counter
    },
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2
    },
    [types.CLICK_COUNTER]() {
        return state.counter * 2
    }
};

const mutations = {
    [types.MUTATE_INCREMENT_COUNTER]: (state, payload) => {
        state.counter++;
    },
    [types.MUTATE_DECREMENT_COUNTER]: (state, payload) => {
        state.counter--;
    },
};

const actions = {
    [types.DISPATCH_COUNTER_INCREMENT]({
        commit
    }, payload) {
        commit(types.MUTATE_INCREMENT_COUNTER)
    },
    [types.DISPATCH_COUNTER_DECREMENT]({
        commit
    }, payload) {
        commit(types.MUTATE_DECREMENT_COUNTER)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}