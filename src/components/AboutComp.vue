<template>
  <div class="bodycontent">
    <h1>{{ msg }}</h1>
      <div class="accordion " id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-link btn-block text-left" type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                About NYSL
              </button>
            </h2>
          </div>
          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
            
          >
            <div class="card-body">
              <h3>Mission</h3>
              <p class="indent">
                To support young athletes living in Chicago's northside
                neighborhoods, who have an interest in learning and playing
                soccer, with opportunities to learn and practice skills related
                to the game of soccer, specifically those skills around team
                cooperation and good sportsmanship.
              </p>

              <h3>Vision</h3>
              <p class="indent">
                The Northside Youth Soccer League aspires to develop strong,
                well-rounded, and mindful athletes through the building of
                character, self-discipline, and leadership.
              </p>

              <h3>General Information</h3>
              <p class="indent">
                The Northside Youth Soccer League was established in 1996 to
                provide athletes residing in Chicago's northside neighborhoods
                an environment in which to learn and play soccer. To be a member
                of NYSL, you must be between the ages of 4 - 12 and reside in a
                Chicago northside neighborhood. NYSL is run by a small full-time
                staff, and relies on the generous volunteer time of parents and
                previous league members.
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
              <button
                class="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Contact
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p>
                Please email us at
                <a href="mailto:nysl@chisoccer.org">nysl@chisoccer.org</a>
              </p>

              <p>We will reply to your email as soon as we can.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "AboutComp",
  props: {
    msg: String,
  },
};
</script>

<style  scoped lang="scss">
p {
  margin-bottom: 40px;
  // background-color: indianred;
}
</style>