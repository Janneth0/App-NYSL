<template>
  <!-- PARTE IMPORTANTE -->
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

    <!-- lands -->

    <div class="btnnav btn-group dropup none-m">
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
// document.getElementById("botonF1");
// console.log(document.getElementById("botonF1"));
</script>

<style lang="scss" scoped>
// @media screen and (orientation: landscape) {
// }

// .btnnav {
//   position: absolute;
//   background-color: crimson;
//   width: 1vw;
//   height: 4vh;
//   left: 85vw !important;
//   bottom: 0;
//   .btn {
//     display:block;
//     width: 40px;
//     height: 40px;
//     border-radius: 100%;
//   }
// }
// .botonF1 {
//   position: fixed;
//   width: 40px;
//   height: 40px;
//   border-radius: 100%;
//   background: #f44336;
// top: 85vh;
// left: 90vw;
//   border: none;
//   outline: none;
//   color: #fff;

//   box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

// }

// .botonF2 {
//   background: #2196f3;

// }
// .botonF3 {
//   background: #673ab7;

// }
// .botonF4 {
//   background: #009688;

// }
// .botonF5 {
//   background: #ff5722;

// }

</style>