<template>
  <div class="bodycontent">
    <h1>Info Game-TEAMS</h1>
    <div class="row">
      <div id="filtro" class="col-12 col-sm-4" v-on:click="getTabla">
        <div class="row">
          <div
            class="form-group select-info col-5 col-sm-12"
            v-on:click="getTabla"
          >
            <label for="team"><h4>Team</h4></label>
            <select v-on:click="getTabla" class="form-control" v-model="team">
              <option
                v-on:click="getTabla"
                v-for="(seleccionado, index) in tselec"
                :key="index"
                v-bind:value="seleccionado"
              >
                {{ seleccionado }}
              </option>
            </select>
          </div>
          <h2 class="col-2 col-sm-12">VS</h2>
          <div class="form-group select-info col-5 col-sm-12">
            <label for="oponent"><h4>Oponent</h4></label>
            <select
              v-on:click="getTabla"
              class="form-control"
              v-model="oponent"
            >
              <option
                v-on:click="getTabla"
                v-for="(seleccionado, index) in tselec"
                :key="index"
                v-bind:value="seleccionado"
              >
                {{ seleccionado }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <!-- TABLA SOLO VISIBLE EN MOVIL -->

      <div class="col-12 col-sm-8 none-p c_scroll">
      
        <table class="table table-bordered">
          <thead>
            <tr>
              <th class="date" scope="col">Date</th>
              <th class="location" scope="col">Location</th>
              <th class="time" scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            <TeamTabla
              v-for="(seleccionado, index) in tabla"
              :key="index"
              v-bind:value="seleccionado"
              :location="seleccionado.location"
              :day="seleccionado.day"
              :mounth="seleccionado.mounth"
              :time="seleccionado.time"
            />
          </tbody>
        </table>
      
      </div>

      <div class="col-12 col-sm-8 none-m c_scroll">
        <div class="row ">
          <div class="col-5 insg">
            <span>{{ team }}</span>
          </div>
          <h2 class="col-2">VS</h2>
          <div class="col-5 insg">
            <span>{{ oponent }}</span>
          </div>
        </div>
        <div class="row datos">
          <TeamTabla
              v-for="(seleccionado, index) in tabla"
              :key="index"
              v-bind:value="seleccionado"
              :location="seleccionado.location"
              :day="seleccionado.day"
              :mounth="seleccionado.mounth"
              :time="seleccionado.time"
            />
        </div>
        </div>

      </div>
      <div class="row btnchat">
          <button type="button" class="btn btn-success col-12">CHAT!!</button>
        </div>
    </div>

</template>

<script>
import TeamTabla from "@/components/TeamTabla.vue";
import { mapState } from "vuex";

export default {
  name: "i-team",

  data: function () {
    return {
      team: "U1",
      oponent: "U6",
      tselec: [],
      tabla: [],
    };
  },
  components: {
    TeamTabla,
  },
  computed: {
    ...mapState(["datanysl"]),
    ...mapState(["locations"]),
  },
  methods: {
    getteams(data) {
      for (let i = 0; i < data.length; i++) {
        if (!this.tselec.includes(data[i].team1)) {
          this.tselec.push(data[i].team1);
        }
      }
      return this.tselec.sort();
    },
    getTabla: function () {
      console.log("funcion llamada");
      let team = this.team;
      let oponent = this.oponent;
      let tablaaux = [];
      let equipo = this.datanysl;
      for (let i = 0; i < equipo.length; i++) {
        if (
          (equipo[i].team1 == team && equipo[i].team2 == oponent) ||
          (equipo[i].team2 == team && equipo[i].team1 == oponent)
        ) {
          tablaaux.push(equipo[i]);
          console.log("tem1: ", equipo[i].team1, "team2: ", equipo[i].team2);
          this.tabla = tablaaux;
        }
      }
    },
  },
  created: function () {
    this.getTabla();
    this.tselec = this.getteams(this.datanysl);
  },
};
</script>

<style scope lang="scss">
.insg {
  text-align: center !important;
  background-color: violet;
  margin-top: 5vh !important;
  span {
    background-color: yellow;
    padding: 20px;
    border-radius: 100%;
  }
}
.c_scroll{
  overflow-y: scroll;
}
.btnchat {
  position: fixed;
  top: 80vh !important;
  right: 30vw;
}
// #filtro{
//   position: fixed;
// }
@media screen and (orientation: portrait) {
  .btnchat {
    position: fixed;
    top: 80vh !important;
    left: 30vw;
  }
}
</style>