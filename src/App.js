import React from "react";
import "./App.css";
import Navbar1 from "./Components/Navbar1";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import profile from "./Components/Profile";
import worldclock from "./Components/Worldclock";
import stopwatch from "./Components/Stopwatch";
import timer from "./Components/Timer";
import Clocksys from "./Components/Clocksys";

function App() {
  return (
    <div>
      <Router>
        <Navbar1 />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/worldclock" component={worldclock} />
          <Route path="/stopwatch" component={stopwatch}/>
          <Route path="/timer" component={timer}/>
          <Route path="/profile" component={profile}/>
          <Route path="/clocksys" component={Clocksys}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
