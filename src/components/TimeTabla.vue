<template>
  <tr>
    <td class="day">{{ day }}</td>
    <td class="equipos">{{ team1 }}-{{ team2 }}</td>
    <td class="location">{{ location }}</td>
    <!-- <p>{{ datanysl }}</p> -->
  </tr>
</template>

<script>
// import TimeTabla from "@/components/TimeTabla.vue";
import { mapState } from "vuex";

export default {
  name: "i-time",
  props: ["ide", "location", "day", "team1", "team2"],

  computed: {
    ...mapState(["datanysl"]),
  },
  components: {
    // TimeTabla,
  },
};
</script>
