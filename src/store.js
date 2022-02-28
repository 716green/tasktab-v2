import { createStore } from "vuex";

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      user: null,
      userEmail: "bob@bbass.co",
    };
  },
  actions: {
    setUser({ commit }, payload) {
      commit("SET_USER", payload);
    },
    setUserEmail({ commit }, payload) {
      commit("SET_USER_EMAIL", payload);
    },
    signIn({ commit }, payload) {
      // Set localstorage
      console.log({ payload });
      const { firebaseUser } = payload;
      commit("SET_USER", firebaseUser);
      // todo - find actual email property
      const userEmail = firebaseUser.email;
      commit("SET_USER_EMAIL", userEmail);
    },
    signOut({ commit }) {
      // Remove localstorage
      commit("SET_USER", null);
      commit("SET_USER_EMAIL", null);
    },
  },
  mutations: {
    SET_USER(payload) {
      state.user = payload;
    },
    SET_USER_EMAIL(payload) {
      state.userEmail = payload;
    },
  },
  getters: {
    getUser: (state) => state.user,
    getUserEmail: (state) => state.userEmail,
    getIsAuthenticated: (state) => !!state.user,
  },
});
