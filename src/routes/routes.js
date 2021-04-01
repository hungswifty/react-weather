import React from "react";
import Home from "../components/home";
import WeatherData from "../components/weatherdata";
import Plan from "../components/plan";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";

export default function WeatherRouter() {
  return (
    <Router>
      <div>
        <h2>Welcome to React Router Tutorial</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link to={"/"} className="nav-link">
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <Link to={"/weather"} className="nav-link">
                Weather
              </Link>
            </li>
            <li>
              <Link to={"/plan"} className="nav-link">
                Plan
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/weather" component={WeatherData} />
          <Route path="/plan" component={Plan} />
        </Switch>
      </div>
    </Router>
  );
}
