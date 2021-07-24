import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import clsx from "clsx";

// Info components
import InfoMobile1 from "./info/InfoMobile1";
import InfoMobile2 from "./info/InfoMobile2";
import InfoMobile3 from "./info/InfoMobile3";

const styles = {
  slide: {
    padding: 15,
    margin: "0 auto",
    width: "600px",
    minHeight: "500px",
  },
  slide1: {
    backgroundColor: "transparent",
  },
  slide2: {
    backgroundColor: "transparent",
  },
  slide3: {
    backgroundColor: "transparent",
  },
};

const InfoCarousel = () => {
  return (
    <Grid>
      <SwipeableViews enableMouseEvents>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          <InfoMobile1/>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
          <InfoMobile2/>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>
          <InfoMobile3/>
        </div>
      </SwipeableViews>
    </Grid>
  );
};

export default InfoCarousel;
