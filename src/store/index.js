import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app"
import "firebase/auth"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:null,
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
    },
    // changeUserInfo(state,payload){
    //   state.user=payload
    // },
    listenUser(state){
       firebase.auth().onAuthStateChanged(user=>{
         if(user){
           state.user=user
         }else{
           state.user=null
         }
       });
    }
  }, 
  actions: {
  },
  modules: {
  }
})
