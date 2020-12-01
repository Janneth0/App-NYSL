<template>
  <div class="bodycontent">
    <h1>Upcoming Events</h1>

    <div id="carouselExampleIndicators" class="carousel slide cuerpo" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100 imgban" src="../assets/ban.jpg" alt="First slide" />
          <div class="carousel-caption ">
            <h3>August 4</h3>
            <p>NYSL Fundraiser</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 imgban" src="../assets/ban1.jpg" alt="Second slide" />
          <div class="carousel-caption ">
            <h3>August 16</h3>
            <p>Season Kick-off: Meet the Teams</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 imgban" src="../assets/ban2.jpg" alt="Third slide"  />
          <div class="carousel-caption ">
            <h3>September 1</h3>
            <p>First Game of the Season <br> (Check Game Schedule for details)</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators"  role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next"  href="#carouselExampleIndicators" role="button" data-slide="next" >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style  scoped lang="scss">
.bodycontent {
  padding-bottom: 0px;
  
}
.cuerpo {
  padding: 0px;
  height: 76vh;
  padding-top: 10px;
  .imgban {
    width: 90vw;
    height: 70vh;
    margin-left: 10px;
  }
}
.carousel-caption {
    bottom: 10px;
    padding-top: 10px;
    padding-bottom: 5px;
    color:  #c5ec9f;
    text-align: center;
    font-weight: bold;
    p,h3{
    text-shadow: 2px 2px 3px #03394a ; 
    }
}

@media screen and (orientation: landscape) {
  .cuerpo {
    margin: 0vh 15vw;
    padding-top: 0px;
    width: 70vw;
    height: 70vh;
  }
  .carousel-caption {
    padding-bottom: 15px;
  }
}
</style>