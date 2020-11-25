<template>
  <!-- PARTE IMPORTANTE -->
  <div>
    <div id="loc-info" class="none-p">
      <b-button v-b-modal="'modal-'+ide" centered class="btn-loc-mob">{{name}}</b-button>
      <b-modal v-bind:id="'modal-' + ide" centered v-bind:title="name" >
      <h6 >{{dir}}</h6>
       <iframe v-bind:src="link" width="300" height="200" frameborder="0" style="border: 0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
     </b-modal>
    </div>

    <div class="none-m btn-loc-p">
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-row>
        <b-col cols="4" ><b-button block v-b-toggle="'accordion-'+ide"   class="btn-loc-p">{{nam}}</b-button></b-col>
        <b-col cols="8" class="fix-cuerpo">
           <b-collapse v-bind:id="'accordion-' + ide"  visible accordion="my-accordion" role="tabpanel" class="fixed">
        <b-card-body>
          <h5>{{name}}</h5>
       <iframe v-bind:src="link" width="300" height="200" frameborder="0" style="border: 0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        <h6 >{{dir}}</h6>
        </b-card-body>
      </b-collapse>
        </b-col>
      </b-row>

    </b-card>
  </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "loc-info",
  props: ["name", "nam", "link", "dir", "ide","mounth","day","land"],
  // data(){
  //   return{
  //     landscape: window.matchMedia('(min-width:600px)').matches
  //   }
  // },
  // methods:{
  //   update(){
  //     window.addEventListener('resize',()=>window.matchMedia('(min-width:600px)').matches)
  //   }
  // }
};
</script>

<style scoped>
.btn-loc-mob {
  position: relative;
  width: 80vw;
  text-align: center;
  padding: 10px;
  margin: 2vh 9vw;
} 
.btn-loc-p{
  position: relative;
 margin: 0vh  10vw 0.5vh 9px;
}
/* .fix{
  position: fixed;
} */

.fix-cuerpo{
  text-align: center;
  /* background-color: blueviolet; */
  top: 5rem;
   position: fixed;
  z-index: 999;
  left: 30vw;
}
.card-body{
  position: fixed;
     overflow-y: scroll;
width: 66vw;
    z-index: 99999;
    height: 80vh;
   margin: 0vh  10vw 5vh 9px;
}
.card{
  background-color: rgba(255, 255, 255, 0);
  border: 0px;
}

</style>