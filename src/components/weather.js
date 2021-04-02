import React from "react";
import "./styles.css";
import moment from "moment";
import { Typography, IconButton, Grid } from "@material-ui/core";
import { Autorenew as AutorenewIcon } from "@material-ui/icons";

const refresh = () => {
  // window.location.reload();
};


const WeatherCard = ({ weatherData }) => {

  const DailyWeatherCard = weatherData.daily.slice(0, 5).map((item, i) => (
    <Grid key={i} item  >
      <div className="main">
      <div className="top">
        <p className="header">{item.name}</p>
        <IconButton aria-label="Delete" color="secondary" onClick={refresh}>
          <AutorenewIcon />
        </IconButton>
      </div>
      <div className="flex">
        <p className="day">
        {new Date(item.dt*1000).toDateString()}
          
        </p>
        <p className="description">{item.weather.main}</p>
      </div>

      <div className="flex">
        <p className="temp">Min: {item.temp.min} &deg;C</p>
        <p className="temp">Humidity: {item.humidity} %</p>
      </div>
      <div className="flex">
        <p className="temp">Max: {item.temp.max} &deg;C</p>
        <p className="temp">Weather: {item.weather[0].main}</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">
          Sunrise:{" "}
          {new Date(item.sunrise * 1000).toLocaleTimeString(
            "en-IN"
          )}
        </p>
        <p className="sunrise-sunset">
          Sunset:{" "}
          {new Date(item.sunset * 1000).toLocaleTimeString(
            "en-IN"
          )}
        </p>
      </div>
    </div>
  </Grid>
  ));

  return (
    <Grid container direction="row" justify="center" alignContent="center" spacing={2} >
        {DailyWeatherCard}
    </Grid>
  );

}

export default WeatherCard;
