import React, { Component } from "react";
import Mbclock from "../../images/mobile_clock1.png";
import "./Home.css";
import Card from "./Home2";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="fluid-container section col-lg-12" >
          <div className="content">
            <h2 className="heading"><u>Clock Menu Application</u></h2>
            <p className="para col-lg-8">
              A single screen Application with fabulous UI and with optimized
              Memory and Speed. It consists features like Clocking With
              Location, Stopwatch and Timer with new features.
            </p>
            <h3 className="sign">
              <strong>Developer: </strong>
              <i>
                <span> Nitesh Kumar </span>
              </i>
            </h3>
          </div>
          <img
            src={Mbclock}
            className="mobimg"
            style={{ userDrag: "none", userSelect: "none" }}
            alt='arbitary clock pic'
          />
          <svg
            className="wave"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 260"
          >
            <path
              fill="#000b76"
              fillOpacity="1"
              d="M0,128L120,144C240,160,480,192,720,181.3C960,171,1200,117,1320,90.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
        <Card />
        <Footer />
      </div>
    );
  }
}

export default Home;
