import React, { Component } from "react";
import MapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import "../App.css";
import CityPin from "./city-pin";
import CityInfo from "./city-info";
import axios from "axios";

const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

class Home extends Component {
  mainFormSubmit = e => {
    e.preventDefault();
    const {
      user,
      position,
      goodFeature,
      noFeature,
    } = e.target;
    const newReview = {
      user: user.value,
      position: position.value,
      goodFeature: goodFeature.value,
      noFeature: noFeature.value
    };
    axios
      .post("http://localhost:9090/review", newReview)
      .then(() => {
        this.props.history.push("/home");
      });
  };
  render() {
    return (
      <div>
        <div
          className="sign_in container-fluid"
        >
          <div className="row">
            <div className="sideText" />
            <div className="mainText container-fluid">
              <h1>Find Your Personal Trainer from around Vancouver</h1>
              <h3>Scroll down to see gyms near you</h3>
              <div>
                <a href="#map_div">
                  <img
                    className="arrow-down"
                    src="./arrow-down-main.png"
                    alt="arrow-down"
                  />
                </a>
              </div>
            </div>
            <div className="sideText" />
          </div>
        </div>
        <div className="map-div" id="map_div">
          <Map history={this.props.history} gyms={this.props.gyms} />
        </div>
        <div>
          <div className="main-form" style={{ backgroundColor: "whitesmoke" }}>
            <div className="row">
              <div className="sideText" />
              <div className="mainText">
                <div>
                  <a href="#map_div">
                    <img
                      className="arrow-down"
                      src="./arrow-up-main.png"
                      alt="arrow-down"
                    />
                  </a>
                </div>
                <h3>Please comment on a feature you liked and did not like</h3>
                <form className="scrollspy-example3 anyClass" onSubmit={this.mainFormSubmit} style={{width:"20rem", display: "inline-block", border: "1px solid black"}}>
                  <h6>Name:</h6> <input type="text" name="user" />
                  <br />
                  <br/>
                  <h6>Job/Current Position:</h6>
                  <input type="text" name="position" />
                  <br />
                  <br />
                  <br />
                  <h6>Enjoyed Feature:</h6>
                  <div className="form-group">
                    <label form="exampleFormControlTextarea1" />
                    <textarea className="form-control" name="goodFeature" />
                  </div>
                  <h6>Did Not Like:</h6>
                  <div className="form-group">
                    <label form="exampleFormControlTextarea1" />
                    <textarea className="form-control" name="noFeature" />
                  </div>
                  <br />
                  <button type="submit">Submit</button>
                </form>
              </div>
              <div className="sideText" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 1000,
        height: 400,
        latitude: 49.2827,
        longitude: -123.1207,
        zoom: 8,
        bearing: 0,
        pitch: 0
      },
      token:
        "pk.eyJ1IjoiamNhcm9uMjYiLCJhIjoiY2pvcm93MDBnMDBuNjNwczV1dW5paTFuaSJ9.co6eNn9ZARfmr6Y-FeAH-g",
      popupInfo: null
    };
  }

  _updateViewport = viewport => {
    this.setState({ viewport });
  };

  _renderCityMarker = gyms => {
    return (
      <Marker
        key={gyms.id}
        longitude={Number(gyms.longitude)}
        latitude={Number(gyms.latitude)}
      >
        <CityPin size={20} onClick={() => this.setState({ popupInfo: gyms })} />
      </Marker>
    );
  };

  _renderPopup() {
    const { popupInfo } = this.state;
    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          history={this.props.history}
          gyms={this.props.gym}
          longitude={Number(popupInfo.longitude)}
          latitude={Number(popupInfo.latitude)}
          closeOnClick={false}
          closeButton={true}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <CityInfo
            gyms={this.props.gyms}
            history={this.props.history}
            info={popupInfo}
          />
        </Popup>
      )
    );
  }

  render() {
    const { viewport } = this.state;
    return (
      <div className="row">
        <div className="sideText" />
        <div className="Map" data-spy="scroll" data-target="sign_in">
          <MapGL
            {...viewport}
            width="100%"
            height="100%"
            mapStyle="mapbox://styles/mapbox/dark-v9"
            onViewportChange={this._updateViewport}
            mapboxApiAccessToken={this.state.token}
            gyms={this.props.gyms}
          >
            {this.props.gyms.map(this._renderCityMarker)}
            {this._renderPopup()}

            <div className="nav" style={navStyle}>
              <NavigationControl onViewportChange={this._updateViewport} />
            </div>
          </MapGL>
        </div>
        <div className="sideText" />
      </div>
    );
  }
}

export default Home;
