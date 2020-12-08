<template>
  <div class="menus">
    <div id="nav" class="fixed-bottom none-p">
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

    <div class="btnnav btn-group dropup none-m" id="btn-chat">
      <button
        class="botonF1"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        id="dropdownMenuButton"
      >
        <i class="fas fa-plus"></i>
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <button class="btn botonF2">
          <router-link to="/info-team"><i class="fas fa-users"></i></router-link
          ><br />
        </button>
        <button class="btn botonF3">
          <router-link to="/info-time"
            ><i class="far fa-calendar-alt"></i></router-link
          ><br />
        </button>
        <button class="btn botonF4">
          <router-link to="/location"
            ><i class="fas fa-map-marked-alt"></i
          ></router-link>
        </button>
        <button class="btn botonF5">
          <router-link to="/about"
            ><i class="fas fa-info-circle"></i
          ></router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
@media (max-height: 330px) {
  #btn-chat{
    display: none !important;
  }
}
// @media (max-height: 350px){
// .menus{
//  display: none  !important;
// }


// }



</style>


