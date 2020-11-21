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
   background: #009688;
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
    // padding-bottom: 0;
  }
  i {
    text-align: center;
    
  }
  a {
    font-size: 110%;
    font-weight: bold;
    color: white ;
    border: #03394a;
    text-align: center;
    &.router-link-active {
      color: #a4ff4a !important;
    }
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
    background: #009688;
  }
}
// .btn{
//       padding-bottom: 2px;
// }

.bg-dark {
  background-color: #03394a !important;
}
#header {
  color: aliceblue;
  position: fixed;
  z-index: 9999;
  #tituloh2 {
    text-align: center;
    font-size: 1.5rem !important;
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
  padding: 30px 10px;
}
h1 {
  position: fixed;
  font-size: 25px;
  z-index: 9998;
  margin: 0;
  text-align: center;
  width: 100vw;
  background-color: #a4ff4a;
  margin: -10px;
  padding: 15px; //modifcar segun respon
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
    display: none;
  }
  #tituloh2 {
    font-size: 1.8rem !important;
  }
  #logo {
    height: 4.5rem;
    padding: 5px 0px !important;
  }
  #nav {
    background: #032e3b !important;
    i {
      text-align: center;
      font-size: 2rem;
      width: 20vw;
    }
    a {
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
  .bodycontent,
  h1 {
    top: 4.5rem;
  }
  .bodycontent {
    bottom: 0;
    padding-top: 60px;
    padding-bottom: 80px;
  }
}
@media screen and (orientation: landscape) {
  //pantalla grande
  .none-p {
    display: none;
  }

  #header {
    height: 15vh;
  }
  #logo {
    height: 3.45rem;
    padding: 5px 0px !important;
  }
  h1 {
    top: 3.45rem;
  }
  .bodycontent {
    top: 5rem;
    bottom: 0;
  }
}

// @media screen and (orientation: landscape) {
//   #header {
//     background: #032e3b !important;
//     text-align: center;
//     height: 9vh;
//     padding: 10px;
//     i {
//       text-align: center;
//       font-size: 2rem;
//       width: 20vw;
//     }
//     a {
//       font-size: 110%;
//       -webkit-text-stroke: 0.4px black;
//       font-weight: 900;
//       font-weight: bold;
//       color: #42b983;
//       border: #03394a;
//       text-align: center;
//       &.router-link-active {
//         color: #a4ff4a !important;
//       }
//     }
//     .dropdown-menu {
//       background: #03394a;
//     }
//   }
//   #header {
//     position: fixed;
//     top: 0vh !important;
//     z-index: 999;
//     padding: 0px !important;
//   }
//   #logo {
//     height: 13vh;
//     position: absolute;
//     top: 0;
//     padding: 10px;
//   }
//   #nav{
//     display:none;
//   }
// }
// @media screen and (orientation: portrait) {
//   .btnnav{
//     display:none;
//   }
//   #app {
//     font-family: Avenir, Helvetica, Arial, sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     color: #2c3e50;
//   }
//   #header {
//     position: fixed;
//     top: 0vh !important;
//     color: beige;
//     z-index: 999;
//     padding: 0px !important;
//   }
//   .modal-backdrop {
//     height: 0 !important;
//   }
//   #nav,
//   #header {
//     background: #032e3b !important;
//     text-align: center;
//     height: 9vh;
//     padding: 10px;
//     i {
//       text-align: center;
//       font-size: 2rem;
//       width: 20vw;
//     }
//     a {
//       font-size: 110%;
//       -webkit-text-stroke: 0.4px black;
//       font-weight: 900;
//       font-weight: bold;
//       color: #42b983;
//       border: #03394a;
//       text-align: center;
//       &.router-link-active {
//         color: #a4ff4a !important;
//       }
//     }
//     .dropdown-menu {
//       background: #03394a;
//     }
//   }

//   h1 {
//     position: fixed;
//     font-size: 25px;
//     padding: 23px 10px 12px 10px;
//     margin-top: 0;
//     text-align: center;
//     top: 11vh;
//     background-color: #a4ff4a;
//   }
//   #tituloh2 {
//     text-align: center;
//     font-weight: 900;
//     width: 100vw;
//   }

//   .bodycontent {
//     //Esto es la posicion del cuerpo pegar en todos los VIEW
//     position: fixed;
//     overflow-y: scroll;
//     width: 100vw;
//     // background-color: #02364465 ;
//     top: 21vh;
//     height: 70vh;
//     padding: 10px;
//   }
//   .fixed-bottom {
//     position: fixed;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     z-index: 1030;
//   }
//   #logo {
//     height: 13vh;
//     position: absolute;
//     top: 0;
//     padding: 10px;
//   }
//   .navbar {
//     padding: 3vh;
//   }
//   #menu {
//     position: absolute;
//     padding: 20px;
//     width: 5vw;
//     margin: 0 0 0 75vw;
//     z-index: 23;
//   }
//   .h {
//     margin: 0px 10px 50px 0px !important;
//     left: -20vw;
//     float: right;
//     .dropdown-item {
//       padding: 0;
//     }
//   }
//   .bg-dark,
//   .btn-secondary {
//     background-color: #03394a !important;
//   }
//   // BOTONES
//   .btn-primary,
//   .btn-primary:focus {
//     background-color: #032e3b;
//     border-color: #a4ff4a;
//   }
//   .btn-primary:hover {
//     border-color: #032e3b;
//     background-color: #a4ff4a;
//     color: #032e3b;
//   }
// }
</style>
