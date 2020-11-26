<template>
  <!-- PARTE IMPORTANTE -->
  <div class="bodycontent">
    <h1>{{ msg }}</h1>
    <div id="info">
      <b-carousel
        id="carousel-1"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        color="#ababab"
        style="text-shadow: 1px 1px 2px #333"
      >
        <b-carousel-slide 
        caption="August 4"
        text="NYSL Fundraiser">
          <template #img>
            <img class="imgban" src="../assets/ban.jpg" alt="image slot" />
          </template>
        </b-carousel-slide>
        <b-carousel-slide
        caption="August 16"
        text="Season Kick-off: Meet the Teams">
          <template #img>
            <img class="imgban" src="../assets/ban1.jpg" alt="image slot" />
          </template>
        </b-carousel-slide>

        <b-carousel-slide
        caption="September 1"
        text="First Game of the Season (Check Game Schedule for details)">
          <template #img>
            <img class="imgban" src="../assets/ban2.jpg" alt="image slot" />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>

  </div>
</template>

<script>
export default {
  name: "HomeComp",
  props: {
    msg: String,
  },
};
</script>

<style  scoped lang="scss">
.imgban{
  width: 100vw;
  height: 70vh;
  // padding-top: 10px;
}
h3{
  background-color:aquamarine;
}
#info{
  margin: 10px 0px -30px 10px;
}
@media screen and (orientation: landscape) {
  #info{
  margin:  0px 80px;
}
}
</style>