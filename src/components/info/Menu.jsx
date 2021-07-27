import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Nav from "../Nav";
import FoodMenu from "../../res/Menu.pdf";
import { useHistory } from 'react-router-dom';

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
    width: "200px",
  },
  menuImage: {
    maxHeight: "70vh",
    maxWidth: "90vw",
    margin: "20px 0px",
  },
  button: {
    width: "200px",
    margin: "20px"
  }
}));

const Menu = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Grid className={classes.menu}>
      <Nav type="public" />
      <h1>MENU</h1>
      <img alt="menu-image2" className={classes.menuImage} src={MenuImage2} />
      <img alt="menu-image1" className={classes.menuImage} src={MenuImage1} />
      <Button
        variant="contained"
        color="primary"
        className={classes.downloadButton}
      >
        <a href={FoodMenu} className={classes.downloadLink}>
          DOWNLOAD MENU
        </a>
      </Button>
      <Button className={classes.button} variant="contained" color="primary" onClick={() => history.push('/gallery')}>SEE THE FOOD</Button>

    </Grid>
  );
};

export default Menu;
