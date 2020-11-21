<template>
  <!-- PARTE IMPORTANTE FORMULARIO -->
  <div class="bodycontent">
    <form method="get">
      <fieldset class="boxset row">
        <legend class="col-12 col-sm-12">Personal Information</legend>
        <label class="col-12 col-sm-6">Player's First Name: <input type="text" name="first_name"/></label>
        <label class="col-12 col-sm-6"
          >Last Name:<input type="text" name="last_name"
        /></label>
        <label class="col-12 col-sm-12"
          >Street Address: <input type="text" name="street_address"
        /></label>
        <label class="col-12 col-sm-4"
          >City: <input type="text" name="city"
        /></label>
        <label class="col-12 col-sm-3"
          >Zip Code: <input type="text" name="zip"
        /></label>
        <label class="col-12 col-sm-5"
          >Birth Date (mm/dd/yyyy): <input type="date" name="birth_date"
        /></label>
        <label class="col-12 col-sm-6"
          >Parent/Guardian Name: <input type="text" name="parent_guardian"
        /></label>
        <label class="col-12 col-sm-6"
          >Contact Phone: <input type="number" name="contact_phone"
        /></label>
        <label class="col-12 col-sm-12"
          >Contact Email: <input type="email" name="contact_email"
        /></label>
      </fieldset>
      <fieldset>
        <legend>Gender:</legend>
        <label
          >Female <input type="radio" name="gender" value="female"
        /></label>
        <label>Male <input type="radio" name="gender" value="male" /></label>
        <label>Other <input type="radio" name="Gender" value="Other" /></label>
      </fieldset>

      <fieldset>
        <legend>Grade:</legend>
        <label
          >Pre-School <input type="radio" name="grade" value="pre_school"
        /></label>
        <label>1st <input type="radio" name="grade" value="1st" /></label>
        <label>2nd <input type="radio" name="grade" value="2nd" /></label>
        <label>3rd <input type="radio" name="grade" value="3rd" /></label>
        <label>4th <input type="radio" name="grade" value="4th" /></label>
        <label>5th <input type="radio" name="grade" value="5th" /></label>
      </fieldset>

      <fieldset class="row">
        <legend>Which elementary schools do you live near?</legend>
        <div class="col-12 col-sm-6">
          <label for="school_1" class="impinfo">First Closest School:</label>
          <select name="school_1" id="school_1">
            <option value="katzenmaier">AJ Katzenmaier</option>
            <option value="greenbay">Greenbay</option>
            <option value="yeager">Howard A Yeager</option>
            <option value="hart">Marjorie P Hart</option>
            <option value="north">North Elementary</option>
            <option value="south">South Elementary</option>
          </select>
        </div>
        <div class="col-12 col-sm-6">
          <label for="school_2" class="impinfo">Second Closest School:</label>
          <select name="school_2" id="school_2">
            <option value="katzenmaier">AJ Katzenmaier</option>
            <option value="greenbay">Greenbay</option>
            <option value="yeager">Howard A Yeager</option>
            <option value="hart">Marjorie P Hart</option>
            <option value="north">North Elementary</option>
            <option value="south">South Elementary</option>
          </select>
        </div>
      </fieldset>

       <fieldset class="row">
        <legend>What position(s) do you normally play? <span class="note">(check all that apply)</span></legend>
        <label class="col-3" >Forward <input type="checkbox" name="normal_position" value="n_forward"/></label>        
        <label class="col-3">Defense <input type="checkbox" name="normal_position" value="n_defense"/></label>        
        <label class="col-3">Midfield <input type="checkbox" name="normal_position" value="n_midfield"/></label>        
        <label class="col-3">Goalkeeper <input type="checkbox" name="normal_position" value="n_goalkeeper"/></label>        
      </fieldset>

      <fieldset class="row">
        <legend>What position(s) do you want to play? <span class="note">(check all that apply)</span></legend>
        <label class="col-3" >Forward <input type="checkbox" name="normal_position" value="n_forward"/></label>        
        <label class="col-3">Defense <input type="checkbox" name="normal_position" value="n_defense"/></label>        
        <label class="col-3">Midfield <input type="checkbox" name="normal_position" value="n_midfield"/></label>        
        <label class="col-3">Goalkeeper <input type="checkbox" name="normal_position" value="n_goalkeeper"/></label>        
      </fieldset>

      <label for="uniform" class="impinfo">Already Have a Uniform</label>
      <input type="checkbox" name="uniform" id="uniform"/>
<fieldset>
<legend>Jersey Size:</legend>
        <span class="uniformchoice">
          <label >Youth Small <input type="radio" name="jersey_size" value="j_y_small"/></label>          
          <label >Youth Medium <input type="radio" name="jersey_size" value="j_y_medium"/></label>
          
          <label >Youth Large  <input type="radio" name="jersey_size" value="j_y_large"/></label>
         
          <label for="j_small">Small</label>
          <input type="radio" name="jersey_size" value="j_small"/>
          <label for="j_medium">Medium</label>
          <input type="radio" name="jersey_size" value="j_medium"/>
          <label for="j_large">Large</label>
          <input type="radio" name="jersey_size" value="j_large"/>
          <label for="j_x_large">Extra-Large</label>
          <input type="radio" name="jersey_size" value="j_x_large"/>
        </span>
      </fieldset>
      <!-- <fieldset class="boxset row">
        <legend class="col-12 col-sm-12">Personal Information</legend>
        <label class="col-12 col-sm-6" >Player's First Name:<input type="text" name="Name" placeholder="full name" required /></label>
        <label class="col-12 col-sm-6"> Last Name: <input type="text" name="Surname" required /> </label><br />
        <label class="col-12 col-sm-12"> Street Address: <input type="text" name="Street_Address" class="w-full" /> </label ><br />
        <label class="col-12 col-sm-4"> City: <input type="text" name="City" /></label>
        <label class="col-12 col-sm-3"> Zip Code:<input type="text" name="Zip_Code" /> </label><br />
        <label class="col-12 col-sm-5"> Birth Date (mm/dd/yyyy): <input type="date" name="Birth_Date" /> </label>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
          <label class="form-check-label" for="exampleRadios1"> Default radio </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
          <label class="form-check-label" for="exampleRadios2"> Second default radio </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
          <label class="form-check-label" for="exampleRadios3">  Disabled radio  </label>
        </div>

        <div id="gender" class="col-12">
          Gender:
          <label class="col-12"><input type="radio" name="Gender" value="Female" /> Female</label>
          <label><input type="radio" name="Gender" value="Male" /> Male</label>
          <label><input type="radio" name="Gender" value="Other" />Other</label>
        </div>
        <div id="grade">
          <label>Grade:</label>
          <div class="grade-col">
            <label>
              <input type="radio" name="grade" value="pre-school" /> Pre-School
            </label>
            <label
              ><input type="radio" name="grade" value="1st" /> 1<sup
                >st</sup
              ></label
            >
            <label
              ><input type="radio" name="grade" value="2nd" /> 2<sup
                >nd</sup
              ></label
            >
          </div>
          <div class="grade-col">
            <label
              ><input type="radio" name="grade" value="3rd" /> 3<sup
                >rd</sup
              ></label
            >
            <label
              ><input type="radio" name="grade" value="4th" /> 4<sup
                >th</sup
              ></label
            >
            <label
              ><input type="radio" name="grade" value="5th" /> 5<sup
                >th</sup
              ></label
            >
          </div>
        </div>

        <label>
          Parent/Guardian:
          <input type="text" name="Parent-Guardian" class="w-full" /> </label
        ><br />
        <label>
          Contact Phone:
          <input type="number" name="Contact_Phone" />
        </label>
        <label>
          Contact Email:
          <input type="email" name="Contact_Email" />
        </label>
      </fieldset> -->
      <fieldset class="boxset row">
        <legend>Which elementary schools do you live near?</legend>
        <fieldset class="col">
          <legend>First Closest School:</legend>
          <div class="col1">
            <label
              ><input
                type="checkbox"
                name="First_Closest_School"
                value="AJ Katzenmaier"
              />AJ Katzenmaier</label
            ><br />
            <label>
              <input
                type="checkbox"
                name="First_Closest_School"
                value="Greenbay"
              />Greenbay</label
            ><br />
            <label
              ><input
                type="checkbox"
                name="First_Closest_School"
                value="Howard A Yeager "
              />Howard A Yeager</label
            >
            <br />
          </div>
          <div class="col2">
            <label
              ><input
                type="checkbox"
                name="First_Closest_School"
                value="Marjorie P Hart"
              />Marjorie P Hart</label
            ><br />
            <label
              ><input
                type="checkbox"
                name="First_Closest_School"
                value="North Elementary"
              />North Elementary</label
            ><br />
            <label
              ><input
                type="checkbox"
                name="First_Closest_School"
                value="South Elementary"
              />South Elementary</label
            ><br />
          </div>
        </fieldset>
        <fieldset class="col">
          <legend>Second Closest School:</legend>
          <div class="col1">
            <label
              ><input
                type="checkbox"
                name="Second_Closest_School"
                value="AJ Katzenmaier"
              />AJ Katzenmaier</label
            ><br />
            <label
              ><input
                type="checkbox"
                name="Second_Closest_School"
                value="Greenbay"
              />Greenbay</label
            ><br />
            <label
              ><input
                type="checkbox"
                name="Second_Closest_School"
                value="Howard A Yeager "
              />Howard A Yeager</label
            >
            <br />
          </div>
          <div class="col2">
            <label
              ><input
                type="checkbox"
                name="Second_Closest_School"
                value="Marjorie P Hart"
              />Marjorie P Hart</label
            ><br />
            <label
              ><input
                type="checkbox"
                name="Second_Closest_School"
                value="North Elementary"
              />North Elementary</label
            ><br />
            <label
              ><input
                type="checkbox"
                name="Second_Closest_School"
                value="South Elementary"
              />South Elementary</label
            ><br />
          </div>
        </fieldset>
      </fieldset>
      <fieldset class="boxset">
        <legend>
          What position(s) do you normally play?(check all that apply)
        </legend>
        <div class="col1">
          <label
            ><input
              type="checkbox"
              name="Normally_Position"
              value="Forward"
            />Forward</label
          ><br />
          <label
            ><input
              type="checkbox"
              name="Normally_Position"
              value="Defense"
            />Defense</label
          ><br />
        </div>
        <div class="col2">
          <label
            ><input
              type="checkbox"
              name="Normally_Position"
              value="Midfield"
            />Midfield</label
          ><br />
          <label
            ><input
              type="checkbox"
              name="Normally_Position"
              value="Goalkeeper"
            />Goalkeeper</label
          ><br />
        </div>
      </fieldset>
      <fieldset class="boxset">
        <legend>
          What position(s) do you want to play?(check all that apply)
        </legend>
        <div class="col1">
          <label
            ><input
              type="checkbox"
              name="Position_Want"
              value="Forward"
            />Forward</label
          ><br />
          <label
            ><input
              type="checkbox"
              name="Position_Want"
              value="Defense"
            />Defense</label
          ><br />
        </div>
        <div class="col2">
          <label
            ><input
              type="checkbox"
              name="Position_Want"
              value="Midfield"
            />Midfield</label
          ><br />
          <label
            ><input
              type="checkbox"
              name="Position_Want"
              value="Goalkeeper"
            />Goalkeeper</label
          ><br />
        </div>
      </fieldset>
      <fieldset class="boxset">
        <legend>
          <label class="uniform">
            <input
              type="checkbox"
              name="Already Have a Uniform"
              value="Already Have a Uniform"
              id="db"
            /><strong id="textU">Already Have a Uniform</strong><br />
          </label>
        </legend>
        <fieldset class="col">
          <legend>Jersey Size:</legend>
          <div class="col1">
            <label
              ><input
                type="checkbox"
                name="Jersey_Size"
                value="Youth Small"
              />Youth Small</label
            ><br />
            <label
              ><input
                type="checkbox"
                name="Jersey_Size"
                value="Youth Medium"
              />Youth Medium</label
            ><br />
            <label
              ><input
                type="checkbox"
                name="Jersey_Size"
                value="Youth Large"
              />Youth Large</label
            ><br />
            <label
              ><input
                type="checkbox"
                name="Jersey_Size"
                value="Small"
              />Small</label
            ><br />
          </div>
          <div class="col2">
            <label
              ><input
                type="checkbox"
                name="Jersey_Size"
                value="Medium"
              />Medium</label
            ><br />
            <label
              ><input
                type="checkbox"
                name="Jersey_Size"
                value="Large"
              />Large</label
            ><br />
            <label
              ><input
                type="checkbox"
                name="Jersey_Size"
                value="Extra-Large"
              />Extra-Large</label
            >
          </div>
        </fieldset>
        <fieldset class="col">
          <legend>Shorts Size:</legend>
          <div class="col1">
            <label
              ><input
                type="checkbox"
                name="Shorts_Size"
                value="Youth Small"
              />Youth Small</label
            ><br />
            <label
              ><input
                type="checkbox"
                name="Shorts_Size"
                value="Youth Medium"
              />Youth Medium</label
            ><br />
            <label
              ><input
                type="checkbox"
                name="Shorts_Size"
                value="Youth Large"
              />Youth Large</label
            ><br />
            <label
              ><input
                type="checkbox"
                name="Shorts_Size"
                value="Small"
              />Small</label
            ><br />
          </div>
          <div class="col2">
            <label
              ><input
                type="checkbox"
                name="Shorts_Size"
                value="Medium"
              />Medium</label
            ><br />
            <label
              ><input
                type="checkbox"
                name="Shorts_Size"
                value="Large"
              />Large</label
            ><br />
            <label
              ><input
                type="checkbox"
                name="Shorts_Size"
                value="Extra-Large"
              />Extra-Large</label
            ><br />
          </div>
        </fieldset>
      </fieldset>
      <fieldset class="boxset">
        <legend>Permission to Play</legend>
        <p>
          I, the parent or guardian of the minor registrant, agree that the
          registrant and I will abide by all the rules of the Northside Youth
          Soccer League (NYSL). In recognizing the possibility of physical
          injury associated with soccer and in consideration for the "League"
          accepting the registrant for its soccer programs and activities, I
          hereby release, discharge, and/or otherwise indemnify NYSL, their
          employees and associated personnel and volunteers, including the
          facilities used for practices and games, against any claim by or on
          behalf of the registrant as a result of the registrant's participation
          in the program and/or being transported to or from NYSL sponsored
          activities, which transportation. By signing below, I hereby agree and
          authorize the above. In addition, by signing below, I also acknowledge
          that I have read the cancellation policy and agree to its terms.
        </p>
        <label
          >Parent/Guardian Signature:
          <input type="text" name="parent" required />
        </label>
        <label>
          Date:
          <input type="date" name="date" required />
        </label>
      </fieldset>
      <fieldset class="login_r">
        <input
          class="btn btn-danger"
          type="submit"
          name="submit"
          value="Login"
        />

        <!--input type="reset" value="Borrar información"-->
      </fieldset>
    </form>
  </div>
</template>

<script>
// import ShowData from "@/components/Show-Data.vue";

export default {
  name: "form",
};
</script>

<style scoped lang="scss">
input {
  width: 100%;
}
.bodycontent {
  padding-left: 0px;
}
// #db,#textU{
//   left: 0;
//   margin-left: -2px;

//   width: 5vw !important;
// }

// p {
//   text-align: justify;
// }
// #gender,
// #grade {
//   float: left;
//   position: relative;
//   left: 6vw;
//   // background-color: aqua;
//   width: 24vw;
//   input {
//     margin: 0;
//     width: 5vw;
//     padding: 0;
//   }
//   label {
//     width: 30vw;
//   }
//   .grade-col {
//     width: 29vw;
//     padding-left: 15px;
//     float: left;
//   }
// }
// #grade {
//   padding-left: 10px;
//   width: 64vw;
// }
// input,
// label {
//   margin: 5px 20px 5px 3vw;
//   width: 80vw;
// }
// .col1,
// .col2 {
//   // background-color: chocolate;
//   width: 40vw;
//   float: left;
//   position: relative;
//   input {
//     margin: 0;
//     width: 5vw;
//     padding: 0;
//   }
// }
// .txt-c {
//   text-align: center;
// }
// .btn{
//   text-align: center;
//   width: 30vw;
//   margin-left: 32vw;
// }
</style>