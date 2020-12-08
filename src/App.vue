<template>
  <div id="app" class="container">
    <div class="row">
      <Header class="col-12" />
      <div><router-view /></div>
      <Nav class="chat" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
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
    };
  },
  methods: {
    ...mapMutations(["insertData", "insertLocation", "listenUser"]),
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
      this.insertData({ nysl: json.Games });
      this.insertLocation({ location: json.Location });
      console.log("nysl", this.nysl); 
    },
  },
  beforeMount() {
    this.getData("datanysl.json");
    this.listenUser();
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
    background: #03394a;
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
    margin-right: 5px;
  }
  .botonF2,
  .botonF3,
  .botonF4,
  .botonF5 {
    background: #03394a;
  }
  a {
    color: #42b983;
    &.router-link-active {
      color: #a4ff4a !important;
    }
  }
}

.bg-dark,
.btn-secondary,
.navbar-dark {
  background-color: #044255 !important;
  &:active {
    background-color: #a4ff4a !important;
    color: #03394a !important;
  }
}

#nav,
#header {
  background: #03394a !important;
  i {
    text-align: center;
    font-size: 2rem;
    width: 20vw;
  }
  a {
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
#nav {
  text-align: center;
  padding: 3% 2%;
}
.bodycontent {
  background-color: #42b983;
  position: fixed;
  overflow-y: scroll;
  width: 100vw;
  padding: 20px 20px 0px 10px; 
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
  padding: 1px; 
}
.modal-backdrop {
  height: 0 !important;
}
#filtro {
  text-align: center;
}

@media screen and (orientation: portrait) {
  .none-m {
    display: none ;
  }
  #tituloh2 {
    font-size: 1.8rem !important;
    margin: 0rem 0rem 0.5rem -1rem;
  }
  #logo {
    height: 3.5rem;
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
  .none-p {
    display: none  !important;
  }
  #tituloh2 {
    text-align: center;
    width: 200rem !important;
  }
  #logo {
    height: 2.8rem;
  }
  h1,
  .bodycontent {
    top: 3.5rem;
    padding-top: 1.5vh;
  }
  .bodycontent {
    padding-top: 50px;
    bottom: 0vh;
  }
}
</style>
