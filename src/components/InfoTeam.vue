<template>
  <!-- <tr>
      <td>{{day}}-{{mounth}}</td>
      <td>{{location}}</td>
      <td>{{datanysl[key].team1}}</td>
    </tr> -->
  <div class="bodycontent">
    <transition name="component-fade" mode="out-in">
      <component v-bind:is="view">hola</component>
    </transition>
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  el: "#transition-components-demo",
  data() {
    return {
      view: "v-a",
    };
  },
  components: {
    "v-a": {
      template: "<div>Component A</div>",
    },
    "v-b": {
      template: "<div>Component B</div>",
    },
  },
  // name: "i-team",
  // props: ["ide", "location", "day", "mounth", "time"],
  // computed: {
  //   ...mapState(["datanysl"]),
  // },
  // new Vue({
};
</script>

<style scoped >
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>