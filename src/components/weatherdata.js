import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Weather from "./weather";
import CircularProgress from '@material-ui/core/CircularProgress';

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
        `${REACT_APP_API_URL}/onecall?lat=${lat}&lon=${long}&exclude=hourly,current,minutely,alerts&units=metric&appid=${REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log('ket qua weather data tra ve');
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div class="weather-container">
      {typeof data.daily !== "undefined" ? (
        <div class="weather-wrapper">
          <Weather weatherData={data} />
        </div>
      ) : (
        <div class="spinner-loading">
          <CircularProgress />
        </div>
      )}
    </div>
  );
}
export default withRouter(WeatherData);
