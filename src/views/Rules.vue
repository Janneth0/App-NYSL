<template>
  <div class="rules">
   <RulesComp msg="Rules"/><!--lUEGO VER COMO CAMBIARLO POR TITLE-->
   
  </div>
  
</template>

<script>
// @ is an alias to /src
import RulesComp from '@/components/RulesComp.vue'

export default {
  name: 'Rules',
  components: {
   RulesComp
  }
}
</script>