import React from "react";
import { Button } from "reactstrap";
import Clock from "./Clock";
import Clocksys from "./Clocksys";
import { Link } from "react-router-dom";
// const current_time=()=>{
//   console.log('hello clock')
//   return(
//     <Clocksys />
//   );
// };
const CardUI = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="img1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-date text-primary">{props.date1}</p>
        <Link to={{
          pathname: 'Clocksys',
          state: {
            city: 'New York'
          }
        }}>
          <a className="btn btn-outline-success">
            Current-Time
          </a>
        </Link>
      </div>
    </div>
  );
};
export default CardUI;
