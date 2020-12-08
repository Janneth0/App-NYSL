<template>
  <div class="bodycontent">
    <h1>Game Info</h1>
    <div id="accordion">
      <div class="row land">
        <button
          class="btn btn-secondary collapsed col-5 col-sm-12"
          type="button"
          data-toggle="collapse"
          data-target="#september"
          aria-expanded="true"
          aria-controls="september"
        >
          SEPTEMBER
        </button>

        <!-- </div> -->
        <!-- <div class=""> -->

        <button
          class="btn btn-secondary col-5 col-sm-12"
          type="button"
          data-toggle="collapse"
          data-target="#october"
          aria-expanded="false"
          aria-controls="october"
        >
          OCTOBER
        </button>
      </div>
      <div class="contenido">
        <div
          id="september"
          class="cont collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordion"
          data-interval="false"
        >
          <div class="card-header">September</div>
          <div class="card-body">
            <div id="carouselSeptember" class="carousel">
              <ol class="carousel-indicators circ">
                <li
                  data-target="#carouselSeptember"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#carouselSeptember" data-slide-to="1"></li>
              </ol>
              <p class="text">
                9:30 am <i class="fas fa-angle-double-left"></i>
                <i class="fas fa-angle-double-right"></i> 1:00 pm
              </p>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th class="date" scope="col">Day</th>
                        <th class="location" scope="col">Teams</th>
                        <th class="time" scope="col">Location</th>
                        <th class="chat" scope="col">Chat</th>
                      </tr>
                    </thead>
                    <tbody class="t-body">
                      <TimeTable
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
                        <th class="chat" scope="col">Chat</th>
                      </tr>
                    </thead>
                    <tbody class="t-body">
                      <TimeTable
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
                class="carousel-control-prev none-m"
                href="#carouselSeptember"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon none-m"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next none-m"
                href="#carouselSeptember"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon none-m"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>

        <div
          id="october"
          class="cont collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordion"
          data-interval="false"
        >
          <div class="card-header">October</div>
          <div class="card-body">
            <div id="carouselOctober" class="carousel">
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselOctober"
                  data-slide-to="0"
                  class="active a"
                ></li>
                <li data-target="#carouselOctober" data-slide-to="1"></li>
              </ol>
              <p class="text">
                <span class="a"
                  >9:30 am <i class="fas fa-angle-double-left"></i>
                  <i class="fas fa-angle-double-right"></i> 1:00 pm</span
                >
              </p>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th class="date" scope="col">Day</th>
                        <th class="location" scope="col">Teams</th>
                        <th class="time" scope="col">Location</th>
                        <th class="chat" scope="col">Chat</th>
                      </tr>
                    </thead>
                    <tbody class="t-body">
                      <TimeTable
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
                        <th class="chat" scope="col">Chat</th>
                      </tr>
                    </thead>
                    <tbody class="t-body">
                      <TimeTable
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
                class="carousel-control-prev none-m"
                href="#carouselOctober"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon none-m"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next none-m"
                href="#carouselOctober"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon none-m"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>

      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
import TimeTable from "@/components/TimeTable.vue";
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
    TimeTable,
  },
  computed: {
    ...mapState(["datanysl"]),
  },
  methods: {
    getTablas: function (mes, hora) {
      let arrayd = [];
      for (let i = 0; i < this.datanysl.length; i++) {
        if (this.datanysl[i].month == mes && this.datanysl[i].time == hora) {
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
  },
};
</script>

<style scoped lang="scss">
ol {
  position: fixed;
  left: 0vw;
  top: 77vh;
  li {
    background-color: #032e3b;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    margin: 15px;
    border: 0.5px #032e3b solid;
    &.active {
      background-color: #a4ff4a;
    }
  }
}

.text {
  position: fixed;
  left: 30vw;
  top: 83vh;
  font-size: 15px;
}
.land {
  margin-left: 3rem;
}
.btn {
  width: 30vw;
  padding: 5px;
  margin: 5px;
}
.contenido {
  width: 100vw;
  margin-left: -10px;
  padding-top: -10px;
}
.card-body {
  padding: 10px;
}
.card-header {
  text-align: center;
  font-size: 1.5rem;
  padding: 0;

  border: none;
}
table {
  background-color: #032e3b52;
}
th {
  text-align: center;
  padding: 10px 0;
}

@media screen and (orientation: landscape) {
  .bodycontent {
    margin-bottom: 0;
  }
  .contenido {
    text-align: center;
    position: absolute;

    width: 70vw;
    float: right;
    left: 30vw;
    top: 12vh;
    table {
      position: relative;
      width: 50vw;
      margin: 0px 3rem 0 3rem;
    }
  }
  .land {
    width: 23vw;
    margin: 3.5rem 0 0 0;
    .btn {
      margin-bottom: 3rem;
    }
  }
  th {
    text-align: center;
    padding: 5px;
  }
  .card-header {
    position: absolute;
    margin-left: 0;
    margin-top: -6vh;
    left: -20vw;
  }
  .card-body {
    margin-top: 10vh;
    padding: 10px;
  }
  ol {
    left: 25vw;
    top: 29.6vh;
    li {
      background-color: #032e3b;
      height: 18px;
      width: 18px;
      border-radius: 50%;
      margin: 15px;
      border: 0.5px #032e3b solid;
      &.active {
        background-color: #a4ff4a;
      }
    }
  }

  .text {
    position: fixed;
    left: 52vw;
    top: 28vh;
    font-size: 15px;
  }
}
</style>

