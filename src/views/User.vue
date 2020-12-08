<template>
  <div class="bodycontent">
    <template v-if="user == null">
      <h1>LOGIN</h1>
      <div class="row">
          <div id="prof" class="col-12 col-sm-4">
              <i class="fas fa-user"></i>
          </div>
        <button @click="login()" class="btns col-12 col-sm-6">Login with Google</button>
      </div>
    </template>
    <template v-else class="row">
      <h1>{{ user.displayName }}</h1>
      <button class="btns col-12 col-sm-5">
        <router-link to="/userinfo">My info</router-link>
      </button>
      <button @click="logout()" class="btns col-12 col-sm-5">Logout</button>
    </template>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import { mapState } from "vuex";

export default {
  name: "User",
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    login() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log("LOG IN!!", result.user);
        })
        .catch((error) => {
          console.log(error.code);
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("LOG OUT!!");
        })
        .catch((error) => {
          console.log(error.code);
        });
    },
  },
};
</script>

<style scoped lang="scss" >
.bodycontent {
  text-align: center;
}
.btns {
  padding: 10px;
  margin: 10vh 20px;
  background-color: #03394a;
  color: #a4ff4a;
  border: none;
  border-radius: 10px;
  a {
    color: #a4ff4a;
  }
}
i {
    text-align: center;
    padding: 15px 5px;
     border-radius: 50%;
    font-size: 4rem;
    width: 20vw;
  }
@media screen and (orientation: portrait) {
  .btns {
    margin-left: 0.5rem;
  }
}
</style>