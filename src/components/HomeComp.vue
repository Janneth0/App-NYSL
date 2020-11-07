<template>
<!-- PARTE IMPORTANTE -->
  <div class="bodycontent">
    <h1>{{ msg }}</h1>
    <div id="upcoming">
      <h2>August 4</h2>
      <p class="indent">NYSL Fundraiser</p>

      <h2>August 16</h2>
      <p class="indent">Season Kick-off: Meet the Teams</p>

      <h2>September 1</h2>
      <p class="indent">
        First Game of the Season (Check Game Schedule for details)
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComp",
  props: {
    msg: String,
  }
};
</script>

<style  scoped lang="scss">

p {
  margin-bottom: 40px;
  // background-color: indianred;
}
</style>