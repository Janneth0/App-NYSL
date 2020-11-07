<template>
  <div class="info-team">
    <InfoTeamComp
      msg="GAME INFORMATION"
    /><!--lUEGO VER COMO CAMBIARLO POR TITLE-->
    {{Games}}
  </div>
</template>

<script>
// @ is an alias to /src
import InfoTeamComp from "@/components/InfoTeamComp.vue";

export default {
  // name: "GameInfo",
 
  name: "Info-Team",
  components: {
    InfoTeamComp,
  },
};
</script>



