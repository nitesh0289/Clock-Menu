import React, { Component } from "react";
import "./Clock.css";

class Clock extends Component {
  clockInterval = "";
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
      meridian: "",
    };
  }

  componentDidMount(){
    this.clockInterval=setInterval(this.updateTime, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.clockInterval);
  }

  updateTime = () => {
    this.setState({
      time: new Date(),
    });
    this.state.time.getHours() + this.props.hr > 12
      ? this.setState({ meridian: "PM" })
      : this.setState({ meridian: "AM" });
  };

  render() {
    const hh = this.state.time.getHours() + this.props.hr;
    const mm = this.state.time.getMinutes() + this.props.mn;
    const ss = this.state.time.getSeconds() + this.props.sc;

    const hr = 180 + (hh * 30 + mm / 2);
    const mn = 180 + (mm * 6 + ss / 10);
    const sc = 180 + ss * 6;

    const styleHr = {
      transform: "rotateZ(" + hr + "deg)",
    };
    const styleMn = {
      transform: "rotateZ(" + mn + "deg)",
    };
    const styleSc = {
      transform: "rotateZ(" + sc + "deg)",
    };

    return (
      <>
        <div className="container1">
          <div className="clock">
            <div className="hour">
              <div className="hr" style={styleHr}></div>
            </div>
            <div className="min">
              <div className="mn" style={styleMn}></div>
            </div>
            <div className="sec">
              <div className="sc" style={styleSc}></div>
            </div>
          </div>
          <div className="digiclock">
            <h2 className="text-center">
              {hh > 12 && hh - 12 < 10 ? "0" : null}
              {hh > 12 ? hh - 12 : hh}:{mm < 10 ? "0" : null}
              {mm}:{ss < 10 ? "0" : null}
              {ss} {this.state.meridian}
            </h2>
          </div>
        </div>
      </>
    );
  }
}

export default Clock;
//mapbox