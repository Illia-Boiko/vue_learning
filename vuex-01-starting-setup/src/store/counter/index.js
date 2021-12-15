import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

export const counterModule = {
  state: () => ({
    counter: 0,
  }),

  actions,
  mutations,
  getters,

  namespaced: true,
};
