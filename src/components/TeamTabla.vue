<template>
  <div class="table-Teams">
    <tr>
      <td class="day">{{ day }}-{{ mounth }}</td>
      <td class="location">{{ location }}</td>
      <td class="time">{{ time }}</td>
    </tr>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "i-time",
  props: ["ide", "location", "day", "mounth", "time"],

  computed: {
    ...mapState(["datanysl"]),
  },
};
</script>

<style scoped>


td {
  width: 30vw;
}
.time,
.date {
  width: 15vw;
}
.location {
  width: 60vh;
}
</style>