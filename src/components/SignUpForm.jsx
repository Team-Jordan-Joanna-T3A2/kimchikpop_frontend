import React, { useState } from "react";
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
  const [signUpForm, setSignUpForm] = useState({
    user: {
      username: "",
      password: "",
      password_confirmation: "",
      user_type: "",
    },
  });

  const classes = useStyles();

  const changeInput = e => {
    setSignUpForm({
      user: {
        ...signUpForm.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  // const submitForm = () => {
  //   axios.post(/* url */, signUpForm)
  //   .then(console.log("Successfully sent POST request"))
  //   .catch(err => console.log(err));
  // }

  const { username, password, password_confirmation } = signUpForm.user;

  return (
    <div>
      Create a New Account
      <Grid className={classes.formField}>
        <form className="signup-form">
          <label className={classes.label}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={changeInput}
            name="username"
          />

          <label className={classes.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={changeInput}
            name="password"
          />

          <label className={classes.label}>Confirm Password:</label>
          <input
            type="password"
            value={password_confirmation}
            onChange={changeInput}
            name="password_confirmation"
          />
        </form>

        <Button
          variant="contained"
          color="primary"
          id="submit"
          className={classes.submit}
        >
          ADD NEW STAFF
        </Button>
      </Grid>
    </div>
  );
};

export default SignUpForm;
