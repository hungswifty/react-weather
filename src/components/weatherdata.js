import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Weather from "./weather";
import "./style.css";

function WeatherData() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
  const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      await fetch(
        //lat = {lat} & long = {long} if not blocked gps
        `${REACT_APP_API_URL}/weather/?lat=21.0277&lon=105.7671&units=metric&APPID=${REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className="App">
      {typeof data.main != "undefined" ? (
        <div>
          <Weather weatherData={data} />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
export default WeatherData;
