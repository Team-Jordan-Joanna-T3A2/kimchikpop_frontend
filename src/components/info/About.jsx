import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Nav from "../Nav";

const useStyles = makeStyles(theme => ({
  about: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "space-between",
    // margin: "auto",
    marginTop: "-40px",
    height: "70vh",
    padding: "0px 10px 10px 10px",
    width: "100%",
  },
  blurb: {
    fontSize: "1.5em",
    maxWidth: '90%',
  },
  location: {
    width: "70%",
    height: "40%",
    backgroundColor: "grey",
  },
}));

const HomeInfo = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.about}>
      <Nav type="public" />
      <p className={classes.blurb}>
        <h1>About KIMCHI&KPOP</h1>
        KIMCHI & KPOP WAS BORN IN 2019 WITH A MISSION TO BRING AN AUTHENTIC
        KOREAN ATMOSPHERE AND DINING EXPERIENCE TO MELBOURNE’S STREETS
      </p>
      {/* <div className={classes.location}>gmaps embed</div> */}
      
    </Grid>
  );
};

export default HomeInfo;
