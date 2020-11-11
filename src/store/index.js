import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datanysl:{},
    locations:{}
  },
  mutations: {
    insertData(state,payload){
      state.datanysl = payload.nysl
    },
    insertLocation(state,playload){
      state.locations=playload.location
    }
  }, 
  actions: {
  },
  modules: {
  }
})
