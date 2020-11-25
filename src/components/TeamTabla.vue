<template>
  <tr>
    <td class="day none-p">{{ day }}-{{ mounth }}</td>
    <td class="location none-p">{{ location }}</td>
    <td class="time none-p">{{ time }}</td>
    <!-- Verificar  -->
    <div class="none-m datos">
      <p class="col-12 none-m">
        Date: {{ day }}/{{ mounth }} at
        {{ time }}
      </p>
      <p class="col-12 none-m">Location: {{ location }}</p>
    </div>
  </tr>

  <!-- <div class="none-p">
    
     -->

  <!-- </div> -->
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

<style scoped  lang="scss">
.datos {
  // background-color: aqua;
  width: 63vw;
  // text-align: center;
  //  padding: 0;
  margin-top: 10px !important;
  p {
    margin-bottom: -5px !important;
  }
}
</style>