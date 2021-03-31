import React from "react";
import React, { useEffect, useState } from "react";
import "./style.css";

export default function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      console.log("aaa");
      console.log(process);
      console.log(process.env.REACT_APP_API_KEY);
      await fetch(
        `${
          process.env.REACT_APP_API_URL
        }/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${
          process.env.REACT_APP_API_KEY
        }`
      )
        .then(res => res.json())
        .then(result => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return <div className="App" />;
}
