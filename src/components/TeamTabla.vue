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
    <div class="none-m datos row">
      <p class="col-9 none-m">
        Date: {{ day }}/{{ month }} at
        {{ time }}
      </p>
      <p class="col-3 none-m btn-chat">
        <template v-if="user == null">
          <router-link to="/user"
            ><b-icon-chat-dots-fill></b-icon-chat-dots-fill
          ></router-link>
        </template>
        <template v-else>
          <router-link v-bind:to="'/chatroom/' + ide" class="none-m">
            <b-icon-chat-dots-fill></b-icon-chat-dots-fill
          ></router-link>
        </template>
      </p>
      <p class="col-9 none-m">Location: {{ location }}</p>
    </div>
  </tr>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "i-time",
  props: ["ide", "location", "day", "month", "time"],
  computed: {
    ...mapState(["datanysl", "user"]),
  },
};
</script>

<style scoped  lang="scss">
.datos {
  background-color: #a4ff4ab2;
  width: 60vw;
  border-radius: 10px;
  padding: 7px 20px;
  margin: 5px -2rem 5px 10px;
  p {
    margin-bottom: -5px !important;
    font-size: 1.2rem;
  }
  .btn-chat {
    float: right;
    margin: 0px;
    font-size: 2rem;
  }

}
</style>