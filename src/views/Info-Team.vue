<template>
  <div class="bodycontent">
    <h1 >Info-Game TEAMS</h1>
    <div id="filtro" class="row" v-on:click="getTabla">
      <div class="form-group select-info col-5" v-on:click="getTabla">
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
      <h2 class="col-2">VS</h2>
      <div class="form-group select-info col-5">
        <label for="oponent"><h4>Oponent</h4></label>
        <select v-on:click="getTabla" class="form-control" v-model="oponent">
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
// #filtro {
//   .form-group {
//     position: relative;
//     padding-top: 20px;
//     width: 45vw;
//     float: left;
//     margin-left: 1.5vw;
//   }
//   h2 {
//     position: absolute;
//   }
//   h4 {
//     text-align: center !important;
//   }
// }

// #filtro {
//   text-align: center;
// }
</style>