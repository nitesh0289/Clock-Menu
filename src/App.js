import React from "react";
import Navbar1 from "./Components/Home/Navbar1";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import profile from "./Components/Profile/Profile";
import worldclock from "./Components/worldClock/Worldclock";
import stopwatch from "./Components/Stopwatch/Stopwatch";
import timer from "./Components/Timer/Timer";
import clocksys from "./Components/worldClock/Clocksys";

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
          <Route path="/clocksys" component={clocksys}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
