const state = {
    asynchCounter: 0
};

const getters = {
    getAsynchCtr: state => {
        return state.asynchCounter;
    }
};

const mutations = {
    incrementAsynch(state, payload) {
        state.asynchCounter += payload;
    }
};

const actions = {
    incrementAsynchronous({
        commit
    }, payload) {
        setTimeout(() => {
            commit('incrementAsynch', payload.amount)
        }, 500)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}