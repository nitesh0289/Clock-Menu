import React, { Component } from "react";
import Clock from "./Clock";

const Clocksys= (props)=> {
      console.log("CardUI",props.location.city)
    return (
      <div
        style={{
          display: "grid",
          width: "100%",
          margin: "0",
          padding: "0",
        }}
      >
        <Clock hr={-2} mn={0} sc={0} />
      </div>
    );
  }

export default Clocksys
