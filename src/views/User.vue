<template>

<div class="bodycontent">
    <template v-if="user==null">
        <button @click="login()">loggin whit ggooe</button>
    </template>
    <template v-else>
        <p>slair</p>
        <button>
            <router-link to="/userinfo">My info</router-link>
        </button>
        <button @click="logout()">logout</button>
    </template>
</div>
  
</template>

<script>
import firebase from "firebase/app"
import "firebase/auth"
import { mapState } from 'vuex'

export default {
    name: "User",
    computed:{
        ...mapState(["user"])
    },
    methods:{
        // ...mapMutations(["changeUserInfo"]),
        login(){
            let provider=new firebase.auth.GoogleAuthProvider()
            firebase
            .auth()
            .signInWithPopup(provider)
            .then(result =>{
                console.log("LOG IN!!",result.user)
                // this.changeUserInfo(result.user)
                
            })
            .catch(error =>{
                console.log(error.code)
            })
        },
        logout(){
            firebase
            .auth()
            .signOut()
            .then(()=>{
                console.log("LOG OUT!!")
                // this.changeUserInfo(null)
            })
            .catch(error=>{
                console.log(error.code)
            })
        }
    }

}
</script>

<style>

</style>