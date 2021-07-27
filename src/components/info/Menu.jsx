import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Nav from "../Nav";
import FoodMenu from "../../res/Menu.pdf"

//images
import MenuImage1 from "../../res/nathan-dumlao--CwlvovOfb0-unsplash.jpg";
import MenuImage2 from "../../res/nathan-dumlao-5-tl8DLvYA4-unsplash.jpg";
import { none } from "ramda";

const useStyles = makeStyles(theme => ({
  menu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    // margin: "auto",
    marginTop: "-40px",
    height: "70vh",
    padding: "0px 10px 10px 10px",
    width: "100%",
    
  },

  downloadLink: {
    textDecoration: "none",
    color: "white",
  },

  downloadButton: {
    width: "300px",
    
  }

}));

const Menu = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.menu}>
      <Nav type="public" />
      <h1>MENU</h1>     
      <img alt="menu-image2" className="menu-image2" src={MenuImage2}/>
      <img alt="menu-image1" className="menu-image1" src={MenuImage1}/>
      <Button variant="contained" color="primary" className={classes.downloadButton}><a href={FoodMenu} className={classes.downloadLink}>DOWNLOAD MENU</a></Button>
    </Grid>
  );
};

export default Menu;
