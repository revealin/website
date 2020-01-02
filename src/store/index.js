import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, Axios);
export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    SET_USERS: (state, users) => {
      state.users = users
    },
  },
  actions: {
    loadUsers({ commit }) {
      Axios
          .get('http://downstacks.com:8080/users')
          .then(r => r.data)
          .then((users) => {
            commit('SET_USERS', users);
          });
    },
  },
})
