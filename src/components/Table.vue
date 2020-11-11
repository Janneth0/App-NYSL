<template>
  <tr>
    <td>{{ day }}</td>
    <td>{{ team1 }} {{ team2 }}</td>
    <td>{{ location }}</td>
  </tr>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "i-time",
  props: ["ide", "location", "day", "mounth", "team1", "team2"],

  computed: {
    ...mapState(["datanysl"]),
  },
};
</script>

<style>
.t-data {
  /* position: relative;
  top:1vh; */
}
</style>