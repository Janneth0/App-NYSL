<template>
  <div class="info bodycontent">
    <h1>Info Game by Time</h1>
    <div id="filtro">
      <!-- ------TEAM----- -->
      <div class="form-group select-info">
        <label for="team"><h4>Team</h4></label>
        <select class="form-control" id="team" >
          <option value="all" selected>---ALL----</option>
          <!-- <option value="U1" v-for="(p, index) in teams"  :key="index" :team="p.team1">{{teams[key]}}</option> -->
          <!-- <option value="U2">U2</option>
          <option value="U3">U3</option>
          <option value="U4">U4</option>
          <option value="U5">U5</option>
          <option value="U6">U6</option> -->
        </select>
      </div>
      <h2>VS</h2>
      <!-- ------OPONENT----- -->
      <div class="form-group select-info">
        <label for="oponent"><h4>Oponent</h4></label>
        <select id="oponent" class="form-control">
          <option value="all" selected>---ALL----</option>
          <!-- <option value="U1">U1</option>
          <option value="U2">U2</option>
          <option value="U3">U3</option>
          <option value="U4">U4</option>
          <option value="U5">U5</option>
          <option value="U6">U6</option> -->

          <!-- OPCIONES -->
        </select>
      </div>
    </div>

    <!-- TABLA -->
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Location</th>
          <th scope="col">Time</th>
        </tr>
      </thead>
      <tbody>
        <InfoTeam   v-for="(p, index) in tabla"  :key="index" :location="p.location" :mounth="p.mounth" :day="p.day" :time="p.time"/>
      </tbody>
    </table>
    <!-- -------------- -->
  </div>
</template>

<script>
import InfoTeam from "@/components/InfoTeam.vue";

import { mapState } from "vuex";

export default {
  name: "GameInfo",
  props: "team",
  data() {
    return {
      teams: [],
      oponent: [],
      tabla: [],
    };
  },
  components: {
    InfoTeam,
  },
  computed: {
    ...mapState(["datanysl"]),
  },
  methods: {
    // Busca todos los grupos y los ordena
    getTeams() {
      for (let i = 0; i < this.datanysl.length; i++) {
        if (!this.teams.includes(this.datanysl[i].team1)) {
          this.teams.push(this.datanysl[i].team1);
        }
      }
      this.teams.sort();
      return this.teams;
    },
   
  },
  created: function () {
    // tabla = this.memberFiltered();
    console.log(this.team)
    // this.team=this.getTeams()
    // console.log(this.team)
  },
};
</script>

<style  lang="scss">
#filtro {
  .form-group {
    position: relative;
    padding-top: 20px;
    width: 45vw;
    float: left;
    margin-left: 2vw;
  }
  h2 {
    position: absolute;
  }
  h4 {
    text-align: center !important;
  }
}

#filtro {
  text-align: center;
}
</style>



