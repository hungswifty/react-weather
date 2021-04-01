import React from "react";
import BottomNavigation from "./components/bottomNavigation";
import WeatherRouter from "./routes/routes";

import "./style.css";

export default function App() {
  return (
    <div className="App">
      <WeatherRouter />
      <BottomNavigation />
    </div>
  );
}
