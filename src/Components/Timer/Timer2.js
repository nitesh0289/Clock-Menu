import React, { Component } from "react";
import $ from "jquery";

import colors from "../../config/colors";
import "./Timer.css";

class Timer2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: props.location.tm1 || 30000,
      duration: props.location.tm1 || 30090,
      moto: "Lets Start Your CountDown!!!",
    };
    this.hrs = props.location.hrs || "0";
    this.mins = props.location.tm1 === 0 ? 5 : props.location.mins;
    this.secs = props.location.secs || "0";
    this.msecs = "0";
    this.bt = "0";
  }
  playfn = async () => {
    if (this.state.seconds > 0) {
      await this.timer();
      this.myInterval = setInterval(this.timer, 10);
      document.getElementById("play").classList.add("pause");
      $("#animateCircle").removeClass("addAnimation2");
      $("#animateCircle").addClass("addAnimation");
      $("#animateCircle.addAnimation").css("animation", $(`animateCircle`));
      $("#animateCircle.addAnimation").css("animation-play-state", "running");
      this.setState({ moto: "Your Time Is Running, Go Fast!!!" });
    } else {
      this.stopfn();
      this.setState({
        moto: "You have no Time ....",
      });
    }
  };

  timer = () => {
    this.hrs = Math.floor(this.state.seconds / (3600 * 100));
    let div_for_min = this.state.seconds % 360000;
    this.mins = Math.floor(div_for_min / 6000);
    let div_for_sec = div_for_min % 6000;
    this.secs = Math.floor(div_for_sec / 100);
    let div_for_msec = div_for_sec % 100;
    this.msecs = Math.ceil(div_for_msec);
    if (this.state.seconds === 0) {
      this.stopfn();
      this.setState({
        moto: "Time Up!!! Hope You have Completed it.",
      });
    }
    this.setState((prevState) => ({
      seconds: prevState.seconds - 1,
    }));
  };

  stopfn = () => {
    let have = document.getElementById("play");
    if (have !== null && have.classList.contains("pause"))
      have.classList.remove("pause");
    $("#animateCircle").removeClass("addAnimation2");
    $("#animateCircle.addAnimation").css("animation-play-state", "paused");
    clearInterval(this.myInterval);
    if (this.bt === "0") this.setState({ moto: "Have You Completed???" });
    else {
      this.bt = "0";
      this.setState({ moto: "Ohh! You are running Late" });
    }
  };
  add = () => {
    let prevsecs = this.state.seconds;
    this.setState({
      seconds: prevsecs + 6000,
      duration: prevsecs + 6090,
    });
    this.bt = 1;
    this.stopfn();
  };

  playPause = () => {
    if (document.getElementById("play").classList.contains("pause")) {
      this.stopfn();
    } else {
      this.playfn();
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.state.seconds === 0)
      this.setState((currState) => ({ ...currState, mins: 5 }));
  }

  render() {
    return (
      <div className=" container1 pt=5">
        <div className="pt-5" />
        <div
          className="heading2 pt-5"
          data-aos="slide-left"
          style={{ color: colors.primary2 }}
        >
          Timer
        </div>
        <div className="container3 pt-3">
          <div
            className="screen-stopwatch"
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            <h1
              id="play"
              className="counter"
              data-aos="zoom-in"
              data-aos-duration="1500"
              onClick={this.playPause}
            >
              <svg width="260" height="260">
                <circle
                  className="defaultCircle"
                  cx="125"
                  cy="125"
                  r="120"
                  stroke={colors.secondary1}
                  strokeWidth="10"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle
                  id="animateCircle"
                  cx="125"
                  cy="125"
                  r="120"
                  stroke="#3A6E75"
                  strokeWidth="10"
                  fill="none"
                  strokeLinecap="round"
                  style={{
                    animationDuration: this.state.duration / 100 + "s",
                  }}
                />
              </svg>
              <span>{this.hrs < 10 ? "0" + this.hrs : this.hrs}</span>:
              <span>
                {this.mins === undefined
                  ? "05"
                  : this.mins < 10
                  ? "0" + this.mins
                  : this.mins}
              </span>
              :<span>{this.secs < 10 ? "0" + this.secs : this.secs}</span>:
              <span>{this.msecs < 10 ? "0" + this.msecs : this.msecs}</span>
            </h1>
            <p className="thought" style={{ color: colors.dark1 }}>
              {this.state.moto}
            </p>
            <div className="tools">
              <button
                className="btn"
                onClick={this.add}
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1600"
                style={{
                  color: colors.light2,
                  backgroundColor: colors.tertiary1,
                }}
              >
                Add 60s
              </button>
            </div>
          </div>
          <svg
            className="wave3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="100 0 900 320"
          >
            <path
              fill={colors.light3}
              fillOpacity="1"
              d="M0,224L48,224C96,224,192,224,288,229.3C384,235,480,245,576,245.3C672,245,768,235,864,234.7C960,235,1056,245,1152,256C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    );
  }
}

export default Timer2;
