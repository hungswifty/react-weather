import React from "react";
import Home from "../components/home";
import WeatherData from "../components/weatherdata";
import Plan from "../components/plan";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BottomNavigation from "../components/bottomNavigation";

export default function WeatherRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/weather" component={WeatherData} />
          <Route path="/plan" component={Plan} />
        </Switch>
        <BottomNavigation />
      </div>
    </Router>
  );
}
