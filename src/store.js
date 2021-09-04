import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    isLogin: false,
    name: '',
    role: '',

    barImage: '',
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',

    content: '',
  },

  mutations: {
    SET_AUTH (state, options) {
      state.token = options.token;
      state.isLogin = options.isLogin;
    },
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload;
    },
    SET_ARTICLE (state, article) {
      state.content = article;
    }
  },

  actions: {

  },

  plugins: [
    new VuexPersistence({
      reducer: state => ({
        token: state.token,
        content: state.content,
      })
    }).plugin
  ] 
})
