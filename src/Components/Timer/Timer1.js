import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import colors from "../../config/colors";
import "./Timer.css";

function Timer() {
  const [time, setTime] = useState({ hour: "0", minute: "5", second: "0" });
  const hourHandler = (event) => {
    console.log(event.target.value);
    setTime({
      hour: event.target.value,
      minute: time.minute,
      second: time.second,
    });
  };
  const minuteHandler = (event) => {
    setTime({
      hour: time.hour,
      minute: event.target.value,
      second: time.second,
    });
  };
  const secondHandler = (event) => {
    setTime({
      hour: time.hour,
      minute: time.minute,
      second: event.target.value,
    });
  };
  let time1 = (time.hour * 3600 + time.minute * 60 + time.second * 1) * 100;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container1 pt-5">
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
          data-aos-duration="1400"
        >
          <div
            className="heading3"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-offset="100"
            style={{ color: colors.primary3 }}
          >
            Set Clock Time
          </div>
          <div className="box-size">
            <div
              className="tags"
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-offset="100"
              style={{ backgroundColor: colors.light2 }}
            >
              Hours
            </div>
            <div
              className="styl"
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-offset="100"
            >
              <input
                type="text"
                value={time.hour}
                onChange={hourHandler}
                style={{ backgroundColor: colors.light2 }}
              />
            </div>
            <br />
            <div
              className="tags"
              data-aos="fade-up"
              data-aos-duration="1700"
              data-aos-offset="100"
              style={{ backgroundColor: colors.light2 }}
            >
              Minutes
            </div>
            <div
              className="styl"
              data-aos="fade-up"
              data-aos-duration="1700"
              data-aos-offset="100"
            >
              <input
                type="text"
                value={time.minute}
                style={{ backgroundColor: colors.light2 }}
                onChange={minuteHandler}
              />
            </div>
            <br />
            <div
              className="tags"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-offset="100"
              style={{ backgroundColor: colors.light2 }}
            >
              Seconds
            </div>
            <div
              className="styl"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-offset="100"
            >
              <input
                type="text"
                value={time.second}
                onChange={secondHandler}
                style={{ backgroundColor: colors.light2 }}
              />
            </div>
            <br />
            <Link
              to={{
                pathname: "Timer2",
                hrs: time.hour,
                mins: time.minute,
                secs: time.second,
                tm1: time1,
              }}
              className="btn"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="1600"
              style={{
                color: colors.light2,
                backgroundColor: colors.tertiary1,
              }}
            >
              Let's Go On
            </Link>
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

export default Timer;
