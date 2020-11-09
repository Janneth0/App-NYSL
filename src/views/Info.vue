<template>
  <div class="info">
    <h1>Info Gmae</h1>

    <div class="block" id="info-team ">
      <InfoTeam />
    </div>

    <div id="info-time">
      <InfoTime />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import InfoTeam from "@/components/InfoTeam.vue";
import InfoTime from "@/components/InfoTime.vue";

import { mapState, mapMutations } from "vuex";

export default {
  name: "GameInfo",
  computed: {
    ...mapState(),
  },
  components: {
    InfoTeam,
    InfoTime
  },
  data: function () {
    return {
      nysl: [],
      team: [],
    };
  },
  methods: {
    ...mapMutations(["insertData"]),
    getData: async function (api) {
      let promise = await fetch(api);
      let isOk = promise.ok;
      let json;
      if (isOk) {
        json = await promise.json();
      } else {
        alert(promise.status);
        return 0;
      }
      this.nysl = json.Games;
      console.log(json)
      // this.team = this.getTeams();
      this.insertData({ nysl: json });
      console.log(this.nysl); //SI muestra todos los datos del JSON
    },
    //Busca todos los grupos y los ordena
    // getTeams() {
    //   for (let i = 0; i < this.nysl.length; i++) {
    //     if (!this.team.includes(this.nysl[i].team1)) {
    //       this.team.push(this.nysl[i].team1);
    //     }
    //   }
    //   this.team.sort();
    //   console.log(this.team);
    // },
  },
  beforeMount() {
    this.getData("datanysl.json");
  },
};

// if()
// var URLactual = window.location.href;
// console.log(URLactual);
// if(URLactual=="http://localhost:8080/info-team"){
//   console.log("ingreso a if")
//   document.getElementById('info-team').classList.remove('block');
// }else{
//   document.getElementById('info-time').classList.remove('block');
// }
</script>

<style scoped>
.block {
  display: none!important;
}
.info-time,
.info-team {
  display: none;
}
</style>



