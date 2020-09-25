import React, { Component } from "react";
import CardUI from "./CardUI";
import "./CardUI.css";
import NewDelhi from '../../images/Newdelhi.jpg';
import NewYork from '../../images/newyork2.jpeg';
import london from '../../images/london.jpg';
import paris from '../../images/paris.jpeg';
import tokyo from '../../images/tokyo2.jpg';
import berlin from '../../images/berlin.jpg';
import singapore from '../../images/singapore.jpg';
import sydney from '../../images/sydney.jpg';
import moscow from '../../images/moscow.jpg';
import dubai from '../../images/dubai.jpg';
import ottawa from '../../images/ottawa.png';
import colombo from '../../images/colombo.jpeg'
import thailand from '../../images/thailand.jpeg'
import kathmandu from '../../images/kathmandu.jpeg'
import beijing from '../../images/beijing.png'
import islamabad from '../../images/islamabad.jpeg'
import Footer from "../Home/Footer";

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
      <div>
      <div className="container d-flex justify-content-center col-lg-12">
        <div className="row">
          <div className='heading1 col-lg-12'>
            --Countries--
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
          <div className="col-md-6 col-lg-3 mt-5">
            <CardUI imgsrc={tokyo} title="Tokyo, Japan" date1={newdate}/>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <CardUI imgsrc={berlin} title="Berlin, Germany" date1={newdate}/>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <CardUI imgsrc={singapore} title="Singapore" date1={newdate}/>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <CardUI imgsrc={sydney} title="Sydney, Australia" date1={newdate}/>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <CardUI imgsrc={moscow} title="Moscow, Russia" date1={newdate}/>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <CardUI imgsrc={dubai} title="Dubai, UAE" date1={newdate}/>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <CardUI imgsrc={beijing} title="Beijing, China" date1={newdate}/>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <CardUI imgsrc={ottawa} title="Ottawa, Canada" date1={newdate}/>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <CardUI imgsrc={colombo} title="Colombo, Sri Lanka" date1={newdate}/>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <CardUI imgsrc={thailand} title="Bangkok, Thailand" date1={newdate}/>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <CardUI imgsrc={kathmandu} title="Kathmandu, Nepal" date1={newdate}/>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <CardUI imgsrc={islamabad} title="Islamabad, Pakistan" date1={newdate}/>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    );
  }
}

export default Worldclock
