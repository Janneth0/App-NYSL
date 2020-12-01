<template>
  <div class="bodycontent">
    <h1>CHAT!!</h1>
    <template v-if="user == null">
      <h2>DEBE LOGUERASE</h2>
      <router-link to="/user" tag="button">Login</router-link>
    </template>
    <template v-else class="cent">
      <div class="cuerpo">
        <div v-for="(message, index) in messages" :key="index" id="sms">
          <p class="autor">
            <strong>{{message.date}}{{ message.author }} said:</strong> {{ message.body }}
          </p>
        
        </div>
        <form @submit.prevent="post()" class="row inp-txt">
          <input
            type="text"
            name="sms"
            id="box"
            placeholder="enter your sms"
            v-model="input"
            class="col-10"
          />

          <button type="submit" id="send" class="col-1">Send</button>
        </form>
      </div>
      <!-- <h3>Hola {{ user.displayName }}</h3> -->
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
      messages: [{ author: "juan", body: "hola", date:null}],
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
      console.log(this.messages)
      folder.push(message);
      this.input = null;
    },
  },
  computed: {
    ...mapState(["user"]),
  },
  mounted() {
    this.messages = [];
    db.ref("forum/match" + this.$route.params.id).on(
      "child_added",
      (snapshot) => {
        this.messages.push(snapshot.val());
        console.log(snapshot)
      }
    );
  },
  // firebase:{
  //   messages:db.ref("forum/match" + this.$route.params.id)
  // }
};
</script>

<style scoped lang="scss">
.cuerpo{
  position: fixed;
  width: 95vw;
  background-color: cornsilk;
}

@media screen and (orientation: landscape) {
  .cuerpo,
  #box-sms {
    margin-left: -10px;
    background-color: aqua;
    padding-bottom: 3rem;

    height: 60vh;
    overflow-y: scroll !important;
    width: 100vw;
  }
  /* #box-sms {
    position: fixed;
    /* background-color: aqua; 
    width: 60vw;
    bottom: 3rem;
    height: 30px;
  } */
}
</style>