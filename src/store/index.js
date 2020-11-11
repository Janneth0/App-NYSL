import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datanysl:{},
    locations:{},
    teams:{},
  },
  mutations: {
    insertData(state,payload){
      state.datanysl = payload.nysl
    },
    insertLocation(state,playload){
      state.locations=playload.location
    },
    insertTeams(state,playload){
      state.teams=playload.teamss
    }
  }, 
  actions: {
  },
  modules: {
  }
})
