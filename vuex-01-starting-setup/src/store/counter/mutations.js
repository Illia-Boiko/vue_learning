export const mutations = {
  increment(state) {
    state.counter++;
  },

  decrement(state, payload) {
    state.counter -= payload.value;
  },
}
