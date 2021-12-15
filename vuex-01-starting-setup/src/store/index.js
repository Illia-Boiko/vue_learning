import { createStore } from 'vuex';
import { counterModule } from './counter';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

const store = createStore({
  modules: {
    counter: counterModule,
  },

  state: () => ({
    isAuth: false,
  }),

  mutations,
  getters,
  actions,
});

export default store;
