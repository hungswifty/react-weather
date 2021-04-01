import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BottomNavigation from "./components/bottomNavigation";
import "./style.css";
import weatherData from "./components/weatherdata";
import Plan from "./components/plan";

export default function App() {
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
              <Link to={"/contact"} className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path="/" component={weatherData} />
          <Route path="/contact" component={Plan} />
        </Switch>
      </div>
    </Router>
  );
}
