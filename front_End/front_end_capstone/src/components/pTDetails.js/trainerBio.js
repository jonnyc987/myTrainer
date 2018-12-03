import React, { Component } from "react";

class TrainerBio extends Component {
  render() {
    const trainerBio = this.props.trainer.filter(
      trainer => trainer.firstName === this.props.match.params.name
    );

    const trainer = trainerBio.map((trainer, i) => (
      <div key={i} style={{ margin: "5rem 5rem", border: "2px solid black" }}>
        <img style={{ height: "10rem" }} src={trainer.trainerImage} alt="hi" />
        <article style={{ display: "inline-block", width: "60%", marginLeft: "1rem" }}>
        <h5>Contact:</h5>
        {trainer.email}</article>
        <div className="col-sm-6 col-md-6">
          <div
            key={trainer.id}
            className="card2"
            style={{ width: "24rem" }}
          >
            <div className="card-body">
              <h4 className="card-title">
                {trainer.firstName} {trainer.lastName}
              </h4>
              <p className="card-text">{trainer.bio}</p>
            </div>
          </div>
        </div>
      </div>
    ));

    return <div>{trainer}</div>;
  }
}

export default TrainerBio;
