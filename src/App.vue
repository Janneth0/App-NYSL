<template>
  <div id="app">
    <div id="header">
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark col-sm-12">
        <router-link to="/">HOME</router-link>
        <!-- Logo-->
        <h2>NYSL</h2>
        <!--TITULO-->

        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
          Dropdown
        </a>
          <!-- <button
            type="button"
            class="btn btn-default dropdown-toggle"
            data-toggle="dropdown"
          ><span class="navbar-toggler-icon"></span>
          </button> -->

          <ul class="dropdown-menu" role="menu">
            <router-link class="dropdown-item" to="/register"
                >REGISTRATION</router-link
              >
              <router-link class="dropdown-item" to="/rules">RULES</router-link>
          </ul>
        </div>

       
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item dropdown">
              <router-link class="dropdown-item" to="/register"
                >REGISTRATION</router-link
              >
              <router-link class="dropdown-item" to="/rules">RULES</router-link>
            </li>
          </ul>
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
  height: 10vh;
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
#header > button {
  color: aliceblue;
}
#header {
  position: fixed;
  top: 0;
  color: beige;
  z-index: 10;
  height: 11vh;
  padding: 10px;

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
  padding: 2vh;
  text-align: center;
  top: 11vh;
  background-color: hotpink;
}
h2 {
  text-align: center;
}
.bodycontent {
  //Esto es la posicion del cuerpo pegar en todos los VIEW
  position: fixed;
  overflow-y: scroll;

  background-color: greenyellow;
  top: 20vh;
  padding: 10%;
  height: 70vh;
  padding: 20px;
}
</style>
