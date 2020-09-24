import React from "react";
import WorldMap from "../../images/worldmap.jpg";
import Stopwatch from "../../images/stopwatch.jpeg";
import Timer from "../../images/timer.jpeg";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import '../worldClock/CardUI.css';

const Card = () => {
  return (
    <div>
    <div className="container d-flex justify-content-center mt-5">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="card text-center">
            <div className="overflow">
              <img src={WorldMap} alt="WorldMap" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
              <h4 className="card-title">World-Clock</h4>
              <p className="card-text text-secondary">
                Acknowledge You from Date and Time of different locations of
                World with Perfect UI.
              </p>
              <React.Fragment>
                <Link to="worldclock">
                  <Button className="bg-primary btn btn-outline-dark">
                    World-clock
                  </Button>
                </Link>
              </React.Fragment>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-lg-4 ">
          <div className="card text-center">
            <div className="overflow">
              <img src={Stopwatch} alt="Stopwatch" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
              <h4 className="card-title">Stop-Watch</h4>
              <p className="card-text text-secondary">
                Easy to use and accurate stopwatch with lap times and Alerts.
                Optional split intervals.
              </p>
              <React.Fragment>
                <Link to="stopwatch">
                  <Button className="bg-primary btn btn-outline-dark">
                    Stop-Watch
                  </Button>
                </Link>
              </React.Fragment>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card text-center">
            <div className="overflow">
              <img src={Timer} alt="Timer" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
              <h4 className="card-title">Timer</h4>
              <p className="card-text text-secondary">
                Create one or multiple timers and start them in any order. Set
                an Alert Message Lovely UI.
              </p>
              <React.Fragment>
                <Link to="timer">
                  <Button className="bg-primary btn btn-outline-dark">
                    Timer
                  </Button>
                </Link>
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
