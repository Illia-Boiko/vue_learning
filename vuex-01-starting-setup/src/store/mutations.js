export const mutations = {
  login(state) {
    state.isAuth = true;
  },

  logout(state) {
    state.isAuth = false;
  },
}
