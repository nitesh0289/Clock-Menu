import React, { Component } from "react";
import Clock from "./Clock";

class Clocksys extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hrdif: 0,
      mindif: 0
    };
  }
  componentDidMount(){
    if (this.props.location.cityName == "New Delhi, India") {
      this.setState({ hrdif: 5, mindif: 30});
    }
    if (this.props.location.cityName == "New York, USA") {
      this.setState({ hrdif: -4, mindif: 0});
    }
    if (this.props.location.cityName == "London, England") {
      this.setState({ hrdif: 1, mindif: 0});
    }
    if (this.props.location.cityName == "Paris, France") {
      this.setState({ hrdif: 2, mindif: 0});
    }
    if (this.props.location.cityName == "Tokyo, Japan") {
      this.setState({ hrdif: 9, mindif: 0});
    }
    if (this.props.location.cityName == "Berlin, Germany") {
      this.setState({ hrdif: 2, mindif: 0});
    }
    if (this.props.location.cityName == "Singapore") {
      this.setState({ hrdif: 8, mindif: 0});
    }
    if (this.props.location.cityName == "Sydney, Australia") {
      this.setState({ hrdif: 10, mindif: 0});
    }
    if (this.props.location.cityName == "Moscow, Russia") {
      this.setState({ hrdif: 3, mindif: 0});
    }
    if (this.props.location.cityName == "Dubai, UAE") {
      this.setState({ hrdif: 4, mindif: 0});
    }
    if (this.props.location.cityName == "Beijing, China") {
      this.setState({ hrdif: 8, mindif: 0});
    }
    if (this.props.location.cityName == "Ottawa, Canada") {
      this.setState({ hrdif: -4, mindif: 0});
    }
    if (this.props.location.cityName == "Colombo, Sri Lanka") {
      this.setState({ hrdif: 5, mindif: 30});
    }
    if (this.props.location.cityName == "Bangkok, Thailand") {
      this.setState({ hrdif: 7, mindif: 0});
    }
    if (this.props.location.cityName == "Kathmandu, Nepal") {
      this.setState({ hrdif: 5, mindif: 45});
    }
    if (this.props.location.cityName == "Islamabad, Pakistan") {
      this.setState({ hrdif: 5, mindif: 0});
    }
  }
  render() {    
    return (
      <div
        style={{
          display: "grid",
          width: "100%",
          margin: "0",
          padding: "0",
        }}
      >
        <Clock
          hr={this.state.hrdif}
          mn={this.state.mindif}
          bg={this.props.location.bg}
        />
      </div>
    );
  }
}

export default Clocksys;
