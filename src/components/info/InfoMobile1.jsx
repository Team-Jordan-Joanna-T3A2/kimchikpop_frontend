import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  infoMobile1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginTop: "-40px",
    height: "80vh",
    padding: "0px 10px 10px 10px"
  },
  infoHeader: {
    marginTop: "-15px"
  }
}))

const InfoMobile1 = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.infoMobile1}>
    <Grid>
      <h4>123 FAKE STREET, FAKEVILLE 1234 MELBOURNE</h4>
      <h4 className={classes.infoHeader}>TUESDAY - SUNDAY 11AM - 11PM</h4>
    </Grid>
      <Grid>
        <h1>COME FOR THE KIMCHI,</h1>
        <h1>STAY FOR THE KPOP</h1>
      </Grid>
    <h1>MENU & MORE ➞</h1>
    </Grid> 
  );
};

export default InfoMobile1;
