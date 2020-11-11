<template>
  <div class="bodycontent">
    <h1>Game Info</h1>
    <!-- BOTONES CON MESES -->
    <!-- <div id="botones">
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#september" aria-expanded="false" aria-controls="september"  >
        September
      </button>
      <button  class="btn btn-primary" type="button" data-toggle="collapse" data-target="#october"  aria-expanded="false" aria-controls="october" >
        October
      </button>
    </div> -->
    <!-- CONTENIDO -->
<div>
  <b-card no-body>
    <b-card-header header-tag="nav">
      <b-nav card-header tabs>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Inactive</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </b-card-header>

    <b-card-body class="text-center">
      <b-card-title>Card Title</b-card-title>

      <b-card-text>
        With supporting text below as a natural lead-in to additional content.
      </b-card-text>

      <b-button variant="primary">Go somewhere</b-button>
    </b-card-body>
  </b-card>
</div>
 
  </div>
</template>

<script>
// import Table from "@/components/Table.vue";
import { mapState } from "vuex";

export default {
  name: "i-time",
  data: function() {
    return {
      sepnine: [],
      sepone: [],
      octnine: [],
      octone: [],
    };
  },
  components: {
    // Table,
  },
  computed: {
    ...mapState(["datanysl"]),
  },
  methods: {
    //Busca todos los grupos y los ordena

    getTablas: function (mes, hora) {
      let arrayd = [];
      for (let i = 0; i < this.datanysl.length; i++) {
        if (this.datanysl[i].mounth == mes && this.datanysl[i].time == hora) {
          arrayd.push(this.datanysl[i]);
        }
      }
      return arrayd;
    },
  },
  created: function () {
    this.sepnine = this.getTablas(9, "9:30 am");
      this.sepone = this.getTablas(9, "1:00 pm");
      this.octnine = this.getTablas(10, "9:30 am");
      this.octone = this.getTablas(10, "1:00 pm");
  }
};
</script>

<style lang="scss">
#botones{
  position: relative;
  height: 10vh;
  z-index: 999;
}
// a{
//   background-color: black;
// .carousel-control-next-icon{
//   position: relative;
// float: left;
// }
// .carousel-indicators{
//   background-color: black !important;
//   color: #000;
// }
b-card{
  top:10vh;
}

</style>

