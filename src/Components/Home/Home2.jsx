import React from "react";
import { Link } from "react-router-dom";

import WorldMap from "../../images/worldmap.jpg";
import Stopwatch from "../../images/stopwatch.jpeg";
import Timer from "../../images/timer.jpeg";
import "../worldClock/CardUI.css";
import colors from "../../config/colors";

const Card = () => {
  return (
    <div
      style={{
        paddingBottom: "5%",
        paddingTop: "5%",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 pb-5" data-aos="fade-up">
            <div className="card-out" data-aos="fade-up">
              <div className="card text-center">
                <div className="overflow">
                  <img src={WorldMap} alt="WorldMap" className="card-img-top" />
                </div>
                <div
                  className="card-body text-dark"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1300"
                >
                  <h4
                    className="card-title heading"
                    style={{ fontSize: "2rem", color: colors.primary3 }}
                  >
                    World-Clock
                  </h4>
                  <p
                    className="card-text para p-2"
                    style={{ color: colors.dark1 }}
                  >
                    Acknowledge you from date and time of different locations of
                    world with fair User interface.
                  </p>
                  <React.Fragment>
                    <Link to="worldclock">
                      <button
                        className="btn"
                        style={{
                          backgroundColor: "#583d72",
                          color: colors.light1,
                        }}
                      >
                        World-clock
                      </button>
                    </Link>
                  </React.Fragment>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-md-6 col-lg-4 pb-5" data-aos="fade-up">
            <div className="card-out" data-aos="fade-up">
              <div className="card text-center">
                <div className="overflow">
                  <img
                    src={Stopwatch}
                    alt="Stopwatch"
                    className="card-img-top"
                  />
                </div>
                <div
                  className="card-body text-dark"
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-duration="1300"
                >
                  <h4
                    className="card-title heading"
                    style={{ fontSize: "2rem", color: colors.primary3 }}
                  >
                    Stop-Watch
                  </h4>
                  <p
                    className="card-text para p-2"
                    style={{ color: colors.dark1 }}
                  >
                    Easy to use and accurate stopwatch with the awesome UI. It
                    can start and stop at any instant.
                  </p>
                  <React.Fragment>
                    <Link to="stopwatch">
                      <button
                        className="btn"
                        style={{
                          backgroundColor: "#583d72",
                          color: colors.light1,
                        }}
                      >
                        Stop-Watch
                      </button>
                    </Link>
                  </React.Fragment>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 pb-5" data-aos="fade-up">
            <div className="card-out" data-aos="fade-up">
              <div className="card text-center">
                <div className="overflow">
                  <img src={Timer} alt="Timer" className="card-img-top" />
                </div>
                <div
                  className="card-body text-dark"
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-duration="1200"
                >
                  <h4
                    className="card-title heading"
                    style={{ fontSize: "2rem", color: colors.primary3 }}
                  >
                    Timer
                  </h4>
                  <p
                    className="card-text para p-2"
                    style={{ color: colors.dark1 }}
                  >
                    Set the Hours, Minutes & seconds in the form and start and
                    stop the timer. It can also add extra 60s.
                  </p>
                  <React.Fragment>
                    <Link to="timer">
                      <button
                        className="btn"
                        style={{
                          backgroundColor: "#583d72",
                          color: colors.light1,
                        }}
                      >
                        Timer
                      </button>
                    </Link>
                  </React.Fragment>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
