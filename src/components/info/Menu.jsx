import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Nav from "../Nav";

//images
import MenuImage1 from "../../res/nathan-dumlao--CwlvovOfb0-unsplash.jpg";
import MenuImage2 from "../../res/nathan-dumlao-5-tl8DLvYA4-unsplash.jpg";

const useStyles = makeStyles(theme => ({
  menu: {
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

const Menu = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.menu}>
      <Nav type="public" />
      <h1>MENU</h1>
      <img alt="menu image1" src={MenuImage1}/>
      <img alt="menu image2" src={MenuImage2}/>
      <Button variant="contained" color="primary">DOWNLOAD MENU</Button>
    </Grid>
  );
};

export default Menu;
