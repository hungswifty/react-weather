import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BottomNavigation from "./components/bottomNavigation";
import WeatherRouter from "./routes/routes";
import "./style.css";

export default function App() {
  return (
    <div className="App">
      <BottomNavigation />
      <WeatherRouter />
    </div>
  );
}
