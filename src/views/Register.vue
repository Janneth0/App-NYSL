<template>
  <div class="register">
    <div class="bodycontent">
      <h1>Register</h1>
      <Formulario />
    </div>
  </div>
</template>

<script>
import Formulario from "@/components/Formulario.vue";
import { mapState } from "vuex";

export default {
  name: "Register",
  components: {
    Formulario
  },
  computed: {
    ...mapState(["datanysl"]),
  },
};
</script>