import React from "react";
import HomeData from "../components/homeData";
import WeatherData from "../components/weatherdata";
import Plan from "../components/plan";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BottomNavigation from "../components/bottomNavigation";

export default function WeatherRouter() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={HomeData} />
          <Route path="/weather" component={WeatherData} />
          <Route path="/plan" component={Plan} />
        </Switch>
        <BottomNavigation />
    </Router>
  );
}
