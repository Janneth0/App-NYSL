<template>
  <div class="bodycontent">
    <h1>Info Game</h1>
    <div id="filtro">
      <!-- ------TEAM----- -->
      <div class="form-group select-info">
        <label for="team"><h4>Team</h4></label>
        <select class="form-control" id="team-v">
          <option value="oponent">Team</option>
          <option value="U1" selected>U1</option>
          <option value="U2">U2</option>
          <option value="U3">U3</option>
          <option value="U4">U4</option>
          <option value="U5">U5</option>
          <option value="U6">U6</option>
        </select>
      </div>
      <h2>VS</h2>
      <!-- ------OPONENT----- -->
      <div class="form-group select-info">
        <label for="oponent"><h4>Oponent</h4></label>
        <select id="oponent-v" class="form-control">
          <option value="oponent">Oponent</option>
          <option value="U1">U1</option>
          <option value="U2">U2</option>
          <option value="U3">U3</option>
          <option value="U4">U4</option>
          <option value="U5">U5</option>
          <option value="U6" selected>U6</option>
          <!-- OPCIONES -->
        </select>
      </div>
    </div>


 <!-- TABLA -->
    <table class="table table-bordered">
      <thead>
        <tr>
          <th class="date" scope="col">Date</th>
          <th class="location" scope="col">Location</th>
          <th class="time" scope="col">Time</th>
        </tr>
      </thead>
      <tbody>
        <TeamTabla   v-for="(p, index) in tabla"  :key="index" :location="p.location" :mounth="p.mounth" :day="p.day" :time="p.time"/>
      <tr>
      <td class="day">{{ day }}-{{ mounth }}</td>
      <td class="location">{{ location }}</td>
      <td class="time">{{ time }}</td>
    </tr>
      </tbody>
    </table>
    <!-- -------------- -->
  
  </div>
</template>



<script>
import TeamTabla from "@/components/TeamTabla.vue";

import { mapState,mapMutations } from "vuex";

export default {
  name: "GameInfo",
  props: "team",
  data() {
    return {
      tabla: [],
      a: document.getElementById("team-v").value,
      b: document.getElementById("oponent-v").value,
    };
  },
  components: {
    TeamTabla,
  },
  computed: {
    ...mapState(["datanysl"]),
  },
  methods: {
    ...mapMutations(["insertTeams"]),
    // getTeams() {
    //   for (let i = 0; i < this.datanysl.length; i++) {
    //     if (!this.teams.includes(this.datanysl[i].team1)) {
    //       this.teams.push(this.datanysl[i].team1);
    //     }
    //   }
    //   this.teams.sort();
    //   console.log("teams", this.teams);
    //   return this.teams;
    // },
    valores: function (a,b,data) {

      for (let i = 0; i < data.length; i++) {
        console.log("for: "+i,a,b,data[i].team1,data[i].team2)
        if (
          (data[i].team1 == a||
            data[i].team1 == b) &&
          (data[i].team2 == a || data[i].team2 == b)
        ) {
          this.tabla.push(this.datanysl[i]);
          // console.log("ingreso a if",this.tabla)
        }
      }
return this.tabla
    },
  },
  // Busca todos los grupos y los ordena

  created: function () {
     this.tabla = this.valores(this.a,this.b,this.datanysl);
    this.insertTeams({ teamss: this.tabla });
   
  },
};
</script>

    
<style scope lang="scss">
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



