<template>
  <tr>
    <td >{{ day }}</td>
    <td >{{team1}} vs {{team2}}</td>
    <td >{{ location }}</td>
    <td >
      <template v-if="user == null">
        <router-link to="/user"
          ><b-icon-chat-dots-fill></b-icon-chat-dots-fill
        ></router-link>
      </template>
      <template v-if="user != null">
        <router-link v-bind:to="'/chatroom/' + ide" >
          <b-icon-chat-dots-fill> </b-icon-chat-dots-fill
        ></router-link>
      </template>
    </td>
  </tr>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "i-time",
  props: ["ide", "location", "day", "team1", "team2"],
  computed: {
    ...mapState(["datanysl", "user"]),
  },
};
</script>

<style scoped  lang="scss">
td{
    text-align: center;
    padding: 10px 0;
}
@media screen and (orientation: landscape) {
    td{
    text-align: center;
    padding: 5px 10px;
}
}
</style>