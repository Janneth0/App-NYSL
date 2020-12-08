<template>
  <div class="bodycontent">
    <h1>Chatroom</h1>
    <template v-if="user == null">
      <h2>DEBE LOGUERASE</h2>
      <router-link to="/user" tag="button">Login</router-link>
    </template>
    <template v-else class="cent">
      <div class="cuerpo">
        <div v-for="(message, index) in messages" :key="index" id="sms">
          <p class="box">
            <strong>{{ message.date }}{{ message.author }} said:</strong>
            {{ message.body }}
          </p>
        </div>
        <form @submit.prevent="post()">
          <input
            type="text"
            name="sms"
            id="box"
            placeholder="enter your sms"
            v-model="input"
            class="col-8"
          />

          <button type="submit" class="btn-secondary col-4">Send</button>
        </form>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { db } from "../firebase/db";
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
    getInfo: function () {},
  },
  computed: {
    ...mapState(["user", "nysldata"]),
  },
  mounted() {
    this.messages = [];
    db.ref("forum/match" + this.$route.params.id).on(
      "child_added",
      (snapshot) => {
        this.messages.push(snapshot.val());
      }
    );
  },
};
</script>

<style scoped lang="scss">
form {
  width: 100vw;
  top: 86.5vh;
  padding: 0;
  margin-left: -20px;
}

@media screen and (orientation: portrait) {
  .cuerpo {
    position: absolute;
    overflow-y: scroll !important;
    background-color: cornsilk;
    margin-right: 10px;
    padding: 10px;
    width: 95vw;
    bottom: 10vh;
    top: 7vh;
    form {
      position: fixed;
    }
    .inp-txt {
      background-color: green;
      text-align: center;
      bottom: 10vh;
    }
  }
  .btnnav{
    display:none !important;
  }
}
@media screen and (orientation: landscape) {
  
  .cuerpo {
    position: absolute;
    overflow-y: scroll !important;
    background-color: cornsilk;

    margin: 3vh 10vw;
    padding: 10px;
    bottom: 10vh;
    width: 75vw;
    top: 8.5vh;
    height: 70vh;
    form {
      position: fixed;
      width: 80vw;
      margin-left: -5vw;
      margin-top: 3vh !important;
      bottom: -1vh;
    }
    .inp-txt {
      background-color: green;
      text-align: center;
      bottom: 10vh;
    }


}


}

</style>