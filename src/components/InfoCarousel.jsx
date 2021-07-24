import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import clsx from "clsx";

// Info components
import InfoMobile1 from "./info/InfoMobile1";
import InfoMobile2 from "./info/InfoMobile2";
import InfoMobile3 from "./info/InfoMobile3";

const useStyles = makeStyles(theme => ({
  root: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
  },
}));

const styles = {
  slide: {
    padding: 15,
    width: "400px",
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    backgroundColor: "#FEA900",
  },
  slide2: {
    backgroundColor: "#B3DC4A",
  },
  slide3: {
    backgroundColor: "#6AC0FF",
  },
};

const InfoCarousel = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <SwipeableViews enableMouseEvents>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          slide n°1
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
          slide n°2
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>
          slide n°3
        </div>
      </SwipeableViews>
    </Grid>
  );
};

export default InfoCarousel;
