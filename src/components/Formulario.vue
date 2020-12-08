<template>
  <b-container class="container-form">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group>
        <legend >Personal Information</legend>
        <b-row>
          <b-col cols="12" sm="6" >
            <label for="name">Player's First Name:</label>
            <b-form-input id="name" v-model="form.first_name" placeholder="Enter your name"></b-form-input> 
          </b-col>
          <b-col cols="12" sm="6"  >
            <label for="last">Last Name: </label>
            <b-form-input  id="last" v-model="form.last_name" placeholder="Enter your last name"></b-form-input>
          </b-col>
          <b-col cols="12" sm="12" >
            <label for="street">Street Address: </label>
            <b-form-input  id="street" v-model="form.street_address" placeholder="Enter your street address"></b-form-input>
          </b-col>
          <b-col cols="7" sm="4" >
            <label for="city">City: </label>
            <b-form-input  id="city" v-model="form.city" placeholder="Enter your city"></b-form-input>
          </b-col>
          <b-col cols="5" sm="3" >
            <label for="zip">Zip Code:</label>
            <b-form-input id="zip" v-model="form.zip" placeholder="Enter your zip"></b-form-input> 
          </b-col>
          <b-col cols="12" sm="5"  >
            <label for="birth_date">Birth Date (mm/dd/yyyy): </label>
            <b-form-input  id="birth_date" v-model="form.birth_date" type="date" placeholder="Enter your last name"></b-form-input>
          </b-col>
          <b-col cols="12" sm="12" >
            <label for="p_name">Parent/Guardian Name:</label>
            <b-form-input  id="p_name" v-model="form.parent_guardian" placeholder="Enter your street address"></b-form-input>
          </b-col>
          <b-col cols="12" sm="12" >
            <label for="phone">Contact Phone: </label>
            <b-form-input  id="phone" v-model="form.contact_phone" placeholder="Enter your last name"></b-form-input>
          </b-col>
          <b-col cols="12" sm="12" >
            <label for="email">Contact Email: </label>
            <b-form-input  id="email" v-model="form.contact_email" type="email" placeholder="Enter your last name"></b-form-input>
          </b-col>
                
        </b-row>
        <b-row>
           <b-col  cols="12" sm="12">
            <b-form-group label="Gender">
              <b-form-radio-group id="radio-group-1" v-model="form.gender" name="radio-gender">
                <b-form-radio value="male">Male</b-form-radio>
                <b-form-radio value="female">Female</b-form-radio>
                <b-form-radio value="other" >Other</b-form-radio>
              </b-form-radio-group>
            </b-form-group> 
          </b-col>

          <b-col  cols="12" sm="12">
            <b-form-group label="Grade">
              <b-form-radio-group id="radio-group-2" v-model="form.grade" name="radio-grade">
              
                  <b-form-radio sm="2" value="Pre-School">Pre-School</b-form-radio>
                  <b-form-radio sm="2" value="1st">1st</b-form-radio>
                  <b-form-radio sm="2" value="2nd">2nd</b-form-radio>
               
                  <b-form-radio  sm="2" value="3rd">3rd</b-form-radio>
                <b-form-radio sm="2"  value="4th">4th</b-form-radio>
                <b-form-radio sm="2" value="5th" >5th</b-form-radio>
             
              </b-form-radio-group>
            </b-form-group> 
          </b-col>
        </b-row>
        <b-row>
           <legend>Which elementary schools do you live near?</legend>
          <b-col cols="12" sm="6">
            <b-form-group label="First Closest School:" label-for="school1">
              <b-form-select id="school1"  v-model="form.school_1" :options="schools"></b-form-select>
            </b-form-group>
          </b-col>
           <b-col cols="12" sm="6">
            <b-form-group label="Second Closest School:" label-for="school2">
              <b-form-select id="school2"  v-model="form.school_2" :options="schools" ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <legend>What position(s) do you normally play? <span class="note">(check all that apply)</span></legend>
          <b-form-group >
            <b-form-checkbox-group v-model="form.normal_position" >
              <b-form-checkbox value="forward">Forward</b-form-checkbox>
              <b-form-checkbox value="defense">Defense</b-form-checkbox>
              <b-form-checkbox value="midfield">Midfield</b-form-checkbox>
              <b-form-checkbox value="goalkeeper">Goalkeeper</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
        </b-row>
        <b-row>
          <legend>What position(s) do you want to play? <span class="note">(check all that apply)</span></legend>
          <b-form-group >
            <b-form-checkbox-group v-model="form.want_position" >
              <b-form-checkbox value="forward">Forward</b-form-checkbox>
              <b-form-checkbox value="defense">Defense</b-form-checkbox>
              <b-form-checkbox value="midfield">Midfield</b-form-checkbox>
              <b-form-checkbox value="goalkeeper">Goalkeeper</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
        </b-row>
        <b-row> 
          <b-form-checkbox id="checkbox-1" v-model="form.uniform" name="checkbox-1" value="have" unchecked-value="dont_have" > <h4>Already Have a Uniform</h4> </b-form-checkbox>
        </b-row>
        <b-row>
          <b-form-group label="Jersey Size:">
            <b-form-radio-group id="radio-jersey" v-model="form.jersey_size" name="radio-jerseysize">
              <b-col sm="12">
                <b-form-radio sm="2" value="Youth Small">Youth Small</b-form-radio>
                <b-form-radio sm="2" value="Youth Medium">Youth Medium</b-form-radio>
                <b-form-radio sm="2" value="Youth Large">Youth Large</b-form-radio>
                <b-form-radio  sm="2" value="Small">Small</b-form-radio>
                <b-form-radio sm="2"  value="Medium">Medium</b-form-radio>
                <b-form-radio sm="2" value="Large" >Large</b-form-radio>
                <b-form-radio sm="2"  value="Extra-Large">Extra-Large</b-form-radio>
              </b-col>
            </b-form-radio-group>
          </b-form-group> 
          <b-form-group label="Shorts Size:">
            <b-form-radio-group id="radio-short" v-model="form.short_size" name="radio-shortsize">
              <b-col sm="12">
                <b-form-radio sm="2" value="Youth Small">Youth Small</b-form-radio>
                <b-form-radio sm="2" value="Youth Medium">Youth Medium</b-form-radio>
                <b-form-radio sm="2" value="Youth Large">Youth Large</b-form-radio>
                <b-form-radio  sm="2" value="Small">Small</b-form-radio>
                <b-form-radio sm="2"  value="Medium">Medium</b-form-radio>
                <b-form-radio sm="2" value="Large" >Large</b-form-radio>
                <b-form-radio sm="2"  value="Extra-Large">Extra-Large</b-form-radio>
              </b-col>
            </b-form-radio-group>
          </b-form-group> 
        </b-row>
        <b-row>
          <fieldset class="boxset">
            <legend>Permission to Play</legend>
             <p cols="12">I, the parent or guardian of the minor registrant, agree that the
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
          that I have read the cancellation policy and agree to its terms. </p>
        <b-row>
          <b-col cols="12" sm="8" >
            <label for="signature">Parent/Guardian Signature:</label>
            <b-form-input id="signature" v-model="form.signature" placeholder="Enter your zip"></b-form-input> 
          </b-col>
          <b-col cols="12" sm="4"  >
            <label for="date">Date (mm/dd/yyyy): </label>
            <b-form-input  id="date" v-model="form.date" type="date" placeholder="Enter your last name"></b-form-input>
          </b-col>
        </b-row>
        </fieldset>
        </b-row>

      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3 none" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        first_name: "",
        last_name:"",
        street_address:"",
        city:"",
        zip:"",
        birth_date:"",
        parent_guardian:"",
        contact_phone:"",
        contact_email:"",
        gender:"",
        grade:"",
        school_1:null,
        school_2:null,
        normal_position:"",
        want_position:"",
        uniform:"",
        jersey_size:"",
        short_size:"",
        signature:"",
        sig_date:"",
       
        food: null,
        checked: [],
      },
      schools: [
        { text: "Select One", value: null },
        "AJ Katzenmaier",
        "Greenbay",
        "Howard A Yeager",
        "Marjorie P Hart",
        "North Elementary",
        "South Elementary"
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.name = "";
      this.form.last_name="";
      this.form.street="";
      this.form.city="";
      this.form.zip="",
      this.form.birth_date="",
      this.form.parent_guardian="",
      this.form.contact_phone="",
      this.form.contact_email="",
      this.form.gender="",
      this.form.grade=[],
      this.form.school_1=null,
      this.form.school_2=null,
      this.form.normal_position=[],
      this.form.want_position=[],
      this.form.uniform=[],
      this.form.jersey_size=[],
      this.form.short_size=[],
      this.form.signature="",
      this.form.sig_date="",


      this.form.food = null;
      this.form.checked = [];
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>



<style scoped lang="scss">
.none{
  display: none;
}
button{
  margin-left: 17vw;
}

</style>