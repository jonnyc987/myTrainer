import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="row">
          <div>
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
            className="col-sm-8 col-md-8 col-lg-8"
          >
            {" "}
            <div className="header_1">
              <div
                className="mr-4"
                style={{ display: "inline-block", fontSize: "20px" }}
              >
                <Link className="text-right" to="/gym">
                  Trainer Directory
                </Link>
              </div>
              <div style={{ display: "inline-block", fontSize: "20px" }}>
                <Link className="text-right" to="/getStarted">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="header_2 ">
              <div className="dropdown container-fluid">
                <button
                  type="button"
                  className="btn btn-secondary dropdown-toggle btn-header"
                  id="dropdownMenuOffset"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-offset="10,20"
                >
                 Menu
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuOffset"
                >
                  <Link className="dropdown-item" to="/gym">
                    Trainer Directory
                  </Link>
                  <Link className="dropdown-item" to="/getStarted">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <nav />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
