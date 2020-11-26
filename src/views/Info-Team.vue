<template>
  <div class="bodycontent">
    <h1>Info Game-TEAMS</h1>
    <div class="row">
      <div id="filtro" class="col-12 col-sm-4" @click="getTabla">
        <div class="row">
          <div class="form-group select-info col-5 col-sm-12">
            <b-icon-shield class="insg none-p"> </b-icon-shield>
            <p class="n-t none-p">{{ team }}</p>
            <b-form-group label="TEAM:" label-for="tema1">
              <b-form-select
                id="team1"
                v-model="team"
                :options="tselec"
              ></b-form-select>
            </b-form-group>
          </div>
          <h2 class="col-2 col-sm-12">VS</h2>
          <div class="form-group select-info col-5 col-sm-12">
            <!-- <label for="oponent"><h4>Oponent</h4></label> -->

            <b-icon-shield-fill class="insg none-p"> </b-icon-shield-fill>
            <p class="n-o none-p">{{ oponent }}</p>
            <b-form-group label="OPONENT:" label-for="team2">
              <b-form-select
                id="team2"
                v-model="oponent"
                :options="tselec"
                @click="getTabla"
              ></b-form-select>
            </b-form-group>
          </div>
        </div>
      </div>
      <!-- TABLA SOLO VISIBLE EN MOVIL -->

      <div class="col-12 col-sm-8 none-p tablem">
        <table class="table table-bordered ">
          <thead>
            <tr>
              <th class="date" scope="col">Date</th>
              <th class="location" scope="col">Location</th>
              <th class="time" scope="col">Time</th>
              <th class="boton" scope="col">Chat</th>
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
              :ide="seleccionado.id"
            />
          </tbody>
        </table>
      </div>

      <div class="col-12 col-sm-8 none-m">
        <div class="row">
          <b-col cols="5" class="cent">
            <b-icon-shield class="insg"> </b-icon-shield>
            <p class="n-t">{{ team }}</p>
           
          </b-col>
          <h2 class="col-2 cent">VS</h2>
          <b-col cols="5" class="cent">
            <b-icon-shield-fill class="insg"> </b-icon-shield-fill>
            <p class="n-o">{{ oponent }}</p>
          </b-col>
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
             :ide="seleccionado.id"
          />
         
        </div>

      </div>
    </div>
    <!-- <router-link :to="'/chatroom/'+id" class="btnchat">
      <b-button>CHAT!!</b-button>
    </router-link> -->
    <!-- <div class="row btnchat">
      <button type="button" class="btn btn-success col-12">CHAT!!</button>
    </div> -->
  </div>
</template>

<script>
import TeamTabla from "@/components/TeamTabla.vue";
import { mapState } from "vuex";

export default {
  name: "i-team",

  data: function () {
    return {
      team: "U",
      oponent: "U",
      tabla: [],
      tselec: [
        { text: "Select", value: "U" },
        "U1",
        "U2",
        "U3",
        "U4",
        "U5",
        "U6",
      ],
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
    // getteams(data) {
    //   for (let i = 0; i < data.length; i++) {
    //     if (!this.tselec.includes(data[i].team1)) {
    //       // this.tselec.push(data[i].team1);
    //     }
    //   }
    // return this.tselec.sort();
    // },
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
          // console.log(
          //   "tem1: ",
          //   equipo[i].team1,
          //   "team2: ",
          //   equipo[i].team2,
          //   "id ",
          //   equipo[i].id
          // );
          this.tabla = tablaaux;
        }
      }
      return this.tabla;
    },
  },
  created: function () {
    // this.getTabla();
    // this.tselec = this.getteams(this.datanysl);
  },
  // updated(){
  //   this.getTabla();

  // }
};
</script>

<style scope lang="scss">
.cent {
  text-align: center;
  top: 1vh;
}
.insg {
  font-size: 60px;
  // margin-bottom: -2rem;
  // margin-bottom: -3rem;
}
.n-t,
.n-o {
  position: relative;
  font-size: 25px;
  z-index: 10000;
  font-weight: bold;
  margin-bottom: -2rem;
  top: -3.3rem;
  // color: black;
  &.n-o {
    // color: #42b983;
    color: blanchedalmond;
    z-index: 10000;
  }
}
.c_scroll {
  overflow-y: scroll;
}
.btnchat {
  position: fixed;
  top: 80vh !important;
  left: 30vw;
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
  .tablem{
    padding-left: 0;
    table{
          width: 100vw;
    }

  }
}
</style>