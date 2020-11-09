<template>
  <div id="app">
    <Header />
    <div class="main-view"><router-view /></div>
    <Nav />
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";

export default {
  components: {
    Header,
    Nav,
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
  // text-align: center;
  color: #2c3e50;
}
i {
  text-align: center;
  font-size: 2rem;
  width: 20vw;
  color: #42b983;
}
#nav {
  // position: fixed;
  // top: 90vh;
  background: red;
  text-align: center;
  height: 9vh;
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }

    background-color: brown;
  }
}
#header {
  position: fixed;
  top: 0vh;
  color: beige;
  z-index: 999;

  a {
    font-weight: bold;
    color: #2c3e50;

    &img,
    .router-link-exact-active {
      color: #42b983;
    }
  }
}
h1 {
  position: fixed;
  font-size: 25px;
  padding: 10px;
  text-align: center;
  top: 13vh;
  background-color: hotpink;
}
h2 {
  text-align: center;
}
.bodycontent {
  //Esto es la posicion del cuerpo pegar en todos los VIEW
  position: fixed;
  overflow-y: scroll;
  width: 100vw;
  background-color: lightcoral;
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
#titulo {
  width: 100vw;
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
}
</style>
