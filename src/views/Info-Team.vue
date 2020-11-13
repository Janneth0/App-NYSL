<template>
  <div class="bodycontent">
    <h1>Info-Game TEAMS</h1>
    <div class="form-group select-info">
      <label for="team"><h4>Team</h4></label>
      <select class="form-control" v-model="team" v-on:click="getTabla">
        <option
          v-on:click="getTabla"
          v-for="(seleccionado, index) in tselec"
          :key="index"
          v-bind:value="seleccionado"
        >
          {{ seleccionado }}
        </option>
      </select>
      <select class="form-control" v-model="oponent" v-on:click="getTabla">
        <option
          v-for="(seleccionado, index) in tselec"
          :key="index"
          v-bind:value="seleccionado"
        >
          {{ seleccionado }}
        </option>
      </select>
    </div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th class="date" scope="col">Day</th>
          <th class="location" scope="col">Teams</th>
          <th class="time" scope="col">Location</th>
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

   
    <!-- <span>Seleccionado: {{ team }} y {{ oponent }} {{ tabla }}</span> -->

    <!-- {{ datanysl }} -->
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
      // options: [   { text: "Uno", value: "A", extra:"Hola" },
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
        // console.log(equipo,team,oponent)
        //  console.log(equipo, equipo.team1, equipo.team2);
        if (
          (equipo[i].team1 == team && equipo[i].team2 == oponent) ||
          (equipo[i].team2 == team && equipo[i].team1 == oponent)
        ) {
          //  console.log(equipo, equipo[i].team1, equipo[i].team2);
          tablaaux.push(equipo[i]);
          console.log("tem1: ", equipo[i].team1, "team2: ", equipo[i].team2);
          this.tabla = tablaaux;
          // console.log(tablaaux)
          // console.log(this.tabla[i].team1)
        }
      }
    },
  },
  created: function () {
    // this.tabla = this.gvalores(this.a, this.b, this.datanysl);
    this.tselec = this.getteams(this.datanysl);
    // this.tabla = this.getTabla(this.team, this.oponent);
    // console.log(this.tabla);
    // console.log(this.tselec);
    this.getTabla();
  },
};
</script>

<style>
select {
  width: 20vh;
}
</style>