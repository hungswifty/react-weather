import React from "react";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CloudIcon from "@material-ui/icons/Cloud";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HomeIcon from "@material-ui/icons/Home";
import { withRouter } from "react-router";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: '10%',
    background: 'white',
    position: "absolute",
    bottom: 0,
    left: 0
  },
  bottom_naviAction: {
    color: 'lightblue',
    width: '100%'
  }
});

function WeatherBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        className={classes.bottom_naviAction}
        label="Home"
        icon={<HomeIcon />}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        className={classes.bottom_naviAction}
        label="Weather"
        icon={<CloudIcon />}
        component={Link}
        to="weather"
      />
      <BottomNavigationAction
        className={classes.bottom_naviAction}
        label="Plan"
        icon={<LocationOnIcon />}
        component={Link}
        to="/plan"
      />
    </BottomNavigation>
  );
}

export default withRouter(WeatherBottomNavigation);
