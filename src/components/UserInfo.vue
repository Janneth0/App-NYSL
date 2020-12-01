<template>
  <div class="bodycontent ">
      <h1>My Profile</h1>
    <b-row class="info">
      <b-col cols="12" sm="3" center> <img id="user-photo" :src="user.photoURL" alt="" /></b-col>
      <b-col sm="7">
          <h3 sm="7">{{user.displayName}}</h3>
          <h4 sm="12">{{user.email}}</h4>  
      </b-col>
     
    </b-row>
    

   
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "UserInfo",
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style scoped lang="scss">
.bodycontent{
    text-align: center;
}
#user-photo {
    text-align: center;
  width: 100px;
  border-radius: 50%;
}
.info{
    padding-top: 5vh;
}
@media screen and (orientation: portrait) {
  
.info{
    margin-left: -0.5rem;
}
}
</style>