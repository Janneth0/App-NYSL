<template>
  <div class="location">
   <LocationComp msg="LOCATION"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LocationComp from '@/components/LocationComp.vue'

export default {
  name: 'Location',
  components: {
   LocationComp
  }
}
</script>