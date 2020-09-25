import React, { useState } from "react";
import "./Timer.css";
import { Link } from "react-router-dom";

function Timer() {
  const [time, setTime] = useState({ hour: '0', minute: '0', second: '0' });
  const hourHandler = (event) => {
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
  //console.log(time.hour,":", time.minute, ":", time.second)
  let time1= (time.hour*3600+time.minute*60+time.second*1)*100;
  //console.log(time1)
  return (
    <>
      <div className="heading2">--StopWatch--</div>
      <div className="container3">
        <div className="screen">
          <div className='heading3'>Set Clock Time</div>
          <div className="box-size">
            <div className="btn1">Hours</div>
            <div className="styl">
              <input type="text" value={time.hour} onChange={hourHandler} />
            </div>
            <br />
            <div className="btn1">Minutes</div>
            <div className="styl">
              <input type="text" value={time.minute} onChange={minuteHandler} />
            </div>
            <br />
            <div className="btn1">Seconds</div>
            <div className="styl">
              <input type="text" value={time.second} onChange={secondHandler} />
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
              className="btn btn-outline-primary"
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
            fill="#0099ff"
            fill-opacity="1"
            d="M0,224L48,224C96,224,192,224,288,229.3C384,235,480,245,576,245.3C672,245,768,235,864,234.7C960,235,1056,245,1152,256C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default Timer;
