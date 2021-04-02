import React from "react";
import WeatherRouter from "./routes/routes";

import "./style.css";

export default function App() {
  return (
    <div className="App">
      <WeatherRouter />
      <main class="content">
        <div className="toolbar" />
      </main>
    </div>
  );
}
