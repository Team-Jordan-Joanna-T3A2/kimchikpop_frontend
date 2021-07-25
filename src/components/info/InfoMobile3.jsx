import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  infoMobile3: {
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
}));

const InfoMobile1 = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.infoMobile3}>
      <h1>MENU</h1>
      <Button>DOWNLOAD MENU</Button>
    </Grid>
  );
};

export default InfoMobile1;
