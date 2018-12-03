import React, { Component } from "react";
import { Route } from "react-router-dom";
import TrainerDetails from "./trainerDetails"

class Gyms extends Component {
  
  trainerDetails = (id) => {
    this.props.history.push(`/gym/${id}`)
  }

  render() {
    const gymList = this.props.gyms.map((gym, i) => (
      <div key={gym.id} className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={gym.image} alt="hi" />
        <div className="card-body">
          <h5 className="card-title">{gym.name}</h5>
          <p className="card-text">Address:{gym.gymAddress}</p>
          <button onClick={() => this.trainerDetails(gym.id)} className="btn btn-primary">
            Trainers{" "}
          </button>
        </div>
      </div>
    ));
    return (
      <div>
        <h1>Trainer Page for Jonnys Capstone</h1>
        <div
          data-spy="scroll"
          data-offset="0"
          className="scrollspy-example anyClass"
        >
          {gymList}
        </div>
        <Route
            path="/gym/:gymId"
            render={routerProps => (
              <TrainerDetails
                trainer={this.props.trainer}
                {...routerProps}
              />
            )}
          />
      </div>
    );
  }
}

export default Gyms;
