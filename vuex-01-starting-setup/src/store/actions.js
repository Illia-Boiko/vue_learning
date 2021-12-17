export const actions = {
  login(context) {
    const { commit } = context;

    commit('login');
  },

  logout(context) {
    const { commit } = context;

    commit('logout');
  },
}
