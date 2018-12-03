import React, { Component } from "react";
import axios from "axios";

class PersonalTrainer extends Component {
  constructor() {
    super();
    this.state = {
      passwordError: true,
      firstNameError: true,
      lastNameError: true,
      gymError: true,
      genderOptionsError: true,
      bioError: true,
      day1Error: true,
      day2Error: true,
      time1Error: true,
      time2Error: true,
      trainingGoalsError: true,
      trainingMotivationError: true,
      trainingMonthsError: true,
      trainerImageError: true,
    };
  }
  formSubmit = e => {
    e.preventDefault();
    const {
      email,
      password,
      firstName,
      lastName,
      gym,
      genderOptions,
      city,
      bio,
      day1,
      day2,
      am1,
      am2,
      time1,
      time2,
      trainingGoals,
      trainingMotivation,
      trainingMonths,
      trainerImage
    } = e.target;
    if(!trainingMonths.value) {
      alert('please fill out all of the form inputs')
    }else {
    const newPersonalTrainer = {
      email: email.value,
      password: password.value,
      firstName: firstName.value,
      lastName: lastName.value,
      gym: gym.value,
      gender: genderOptions.value,
      city: city.value,
      bio: bio.value,
      trainingDays: `${day1.value}-${day2.value}`,
      trainingTime: `${time1.value}${am1.value}-${time2.value}${am2.value}`,
      trainingGoals: trainingGoals.value,
      trainingMotivation: trainingMotivation.value,
      trainingMonths: trainingMonths.value,
      trainerImage: trainerImage.value
    };
    axios
      .post("http://localhost:9090/personalTrainer", newPersonalTrainer)
      .then(() => {
        this.props.history.push("/home");
      });
    }
  };

  passwordFunction = password => {
    if (password.target.value.length < 6) {
      return alert("enter a password of at least 6 characters");
    } else {
      this.setState({
        passwordError: false,
      });
    }
  };

  firstNameFunction = firstName => {
    var patt1 = /[0-9]/i;
    if (!firstName.target.value) {
      return alert("please enter a name");
    } else if (firstName.target.value.match(patt1)) {
      alert("no numbers in your name please");
    } else {
      this.setState({
        firstNameError: false,
      });
    }
  };

  lastNameFunction = lastName => {
    var patt1 = /[0-9]/i;
    if (!lastName.target.value) {
      return alert("please enter your last name!");
    } else if (lastName.target.value.match(patt1)) {
      alert("no numbers in your last name please");
    } else {
      this.setState({
        lastNameError: false,
      });
    }
  };

  genderFunction = gender => {
    if (!gender.target.value) {
      return alert("please enter your gender");
    } else {
      this.setState({
        genderOptionsError: false,
      });
    }
  };

  gymFunction = gym => {
    if (!gym.target.value) {
      return alert("please enter your gym");
    } else {
      this.setState({
        gymError: false,
      });
    }
  };

  bioFunction = bio => {
    if (!bio.target.value) {
      return alert("please enter a bio under 250 characters");
    } else {
      this.setState({
        bioError: false,
      });
    }
  };

  trainingDay1Function = day1 => {
    if (!day1.target.value) {
      return alert("please enter training times that work for you");
    } else {
      this.setState({
        day1Error: false,
      });
    }
  };

  trainingDay2Function = day2 => {
    if (!day2.target.value) {
      return alert("please enter training times that work for you");
    } else {
      this.setState({
        day2Error: false,
      });
    }
  };

  trainingTime1Function = time1 => {
    if (!time1.target.value) {
      return alert("please enter training times that work for you");
    } else {
      this.setState({
        time1Error: false,
      });
    }
  };

  trainingTime2Function = time2 => {
    if (!time2.target.value) {
      return alert("please enter training times that work for you");
    } else {
      this.setState({
        time2Error: false,
      });
    }
  };

  trainingGoalsFunction = trainingGoals => {
    if (!trainingGoals.target.value) {
      return alert("please enter your training goals");
    } else {
      this.setState({
        trainingGoalsError: false,
      });
    }
  };

  trainingMotivationFunction = trainingMotivation => {
    if (!trainingMotivation.target.value) {
      return alert("please enter your training motivation");
    } else {
      this.setState({
        trainingMotivationError: false,
      });
    }
  };

  trainingMotivationFunction = trainingMotivation => {
    if (!trainingMotivation.target.value) {
      return alert("please enter your training motivation");
    } else {
      this.setState({
        trainingMotivationError: false,
      });
    }
  };

  trainingMonthsFunction = trainingMotivation => {
    if (!trainingMotivation.target.value) {
      return alert("please enter your training months");
    } else {
      this.setState({
        trainingMonthsError: false,
      });
    }
  };

  trainerImageFunction = trainerImage => {
    if (!trainerImage.target.value) {
      return alert("please use your LinkedIn profile picture");
    } else {
      this.setState({
        trainerImageError: false,
      });
    }
  };

  render() {
    return (
      <div className="PersonalTrainer">
        <h3>This is the Personal Trainer Form</h3>
        <div
          data-spy="scroll"
          data-offset="0"
          className="scrollspy-example3 anyClass"
          style={{ textAlign: "left" }}
        >
          <form onSubmit={this.formSubmit}>
            <h5>Email:</h5>{" "}
            <input type="email" name="email"/>
            <br />
            <h5>Password</h5>{" "}
            <input
              type="password"
              name="password"
              onBlur={this.passwordFunction}
            />
            <br />
            <h5>First Name:</h5>{" "}
            <input
              type="text"
              name="firstName"
              onBlur={this.firstNameFunction}
              disabled={this.state.passwordError ? true : false}
            />
            <br />
            <h5>Last Name:</h5>{" "}
            <input
              type="text"
              name="lastName"
              onBlur={this.lastNameFunction}
              disabled={this.state.firstNameError ? true : false}
            />
            <br />
            <div className="form-group">
              <h5>Gym</h5>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                name="gym"
                onBlur={this.gymFunction}
              >
                <option />
                <option value={1}>SNFW Howe</option>
                <option value={2}>SNFW Homer</option>
                <option value={3}>SNFW Georgia</option>
                <option value={4}>SNFW Park Royal</option>
                <option value={5}>SNFW Marine</option>
              </select>
            </div>
            <h5>Gender:</h5>{" "}
            <div
              className="form-check form-check-inline"
              onBlur={this.genderFunction}
            >
              <input
                className="form-check-input"
                type="radio"
                name="genderOptions"
                id="inlineRadio1"
                value="Male"
              />
              <label className="form-check-label" form="inlineRadio1">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="genderOptions"
                id="inlineRadio2"
                value="Female"
              />
              <label className="form-check-label" form="inlineRadio2">
                Female
              </label>
            </div>
            <br />
            <div className="form-group">
              <h5>City</h5>
              <select
                className="form-control"
                id="exampleFormControlSelect2"
                name="city"
              >
                <option>Vancouver</option>
              </select>
            </div>
            <h5>Bio:</h5>{" "}
            <div className="form-group">
              <label form="exampleFormControlTextarea1" />
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="bio"
                onBlur={this.bioFunction}
              />
            </div>
            <h5>Training Days:</h5>{" "}
            <div className="form-group" name="trainingDays">
              <select
                className="form-control"
                id="exampleFormControlSelect6"
                name="day1"
                style={{ display: "inline-block", width: "6rem" }}
                onBlur={this.trainingDay1Function}
              >
                <option />
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
              </select>
              -
              <select
                className="form-control"
                id="exampleFormControlSelect7"
                name="day2"
                style={{ display: "inline-block", width: "6rem" }}
                disabled={this.state.genderOptionsError ? true : false}
                onBlur={this.trainingDay2Function}
              >
                <option />
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
              </select>
            </div>
            <br />
            <h5>Training Time:</h5>
            <div className="form-group" name="trainingTime">
              <select
                className="form-control"
                id="exampleFormControlSelect8"
                name="time1"
                onBlur={this.trainingTime1Function}
                style={{ display: "inline-block", width: "6rem" }}
              >
                <option />
                <option>1:00</option>
                <option>2:00</option>
                <option>3:00</option>
                <option>4:00</option>
                <option>5:00</option>
                <option>6:00</option>
                <option>7:00</option>
                <option>8:00</option>
                <option>9:00</option>
                <option>10:00</option>
                <option>11:00</option>
                <option>12:00</option>
              </select>
              <select
                className="form-control"
                id="exampleFormControlSelect10"
                name="am1"
                style={{ display: "inline-block", width: "3.5rem" }}
              >
                <option>am</option>
                <option>pm</option>
              </select>
              -
              <select
                className="form-control"
                id="exampleFormControlSelect9"
                name="time2"
                disabled={this.state.time1Error ? true : false}
                onBlur={this.trainingTime2Function}
                style={{ display: "inline-block", width: "6rem" }}
              >
                <option />
                <option>1:00</option>
                <option>2:00</option>
                <option>3:00</option>
                <option>4:00</option>
                <option>5:00</option>
                <option>6:00</option>
                <option>7:00</option>
                <option>8:00</option>
                <option>9:00</option>
                <option>10:00</option>
                <option>11:00</option>
                <option>12:00</option>
              </select>
              <select
                className="form-control"
                id="exampleFormControlSelect11"
                name="am2"
                disabled={this.state.time1Error ? true : false}
                style={{ display: "inline-block", width: "3.5rem" }}
              >
                <option>am</option>
                <option>pm</option>
              </select>
            </div>
            <br />
            <div className="form-group">
              <h5>Training Specialty</h5>
              <select
                className="form-control"
                id="exampleFormControlSelect3"
                name="trainingGoals"
                disabled={this.state.time1Error ? true : false}
                onBlur={this.trainingGoalsFunction}
              >
                <option />
                <option>Build Muscle</option>
                <option>Weight Loss</option>
                <option>Tone muscle</option>
              </select>
            </div>
            <div className="form-group">
              <h5>Training Motivation</h5>
              <select
                className="form-control"
                id="exampleFormControlSelect4"
                name="trainingMotivation"
                disabled={this.state.time2Error ? true : false}
                onBlur={this.trainingMotivationFunction}
              >
                <option />
                <option>low</option>
                <option>medium</option>
                <option>high</option>
              </select>
            </div>
            <h5>Training Months:</h5>{" "}
            <div className="form-group">
              <select
                className="form-control"
                id="exampleFormControlSelect5"
                name="trainingMonths"
                disabled={this.state.trainingGoalsError ? true : false}
                onBlur={this.trainingMonthsFunction}
              >
                <option />
                <option>1-3 months</option>
                <option>4-6 months</option>
                <option>6-9 months</option>
                <option>10 months-1 year</option>
                <option>>1 year</option>
              </select>
            </div>
            <br />
            <br />
            <h5>Image URL:</h5>{" "}
            <input
              type="text"
              name="trainerImage"
              disabled={this.state.trainingMotivationError ? true : false}
              onBlur={this.trainerImageFunction}
            />
            <br />
            <br />
            <button
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default PersonalTrainer;
