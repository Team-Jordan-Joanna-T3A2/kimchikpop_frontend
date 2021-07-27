import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from "../components/Nav";
import InfoCarousel from "../components/InfoCarousel";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// pages
import HomeInfo from "../components/info/HomeInfo";
import About from "../components/info/About";
import Menu from "../components/info/Menu";
import Gallery from "../components/info/Gallery"

const useStyles = makeStyles(theme => ({
  title: {
    letterSpacing: "-2px",
  },
  customerPortalContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "100%",
  }
}));

const CustomerPortal = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.customerPortalContainer}>
      <Nav type="public" />
      <h1 className={classes.title}>KIMCHI&KPOP</h1>
      {/* <InfoCarousel /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={HomeInfo}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/menu" component={Menu}/>
          <Route exact path="/gallery" component={Gallery}/>
        </Switch>
      </Router>
    </Grid>
  );
};

export default CustomerPortal;
