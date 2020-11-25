<template>
  <div id="app" class="container">
    <div class="row">
      <Header class="col-12" />
      <div><router-view /></div>
      <Nav class="" />
    </div>
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
    ...mapMutations(["insertData", "insertLocation"]),
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
      console.log(json);
      // this.team = this.getTeams();
      this.insertData({ nysl: json.Games });
      this.insertLocation({ location: json.Location });
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
  },
};
</script>

<style lang="scss">
body {
  height: 100%;
  width: 100%;
  #app,
  .row,
  .body {
    margin: 0;
  }
  .container,
  #header,
  .navbar {
    padding: 0;
  }
}
.btnnav {
  position: fixed;
  top: 85vh;
  left: 90vw;
  .botonF1 {
    width: 7vw;
    height: 7vw;
    border-radius: 100%;
    background: #032e3b;
    border: none;
    outline: none;
    color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  .dropdown-menu {
    min-width: 0;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    margin-left: 2px;
  }
  .btn {
    text-align: center;
    width: 7vw;
    height: 7vw;
    border-radius: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-top: 10px;
  }
  .botonF2,
  .botonF3,
  .botonF4,
  .botonF5 {
    background: #032e3b;
  }
  a {
    color: #42b983;
    &.router-link-active {
      color: #a4ff4a !important;
    }
  }
}

.bg-dark,
.btn-secondary {
  background-color: #03394a !important;
}

#nav,
#header {
  background: #032e3b !important;
  i {
    text-align: center;
    font-size: 2rem;
    width: 20vw;
  }
  a {
    // font-size: 110%;
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

#header {
  color: aliceblue;
  position: fixed;
  z-index: 9999;
  #tituloh2 {
    text-align: center;
    font-size: 1.5rem !important;

    
  }
  .h {
    left: -5rem;
  }
  a {
    // font-size: 110%;
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
    // padding-right: 10px;
  }
}
#nav {
  text-align: center;
  padding: 3% 2%;
}
.bodycontent {
  background-color: #42b983;
  position: fixed;
  overflow-y: scroll;
  width: 100vw;
  padding: 20px 20px 0px 10px;//genialajeje
}
h1 {
  position: fixed;
  font-size: 30px !important;
  z-index: 9998;
  margin: 0;
  text-align: center;
  width: 100vw;
  background-color: #a4ff4a;
  margin: -10px;
  padding: 1px; //modifcar segun respon
}
.modal-backdrop {
  height: 0 !important;
}
#filtro {
  text-align: center;
}

@media screen and (orientation: portrait) {
  //mobil
  .none-m {
    display: none !important;
  }
  #tituloh2 {
    font-size: 1.8rem !important;
    margin: 0rem 0rem 0.5rem -1rem;
  }
  #logo {
    height:3.5rem;
    // padding: 5px 0px !important;
  }
  .bodycontent,
  h1 {
    top: 4.2rem;
    padding-top: 1vh;
  }
  .bodycontent {
    bottom: 0;
    padding-top: 50px;
    padding-bottom: 80px;
  }
}
@media screen and (orientation: landscape) {
  //pantalla grande
  .none-p {
    display: none !important;
  }
#tituloh2{

  text-align: center;
  width: 200rem !important;

}
  #logo {
    height: 2.8rem;
    // padding: 5px 0px !important;
  }
  h1,.bodycontent {
    top: 3.5rem;
    padding-top: 1.5vh;
  }
  .bodycontent {
    padding-top: 50px;
    bottom: 0vh;
  }
}



// // BOTONES
// .btn-primary,
// .btn-primary:focus {
//   background-color: #032e3b;
//   border-color: #a4ff4a;
// }
// .btn-primary:hover {
//   border-color: #032e3b;
//   background-color: #a4ff4a;
//   color: #032e3b;
// }
// }
</style>
