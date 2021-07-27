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

const AddStaffSuccess = props => {
  let history = useHistory();
  const classes = useStyles();

  if (props.success === true) {
    return (
      <div>
        <Grid className={classes.root}>
          <h5>STAFF ADDED SUCESSFULLY</h5>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/staff")}
          >
            BACK TO MENU
          </Button>
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <Grid className={classes.root}>
          <h5>ADDING STAFF FAILED</h5>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.goBack()}
          >
            TRY AGAIN
          </Button>
        </Grid>
      </div>
    );
  }
};

export default AddStaffSuccess;
