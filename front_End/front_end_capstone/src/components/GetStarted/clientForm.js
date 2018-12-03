import React, { Component } from "react";
import axios from "axios";

class Client extends Component {
  formSubmit = e => {
    e.preventDefault();
    const {
      email,
      password,
      firstName,
      lastName,
      genderOptions,
      dOB,
      city,
      telephone,
      trainingDays,
      trainingTime,
      trainingGoals,
      trainingMotivation,
      trainingMonths
    } = e.target;
    axios
      .post("http://localhost:9090/client", {
        email: email.value,
        password: password.value,
        firstName: firstName.value,
        lastName: lastName.value,
        gender: genderOptions.value,
        dOB: dOB.value,
        city: city.value,
        telephone: telephone.value,
        trainingDays: trainingDays.value,
        trainingTime: trainingTime.value,
        trainingGoals: trainingGoals.value,
        trainingMotivation: trainingMotivation.value,
        trainingMonths: trainingMonths.value
      })
      .then(() => {
        this.props.history.push("/home");
      });
  };

  render() {
    return (
      <div className="Client">
        <h3>Feature Coming Soon!</h3>
        <br />
        <div
          data-spy="scroll"
          data-offset="0"
          className="scrollspy-example2 anyClass"
          style={{ textAlign: "left" }}
        >
          <form onSubmit={this.formSubmit}>
            <br />
            <h5>Email:</h5> <input type="email" name="email" disabled />
            <br />
            <h5>Password</h5> <input type="text" name="password" disabled />
            <br />
            <h5>First Name:</h5> <input type="text" name="firstName" disabled />
            <br />
            <h5>Last Name:</h5> <input type="text" name="lastName" disabled />
            <br />
            <h5>Gender:</h5>{" "}
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="genderOptions"
                id="inlineRadio1"
                value="Male"
                disabled
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
                disabled
              />
              <label className="form-check-label" form="inlineRadio2">
                Female
              </label>
            </div>
            <br />
            <h5>Date of Birth:</h5>{" "}
            <input
              type="text"
              placeholder="day/month/year"
              name="dOB"
              disabled
            />
            <br />
            <div className="form-group">
              <h5>City</h5>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                name="city"
                disabled
              >
                <option />
                <option>Vancouver</option>
              </select>
            </div>
            <h5>Phone Number:</h5>{" "}
            <input type="text" name="telephone" disabled />
            <br />
            <h5>Training Days:</h5>{" "}
            <input type="text" name="trainingDays" disabled />
            <br />
            <h5>Training Time:</h5> <input type="text" name="trainingTime" disabled />
            <br />
            <div className="form-group">
              <h5>Training Goals</h5>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                name="trainingGoals"
                disabled
              >
                <option>Build Muscle</option>
                <option>Lose Weight</option>
                <option>Tone muscle</option>
              </select>
            </div>
            <div className="form-group">
              <h5>Training Motivation</h5>
              <select
                className="form-control"
                id="exampleFormControlSelect2"
                name="trainingMotivation"
                disabled
              >
                <option>low</option>
                <option>medium</option>
                <option>high</option>
              </select>
            </div>
            <div>
              <h5>Training Months:</h5>
              <div className="form-group">
                <select
                  className="form-control"
                  id="exampleFormControlSelect5"
                  name="trainingMonths"
                  disabled
                >
                  <option />
                  <option>1-3 months</option>
                  <option>4-6 months</option>
                  <option>6-9 months</option>
                  <option>10 months-1 year</option>
                  <option>>1 year</option>
                </select>
              </div>
            </div>
            <br />
            <br />
            <button type="submit" disabled>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Client;
