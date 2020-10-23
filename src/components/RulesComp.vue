<template>
  <div class="bodycontent">
    <h1>{{ msg }}</h1>
    <h2>Northside Youth Soccer League</h2>
    <h3>Rules of Play &amp; Policies</h3>
    <p>FIFA rules shall govern NYSL play except as modified herein.</p>
    <!-- Acordion Rules -->

    <ul class="list-group">
      <li class="list-group-item">Sportsmanship</li>
      <li class="list-group-item">Fifa Field Regulations</li>
      <li class="list-group-item">Equipment</li>
      <li class="list-group-item">Number of Players</li>
      <li class="list-group-item">Substitutions</li>
      <li class="list-group-item">Confiscated Player Passes</li>
      <li class="list-group-item">All-Play</li>
      <li class="list-group-item">Player's Equipment</li>
      <li class="list-group-item">Mixed Teams</li>
      <li class="list-group-item">Coaching from the Sidelines</li>
      <li class="list-group-item">Game Termination</li>
      <li class="list-group-item">Conditions of Replay of Games</li>
      <li class="list-group-item">Referee Responsibilities</li>
    </ul>

    <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="ha">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#a"
              aria-expanded="true"
              aria-controls="a"
            >
              Sportsmanship
            </button>
          </h2>
        </div>
        <div
          id="a"
          class="collapse show"
          aria-labelledby="ha"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <p class="indent">
              The common interest that members of the Association share is to
              inspire youth to practice the ideals of sportsmanship and fair
              play. Any player, coach, team, parent, spectator, administrator or
              referee whose behavior detracts from this purpose is subject to
              disciplinary action regardless of technical soccer background,
              expertise, accomplishments or standing.
            </p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="hb">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#b"
              aria-expanded="false"
              aria-controls="b"
            >
              Fifa Field Regulations
            </button>
          </h2>
        </div>
        <div
          id="b"
          class="collapse"
          aria-labelledby="hb"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <h3>1. Dimensions.</h3>
            <p>
              FIFA Law 1 provides for flexible external field dimensions within
              a given maximum and minimum width and length. These dimensions
              should be adhered to for all fields used by teams under 12 and
              older.
            </p>

            <h3>2. Competition Fields.</h3>
            <p>
              Fields used within the competition program must be a minimum of
              100 x 60 yards. Leagues, districts or associations participating
              in the state competition program that are unable to provide a
              field that meets these minimum requirements must advise the State
              Competition Board which will assign its Fields Committee to
              inspect the field and recommend to the Board whether or not a
              waiver of the minimum dimensions should be granted. Teams from
              leagues, districts or associations that are unable to provide an
              acceptable field may be required to play all their games away.
            </p>

            <h3>3. Fields Used By Young Age Groups.</h3>
            <ol type="a">
              <li>
                U-6 play on a field approximately 20 X 40 yards with no penalty
                areas. Fields for older age groups should be progressively
                larger.
              </li>
              <li>
                U-8 plays on a field 40-50 yards in length and 20-30 yards
                width.
              </li>
              <li>
                U-10 play on a field 70-80 yards in length and 40-50 yards in
                width.
              </li>
              <li>
                In addition, fields used by young age groups may have their
                internal dimensions and size of goal similarly modified.
              </li>
            </ol>

            <h3>4. Team Bench Areas</h3>
            <ol type="a">
              <li>
                Recreation &amp; District Programs
                <ul>
                  <li>
                    The decision for team/spectator placement on the field will
                    be made by the governing body of that team. A team's bench
                    area shall consist of that area at least one (1) yard away
                    from the touchline and extending to twenty yards (20) both
                    ways from the halfway line. In the event that field 2
                    conditions require team benches to be on the same side of
                    the field, a team's bench area shall consist of that area
                    two(2) yards away from the touchline and extending twenty
                    yards one (1) way from the halfway line.
                  </li>
                  <li>
                    The home team has first choice as to where it wishes to
                    locate its bench area. Coaches and substitutes are required
                    to remain within their bench area during the game. Parents
                    and spectators should occupy the same side of the field as
                    the team they are supporting.
                  </li>
                </ul>
              </li>
              <li>
                State Competition League Only
                <ul>
                  <li>
                    Except where it is determined by the referee to be
                    impractical, team bench areas shall be along the same
                    touchline. Each team bench area shall be located two yards
                    outside the touchline, beginning not closer than five yards
                    from midfield and extending not further than twenty yards
                    from midfield. The home team shall have the right to choose
                    the location of its bench area. Coaches and substitutes must
                    remain within their team's bench area during the game.
                  </li>
                  <li>
                    Parents and spectators must occupy the sideline opposite the
                    team bench areas. Supporters of a team must assemble on the
                    side of the midfield facing the team bench area of that
                    team. There shall be a buffer zone extending ten yards on
                    each side of the midfield that may not be occupied by
                    parents or spectators. Match officials shall be empowered to
                    enforce these provisions and may suspend or terminate games
                    in the event that any team, coach, parent, or spectator
                    declines to abide by requests from match officials to comply
                    with these standards.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="hc">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#c"
              aria-expanded="false"
              aria-controls="c"
            >
              Equipment
            </button>
          </h2>
        </div>
        <div
          id="c"
          class="collapse"
          aria-labelledby="hc"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <ul>
              <li>
                We will abide by and accept equipment standards as defined by
                FIFA, USSF and USYSA.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="hd">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#d"
              aria-expanded="false"
              aria-controls="d"
            >
              Number of Players
            </button>
          </h2>
        </div>
        <div
          id="d"
          class="collapse"
          aria-labelledby="hd"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <ul>
              <li>
                <h3>Team Size.</h3>
                Except as noted below, below, team rosters shall consist of not
                less than eleven nor more than eighteen players. A team must
                have at least seven (7) players present and able to play before
                referees are permitted to start a sanctioned game. No more than
                eleven (11) players per team may be on the field at any one time
                during the game.
              </li>
              <li>
                <h3>Size of Age Group Teams.</h3>
                In order to give player's maximum opportunity to develop in the
                game of soccer, U-6 through U-1O play modified rules and size of
                roster as stated in United States Youth Soccer Association
                (USYSA) rules. It is strongly recommended that U-6 and U-8 play
                4 v 4. UYSA shall not sanction games involving teams under 10 or
                younger unless such games are conducted with not more than eight
                (8) players per side. (National rule 4036 section 2)
              </li>
              <li>
                Recreational/Developmental players at other ages or where
                numbers in the playing area are low are strongly encouraged to
                play small-sided games on reduced field size.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="he">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#e"
              aria-expanded="false"
              aria-controls="e"
            >
              Substitutions
            </button>
          </h2>
        </div>
        <div
          id="e"
          class="collapse"
          aria-labelledby="he"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <ul>
              <li>
                Teams may make an unlimited number of substitutions at the times
                indicated below. A player who has been replaced may re-enter the
                game as a substitute at a later time.
                <ol>
                  <li>Prior to a throw-in your favor.</li>
                  <li>Prior to a goalkick by either team.</li>
                  <li>After a goal by either team.</li>
                  <li>
                    After an injury, by either team, when the referee stops
                    play.
                  </li>
                  <li>At half time.</li>
                  <li>
                    When a player has been &quot;cautioned&quot;, only the
                    player receiving &quot;caution&quot; may be substituted.
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="hf">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#f"
              aria-expanded="false"
              aria-controls="f"
            >
              Confiscated Player Passes
            </button>
          </h2>
        </div>
        <div
          id="f"
          class="collapse"
          aria-labelledby="hf"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <ul>
              <li>
                Passes of any individual(s) ejected from any match shall be
                retained after the match by the referee. The pass of any
                individual who has received a third caution (yellow card) during
                a playing year shall be confiscated by the referee at the
                conclusion of the match in which the third caution was received.
                That player will be suspended from playing in the next game in
                which the offending participant would otherwise be eligible to
                participate. This process will continue so that for every third
                yellow card received during a playing year, the player will be
                suspended from playing in the next game (after the receipt of a
                third yellow card) for which the offending participate would
                otherwise be eligible to participate. The referee shall deliver
                all confiscated passes to the UYSA State Office within
                forty-eight (48) hours of the conclusion of the match.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="hg">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#g"
              aria-expanded="false"
              aria-controls="g"
            >
              All-Play
            </button>
          </h2>
        </div>
        <div
          id="g"
          class="collapse"
          aria-labelledby="hg"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <ul>
              <li>
                All-play means that every recreation player on every team shall
                play at least fifty percent of each game. Coaches in the
                competition program are encouraged to play their players 50% of
                each game.
                <ul style="list-style-type: circle">
                  <li>
                    A Coach shall be permitted to not play a player 50% of each
                    game under special circumstances, e.g., unexcused absences
                    from practice and/or games, ungentlemanly conduct at
                    practice and/or games, and injuries.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="hh">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#h"
              aria-expanded="false"
              aria-controls="h"
            >
              Player's Equipment
            </button>
          </h2>
        </div>
        <div
          id="h"
          class="collapse"
          aria-labelledby="hh"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <ul>
              <li>
                Where the uniform colors of both teams are so similar that the
                referee orders a change, the designated home team must change to
                colors distinct from those of the opponent.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="hi">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#i"
              aria-expanded="false"
              aria-controls="i"
            >
              Mixed Teams
            </button>
          </h2>
        </div>
        <div
          id="i"
          class="collapse"
          aria-labelledby="hi"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <ul>
              <li>
                <h3>Girls Playing On Boys' Teams.</h3>
                Girls are eligible to play on boys'teams with parent/guardian
                permission.
              </li>
              <li>
                <h3>Types of Teams.</h3>
                Teams with females only are Girls Teams. All others are Boys
                Teams.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="hj">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#j"
              aria-expanded="false"
              aria-controls="j"
            >
              Coaching from the Sidelines
            </button>
          </h2>
        </div>
        <div
          id="j"
          class="collapse"
          aria-labelledby="hj"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <ul>
              <li>
                Coaching from the sidelines, i.e., giving direction to one's own
                team on points of strategy and position, is permitted provided
                that:
                <ol>
                  <li>
                    No mechanical, electrical or other devices are used to
                    amplify the voice.
                  </li>
                  <li>The tone of voice is informative and not a harangue.</li>
                  <li>
                    The coaching takes place within the team's bench area.
                  </li>
                  <li>
                    No coach, substitute, player or spectator is to make
                    derogatory remarks or gestures to the referees, linesmen,
                    players, substitutes or spectators.
                  </li>
                  <li>
                    No coach, player, substitute or spectator is to use
                    profanity or incite, in any manner, disruptive behavior of
                    any kind.
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="hk">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#k"
              aria-expanded="false"
              aria-controls="k"
            >
              Game Termination
            </button>
          </h2>
        </div>
        <div
          id="k"
          class="collapse"
          aria-labelledby="hk"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <p>
              Any game terminated after 15 minutes into the second half by the
              referee by reason of the elements, or by reason of grave disorder
              on the part of the coaches, players or spectators of a team that
              is losing at the point that the game is terminated, shall stand as
              a completed game. If a team is ahead and the game is called
              because of their actions they will lose the game 1-0.
            </p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="hl">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#l"
              aria-expanded="false"
              aria-controls="l"
            >
              Conditions of Replay of Games
            </button>
          </h2>
        </div>
        <div
          id="l"
          class="collapse"
          aria-labelledby="hl"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <ul>
              <li>
                Any game which is required to be replayed as a result of any
                protest orappeal, shall be subject to the following conditions:
                <ol>
                  <li>
                    The game shall be replayed on the same field, as was the
                    suspended or protested game, unless otherwise agreed by the
                    coaches.
                  </li>
                  <li>Impartial referees shall be assigned to the new game.</li>
                  <li>
                    The PROTEST AND APPEALS COMMITTEE shall have the power to
                    impose such additional conditions on the replay of the game,
                    as it deems appropriate under the circumstances.
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="hm">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#m"
              aria-expanded="false"
              aria-controls="m"
            >
              Referee Responsibilities
            </button>
          </h2>
        </div>
        <div
          id="m"
          class="collapse"
          aria-labelledby="hm"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <ul>
              <li>
                The referee shall verify the identity of the players and coaches
                with his/her player pass. He shall collect the passes of those
                players and coaches who are to participate in the game. The
                referee must allow no player into the game for whom he/she has
                no pass.
              </li>
              <li>
                Upon completion of the game, the referee shall send his/her
                report to the UYSA offices within four (4) days, holidays
                excluded. If a coach or a player is ejected, the referee report
                form is required within forty-eight (48) hours along with the
                player/coach pass.
              </li>
              <li>
                A referee report form must be filed for every game played.
              </li>
              <li>
                Each team must determine whether or not referees are registered
                prior to the start of each game. Upon request, referees
                officiating at any game must willingly and without bias, show
                documentation regarding their certification level and
                registration standing with the USSF to coach, assistant coach,
                or team captain of teams participating in that game. Prior to
                the game a coach may decide to postpone the game if the referees
                do not produce the requested documentation. The game is to be
                replayed at a later date.
              </li>
              <li>
                Referees not complying with this section will be referred to the
                Disciplinary Committee.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RuleComp",
  props: {
    msg: String,
  },
};
</script>

<style  scoped lang="scss">
p {
  text-align: justify;
}
.card-body > ol {
  background-color: red;
  left: 0;
  padding: 0;
  margin-left: 10px;
}
</style>