import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  menuButton: {
    marginTop: "10px",
    marginBottom: "10px",
  },
}));

const SignUpForm = () => {
  const classes = useStyles();
  return (
    <div>

      Create a New Account
      <Grid className={classes.formField}>
        <form className="signup-form">
        <label className={classes.label}>Username:</label>
        <input type="username" />

        <label className={classes.label}>Password:</label>
        <input type="password" />

        <label className={classes.label}>Confirm Password:</label>
        <input type="confirm password" />

        <label className={classes.label}>User Type:</label>
        <input type="user type" />
        </form>


      <Button variant="contained" color="primary" id="submit" className={classes.submit}>SUBMIT</Button>

      </Grid>


      
    </div>
  );
};

export default SignUpForm;
