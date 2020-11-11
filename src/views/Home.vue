<template>
  <div class="home">
   <HomeComp msg="UPCOMING EVENTS"/><!--lUEGO VER COMO CAMBIARLO POR TITLE-->
   <!-- <img alt="Vue logo" src="assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcoyyme to Your Vue.js App janni"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComp from '@/components/HomeComp.vue'

import { mapState, mapMutations } from "vuex";

export default {
  name: 'Home',
  components: {
    HomeComp
  },
  computed: {
    ...mapState(),
  },
  data: function () {
    return {
      nysl: [],
      team: [],
    };
  },
  methods: {
    ...mapMutations(["insertData","insertLocation"]),
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
      this.insertData({nysl: json.Games });
      this.insertLocation({location: json.Location });
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



</script>
