<template>
  

  <div>
      <h1>pruebando</h1>
      {{datanysl}}
  </div>
  
</template>

<script>
import {mapState} from 'vuex';
export default {
    name:'collapse',
    props: ["team1","team2","date","hour","location","color","order"],
    data() {
      return {
        visible: false
      }
    },
    computed:{ 
        ...mapState(['datanysl'])
    }
        
}
</script>

<style>

</style>