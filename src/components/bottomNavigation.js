import React from "react";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CloudIcon from "@material-ui/icons/Cloud";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HomeIcon from "@material-ui/icons/Home";
import WeatherData from "./weatherdata";
import { withRouter } from "react-router";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "absolute",
    bottom: 0
  }
});

function WeatherBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const history = useHistory();
  const handleRouteChange = (newRoute) => {
    console.log(history);
    history.push(newRoute);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        console.log("change" + newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        component={Link}
        to="/"
        value=""
      />
      <BottomNavigationAction
        label="Weather"
        icon={<CloudIcon />}
        component={Link}
        to="weather"
        value="weather"
        onClick={() => {
          handleRouteChange("/weather");
        }}
      />
      <BottomNavigationAction
        label="Plan"
        icon={<LocationOnIcon />}
        component={Link}
        to="/plan"
        value="plan"
        onClick={() => {
          handleRouteChange("/plan");
        }}
      />
    </BottomNavigation>
  );
}

export default withRouter(WeatherBottomNavigation);
