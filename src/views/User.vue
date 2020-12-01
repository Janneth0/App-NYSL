<template>

<div class="bodycontent">
    <template v-if="user==null">
        <h1>LOGIN</h1>
        <button @click="login()" class="btns">Login with Google</button>
    </template>
    <template v-else class="row">
        <h1>{{user.displayName}}</h1>
        <button class="btns col-12 col-sm-5" >
            <router-link to="/userinfo">My info</router-link>
        </button>
        <button @click="logout()" class="btns col-12 col-sm-5">Logout</button>
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

<style scoped lang="scss" >
.bodycontent{
text-align: center;
}
.btns{
    padding: 10px;
    margin:  5vh  20px;
    background-color:#03394a ;
    color:  #a4ff4a ;   
    border: none;
    border-radius: 10px;
    a{
      color:  #a4ff4a ;    
    }
    
}
@media screen and (orientation: portrait) {
    .btns{
        margin-left: 0.5rem;
    }
}

</style>