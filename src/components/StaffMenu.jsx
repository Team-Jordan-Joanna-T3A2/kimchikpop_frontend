import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  menuButton: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  title: {
    letterSpacing: "-2px",
  },
}));


const StaffMenu = () => {
  const classes = useStyles();
  const history = useHistory();

  const gotoSignUp = () => {
    history.push('/staff/signup');
  }
  return (
    <div>
      <h1 className={classes.title}>KIMCHI&KPOP</h1>
      <h2>STAFF PORTAL</h2>
      <Grid className={classes.root}>
        <Button
          className={classes.menuButton}
          variant="contained"
          color="primary"
          onClick={gotoSignUp}
        >
          CREATE A NEW STAFF ACCOUNT
        </Button>

        <Button
          className={classes.menuButton}
          variant="contained"
          color="primary"
        >
          TODAY'S BOOKINGS
        </Button>
        <Button
          className={classes.menuButton}
          variant="contained"
          color="primary"
        >
          MANAGE ALL BOOKINGS
        </Button>
        <Button
          className={classes.menuButton}
          variant="contained"
          color="primary"
        >
          MANAGE STAFF
        </Button>
        <Button
          className={classes.menuButton}
          variant="contained"
          color="primary"
        >
          MANAGE FRONT PAGE
        </Button>
      </Grid>
    </div>
  );
};

export default StaffMenu;
