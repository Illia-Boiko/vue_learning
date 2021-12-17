export const getters = {
  finalCount(state) {
    return state.counter;
  },

  normalizeCount(_, getters) {
    const finalCounter = getters.finalCount;

    if (finalCounter > 100) {
      return 100;
    } else if (finalCounter < 0) {
      return 0;
    } else {
      return finalCounter;
    }
  },
}
