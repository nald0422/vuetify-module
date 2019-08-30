import * as types from './types';

const state = {
    asynchCounter: 0
};

const getters = {
    [types.GET_ASYNCHCOUNTER]: state => {
        return state.asynchCounter;
    }
};

const mutations = {
    [types.MUTATE_INCREMENT_ASYNC]: (state, payload) => {
        state.asynchCounter += payload;
    }
};

const actions = {
    [types.DISPATCH_INCREMENT_ASYNC]: ({
        commit
    }, payload) => {
        setTimeout(() => {
            commit(types.MUTATE_INCREMENT_ASYNC, payload.by)
        }, payload.duration)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}