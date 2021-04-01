import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../components/home";
import WeatherData from "../components/weatherdata";
import Plan from "../components/plan";

export default function WeatherRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="weather" component={WeatherData} />
        <Route path="plan" component={Plan} />
      </Switch>
    </Router>
  );
}
