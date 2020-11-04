"<template>
  <div id="app">
    <div id="header">
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark col-sm-12">
        <router-link to="/">
        <img src="./assets/nysl_logo.png" alt="logo-nysl" id="logo">
        </router-link>
        <!-- Logo-->
        <h2 id="titulo">NYSL</h2>
        <!--TITULO-->
        <div class="btn-group" role="group" id="menu">
          <button
            id="btnGroupDrop1"
            type="button"
            class="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <router-link class="dropdown-item" to="/register"
              >REGISTRATION</router-link
            >
            <router-link class="dropdown-item" to="/rules">RULES</router-link>
          </div>
        </div>
      </nav>
    </div>
    
    <!-- -------------------------- -->

    <!-- <h2>HOLA TITULO2</h2> -->
    <div id="nav" class="fixed-bottom">
      <router-link to="/info-team"><i class="fas fa-users"></i></router-link> |
      <router-link to="/info-time"
        ><i class="far fa-calendar-alt"></i
      ></router-link>
      |
      <router-link to="/location"
        ><i class="fas fa-map-marked-alt"></i
      ></router-link>
      |
      <router-link to="/about"><i class="fas fa-info-circle"></i></router-link>
    </div>
    <router-view />
  </div>
</template>




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
  z-index: 19;

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
  background-color: greenyellow;
  top: 21vh;
  height: 70vh;
  padding: 10px;
}
#logo{
  height: 13vh;
  position: absolute;
  top: 0;
  padding: 10px;

}
.navbar{
  padding: 3vh;
}
#titulo{
  width: 100vw;
}
#menu{
  position: absolute;
  padding: 20px;
  width: 5vw;
margin: 0 0 0 75vw;
  z-index: 23;
}
.dropdown-menu {
   margin: 0px 10px 50px 0px!important;
    left: -20vw;
    float:right;
}
</style>
