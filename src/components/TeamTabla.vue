<template>

    <tr>
      <td class="day">{{ day }}-{{ mounth }}</td>
      <td class="location">{{ location }}</td>
      <td class="time">{{ time }}</td>
    </tr>

  
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

