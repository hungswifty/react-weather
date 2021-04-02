import React from "react";
import "./styles.css";
import moment from "moment";
import { Typography, IconButton, Grid } from "@material-ui/core";
import { Autorenew as AutorenewIcon } from "@material-ui/icons";

const refresh = () => {
  window.location.reload();
};

const WeatherCard = ({ weatherData }) => (
  <Grid container direction="row" justify="center" alignItems="center">
    <Grid item>
      {/* <Typography className="weather_title" variant="h3" align="center">THỜI TIẾT HÔM NAY</Typography> */}
      <div className="main">
        <div className="top">
          <p className="header">{weatherData.name}</p>
          <IconButton aria-label="Delete" color="secondary" onClick={refresh}>
            <AutorenewIcon />
          </IconButton>
        </div>
        <div className="flex">
          <p className="day">
            {moment().format("dddd")}, <span>{moment().format("LL")}</span>
          </p>
          <p className="description">{weatherData.weather[0].main}</p>
        </div>

        <div className="flex">
          <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
          <p className="temp">Humidity: {weatherData.main.humidity} %</p>
        </div>

        <div className="flex">
          <p className="sunrise-sunset">
            Sunrise:{" "}
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </p>
          <p className="sunrise-sunset">
            Sunset:{" "}
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </p>
        </div>
      </div>
    </Grid>
  </Grid>
);

export default WeatherCard;
