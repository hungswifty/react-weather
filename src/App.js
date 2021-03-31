import React from "react";
import React, { useEffect, useState } from "react";
import Weather from "./components/weather";
import "./style.css";

export default function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  const REACT_APP_API_KEY = "9f19142d24f7fb28a382af07a45407fd";
  const REACT_APP_API_URL = "https://api.openweathermap.org/data/2.5";
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`
      )
        .then(res => res.json())
        .then(result => {
          console.log("test123");
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className="App">
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div />
      )}
    </div>
  );
}
