import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  HomeInfo: {
    display: "flex",
    flexDirection: "column",
    // alignItems: 'center',
    justifyContent: "space-between",
    // margin: "auto",
    marginTop: "-40px",
    height: "70vh",
    padding: "0px 10px 10px 10px",
    width: "100%",
  },
  infoHeader: {
    marginTop: "-15px",
  },
}));

const HomeInfo = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.HomeInfo}>
      <Grid>
        <h4>123 FAKE STREET, FAKEVILLE 1234 MELBOURNE</h4>
        <h4>CONTACT NUMBER: 0412345678</h4>
        <h4 className={classes.infoHeader}>TUESDAY - SUNDAY 11:30AM - 9:30PM</h4>
      </Grid>
      <Grid>
        <h1>COME FOR THE KIMCHI,</h1>
        <h1>STAY FOR THE KPOP</h1>
      </Grid>
      <h1>MENU & MORE ➞</h1>
    </Grid>
  );
};

export default HomeInfo;