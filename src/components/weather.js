import React from "react";
import "./styles.css";
import moment from "moment";
import { IconButton } from "@material-ui/core";
import { AutorenewIcon, CloudIcon } from "@material-ui/icons";

const WeatherCard = ({ weatherData }) => (
  <div className="main">
    <div className="top">
      <p className="header">{weatherData.name}</p>
      <IconButton aria-label="Delete" color="secondary">
        <AutorenewIcon />
      </IconButton>
    </div>
    <div className="flex">
      <p className="day">
        {moment().format("dddd")}, <span>{moment().format("LL")}</span>
      </p>
      <p className="description">
        <CloudIcon />
        {weatherData.weather[0].main}
      </p>
    </div>

    <div className="flex">
      <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
      <p className="temp">Humidity: {weatherData.main.humidity} %</p>
    </div>

    <div className="flex">
      <p className="sunrise-sunset">
        Sunrise:{" "}
        {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
      </p>
      <p className="sunrise-sunset">
        Sunset:{" "}
        {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}
      </p>
    </div>
  </div>
);

export default WeatherCard;
