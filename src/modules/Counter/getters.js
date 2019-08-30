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