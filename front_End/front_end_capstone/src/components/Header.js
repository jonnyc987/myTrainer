import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="row">
          <div className="col-sm-3 col-md-4 col-lg-4">
            <h1 style={{ display: "inline-block" }}>
              <Link style={{ textDecoration: "none" }} to="/home">
                myTrainer
              </Link>
            </h1>
          </div>
          <div
            style={{
              margin: "1rem",
              display: "inline-block",
              textAlign: "right"
            }}
            className="col-sm-6 col-md-6 col-lg-6"
          >
            {" "}
            <div className="mr-4" style={{display: "inline-block", fontSize: "20px"}}>
              <Link className="text-right" to="/gym">
                Trainer Directory
              </Link>
            </div>
            <div style={{display: "inline-block", fontSize: "20px"}}>
              <Link className="text-right" to="/getStarted">
                Get Started
              </Link>
            </div>
          </div>
          <nav />
        </div>
      </div>
    );
  }
}

export default Header;
