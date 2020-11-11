<template>
  <div class="home">
   <HomeComp msg="UPCOMING EVENTS"/><!--lUEGO VER COMO CAMBIARLO POR TITLE-->
   <!-- <img alt="Vue logo" src="assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcoyyme to Your Vue.js App janni"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComp from '@/components/HomeComp.vue'



export default {
  name: 'Home',
  components: {
    HomeComp
  }


};



</script>
