import React, { Component } from "react";

import colors from "../../config/colors";
import "./Clock.css";
import template from "../../images/bg.jpg";

class Clock extends Component {
  clockInterval = "";
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
      bg: this.props.bg || template,
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
    // if(this.props.bg===undefined)

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
        <div className="container1 pt-3">
          <div
            className="heading2 pt-5"
            data-aos="slide-left"
            style={{ color: colors.primary2 }}
          >
            {this.props.city || "Universal Standard Time"}
          </div>
          <div
            className="screen mt-3 pb-5"
            style={{
              background: "url(" + this.state.bg + ")",
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
            }}
          >
            <div
              className="clock"
              data-aos="slide-up"
              data-aos-offset="20"
              style={{ border: "10px solid" + colors.primary3 }}
            >
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
            <div
              className="digiclock mt-4 mx-auto"
              data-aos="slide-left"
              data-aos-offset="20"
              style={{ backgroundColor: colors.light2, color: colors.dark1 }}
            >
              <h2 className="text-center" style={{ fontWeight: "600" }}>
                {hh < 10 ? "0" : null}
                {hh}:{mm < 10 ? "0" : null}
                {mm}:{ss < 10 ? "0" : null}
                {ss} {mr}
              </h2>
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
      </>
    );
  }
}

export default Clock;
