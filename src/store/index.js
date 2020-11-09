import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datanysl:{}
  },
  mutations: {
    insertData(state,payload){
      state.datanysl[payload.order] = payload.Games
    }
  }, 
  actions: {
  },
  modules: {
  }
})
