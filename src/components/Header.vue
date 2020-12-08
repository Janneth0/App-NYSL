<template>
  <div id="header">
    <div>
      <b-navbar toggleable="sm">
        <b-navbar-brand href="#" class="row"
          ><router-link to="/" class="col-auto mr-auto">
            <img src="../assets/nysl_logo.png" alt="logo-nysl" id="logo" />
          </router-link>
        </b-navbar-brand>
        <h2 id="tituloh2" class="chat-t">
          <span class="none-p">NYSL</span
          ><span class="none-m" >Northside Youth Soccer League</span>
        </h2>
        <b-navbar-toggle
          target="nav-collapse"
          class="btn btn-secondary"
        ></b-navbar-toggle>
        <b-collapse id="nav-collapse" class="menu" is-nav>
          <b-navbar-nav class="ml-auto">
            <div class="none-p">
              <b-dropdown-item
                ><router-link to="/register"
                  >REGISTRATION</router-link
                ></b-dropdown-item
              >
              <b-dropdown-item
                ><router-link to="/rules">RULES</router-link></b-dropdown-item
              >
              <b-dropdown-item
                ><router-link to="/user">Login</router-link></b-dropdown-item
              >
            </div>
            <b-nav-item-dropdown right class="none-m">
              <template #button-content>
                <em>MENU</em>
              </template>
              <b-dropdown-item
                ><router-link to="/register"
                  >REGISTRATION</router-link
                ></b-dropdown-item
              >
              <b-dropdown-item
                ><router-link to="/rules">RULES</router-link></b-dropdown-item
              >
              <b-dropdown-item
                ><router-link to="/user">Login</router-link></b-dropdown-item
              >
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "encabezado",
  props: {
    msg: String,
  },
};
</script>
<style  scoped lang="scss">
@media (max-height: 330px) {
  .chat-t{
    display: none !important;
  }
}
</style>
