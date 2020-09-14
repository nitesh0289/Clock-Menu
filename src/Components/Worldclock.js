import React, { Component } from "react";
import CardUI from "./CardUI";
import "./CardUI.css";
import NewDelhi from '../images/Newdelhi.jpg';
import NewYork from '../images/newYork.jpeg';
import london from '../images/london.jpg';
import paris from '../images/paris.jpeg';
import tokyo from '../images/tokyo.jpg';
import germany from '../images/germany.jpg';
import singapore from '../images/singapore.jpg';
import sydney from '../images/sydney.jpg';
import moscow from '../images/moscow.jpg';
import dubai from '../images/dubai.jpg';
import Clock from "./Clock";

class Worldclock extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       date: new Date(),
    }
  }
  
  render() {
    var formatter= {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      weekday: 'long',
    };
    var newdate= new Intl.DateTimeFormat('en-US', formatter).format(this.state.date)
    return (
      <div className="container d-flex justify-content-center ">
        <div className="row">
          <div className='heading1'>
            Countries
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <CardUI imgsrc={NewDelhi} title="New Delhi, India" date1={newdate}/>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <CardUI imgsrc={NewYork} title="New York, USA" date1={newdate}/>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <CardUI imgsrc={london} title="London, England" date1={newdate}/>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <CardUI imgsrc={paris} title="Paris, France" date1={newdate}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Worldclock
