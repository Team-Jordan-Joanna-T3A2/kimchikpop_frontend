import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

const AddBookingSuccess = props => {
  let history = useHistory();
  const classes = useStyles();

  const backToForm = () => {
    props.setBookingSent(false);
  };

  if (props.success === true) {
    return (
      <div>
        <Grid className={classes.root}>
          <h5>BOOKING SUCCESSFULLY SUBMITTED</h5>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/")}
          >
            HOME
          </Button>
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <Grid className={classes.root}>
          <h5>BOOKING FAILED</h5>
          <Button variant="contained" color="primary" onClick={backToForm}>
            TRY AGAIN
          </Button>
        </Grid>
      </div>
    );
  }
};

export default AddBookingSuccess;
