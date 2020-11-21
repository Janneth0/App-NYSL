<template>
  <div class="location">
    <div class="bodycontent">
      <h1>Location</h1>
      <MapaModal
        v-for="(p, index) in location"
        :key="index"
        :name="p.name"
        :ide="p.id"
        :link="p.link"
        :dir="p.dir"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import MapaModal from "@/components/MapaModal.vue";
export default {
  name: "Location",
  components: {
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
  },
};
</script>