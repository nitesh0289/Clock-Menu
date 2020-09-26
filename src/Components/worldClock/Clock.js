import React, { Component } from "react";
import "./Clock.css";

class Clock extends Component {
  clockInterval = "";
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.clockInterval = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  updateTime = () => {
    this.setState({
      time: new Date(),
    });
  };

  render() {
    var hh1 = this.state.time.getUTCHours();
    var mm1 = this.state.time.getUTCMinutes();
    var hh = hh1 + this.props.hr;
    var mm = mm1 + this.props.mn;
    var ss = this.state.time.getUTCSeconds();
    //------------------------------
    // for changing date
    //------------------------------
    // if(this.props.hr>0)
    // {
    //   if(hh < hh1-hh){
    //     console.log(this.state.time.getUTCDate() + 1);
    //   }
    //   else{
    //     console.log(this.state.time.getUTCDate());
    //   }
    // }
    // if(this.props.hr<0)
    // {
    //   if(hh1 < hh-hh1){
    //     console.log(this.state.time.getUTCDate() + 1);
    //   }
    //   else{
    //     console.log(this.state.time.getUTCDate());
    //   }
    // }
    // console.log("1st")
    // console.log("hours:",hh, "minutes:", mm, "seconds:", ss);
    var mr = hh >= 12 ? "PM" : "AM";
    if (hh > 12) {
      hh = hh - 12;
    }
    if (mm < 0) {
      hh = hh - 1;
      mm = 60 + mm;
    }
    if (hh < 0) {
      hh = 12 + hh;
    }
    if (mm > 60) {
      hh = hh + 1;
      mm = mm - 60;
    }
    if (hh > 12) {
      hh = hh - 12;
    }
    // console.log("2nd");
    // console.log("hours:",hh, "minutes:", mm, "seconds:", ss);
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
        <div
          className="container1"
          style={{
            background: "url(" + this.props.bg + ")",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
            opacity: "0.9",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "500px",
              minWidth: "350px",
            }}
          >
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
                {hh < 10 ? "0" : null}
                {hh}:{mm < 10 ? "0" : null}
                {mm}:{ss < 10 ? "0" : null}
                {ss} {mr}
              </h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Clock;
