import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, Axios);
export default new Vuex.Store({
  state: {
    users: [],
    status: '',
    token: '',
    user: {},
    navBar:['Statistiques','Users','Reports','Bannissements']
  },
  mutations: {
    SET_USERS: (state, users) => {
      state.users = users
    },
    AUTH_REQUEST(state) {
      state.status = 'loading'
    },
    AUTH_SUCCES(state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    AUTH_ERROR(state) {
      state.status = 'error'
    },
    LOGOUT(state) {
      state.status = ''
      state.token = ''
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
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('AUTH_REQUEST');
        Axios({ url: 'http://downstacks.com:8080/auth/signin', data: user, method: 'POST' })
            .then(resp => {
              const token = resp.data.token
              const user = resp.data.user
              localStorage.setItem('token', token)
              // Add the following line:
              Axios.defaults.headers.common['Authorization'] = token
              commit('AUTH_SUCCES', token, user)
              resolve(resp)
            })
            .catch(err => {
              commit('AUTH_ERROR')
              localStorage.removeItem('token')
              reject(err)
            })
      })
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('LOGOUT')
        localStorage.removeItem('token')
        delete Axios.defaults.headers.common['Authorization']
        resolve()
      })
    },
    deleteUser({ commit }, id) {
      return new Promise((resolve, reject) => {
        Axios({url: `http://downstacks.com:8080/users/${id}`, method: 'DELETE' })
            .then(resp => {
              console.log(commit);
              return resp;
            })
            .catch(err => {
              reject(err)
            })
      })
    },
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    countUser: state => state.users.length,
    reportedUser: state =>  state.users.filter(users => users.banned)
  },
});
