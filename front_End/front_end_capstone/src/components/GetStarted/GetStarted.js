import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Client from "./clientForm";
import PersonalTrainer from "./personalTrainerForm";

class GetStarted extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="GetStarted" style={{textAlign:"center"}}>
        <br />
        <br />
        <div>
          <h2 style={{paddingTop: "2rem"}}>
            Are you a{" "}
            <Link to={this.props.match.url + "/PersonalTrainer"}>
              Personal Trainer
            </Link>{" "}
            or <Link to={this.props.match.url + "/Client"}>Client</Link>
          </h2>
          <Switch>
            <Route
              path={this.props.match.path + "/personalTrainer"}
              exact
              render={routerProps => (
                <PersonalTrainer
                  client={this.state.client}
                  trainer={this.state.trainer}
                  {...routerProps}
                />
              )}
            />
            <Route
              path={this.props.match.path + "/client"}
              render={routerProps => (
                <Client
                  client={this.state.client}
                  trainer={this.state.trainer}
                  {...routerProps}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default GetStarted;
