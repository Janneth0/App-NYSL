<template>
  <div class="bodycontent">
     <div class="aviso">ELEGUÍ UN MES</div>
    <h1>Game Info</h1>
    <!-- BOTONES CON MESES -->
    <div id="accordion">
      <!-- <div class="card"> -->
      <!-- <div class="card-header" > -->
      <h5 class="mb-0 card-header h" id="headingOne">
        <button
          class="btn btn-primary mes"
          type="button"
          data-toggle="collapse"
          data-target="#september"
          aria-expanded="true"
          aria-controls="september"
        >
          SEPTEMBER
        </button>
      </h5>
      <!-- </div> -->
      <!-- <div class=""> -->
      <h5 class="mb-0 card-header h" id="headingTwo">
        <button
          class="btn btn-primary collapsed mes"
          type="button"
          data-toggle="collapse"
          data-target="#october"
          aria-expanded="false"
          aria-controls="october"
        >
          OCTOBER
        </button>
      </h5>
      <!-- </div> -->
      <div class="contenido">
        <!-- ------------------------SEPTEMBER -->
        <div
          id="september"
          class="cont collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordion"
          data-interval="false"
        >
          <div class="card-body">
            <!-- Carrusel september -->
            <div id="carouselSeptember" class="carousel">
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselSeptember"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#carouselSeptember" data-slide-to="1"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th class="date" scope="col">Day</th>
                        <th class="location" scope="col">Teams</th>
                        <th class="time" scope="col">Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      <TimeTabla
                        v-for="(p, index) in sepnine"
                        :key="index"
                        :location="p.location"
                        :team1="p.team1"
                        :team2="p.team2"
                        :day="p.day"
                      />
                    </tbody>
                  </table>

                  <!-- tabla-->
                </div>
                <div class="carousel-item">
                  <!-- tabla-->
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th class="date" scope="col">Day</th>
                        <th class="location" scope="col">Teams</th>
                        <th class="time" scope="col">Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      <TimeTabla
                        v-for="(p, index) in sepone"
                        :key="index"
                        :location="p.location"
                        :team1="p.team1"
                        :team2="p.team2"
                        :day="p.day"
                      />
                    </tbody>
                  </table>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselSeptember"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselSeptember"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>

          </div>
        </div>

        <!-- -----------------------OCTOBER -->
        <div
          id="october"
          class="cont collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordion"
          data-interval="false"
        >
          <div class="card-body">
            <div id="carouselOctober" class="carousel">
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselOctober"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#carouselOctober" data-slide-to="1"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th class="date" scope="col">Day</th>
                        <th class="location" scope="col">Teams</th>
                        <th class="time" scope="col">Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      <TimeTabla
                        v-for="(p, index) in octnine"
                        :key="index"
                        :location="p.location"
                        :team1="p.team1"
                        :team2="p.team2"
                        :day="p.day"
                      />
                    </tbody>
                  </table>

                  <!-- tabla-->
                </div>
                <div class="carousel-item">
                  <!-- tabla-->
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th class="date" scope="col">Day</th>
                        <th class="location" scope="col">Teams</th>
                        <th class="time" scope="col">Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      <TimeTabla
                        v-for="(p, index) in octone"
                        :key="index"
                        :location="p.location"
                        :team1="p.team1"
                        :team2="p.team2"
                        :day="p.day"
                      />
                    </tbody>
                  </table>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselOctober"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselOctober"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>

        <!-- <div class="cont fondo">SELECCIONAR UN MENU</div> -->
      </div>

      <!-- </div> -->
      <div></div>
    </div>
 
  </div>
</template>

<script>
import TimeTabla from "@/components/TimeTabla.vue";
import { mapState } from "vuex";

export default {
  name: "i-time",
  data: function () {
    return {
      sepnine: [],
      sepone: [],
      octnine: [],
      octone: [],
    };
  },
  components: {
    TimeTabla,
  },
  computed: {
    ...mapState(["datanysl"]),
  },
  methods: {
    //Busca todos los grupos y los ordena

    getTablas: function (mes, hora) {
      let arrayd = [];
      for (let i = 0; i < this.datanysl.length; i++) {
        if (this.datanysl[i].mounth == mes && this.datanysl[i].time == hora) {
          arrayd.push(this.datanysl[i]);
        }
      }
      return arrayd;
    },
  },
  created: function () {
    this.sepnine = this.getTablas(9, "9:30 am");
    this.sepone = this.getTablas(9, "1:00 pm");
    this.octnine = this.getTablas(10, "9:30 am");
    this.octone = this.getTablas(10, "1:00 pm");
    console.log(this.sepnine);
  },
};
</script>

<style scoped lang="scss">
  .card-body {
    padding:0px !important;
    .carousel-inner{
      padding: 25px;
    }
  }
.h {
  // background-color: blue;
  display: inline;
  width: 40vw;
  z-index: 99;
  padding: 20px 5vw !important;
  .btn {
    display: inline;
    width: 40vw;
    margin-top: 10px !important;
  }
}
#carouselSeptember,
#carouselOctober {
  background-color: cadetblue;
  position: relative;
  ol {
    position: fixed;
    left: 0vw;
    top: 82vh;
    // background-color: black;
  }
  li{
    background-color:  #032e3b;
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }
  .sr-only{
    background-color: brown;
  }
  // .carousel-item{
  //   background-color: red;
  // }
  .carousel-control-next {
    left: 85vw;
    color: royalblue;
    justify-content: space-around;
  }

}
.cont {
  // background-color: blue;
  width: 100vw;
  // padding: 5px;
  padding-left: -2vw;
  height: 10vh;
}
.bodycontent {
  padding: 0;
  height: 80vh;
}
// table{
//   z-index: 30;
// }
.aviso{
  position: absolute;
  top:30vh;
  left: 33vw;
  width: 45vw;
  // z-index: 20;
}
</style>

