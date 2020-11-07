<template>
  <div class="register">
   <RegisterComp msg="REGISTER"/><!--lUEGO VER COMO CAMBIARLO POR TITLE-->
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterComp from '@/components/RegisterComp.vue'

export default {
  name: 'Register',
  components: {
  RegisterComp
  }
}
</script>