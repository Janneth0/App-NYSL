<template>
  <div id="header">
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark col-sm-12">
        <router-link to="/">
        <img src="../assets/nysl_logo.png" alt="logo-nysl" id="logo">
        </router-link>
        <!-- Logo-->
        <h2 id="tituloh2">NYSL</h2>
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
</template>

<script>
export default {

}
</script>