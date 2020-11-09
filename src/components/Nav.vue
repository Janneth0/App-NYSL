<template>
<!-- PARTE IMPORTANTE -->
<div id="nav" class="fixed-bottom">
      <router-link to="/info-team" ><i class="fas fa-users" v-on:click="veripage('info-team')"></i></router-link> |
      <router-link to="/info-time"><i class="far fa-calendar-alt" v-on:click="varipage('info-time')"></i
      ></router-link>
      |
      <router-link to="/location"
        ><i class="fas fa-map-marked-alt"></i
      ></router-link>
      |
      <router-link to="/about"><i class="fas fa-info-circle"></i></router-link>
    </div>
  
</template>

<script>
export default {


}
</script>

<style>

</style>