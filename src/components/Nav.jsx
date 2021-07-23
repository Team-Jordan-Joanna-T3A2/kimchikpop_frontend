import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 80,
  },
  appBar: {
    backgroundColor: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "inline",
    },
  },
  title: {
    flexGrow: 1,
  },
  button: {
    paddingLeft: 0,
    paddingRight: 0,
    width: "100px",
    marginLeft: "10px",
    marginRight: "10px",
  },
  buttons: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-end",
    },
  },
  staffButtons: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  desktopButton: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  bookContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  if (props.type === "public") {
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Grid className={classes.buttons}>
              <Button
                variant="outlined"
                color="inherit"
                className={clsx(classes.button, classes.desktopButton)}
              >
                HOME
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                className={clsx(classes.button, classes.desktopButton)}
              >
                MENU
              </Button>
              <Grid className={classes.bookContainer}>
                <Button
                  variant="outlined"
                  color="inherit"
                  className={classes.button}
                >
                  BOOK NOW
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  } else if (props.type === "staff") {
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton> */}
            <Grid className={classes.staffButtons}>
              <Button
                color="inherit"
                variant="outlined"
                className={classes.button}
              >
                HOME
              </Button>
              <Button
                color="inherit"
                variant="outlined"
                className={classes.button}
              >
                LOG OUT
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}