<template>
  <div class="register">
    <div class="bodycontent">
      <h1>Register</h1><!--lUEGO VER COMO CAMBIARLO POR TITLE-->
      <!-- <p>{{datanysl}}</p> -->
      <Form />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import RegisterComp from "@/components/RegisterComp.vue";
import Form from "@/components/Form.vue";
import { mapState } from "vuex";

export default {
  name: "Register",
  props: ["team1", "team2", "date", "hour", "location", "color", "order"],
  components: {
    // RegisterComp,
    Form,
  },
  computed: {
    ...mapState(["datanysl"]),
  },
};
</script>