import React from "react";
import Nav from "../components/Nav";
import InfoCarousel from "../components/InfoCarousel";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  title: {
    letterSpacing: "-2px",
  },
}));

const CustomerPortal = () => {
  const classes = useStyles();

  return (
    <Grid>
      <Nav type="public" />
      <h1 className={classes.title}>KIMCHI&KPOP</h1>
      <InfoCarousel />
    </Grid>
  );
};

export default CustomerPortal;
