<template>
<!-- PARTE IMPORTANTE -->
  <div class="modalBTN">
      <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" v-bind:data-target="'#'+ide" >
     {{name}}
    </button>

<!-- Modal -->
<div class="modal " v-bind:id="ide" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">{{name}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h6>{{dir}}</h6>
        <iframe v-bind:src="link" width="300" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger danger" data-dismiss="modal" data-backdrop="false">Close</button>
      </div>
      
    </div>
  </div>
</div>

  </div>
</template>

<script>

export default {
    name: "locationBTN",
  props: ["name","link","dir","ide"],

}
</script>

<style>
.modalBTN {
  position: relative;
  /* color: aliceblue; */
  width: 80vw;
  text-align: center;
  padding: 10px;
  background-color: blueviolet;
  
  margin: 2vh 9vw;
}
.modal-backdrop{
    height: 0 !important;
}
/* #exampleModalCenter{
    z-index: 99;
} */
/* .btn {
    z-index: 9999;
}
.modal-backdrop{
    z-index: 1000 !important;
} */
</style>