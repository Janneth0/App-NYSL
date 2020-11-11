<template>
  <div id="app">
    <Header />
    <div class="main-view"><router-view /></div>
    <Nav />
  </div>
</template>

<script>
// @ is an alias to /src
// import Vue from "vue";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Header from "@/components/Header.vue";
// Install BootstrapVue
// Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);
import Nav from "@/components/Nav.vue";

import { mapState, mapMutations } from "vuex";

export default {
  components: {
    Header,
    Nav,
  },
  computed: {
    ...mapState(["nysldata"]),
  },
  data: function () {
    return {
      nysl: [],
      // team: [],
    };
  },
  methods: {
    ...mapMutations(["insertData","insertLocation"]),
    getData: async function (api) {
      let promise = await fetch(api);
      let isOk = promise.ok;
      let json;
      if (isOk) {
        json = await promise.json();
      } else {
        alert(promise.status);
        return 0;
      }
      this.nysl = json.Games;
      console.log(json)
      // this.team = this.getTeams();
      this.insertData({nysl: json.Games });
      this.insertLocation({location: json.Location });
      console.log(this.nysl); //SI muestra todos los datos del JSON
    },
    //Busca todos los grupos y los ordena
    // getTeams() {
    //   for (let i = 0; i < this.nysl.length; i++) {
    //     if (!this.team.includes(this.nysl[i].team1)) {
    //       this.team.push(this.nysl[i].team1);
    //     }
    //   }
    //   this.team.sort();
    //   console.log(this.team);
    // },
  },
  beforeMount() {
    this.getData("datanysl.json");
    }
};
</script>

<style lang="scss">
* {
  left: 0;
  right: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#header {
  position: fixed;
  top: 0vh !important;
  color: beige;
  z-index: 999;
  padding: 0px !important;

}
.modal-backdrop {
  height: 0 !important;
}
#nav,
#header {
  background: #032e3b !important;
  text-align: center;
  height: 9vh;
  padding: 10px;
  i {
    text-align: center;
    font-size: 2rem;
    width: 20vw;
  }
  a {
    // -webkit-text-fill-color: yellowgreen;
    font-size: 110%;
    -webkit-text-stroke: 0.4px black;
     font-weight: 900; 
    font-weight: bold;
    color: #42b983;
    border: #03394a;
    text-align: center;
    &.router-link-active {
      color: #a4ff4a !important;
      
    }
  }
  .dropdown-menu {
     background: #03394a;
  }
}

h1 {
  position: fixed;
  font-size: 25px;
  padding:  23px 10px 12px 10px;
  margin-top: 0;
  text-align: center;
  top: 11vh;
  background-color: #a4ff4a;
}
#tituloh2 {
  text-align: center;
   font-weight: 900; 
   width: 100vw;
}
h2{
  text-align: center;
}
.bodycontent {
  //Esto es la posicion del cuerpo pegar en todos los VIEW
  position: fixed;
  overflow-y: scroll;
  width: 100vw;
  // background-color: #02364465 ;
  top: 21vh;
  height: 70vh;
  padding: 10px;
}
#logo {
  height: 13vh;
  position: absolute;
  top: 0;
  padding: 10px;
}
.navbar {
  padding: 3vh;
}
#menu {
  position: absolute;
  padding: 20px;
  width: 5vw;
  margin: 0 0 0 75vw;
  z-index: 23;
}
.dropdown-menu {
  margin: 0px 10px 50px 0px !important;
  left: -20vw;
  float: right;
  .dropdown-item{
    padding: 0;
  }
}
.bg-dark {
  background-color: #03394a !important;
}
.btn-secondary {
  background-color: #032e3b !important;
}
// BOTONES
.btn-primary,.btn-primary:focus {
 background-color: #032e3b ;
  border-color: #a4ff4a;
}
.btn-primary:hover{
    border-color: #032e3b ;
  background-color: #a4ff4a;
  color: #032e3b;
}
</style>
