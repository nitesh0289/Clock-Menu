import React from "react";
import { Link } from "react-router-dom";

const CardUI = (props) => {
  const city = props.title;
  const bgimg= props.imgsrc;
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="img1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-date text-primary">{props.date1}</p>
        <Link
          to={{
            pathname: "Clocksys",
            cityName: city,
            bg: bgimg,
          }}
          className="btn btn-outline-success"
        >
          Current-Time
        </Link>
      </div>
    </div>
  );
};
export default CardUI;
