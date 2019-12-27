import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

// import example from './module-example'

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

const Store = new Vuex.Store({
  state: {
    users: "",
    search: ""
  },
  mutations: {
    sort(state) {
      function compare(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }

      state.users.sort(compare);
    },

    updateSearch(state, payload) {
      state.search = payload;
    },
    users(state, payload) {
      state.users = payload;
      console.log(state.users);
    }
  },
  actions: {
    getUsers({ commit }) {
      axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
        commit("users", res.data);
      });
    },

    sort({ commit }) {
      commit("sort");
    }
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    search(state) {
      return state.search;
    }
  }

  // enable strict mode (adds overhead!)
  // for dev mode only
});
export default Store;
