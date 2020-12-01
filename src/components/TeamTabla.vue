<template>
  <tr>
    <td class="day none-p">{{ day }}-{{ month }}</td>
    <td class="location none-p">{{ location }}</td>
    <td class="time none-p">{{ time }}</td>
    <td class="none-p">
      <template v-if="user == null">
        <router-link to="/user"
          ><b-icon-chat-dots-fill></b-icon-chat-dots-fill
        ></router-link>
      </template>
      <template v-if="user != null">
        <router-link v-bind:to="'/chatroom/' + ide" class="none-p">
          <b-icon-chat-dots-fill> </b-icon-chat-dots-fill
        ></router-link>
      </template>
    </td>
    <!-- Verificar  -->
    <div class="none-m datos">
      <p class="col-12 none-m">
        Date: {{ day }}/{{ month }} at
        {{ time }}
      </p>
      <p class="col-12 none-m">Location: {{ location }}</p>
      <p class="none-m">
   
        <template v-if="user == null">
          no hay usuario
        <router-link to="/user" ><b-icon-chat-dots-fill></b-icon-chat-dots-fill  ></router-link>
      </template>
      <template v-else>
        <router-link v-bind:to="'/chatroom/' + ide" class="none-m"> <b-icon-chat-dots-fill></b-icon-chat-dots-fill></router-link>
      </template>
      </p>
    </div>
    <!-- {{tabla}} -->
  </tr>

  <!-- <div class="none-p">
    
     -->

  <!-- </div> -->
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "i-time",
  props: ["ide", "location", "day", "month", "time"],
  computed: {
    ...mapState(["datanysl","user"]),
  },
};
</script>

<style scoped  lang="scss">
.datos {
  // background-color: aqua;
  width: 63vw;
  // text-align: center;
  //  padding: 0;
  margin-top: 10px !important;
  p {
    margin-bottom: -5px !important;
  }
}
</style>