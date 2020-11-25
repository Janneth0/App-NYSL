<template>
  <div class="bodycontent">
    <div class="aviso">ELEGUÍ UN MES</div>
    <h1>Game Info-TIME</h1>
    <!-- BOTONES CON MESES -->
    <div class="btn-loc-p">
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-row>

              <b-col cols="6" sm="12"><b-button block v-b-toggle="'accordion-sept'" class="b-land">September</b-button></b-col >
              <b-col cols="6" sm="12"> <b-button block v-b-toggle="'accordion-oct'" class="b-land">Octubre</b-button></b-col >
           
           

            <b-col cols="12" class="fix-cuerpo "
              ><b-collapse
                v-bind:id="'accordion-sept'"
                visible
                accordion="my-accordion"
                role="tabpanel"
                class="fix"
              >
                <b-card-body >
                  <h3 class="none-p">September</h3>
                  <b-carousel
                    id="carousel-1"
                    :interval="0"
                    controls
                    indicators
                    img-width="1024"
                    img-height="480"
                  
                  >
                    <b-carousel-slide >
                      <!-- <p>a9am</p> -->
                      <template #img >
                        <b-table striped hover :items="sepnine" ></b-table>
                      </template>
                    </b-carousel-slide>
                    <b-carousel-slide>
                      <!-- <p>1pm</p> -->
                      <template #img>
                        <b-table striped hover :items="sepone"></b-table>
                      </template>
                    </b-carousel-slide>
                  </b-carousel>
                </b-card-body>
              </b-collapse>
            </b-col>

            <b-col cols="12" class="fix-cuerpo"
              ><b-collapse
                v-bind:id="'accordion-oct'"
                visible
                accordion="my-accordion"
                role="tabpanel"
                class="fix"
              >
                <b-card-body>
                  <h3 class="none-p">Octuber</h3>
                  <b-carousel
                    id="carousel-1"
                    :interval="0"
                    controls
                    indicators
                    img-width="1024"
                    img-height="480"
                  >
                    <b-carousel-slide>
                      <!-- <p>a9am</p> -->
                      <template #img>
                        <b-table striped hover :items="octnine"></b-table>
                      </template>
                    </b-carousel-slide>
                    <b-carousel-slide>
                      <!-- <p>1pm</p> -->
                      <template #img>
                        <b-table striped hover :items="octone"></b-table>
                      </template>
                    </b-carousel-slide>
                  </b-carousel>
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
// import TimeTabla from "@/components/TimeTabla.vue";
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
    // TimeTabla,
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
  text-align: center;
    padding:0px !important;
    .carousel-inner{
      padding: 25px;
    }
    td{
      padding-bottom: -10px;
      background-color: blue;
    }
}
#accordion-sept,
#accordion-oct {
  background-color: rgba(105, 235, 240, 0.61);
  position: relative;
}

.aviso{
  position: absolute;
  top:30vh;
  left: 33vw;
}
 thead{
      position:fixed !important;
      top: 10vh;
    }
   
@media screen and (orientation: landscape) {
  .b-land{
    float: left;
    width: 20vw;
    margin-bottom: 5rem;
  }
  .fix{
        overflow-y: scroll;

    z-index: 99999;
    height: 14rem;

  }
  
  .fix-cuerpo{
        position: fixed;

    width: 70vw ;
    margin: 0 0 0 25vw;
    float: right;
    li,a{
      background-color: aqua;
    }
   
  }
}
</style>

