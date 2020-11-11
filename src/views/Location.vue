<template>

  <div class="location">
    <LocationComp msg="LOCATION" /><!--lUEGO VER COMO CAMBIARLO POR TITLE-->
    <div class="bodycontent">

      <MapaModal v-for="(p, index) in location" :key="index" :name="p.name" :ide="p.id" :link="p.link" :dir="p.dir" />
    </div>
 
  </div>
</template>

<script>
// @ is an alias to /src
import LocationComp from "@/components/LocationComp.vue";

import MapaModal from "@/components/MapaModal.vue";
export default {
  name: "Location",
  components: {
    LocationComp,
    MapaModal,
  },
  data: function () {
    return {
      location: [],
    };
  },
  methods: {
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
      this.location = json.Location;
      console.log(this.location); //SI muestra todos los datos del JSON
    },
  },
  beforeMount() {
    this.getData("Location.json");
  }
};
</script>