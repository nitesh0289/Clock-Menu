import React, { Component } from "react";
import $ from "jquery";

class Timer2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: props.location.tm1,
    };
    this.hrs= props.location.hrs;
    this.mins= props.location.mins;
    this.secs= props.location.secs;
    this.msecs= '0';
  }
  playfn = () =>{
    this.timer();
    this.myInterval = setInterval(this.timer, 10);
    document.getElementById("play").classList.add("pause");
    $("#animateCircle").removeClass("addAnimation2");
    $("#animateCircle").addClass("addAnimation");
    $("#animateCircle.addAnimation").css('animation', $(`animateCircle`));
    $("#animateCircle.addAnimation").css("animation-play-state", "running");
  }

  timer = () => {
    this.hrs = Math.floor(this.state.seconds / (3600*100));
    let div_for_min = this.state.seconds % 360000;
    this.mins = Math.floor(div_for_min / 6000);
    let div_for_sec = div_for_min % 6000;
    this.secs = Math.floor(div_for_sec/100);
    let div_for_msec = div_for_sec % 100;
    this.msecs = Math.ceil(div_for_msec)
    if(this.hrs==0 && this.mins==0 && this.secs==0 && this.msecs==0){
      this.stopfn();
    }
    this.setState((prevState) => ({
      seconds: prevState.seconds - 1,
    }));
  };

  stopfn = () => {
    document.getElementById("play").classList.remove("pause");
    $("#animateCircle").removeClass("addAnimation2");
    $("#animateCircle.addAnimation").css("animation-play-state", "paused");
    clearInterval(this.myInterval);
  }
  add = () => {
    let prevsecs= this.state.seconds;
    this.setState({seconds: prevsecs+6000});
  }
  render() {
    //console.log(this.state.seconds)
    //const { seconds } = this.state;
    //console.log(this.hrs," :", this.mins, " :", this.secs);
    return (
      <>
        <div className="heading2">--Timer--</div>
        <div className="container3">
          <div className="screen">
            <h1 className="counter">
              <svg width="260" height="260">
                <circle
                  className="defaultCircle"
                  cx="125"
                  cy="125"
                  r="120"
                  stroke="#ff99e6"
                  strokeWidth="10"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle
                  id="animateCircle"
                  cx="125"
                  cy="125"
                  r="120"
                  stroke="#cc0099"
                  strokeWidth="10"
                  fill="none"
                  // fill="url(#half)"
                  strokeLinecap="round"
                />
              </svg>
              <span>{this.hrs < 10 ? "0" + this.hrs : this.hrs}</span>:
              <span>{this.mins < 10 ? "0" + this.mins : this.mins}</span>:
              <span>{this.secs < 10 ? "0" + this.secs : this.secs}</span>:
              <span>{this.msecs< 10 ? "0" + this.msecs : this.msecs}</span>
            </h1>
            <p className="thought">Hello What's Up</p>
            <div className="tools">
              <button onClick={this.playfn} id="play">
                Start
              </button>
              <button onClick={this.stopfn} id="pause">Stop</button>
              <button onClick={this.add}>Add 60 Sec</button>
            </div>
          </div>
          <svg
          className="wave3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="100 0 900 320"
        >
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,224L48,224C96,224,192,224,288,229.3C384,235,480,245,576,245.3C672,245,768,235,864,234.7C960,235,1056,245,1152,256C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        </div>
      </>
    );
  }
}

export default Timer2;
