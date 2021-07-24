import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import clsx from 'clsx';

// Info components
import InfoMobile1 from './info/InfoMobile1';
import InfoMobile2 from './info/InfoMobile2';
import InfoMobile3 from './info/InfoMobile3';

const useStyles = makeStyles(theme => ({
  slide: {
    padding: 15,
    minheight: 400,
    minwidth: 300,
    color: "#000000",
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
}));

const InfoCarousel = () => {
  const classes = useStyles;
  return (
    <SwipeableViews enableMouseEvents>
    {/* <InfoMobile1 style={clsx(classes.slide, classes.slide1)}/>
    <InfoMobile2 style={clsx(classes.slide, classes.slide2)}/>
    <InfoMobile3 style={clsx(classes.slide, classes.slide3)}/> */}
      <div style={Object.assign({}, classes.slide, classes.slide1)}>
        <InfoMobile1/>
      </div>
      <div style={Object.assign({}, classes.slide, classes.slide2)}>
        <InfoMobile2/>
      </div>
      <div style={Object.assign({}, classes.slide, classes.slide3)}>
        <InfoMobile3/>
      </div>
    </SwipeableViews>
  );
};

export default InfoCarousel;
