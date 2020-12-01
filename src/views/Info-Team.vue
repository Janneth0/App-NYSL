<template>
  <div class="bodycontent info">
    <h1>Info Game-TEAMS</h1>
    <div class="row">
      <div id="filtro" class="col-12 col-sm-4">
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

          <div class="row col-2 col-sm-12 veri" @click="getTabla">
            <h2 class="col-6 col-sm-6 vs">VS</h2>
            <button class="search">
              <b-icon-search class="col-6 col-sm-3"> </b-icon-search>
            </button>
          </div>
          <!-- <div class="col-2 col-sm-12 veri"></div> -->

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
        <table class="table table-bordered">
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
              :month="seleccionado.month"
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
          <h2 class="col-2">VS</h2>
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
            :month="seleccionado.month"
            :time="seleccionado.time"
            :ide="seleccionado.id"
          />
        </div>
      </div>
    </div>
    <template v-if="exist == false">
      <h3 class="existe">No existe Partido!!</h3>
    </template>
    <!-- <template v-else>
      
    </template> -->
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
      exist: true,
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
    getTabla: function () {
      let aux = 0;
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
          aux = aux + 1;
          this.tabla = tablaaux;
          this.exist = true;

        }
      }
      if (aux == 0) {
        console.log("no se encontro");
        console.log(aux);
        this.exist = false;
        this.tabla = [];
      }
      return this.tabla;
    },
  },
  // created: function () {
  //   // this.getTabla();
  //   // this.tselec = this.getteams(this.datanysl);
  // },
  // // updated(){
  // //   this.getTabla();
  // // }
};
</script>

<style lang="scss">
.existe {
  position: absolute;

}
.veri {
  padding: 0px 0px 0px 0.5rem;
  margin: 0;
}
.vs {
  padding: 0;
  // margin: 30px 0px 0px 0px;
}

.search {
  margin: 0 30px 0px -10px;
  background-color: #03394a;
  border-radius: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  g {
    color: #a4ff4a !important;
  }
}
.search:active {
  background-color: #a4ff4a !important;
  g {
    color: #03394a !important;
  }
}
.cent {
  text-align: center;
  top: 1vh;
}
.insg {
  font-size: 60px;
}
.n-t,
.n-o {
  position: relative;
  font-size: 25px;
  z-index: 10000;
  font-weight: bold;
  margin-bottom: -2rem;
  top: -3.3rem;
  &.n-o {
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
@media screen and (orientation: landscape) {
  .existe {
    left: 50vw;
    top: 10rem;
  }
  .search {
    // height: 3rem;
    width: 3rem;
    padding: 0.5rem 0.8rem 10px 0px;
  }
  .veri {
    margin: -1rem 0px 0.5rem 0.5rem !important;
  }
}

@media screen and (orientation: portrait) {
  .info{
padding-top: 15vh;
  }
  .existe {
    text-align: center;
    width: 100vw;
    margin-top: 3rem;
  }
  .veri {
    padding: 0px 0px 0px 0.7rem;
  }
  .search {
    height: 3rem;
    padding: 0.5rem 0.7rem 10px 0px;
  }
  .btnchat {
    position: fixed;
    top: 80vh !important;
    left: 30vw;
  }
  .tablem {
    padding-left: 0px;
    table {
      width: 95vw;
    }
  }
}
</style>