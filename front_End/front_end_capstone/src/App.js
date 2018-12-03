import React, { Component } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import GetStarted from "./components/GetStarted/GetStarted";
import Home from "./components/Home";
import Gyms from "./components/pTDetails.js/Gyms";

class App extends Component {
  constructor() {
    super();
    this.state = {
      client: [],
      trainer: [],
      gyms: [],
      loading: true
    };
  }

  componentDidMount() {
    const clientData = "http://localhost:9090/client";
    const trainerData = "http://localhost:9090/personalTrainer";
    const gymData = "http://localhost:9090/gym"

    axios
      .all([axios.get(clientData), axios.get(trainerData), axios.get(gymData)])
      .then(
        axios.spread((clientData, trainerData, gymData) => {
          this.setState({
            client: clientData.data,
            trainer: trainerData.data,
            gyms: gymData.data,
            loading: false
          });
        })
      )
      .catch(error => console.log(error));
  }

  render() {
    return this.state.loading ? (
      "Loading..."
    ) : (
      <div className="App">
        <Header />
        <Switch>
          <Route
            path="/getStarted"
            render={routerProps => (
              <GetStarted
                client={this.state.client}
                trainer={this.state.trainer}
                {...routerProps}
              />
            )}
          />
          <Route
            path="/home"
            exact
            render={routerProps => (
              <Home
                client={this.state.client}
                trainer={this.state.trainer}
                gyms={this.state.gyms}
                {...routerProps}
                
              />
            )}
          />
          <Route
            path="/gym"
            render={routerProps => (
              <Gyms
                client={this.state.client}
                trainer={this.state.trainer}
                gyms={this.state.gyms}
                {...routerProps}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
