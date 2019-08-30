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