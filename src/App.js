import React from "react";
import Navbar1 from "./Components/Home/Navbar1";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import worldclock from "./Components/worldClock/Worldclock";
import stopwatch from "./Components/Stopwatch/Stopwatch";
import timer from "./Components/Timer/Timer1";
import clocksys from "./Components/worldClock/Clocksys";
import Timer2 from "./Components/Timer/Timer2";

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
          {/* <Route path="/profile" component={profile}/> */}
          <Route path="/clocksys" component={clocksys}/>
          <Route path="/Timer2" component={Timer2}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
