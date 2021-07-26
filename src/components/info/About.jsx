import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

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

const InfoMobile1 = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.about}>
      <p className={classes.blurb}>
        KIMCHI & KPOP WAS BORN IN 2019 WITH A MISSION TO BRING AN AUTHENTIC
        KOREAN ATMOSPHERE AND DINING EXPERIENCE TO MELBOURNE’S STREETS
      </p>
      {/* <div className={classes.location}>gmaps embed</div> */}
      <h1>SEE THE MENU ➞</h1>
    </Grid>
  );
};

export default InfoMobile1;
