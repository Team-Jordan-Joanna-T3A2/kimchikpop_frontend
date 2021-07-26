import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";

// Info components
import InfoMobile1 from "./info/InfoMobile1";
import About from "./info/About";
import Menu from "./info/Menu";

const styles = {
  slide: {
    padding: 15,
    margin: "0 auto",
    maxWidth: "600px",
    height: "100vh",
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
          <InfoMobile1 />
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
          <About />
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>
          <Menu />
        </div>
      </SwipeableViews>
    </Grid>
  );
};

export default InfoCarousel;
