import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import colors from "../../config/colors.js";

const navli = {
  position: "fixed",
  top: "0",
  left: "0",
  maxWidth: "100vw",
  backgroundColor: colors.primary1,
  overflow: "hidden",
  zIndex: "101",
};

class Navbar1 extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg col-lg-12" style={navli}>
          <div className="container-fluid">
            <div className="nav-title" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="title" style={{ color: colors.primary2 }}>
                Clock Menu
              </div>
            </Link>
            <div className="spacer" />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <i className="fa fa-bars" style={{ color: colors.light3 }} />
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <Link
                  to="/"
                  className="nav-link"
                  style={{ color: colors.light1 }}
                >
                  <li className="nav-item">Home</li>
                </Link>

                <Link
                  to="/worldclock"
                  className="nav-link"
                  style={{ color: colors.light1 }}
                >
                  <li className="nav-item">World Clock</li>
                </Link>

                <Link
                  to="/stopwatch"
                  className="nav-link"
                  style={{ color: colors.light1 }}
                >
                  <li className="nav-item">Stop-Watch</li>
                </Link>

                <Link
                  to="/timer"
                  className="nav-link"
                  style={{ color: colors.light1 }}
                >
                  <li className="nav-item">Timer</li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar1;
