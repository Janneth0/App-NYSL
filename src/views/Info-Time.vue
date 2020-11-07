<template>
  <div class="info-time">
   <InfoTimeComp msg="GAME INFORMATION"/><!--lUEGO VER COMO CAMBIARLO POR TITLE-->
  </div>
</template>

<script>
// @ is an alias to /src
import InfoTimeComp from '@/components/InfoTimeComp.vue'

export default {
  name: 'Info-Time',
  components: {
   InfoTimeComp
  }
}
</script>