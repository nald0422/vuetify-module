const actions = {
    incrementAsynchronous({
        commit
    }, payload) {
        setTimeout(() => {
            commit('incrementAsynch', payload.amount)
        }, 500)
    }
};