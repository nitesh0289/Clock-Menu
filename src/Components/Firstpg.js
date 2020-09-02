import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Button,
  CardDeck,
} from "reactstrap";
import Mypic from "./Mypic.jpg";
import "./Navbar1.css";

class Firstpg extends Component {
  render() {
    return (
      <div>
        <Card className="col-sm-12 bg-warning mt-2">
          <CardTitle className="text-center font-weight-bold title">
            CLOCK-MENU
          </CardTitle>
        </Card>
        <CardDeck>
        <Card className="mt-5">
          <CardImg top width="100%" height="55%" src={Mypic} alt="My Profile" />
          <CardBody>
            <CardTitle className="text-left text-danger title">
              Nitesh Kumar
            </CardTitle>
            <CardText>
              A Computer Engineer Passionate of programming and Development in
              all Senses.
              <div className="text-right">
                <Button className="bg-primary" href="/">
                  Profile
                </Button>
              </div>
            </CardText>
          </CardBody>
        </Card>
        <Card className="mt-5">
          <CardImg
            top
            width="100%"
            height="55%"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F142%2F990%2Foriginal%2Fvector-world-map.jpg&f=1&nofb=1"
            alt="World-map"
          />
          <CardBody>
            <CardTitle className="text-left text-danger title">
              World-Clock
            </CardTitle>
            <CardText>
              Acknowledge You from Date and Time of different locations of
              World.
              <div className="text-right">
                <Button className="bg-primary" href="/">
                  World-clock
                </Button>
              </div>
            </CardText>
          </CardBody>
        </Card>
        <Card className="mt-5">
          <CardImg
            top
            width="100%"
            height="55%"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frobertsontrainingsystems.com%2Fwp-content%2Fuploads%2F2013%2F09%2Fstopwatch.jpg&f=1&nofb=1"
            alt="stop-watch"
          />
          <CardBody>
            <CardTitle className="text-left text-danger title">
              Stop-Watch
            </CardTitle>
            <CardText>
              Easy to use and accurate stopwatch with lap times and Alerts.
              Optional split intervals.
              <div className="text-right">
                <Button className="bg-primary" href="/">
                  Stop-Watch
                </Button>
              </div>
            </CardText>
          </CardBody>
        </Card>
        <Card className="mt-5">
          <CardImg
            top
            width="100%"
            height="55%"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F0nECW367m6E%2Fmaxresdefault.jpg&f=1&nofb=1"
            alt="Timer"
          />
          <CardBody>
            <CardTitle className="text-left text-danger title">Timer</CardTitle>
            <CardText>
              Create one or multiple timers and start them in any order. Set an
              Alert Message.
              <div className="text-right">
                <Button className="bg-primary" href="/">
                  Timer
                </Button>
              </div>
            </CardText>
          </CardBody>
        </Card>
        </CardDeck>
      </div>
    );
  }
}

export default Firstpg;
