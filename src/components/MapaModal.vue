<template>
  <!-- PARTE IMPORTANTE -->
  <div class="modalBTN">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      v-bind:data-target="'#' + ide"
    >
      {{ name }}
    </button>

    <!-- Modal -->
    <div
      class="modal"
      v-bind:id="ide"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">{{ name }}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h6>{{ dir }}</h6>
            <iframe
              v-bind:src="link"
              width="300"
              height="200"
              frameborder="0"
              style="border: 0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger danger"
              data-dismiss="modal"
              data-backdrop="false"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "locationBTN",
  props: ["name", "link", "dir", "ide","mounth","day"],
};
</script>

<style scoped>
.btn-primary,.btn-primary:focus {
  position: relative;
  /* color: aliceblue; */
  width: 80vw;
  text-align: center;
  padding: 10px;
  background-color: #032e3b ;
  border-color: #a4ff4a;
  margin: 2vh 9vw;
}
.btn-primary:hover{
    border-color: #032e3b ;
  background-color: #a4ff4a;
  color: #032e3b;
}


.modal-content{
  border-color: #032e3b ;
  text-align: center;
}
iframe{
border-color: #a4ff4a;
box-shadow: #032e3b;
}
</style>