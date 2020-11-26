<template>
  <div class="bodycontent">
    <h1>CHAT!!</h1>
    <template v-if="user == null">
      <h2>DEBE LOGUERASE</h2>
      <router-link to="/user" tag="button">Login</router-link>
    </template>
    <template v-else>
      <h3>Hola {{ user.displayName }}</h3>
      <div v-for="(message, index) in messages" :key="index">
        <p>
          <strong>{{ message.author }} said:</strong>
        </p>
        <p>
          {{ message.body }}
        </p>
      </div>
      <form @submit.prevent="post()">
        <input
          type="text"
          name="sms"
          id="box"
          placeholder="enter you sms"
          v-model="input"
        />
        <button type="submit">send</button>
      </form>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { db } from "../firebase/db";
// import func from '../../vue-temp/vue-editor-bridge';

export default {
  name: "Chat",
  data() {
    return {
      messages: [{ author: "juan", body: "hola" }],
      input: null,
    };
  },
  methods: {
    post: function () {
      let folder = db.ref("forum/match" + this.$route.params.id);
      let message = {
        body: this.input,
        author: this.user.displayName,
        date: new Date(),
      };
      folder.push(message);
      this.input = null;
    },
  },
  computed: {
    ...mapState(["user"]),
  },
  mounted(){
    this.messages=[];
    db.ref("forum/match" + this.$route.params.id).on("child_added",(snapshot)=>{
      this.messages.push(snapshot.val())
    })
  }
  // firebase:{
  //   messages:db.ref("forum/match" + this.$route.params.id)
  // }
};
</script>

<style>
</style>