import React from "react";
import { Link } from "react-router-dom";
import colors from "../../config/colors";

const CardUI = (props) => {
  const city = props.title;
  const bgimg = props.imgsrc;
  return (
    <div className="card-out" data-aos="fade-up">
      <div className="card text-center">
        <div className="overflow">
          <img src={props.imgsrc} alt="img1" className="card-img-top" />
        </div>
        <div className="card-body">
          <h4 className="card-title" style={{ color: colors.primary3 }}>
            {props.title}
          </h4>
          <p className="card-date" style={{ color: colors.dark1 }}>
            {props.date1}
          </p>
          <Link
            to={{
              pathname: "Clocksys",
              cityName: city,
              bg: bgimg,
            }}
            className="btn "
            style={{ color: colors.light2, backgroundColor: colors.secondary2 }}
          >
            Current-Time
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CardUI;
