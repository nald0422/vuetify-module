const state = {
    counter: 0,
};

const getters = {
    getCounter: state => {
        return state.counter
    },
    doubleCounter: state => {
        return state.counter * 2
    },
    // counterClicks() {
    //     return state.counter * 2
    // }
};

const mutations = {
    increment: state => {
        state.counter++;
    },
    decrement: state => {
        state.counter--;
    },
    incrementAsynch(state, payload) {
        state.asynchCounter += payload;
    }
};

const actions = {};

export default {
    state,
    getters,
    mutations,
    actions
}