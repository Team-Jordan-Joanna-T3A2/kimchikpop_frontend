import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  menuButton: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  match: {
    display: "none"
  },
  noMatch: {
    display: "initial",
    color: "red"
  },
}));

const SignUpForm = () => {
  let history = useHistory();

  const [passwordsMatch, setPasswordsMatch] = useState(false);
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

  const submitForm = () => {
    if(passwordsMatch === false) return;

    console.log("Starting POST");
    const data = JSON.stringify(signUpForm);
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    };

    axios
      .post("http://localhost:5000/api/users/addstaff", signUpForm, config)
      .then(() => history.push("staff/addstaff/success"))
      .catch(errors => {
        console.log(errors);
        history.push("staff/addstaff/failure");
      });
  };

  const checkPasswordConfirmation = e => {
    if (e.target.value === signUpForm.user.password) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

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
            onChange={checkPasswordConfirmation}
            name="password_confirmation"
          />
        </form>
        <p className={passwordsMatch ? classes.match : classes.noMatch}>
          Passwords do not match
        </p>

        <Button
          variant="contained"
          color="primary"
          id="submit"
          className={classes.submit}
          onClick={submitForm}
        >
          ADD NEW STAFF
        </Button>
      </Grid>
    </div>
  );
};

export default SignUpForm;
