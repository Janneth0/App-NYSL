<template>
  <div id="contenedor">
<h1>Hola</h1>
<p>{{nysl}}</p>
  </div>
</template>

<script>
import { mapState} from "vuex";

export default {
     computed: {
    ...mapState(['datanysl']),
  },

}
</script>

<style>


</style>