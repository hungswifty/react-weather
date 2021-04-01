import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Weather from "./weather";

function WeatherData() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
  const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log("test weather component");
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      console.log(lat);
      console.log(long);
      await fetch(
        //lat = {lat} & long = {long} if not blocked gps
        `${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`
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
    <div class="news-container">
      {typeof data.main !== "undefined" ? (
        <div class="news-wrapper">
          <Weather weatherData={data} />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
export default withRouter(WeatherData);
