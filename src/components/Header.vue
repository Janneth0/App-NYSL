<template>
  <div id="header">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark ">
      <router-link to="/" class="col-auto mr-auto">
        <img src="../assets/nysl_logo.png" alt="logo-nysl" id="logo" />
      </router-link>
      <!-- Logo-->
      <h2 id="tituloh2" class="col">
        <span class="none-p">NYSL</span
        ><span class="none-m">Northside Youth Soccer League</span>
      </h2>
      <!--TITULO-->
      <div class="btn-group col-auto" role="group" id="menu">
        <button
          id="btnGroupDrop1"
          type="button"
          class="btn btn-secondary"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="dropdown-menu h" aria-labelledby="btnGroupDrop1">
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
   name: "titulo2",
  props: {
    msg: String,
  }
};
</script>