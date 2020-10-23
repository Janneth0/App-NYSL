<template>
  <div class="about">
   <AboutComp msg="INFORMATION"/>
   <!-- <img alt="Vue logo" src="assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcoyyme to Your Vue.js App janni"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import AboutComp from '@/components/AboutComp.vue'

export default {
  name: 'About',
  components: {
    AboutComp
  }
}
</script>

<style  scoped lang="scss">
.about{
  margin-bottom: 10%;
}
</style>




