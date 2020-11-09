<template>
  <div class="bodycontent">
    <!-- FILTRO -->
    <div id="filtro">
      <!-- ------TEAM----- -->
      <div class="form-group">
        <label for="team"><h4>Team</h4></label>
        <select id="team" class="form-control">
          <option>U1</option>
          <option>U2</option>
          <option>U3</option>
          <option>U4</option>
          <option>U5</option>
          <option>U6</option>
          <!-- OPCIONES -->
        </select>
      </div>
      <h2>VS</h2>
      <!-- ------OPONENT----- -->
      <div class="form-group">
        <label for="oponent"><h4>Oponent</h4></label>
        <select id="oponent" class="form-control">
          <option>U1</option>
          <option>U2</option>
          <option>U3</option>
          <option>U4</option>
          <option>U5</option>
          <option>U6</option>
          <!-- OPCIONES -->
        </select>
      </div>
    </div>

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
    <!-- -------------- -->
  </div>
</template>

<script>
export default {
  name: "i-team",
  props: ["name", "link", "dir", "ide"],
};

</script>

<style lang="scss">
.form-group {
  position: relative;
  padding-top: 20px;
  width: 45vw;
  float: left;
  margin-left: 2vw;
}

#filtro {
  text-align: center;

  h2 {
    position: absolute;
  }
}
</style>