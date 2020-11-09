<template>
  <div class="bodycontent">
    <!-- BOTONES CON MESES -->
    <div class="botones">
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#september" aria-expanded="false" aria-controls="september">
       September
      </button>
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#october" aria-expanded="false" aria-controls="october">
       October
      </button>
    </div>

    <!-- CONTENIDO -->
    <div class="contenido">
      <!-- september -->
      <div class="collapse show" id="september">
       <div class="card card-body">
       <!-- Carrusel -->
       <div id="carouselExampleIndicarsto" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>
  <div class="carousel-inner">
    <!-- 9am -->
    <div class="carousel-item active">
      <!-- <img class="d-block w-100" src="" alt="First slide"> -->
<!-- TABLA -->
      <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Location</th>
      <th scope="col">Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>8-9</td>
      <td>Marjorie P.Hart</td>
      <td>1:00 pm</td>
    </tr>
    <tr>
      <td>6-10</td>
      <td>South</td>
      <td>1:00 pm</td>
    </tr>
  </tbody>
      </table>



    </div>
    <!-- 1pm -->
    <div class="carousel-item">
      <!-- <img class="d-block w-100" src="" alt="Second slide"> -->
       <table class="table table-bordered">
    <thead>
    <tr>
      <th scope="col">Date2</th>
      <th scope="col">Location</th>
      <th scope="col">Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>8-9</td>
      <td>Marjorie P.Hart</td>
      <td>1:00 pm</td>
    </tr>
    <tr>
      <td>6-10</td>
      <td>South</td>
      <td>1:00 pm</td>
    </tr>
  </tbody>
        </table>
    </div>
  </div>
  <a class="ecarousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>




       </div>
      </div>

      <!-- octubre -->
      <div class="collapse" id="october">
       <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
       </div>
      </div>
    </div>

 

  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {

};
</script>

<style>
#september{
  background-color: black;
}
</style>