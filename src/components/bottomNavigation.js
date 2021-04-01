// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import BottomNavigation from "@material-ui/core/BottomNavigation";
// import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import CloudIcon from "@material-ui/icons/Cloud";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import LocationOnIcon from "@material-ui/icons/LocationOn";

// import HomeIcon from "@material-ui/icons/Home";

// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//     position: "absolute",
//     bottom: 0
//   }
// });

// function WeatherBottomNavigation() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   return (
//     <BottomNavigation
//       value={value}
//       onChange={(event, newValue) => {
//         setValue(newValue);
//       }}
//       showLabels
//       className={classes.root}
//     >
//       <BottomNavigationAction label="Home" icon={<HomeIcon />} />
//       <BottomNavigationAction label="Weather" icon={<CloudIcon />} />
//       <BottomNavigationAction label="Plan" icon={<LocationOnIcon />} />
//     </BottomNavigation>
//   );
// }

// export default WeatherBottomNavigation;
