<template>
  <div class="rules">
   <RulesComp msg="Rules"/>
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