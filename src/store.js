import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: "",
    isLogin: false,
  },
  mutations: {
    SET_AUTH (state, options) {
      state.token = options.token;
      state.isLogin = options.isLogin;
    }
  },
  actions: {
    setAuth(context, options) {
      context.commit('SET_AUTH', {
        token: options.token,
        isLogin: options.isLogin
      })
    }
  },
  plugins: [
    new VuexPersistence({
        reducer: state => ({
            token: state.token
        })
    }).plugin
  ] 
})
