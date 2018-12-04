import React, { Component } from "react";
import TrainerBio from "./trainerBio";
import { Route } from "react-router-dom";

class TrainerDetails extends Component {
  trainerBio = (name) => {
    this.props.history.push(`/gym/${name}`);
  };

  render() {
    const trainersList = this.props.trainer.filter(
      trainer => trainer.gym === Number(this.props.match.params.gymId)
    );

   const trainerDetails = trainersList.map((trainer, i) => (
  <div key={trainer.id} >
    <div  className="card2" style={{ width: "18rem", border: "black solid 1px" }}>
      <img className="card-img-top" style={{width: "100%", height: "12rem"}} src={trainer.trainerImage} alt="hi" />
      <div className="card-body">
        <h3 className="card-title">{trainer.firstName} {trainer.lastName} </h3>
       <h5 style={{display: "inline-block"}}>Training Days</h5><p className="card-text">{trainer.trainingDays}</p>
       <h5 style={{display: "inline-block"}}>Training Time</h5><p className="card-text">{trainer.trainingTime}</p> 
        <button onClick={() => this.trainerBio(trainer.firstName)} className="btn-primary">Trainer Details</button>
      </div>
    </div>
  </div>
   ))

    return (
      <div>
        <div
          data-spy="scroll"
          data-offset="0"
          className="scrollspy-example4 row"
        >
        {trainerDetails}
          <Route
            path="/gym/:name"
            exact
            render={routerProps => (
              <TrainerBio
                trainer={this.props.trainer}
                {...routerProps}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default TrainerDetails;

