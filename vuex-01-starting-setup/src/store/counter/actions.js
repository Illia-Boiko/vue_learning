export const actions = {
  increment(context) {
    const { commit } = context;

    commit('increment');
  },

  decrement(context, payload) {
    const { commit } = context;
    console.log(context);

    commit('decrement', payload);
  },
}
