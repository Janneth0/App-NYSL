import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
 import firebase from 'firebase/app'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAGTLksFu2sx384_OqjmWocS2L5yYOts1M",
  authDomain: "nysl-app-2020.firebaseapp.com",
  databaseURL: "https://nysl-app-2020.firebaseio.com",
  projectId: "nysl-app-2020",
  storageBucket: "nysl-app-2020.appspot.com",
  messagingSenderId: "947170369073",
  appId: "1:947170369073:web:9047bf21c2bf248008bf10",
  measurementId: "G-4SCN8VMXSR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
