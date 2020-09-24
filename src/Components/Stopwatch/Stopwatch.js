import React, { useState } from "react";
import "./stopWatch.css";
import $ from "jquery";

function Stopwatch() {
  const [time, setTime] = useState({ msc: 0, s: 0, m: 0, h: 0 });
  const [intervalId, setintervalId] = useState(0);
  const [thought, setThought] = useState({
    moto: "Lets Start Your Time Now!!!",
  });
  var updatemsc = time.msc;
  var updatesc = time.s;
  var updatemn = time.m;
  var updatehr = time.h;

  const timer = () => {
    updatemsc++;

    if (updatemsc === 100) {
      updatemsc = 0;
      updatesc = ++updatesc;
    }
    if (updatesc === 60) {
      updatesc = 0;
      updatemn = ++updatemn;
    }
    if (updatemn === 60) {
      updatemn = 0;
      updatehr = ++updatehr;
    }
    return setTime({
      h: updatehr,
      m: updatemn,
      s: updatesc,
      msc: updatemsc,
    });
  };

  const playfn = () => {
    timer();
    let interval = setInterval(timer, 10);
    document.getElementById("play").classList.add("pause");
    $("#animateCircle").removeClass("addAnimation2");
    $("#animateCircle").addClass("addAnimation");
    $("#animateCircle.addAnimation").css("animation-play-state", "running");
    setintervalId(interval);
    setThought({ moto: "Your Time Is Running, Go Fast!!!" });
  };

  const stopfn = () => {
    document.getElementById("play").classList.remove("pause");
    $("#animateCircle").removeClass("addAnimation2");
    $("#animateCircle.addAnimation").css("animation-play-state", "paused");
    clearInterval(intervalId);
    setThought({ moto: "You Are A Lazy Guy. Grow Up Bro!!!" });
  };

  const resetfn = () => {
    clearInterval(intervalId);
    $("#animateCircle").addClass("addAnimation2");
    $("#animateCircle").removeClass("addAnimation");
    stopfn();
    setThought({ moto: "Lets Start Your Time Now!!!" });
    return setTime({
      h: 0,
      m: 0,
      s: 0,
      msc: 0,
    });
  };
  return (
    <>
      <div className="heading2">--StopWatch--</div>
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
                stroke-width="10"
                fill="none"
                stroke-linecap="round"
              />
              {/* <defs>
                <linearGradient id="half">
                  <stop offset="0%" stop-color="lightblue"/>
                  <stop offset="50%" stop-color="lightblue" />
                  <stop offset="50%" stop-color="white" />
                  <stop offset="100%" stop-color="white" />
                </linearGradient>
              </defs> */}
              <circle
                id="animateCircle"
                cx="125"
                cy="125"
                r="120"
                stroke="#cc0099"
                stroke-width="10"
                fill="none"
                // fill="url(#half)"
                stroke-linecap="round"
              />
            </svg>
            <span>{time.h < 10 ? "0" + time.h : time.h}</span>:
            <span>{time.m < 10 ? "0" + time.m : time.m}</span>:
            <span>{time.s < 10 ? "0" + time.s : time.s}</span>:
            <span>{time.msc < 10 ? "0" + time.msc : time.msc}</span>
          </h1>
          <p className="thought">{thought.moto}</p>
          <div className="tools">
            <button onClick={playfn} id="play">
              Start
            </button>
            <button onClick={stopfn} id="pause">
              Stop
            </button>
            <button onClick={resetfn}>Reset</button>
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

export default Stopwatch;
